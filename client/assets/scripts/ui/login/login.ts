import { _decorator, Component, ProgressBar, Label, UITransform, NodeEventType, ScrollView, Prefab, instantiate, Button, EventHandler, Node, Widget, EditBox, EventTouch } from 'cc';
import { dh } from '../../dh';
import { ResGameArea } from '../../shared/protocols/gate/PtlGameArea';
import { BaseUI } from '../../gui/baseUI';
import { UIHelper } from '../../tools/uiHelper';
import { EventData } from '../../core/eventManager';
import { ErrorCode } from '../../shared/models/errorCode';
import { DbUrl } from '../../shared/models/dbUrl';
import { ShareConfig } from '../../shared/models/ShareConfig';
import { NetUtils } from '../../utils/netUtils';
import { ServerName } from '../../shared/models/serverName';
import { GLocalKey } from '../../globals/gLocalKey';
import { Account } from '../../data/account';
import { GConst } from '../../globals/gConst';
import { GameServerConfig } from '../../globals/gClass';
import { UIID } from '../../gui/uiDefines';
import { LoginCell } from './loginCell';

const { ccclass, property } = _decorator;

@ccclass('Login')
export class Login extends BaseUI {
    /**cell预制件 */
    @property({ type: Prefab })
    prefab_cell!: Prefab;

    /**区服列表滑动节点 */
    @property({ type: Node })
    area_list: Node;

    /**区服列表面板 */
    @property({ type: Node })
    area_panel: Node;

    /**选择的区服地址 */
    match_url: string;

    /**是否已加载服务器列表 */
    is_load: boolean;

    /**username输入框 */
    @property({ type: EditBox })
    eidt_username: EditBox;

    /**password输入框 */
    @property({ type: EditBox })
    eidt_password: EditBox;

    /**注册账号面板 */
    @property({ type: Node })
    ui_register: Node;

    onLoad() {

    }

    init() {
        super.init()
        Account.username = dh.storageManager.get(GLocalKey.UserName, "", true)
        Account.password = dh.storageManager.get(GLocalKey.Password, "", true)
        // Account.area_number = dh.storageManager.getNumber(GLocalKey.ArenaNumber, GConst.InValidServer, true)
        
        this.eidt_username.string = Account.username
        this.eidt_password.string = Account.password
        if (Account.area_number != GConst.InValidServer) {
            this.node.getChildByPath("tipNode/desc").active = true;
            this.node.getChildByPath("tipNode/server_name").getComponent(Label).string = ServerName[Account.area_number]
        }
    }

    start() {
        this.addEventListener();
    }

    /**添加监听器 */
    addEventListener() {
        /**点击进入游戏 */
        this.node.on(NodeEventType.TOUCH_START, async () => {
            this.onTouchLogin();
        }, this);
    }

    /** 登陆 */
    async login() {
        if (Account.area_number == GConst.InValidServer) {
            dh.uiManager.toast("请先选择服务器")
            return
        }

        // 登陆前，设置本地储存的用户唯一标识，后续获取设置token到本地
        dh.storageManager.setUser(Account.username);

        let ret = await dh.netManager.http_gate.callApi("Login", {
            area_number: Account.area_number,
            username: Account.username,
            password: Account.password
        });

        if (!ret.isSucc) {
            return
        }

        // 创建连接匹配服的http客户端
        dh.netManager.createHttpMatch()

        // 打开匹配界面
        dh.uiManager.open(UIID.Match)
    }

    async register() {
        let username = this.eidt_username.string
        let password = this.eidt_password.string

        if (username == "") {
            dh.uiManager.toast("账号不可为空")
        }
        else if (password == "") {
            dh.uiManager.toast("密码不可为空")
        }

        let ret = await dh.netManager.http_gate.callApi("Register", {
            username: username,
            password: password
        });

        if (!ret.isSucc) {
            return
        }

        dh.uiManager.toast("注册成功")
        this.seRegisterPanelVisible(null, "1")

        this.setUserNamePassword();
    }

    /** 获取区服信息 */
    async initGameArea() {
        if (this.is_load) {
            this.setSelectPanelVisible(true);
            return
        }

        var ret = await dh.netManager.http_gate.callApi("GameArea", {});
        if (!ret.isSucc) {
            dh.uiManager.toast(`拉区服务器列表失败，${ret.err}`)
            this.setSelectPanelVisible(false);
            return
        }

        this.setSelectPanelVisible(true)
        this.area_list!.removeAllChildren();

        for (let idx in ret.res.area) {
            let area_info = ret.res.area[idx]
            let area_number = parseInt(idx)
            let node = instantiate(this.prefab_cell);
            this.area_list!.addChild(node);

            let cell = node.getComponent(LoginCell);
            cell.options = {
                area_number: area_number,
                server_url: NetUtils.parseServerUrl(area_info),
                onClick: () => {
                    dh.storageManager.set(GLocalKey.ArenaNumber, area_number, true)
                    Account.area_number = area_number
                    GameServerConfig.match_url = NetUtils.parseServerUrl(area_info)
                    this.setSelectPanelVisible(false);
                    this.node.getChildByPath("tipNode/desc").active = true;
                    this.node.getChildByPath("tipNode/server_name").getComponent(Label).string = ServerName[area_number]
                }
            }
        }

        this.is_load = true
    }

    setSelectPanelVisible(visible) {
        this.area_panel.active = visible;
    }

    seRegisterPanelVisible(EventTouch: EventTouch, customEventData: string) {
        this.ui_register.active = !customEventData;
    }

    onTouchLogin(EventTouch?: EventTouch, customEventData?: string) {
        this.setUserNamePassword();
        this.login();
    }

    setUserNamePassword() {
        let username = this.eidt_username.string
        let password = this.eidt_password.string

        dh.storageManager.set(GLocalKey.UserName, username, true)
        dh.storageManager.set(GLocalKey.Password, password, true)

        Account.username = username
        Account.password = password
    }
}

