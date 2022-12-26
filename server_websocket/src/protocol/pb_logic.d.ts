
import $protobuf from "protobufjs/minimal.js";
import {Long} from "protobufjs/minimal.js";

declare namespace Proto {
    // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.
	
	export interface Ipbreq_heartbeat {
	    echo2s: number;
	}
	
	export class pbreq_heartbeat implements Ipbreq_heartbeat {
	    constructor(p?: Ipbreq_heartbeat);
	    public echo2s: number;
	    public static create(properties?: Ipbreq_heartbeat): pbreq_heartbeat;
	    public static encode(m: Ipbreq_heartbeat, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_heartbeat;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_heartbeat {
	    echo2c: number;
	}
	
	export class pbrsp_heartbeat implements Ipbrsp_heartbeat {
	    constructor(p?: Ipbrsp_heartbeat);
	    public echo2c: number;
	    public static create(properties?: Ipbrsp_heartbeat): pbrsp_heartbeat;
	    public static encode(m: Ipbrsp_heartbeat, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_heartbeat;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_hellow {
	    hellows: number;
	}
	
	export class pbreq_hellow implements Ipbreq_hellow {
	    constructor(p?: Ipbreq_hellow);
	    public hellows: number;
	    public static create(properties?: Ipbreq_hellow): pbreq_hellow;
	    public static encode(m: Ipbreq_hellow, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_hellow;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_hellow {
	    hellowc: number;
	}
	
	export class pbrsp_hellow implements Ipbrsp_hellow {
	    constructor(p?: Ipbrsp_hellow);
	    public hellowc: number;
	    public static create(properties?: Ipbrsp_hellow): pbrsp_hellow;
	    public static encode(m: Ipbrsp_hellow, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_hellow;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_hi {
	    hic: number;
	}
	
	export class pbrsp_hi implements Ipbrsp_hi {
	    constructor(p?: Ipbrsp_hi);
	    public hic: number;
	    public static create(properties?: Ipbrsp_hi): pbrsp_hi;
	    public static encode(m: Ipbrsp_hi, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_hi;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_auth {
	    session: string;
	    uid?: (number|null);
	    env?: (string|null);
	    ids?: (string|null);
	    supportZip?: (number|null);
	}
	
	export class pbreq_auth implements Ipbreq_auth {
	    constructor(p?: Ipbreq_auth);
	    public session: string;
	    public uid: number;
	    public env: string;
	    public ids: string;
	    public supportZip: number;
	    public static create(properties?: Ipbreq_auth): pbreq_auth;
	    public static encode(m: Ipbreq_auth, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_auth;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_auth {
	    status: number;
	    createTs?: (string|null);
	}
	
	export class pbrsp_auth implements Ipbrsp_auth {
	    constructor(p?: Ipbrsp_auth);
	    public status: number;
	    public createTs: string;
	    public static create(properties?: Ipbrsp_auth): pbrsp_auth;
	    public static encode(m: Ipbrsp_auth, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_auth;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_sync {
	    idfa?: (string|null);
	    keychain?: (string|null);
	    idfv?: (string|null);
	}
	
	export class pbreq_sync implements Ipbreq_sync {
	    constructor(p?: Ipbreq_sync);
	    public idfa: string;
	    public keychain: string;
	    public idfv: string;
	    public static create(properties?: Ipbreq_sync): pbreq_sync;
	    public static encode(m: Ipbreq_sync, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_sync;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_trash {
	    pwd: string;
	}
	
	export class pbreq_trash implements Ipbreq_trash {
	    constructor(p?: Ipbreq_trash);
	    public pwd: string;
	    public static create(properties?: Ipbreq_trash): pbreq_trash;
	    public static encode(m: Ipbreq_trash, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_trash;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_trash {
	    status: number;
	    flag?: (number|null);
	    cd?: (number|null);
	}
	
	export class pbrsp_trash implements Ipbrsp_trash {
	    constructor(p?: Ipbrsp_trash);
	    public status: number;
	    public flag: number;
	    public cd: number;
	    public static create(properties?: Ipbrsp_trash): pbrsp_trash;
	    public static encode(m: Ipbrsp_trash, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_trash;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_resume {
	}
	
	export class pbreq_resume implements Ipbreq_resume {
	    constructor(p?: Ipbreq_resume);
	    public static create(properties?: Ipbreq_resume): pbreq_resume;
	    public static encode(m: Ipbreq_resume, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_resume;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_resume {
	    status: number;
	}
	
	export class pbrsp_resume implements Ipbrsp_resume {
	    constructor(p?: Ipbrsp_resume);
	    public status: number;
	    public static create(properties?: Ipbrsp_resume): pbrsp_resume;
	    public static encode(m: Ipbrsp_resume, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_resume;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_sync {
	    status: number;
	    player?: (Ipb_player|null);
	    bag?: (Ipb_bag|null);
	    heroes?: (Ipb_hero[]|null);
	    gacha?: (Ipb_gacha|null);
	    heroIds?: (number[]|null);
	    mails?: (Ipb_mail[]|null);
	    midasCd?: (number|null);
	    hook?: (Ipb_hook|null);
	    midasCrstcd?: (number|null);
	    payNum?: (number[]|null);
	    tutorial?: (number|null);
	    friends?: (Ipb_friend|null);
	    trial?: (Ipb_strial|null);
	    alogin?: (Ipb_alogin|null);
	    acts?: (Ipb_act[]|null);
	    achieve?: (Ipb_sachieve|null);
	    tasks?: (Ipb_task[]|null);
	    taskCd?: (number|null);
	    online?: (Ipb_online|null);
	    midasFlag?: (number|null);
	    webFlag?: (number|null);
	    videoAd?: (number|null);
	    limitacts?: (Ipb_act[]|null);
	    htask?: (Ipb_htask_sync|null);
	    buyHlimit?: (number|null);
	    spaceGacha?: (number|null);
	    cds?: (Ipb_cd[]|null);
	    finalRank?: (number|null);
	    hideVip?: (boolean|null);
	    tutorial2?: (number|null);
	    pets?: (Ipb_pet[]|null);
	    reddot?: (number|null);
	    gskls?: (Ipb_gskl[]|null);
	    subscribed?: (number|null);
	    skin?: (Ipb_item[]|null);
	    gsklcode?: (number|null);
	    chatblocks?: (number|null);
	    identity?: (Ipb_identity|null);
	    mact?: (Ipb_mact|null);
	    audit?: (number|null);
	    sact?: (Ipb_sact|null);
	    offCard?: (number|null);
	    videoCd?: (number|null);
	    ract?: (Ipb_ract|null);
	    useHitem?: (number|null);
	    reSync?: (Ipb_re_sync|null);
	    newMidas?: (Ipb_midas[]|null);
	    stele?: (Ipb_stele|null);
	    token?: (string|null);
	    stowerLv?: (number|null);
	    spetIds?: (number[]|null);
	    skinIds?: (number[]|null);
	    homeHeroes?: (Ipb_home_heroes[]|null);
	    collLv?: (number[]|null);
	    like?: ((number|Long)[]|null);
	    care?: ((number|Long)[]|null);
	    hteamBag?: (number[]|null);
	    qltTasks?: (Ipb_task[]|null);
	    give?: (Ipb_give_order[]|null);
	    qscore?: (number|null);
	    mallPwd?: (number|null);
	    qltPvpMarket?: (number|null);
	}
	
	export class pbrsp_sync implements Ipbrsp_sync {
	    constructor(p?: Ipbrsp_sync);
	    public status: number;
	    public player?: (Ipb_player|null);
	    public bag?: (Ipb_bag|null);
	    public heroes: Ipb_hero[];
	    public gacha?: (Ipb_gacha|null);
	    public heroIds: number[];
	    public mails: Ipb_mail[];
	    public midasCd: number;
	    public hook?: (Ipb_hook|null);
	    public midasCrstcd: number;
	    public payNum: number[];
	    public tutorial: number;
	    public friends?: (Ipb_friend|null);
	    public trial?: (Ipb_strial|null);
	    public alogin?: (Ipb_alogin|null);
	    public acts: Ipb_act[];
	    public achieve?: (Ipb_sachieve|null);
	    public tasks: Ipb_task[];
	    public taskCd: number;
	    public online?: (Ipb_online|null);
	    public midasFlag: number;
	    public webFlag: number;
	    public videoAd: number;
	    public limitacts: Ipb_act[];
	    public htask?: (Ipb_htask_sync|null);
	    public buyHlimit: number;
	    public spaceGacha: number;
	    public cds: Ipb_cd[];
	    public finalRank: number;
	    public hideVip: boolean;
	    public tutorial2: number;
	    public pets: Ipb_pet[];
	    public reddot: number;
	    public gskls: Ipb_gskl[];
	    public subscribed: number;
	    public skin: Ipb_item[];
	    public gsklcode: number;
	    public chatblocks: number;
	    public identity?: (Ipb_identity|null);
	    public mact?: (Ipb_mact|null);
	    public audit: number;
	    public sact?: (Ipb_sact|null);
	    public offCard: number;
	    public videoCd: number;
	    public ract?: (Ipb_ract|null);
	    public useHitem: number;
	    public reSync?: (Ipb_re_sync|null);
	    public newMidas: Ipb_midas[];
	    public stele?: (Ipb_stele|null);
	    public token: string;
	    public stowerLv: number;
	    public spetIds: number[];
	    public skinIds: number[];
	    public homeHeroes: Ipb_home_heroes[];
	    public collLv: number[];
	    public like: (number|Long)[];
	    public care: (number|Long)[];
	    public hteamBag: number[];
	    public qltTasks: Ipb_task[];
	    public give: Ipb_give_order[];
	    public qscore: number;
	    public mallPwd: number;
	    public qltPvpMarket: number;
	    public static create(properties?: Ipbrsp_sync): pbrsp_sync;
	    public static encode(m: Ipbrsp_sync, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_sync;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_up {
	    vsn: string;
	    packagename?: (string|null);
	}
	
	export class pbreq_up implements Ipbreq_up {
	    constructor(p?: Ipbreq_up);
	    public vsn: string;
	    public packagename: string;
	    public static create(properties?: Ipbreq_up): pbreq_up;
	    public static encode(m: Ipbreq_up, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_up;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_up {
	    status: number;
	    vsn: string;
	    lv: number;
	    prefix?: (string|null);
	    files?: (Ipb_upfile[]|null);
	    upList?: (string|null);
	    thcount?: (number|null);
	    appurl?: (string|null);
	    upurl?: (string[]|null);
	}
	
	export class pbrsp_up implements Ipbrsp_up {
	    constructor(p?: Ipbrsp_up);
	    public status: number;
	    public vsn: string;
	    public lv: number;
	    public prefix: string;
	    public files: Ipb_upfile[];
	    public upList: string;
	    public thcount: number;
	    public appurl: string;
	    public upurl: string[];
	    public static create(properties?: Ipbrsp_up): pbrsp_up;
	    public static encode(m: Ipbrsp_up, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_up;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_bind {
	    account: string;
	    password: string;
	}
	
	export class pbreq_bind implements Ipbreq_bind {
	    constructor(p?: Ipbreq_bind);
	    public account: string;
	    public password: string;
	    public static create(properties?: Ipbreq_bind): pbreq_bind;
	    public static encode(m: Ipbreq_bind, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_bind;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_bind {
	    status: number;
	}
	
	export class pbrsp_bind implements Ipbrsp_bind {
	    constructor(p?: Ipbrsp_bind);
	    public status: number;
	    public static create(properties?: Ipbrsp_bind): pbrsp_bind;
	    public static encode(m: Ipbrsp_bind, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_bind;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_change_password {
	    old: string;
	    "new": string;
	}
	
	export class pbreq_change_password implements Ipbreq_change_password {
	    constructor(p?: Ipbreq_change_password);
	    public old: string;
	    public new: string;
	    public static create(properties?: Ipbreq_change_password): pbreq_change_password;
	    public static encode(m: Ipbreq_change_password, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_change_password;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_change_password {
	    status: number;
	}
	
	export class pbrsp_change_password implements Ipbrsp_change_password {
	    constructor(p?: Ipbrsp_change_password);
	    public status: number;
	    public static create(properties?: Ipbrsp_change_password): pbrsp_change_password;
	    public static encode(m: Ipbrsp_change_password, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_change_password;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_servers {
	}
	
	export class pbreq_servers implements Ipbreq_servers {
	    constructor(p?: Ipbreq_servers);
	    public static create(properties?: Ipbreq_servers): pbreq_servers;
	    public static encode(m: Ipbreq_servers, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_servers;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_servers {
	    servers?: (Ipb_server[]|null);
	    mid?: (number|null);
	}
	
	export class pbrsp_servers implements Ipbrsp_servers {
	    constructor(p?: Ipbrsp_servers);
	    public servers: Ipb_server[];
	    public mid: number;
	    public static create(properties?: Ipbrsp_servers): pbrsp_servers;
	    public static encode(m: Ipbrsp_servers, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_servers;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_player {
	    uid: (number|Long);
	    kind?: (number|null);
	}
	
	export class pbreq_player implements Ipbreq_player {
	    constructor(p?: Ipbreq_player);
	    public uid: (number|Long);
	    public kind: number;
	    public static create(properties?: Ipbreq_player): pbreq_player;
	    public static encode(m: Ipbreq_player, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_player;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_player {
	    gid?: (number|null);
	    gname?: (string|null);
	    heroes?: (Ipb_unit[]|null);
	    power?: (number|null);
	    report?: (number|null);
	}
	
	export class pbrsp_player implements Ipbrsp_player {
	    constructor(p?: Ipbrsp_player);
	    public gid: number;
	    public gname: string;
	    public heroes: Ipb_unit[];
	    public power: number;
	    public report: number;
	    public static create(properties?: Ipbrsp_player): pbrsp_player;
	    public static encode(m: Ipbrsp_player, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_player;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_change_name {
	    name: string;
	}
	
	export class pbreq_change_name implements Ipbreq_change_name {
	    constructor(p?: Ipbreq_change_name);
	    public name: string;
	    public static create(properties?: Ipbreq_change_name): pbreq_change_name;
	    public static encode(m: Ipbreq_change_name, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_change_name;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_change_name {
	    status: number;
	}
	
	export class pbrsp_change_name implements Ipbrsp_change_name {
	    constructor(p?: Ipbrsp_change_name);
	    public status: number;
	    public static create(properties?: Ipbrsp_change_name): pbrsp_change_name;
	    public static encode(m: Ipbrsp_change_name, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_change_name;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_gvm_up_stone {
	    stone?: (number[]|null);
	}
	
	export class pbreq_gvm_up_stone implements Ipbreq_gvm_up_stone {
	    constructor(p?: Ipbreq_gvm_up_stone);
	    public stone: number[];
	    public static create(properties?: Ipbreq_gvm_up_stone): pbreq_gvm_up_stone;
	    public static encode(m: Ipbreq_gvm_up_stone, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_gvm_up_stone;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_gvm_up_stone {
	    status: number;
	}
	
	export class pbrsp_gvm_up_stone implements Ipbrsp_gvm_up_stone {
	    constructor(p?: Ipbrsp_gvm_up_stone);
	    public status: number;
	    public static create(properties?: Ipbrsp_gvm_up_stone): pbrsp_gvm_up_stone;
	    public static encode(m: Ipbrsp_gvm_up_stone, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_gvm_up_stone;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_gvm_sell_stone {
	    stone?: (number[]|null);
	}
	
	export class pbreq_gvm_sell_stone implements Ipbreq_gvm_sell_stone {
	    constructor(p?: Ipbreq_gvm_sell_stone);
	    public stone: number[];
	    public static create(properties?: Ipbreq_gvm_sell_stone): pbreq_gvm_sell_stone;
	    public static encode(m: Ipbreq_gvm_sell_stone, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_gvm_sell_stone;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_gvm_sell_stone {
	    status: number;
	}
	
	export class pbrsp_gvm_sell_stone implements Ipbrsp_gvm_sell_stone {
	    constructor(p?: Ipbrsp_gvm_sell_stone);
	    public status: number;
	    public static create(properties?: Ipbrsp_gvm_sell_stone): pbrsp_gvm_sell_stone;
	    public static encode(m: Ipbrsp_gvm_sell_stone, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_gvm_sell_stone;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_gvm_up_hero {
	    hids?: (number[]|null);
	}
	
	export class pbreq_gvm_up_hero implements Ipbreq_gvm_up_hero {
	    constructor(p?: Ipbreq_gvm_up_hero);
	    public hids: number[];
	    public static create(properties?: Ipbreq_gvm_up_hero): pbreq_gvm_up_hero;
	    public static encode(m: Ipbreq_gvm_up_hero, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_gvm_up_hero;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_gvm_up_hero {
	    status: number;
	}
	
	export class pbrsp_gvm_up_hero implements Ipbrsp_gvm_up_hero {
	    constructor(p?: Ipbrsp_gvm_up_hero);
	    public status: number;
	    public static create(properties?: Ipbrsp_gvm_up_hero): pbrsp_gvm_up_hero;
	    public static encode(m: Ipbrsp_gvm_up_hero, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_gvm_up_hero;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_gvm_rank {
	    type?: (number|null);
	}
	
	export class pbreq_gvm_rank implements Ipbreq_gvm_rank {
	    constructor(p?: Ipbreq_gvm_rank);
	    public type: number;
	    public static create(properties?: Ipbreq_gvm_rank): pbreq_gvm_rank;
	    public static encode(m: Ipbreq_gvm_rank, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_gvm_rank;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_gvm_rank {
	    status: number;
	    guds?: (Ipb_gvm_rank[]|null);
	    mbrs?: (Ipb_gvm_mbr[]|null);
	    rankSelf?: (number|null);
	    scoreSelf?: (number|Long|null);
	}
	
	export class pbrsp_gvm_rank implements Ipbrsp_gvm_rank {
	    constructor(p?: Ipbrsp_gvm_rank);
	    public status: number;
	    public guds: Ipb_gvm_rank[];
	    public mbrs: Ipb_gvm_mbr[];
	    public rankSelf: number;
	    public scoreSelf: (number|Long);
	    public static create(properties?: Ipbrsp_gvm_rank): pbrsp_gvm_rank;
	    public static encode(m: Ipbrsp_gvm_rank, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_gvm_rank;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_gvm_reset_map {
	}
	
	export class pbreq_gvm_reset_map implements Ipbreq_gvm_reset_map {
	    constructor(p?: Ipbreq_gvm_reset_map);
	    public static create(properties?: Ipbreq_gvm_reset_map): pbreq_gvm_reset_map;
	    public static encode(m: Ipbreq_gvm_reset_map, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_gvm_reset_map;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_gvm_reset_map {
	    status: number;
	    nodes?: (Ipb_gvm_map_node[]|null);
	}
	
	export class pbrsp_gvm_reset_map implements Ipbrsp_gvm_reset_map {
	    constructor(p?: Ipbrsp_gvm_reset_map);
	    public status: number;
	    public nodes: Ipb_gvm_map_node[];
	    public static create(properties?: Ipbrsp_gvm_reset_map): pbrsp_gvm_reset_map;
	    public static encode(m: Ipbrsp_gvm_reset_map, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_gvm_reset_map;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_trial {
	}
	
	export class pbreq_trial implements Ipbreq_trial {
	    constructor(p?: Ipbreq_trial);
	    public static create(properties?: Ipbreq_trial): pbreq_trial;
	    public static encode(m: Ipbreq_trial, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_trial;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_trial {
	    status: number;
	    id: number;
	    tl: number;
	    cd: number;
	}
	
	export class pbrsp_trial implements Ipbrsp_trial {
	    constructor(p?: Ipbrsp_trial);
	    public status: number;
	    public id: number;
	    public tl: number;
	    public cd: number;
	    public static create(properties?: Ipbrsp_trial): pbrsp_trial;
	    public static encode(m: Ipbrsp_trial, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_trial;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_trial_rank {
	}
	
	export class pbreq_trial_rank implements Ipbreq_trial_rank {
	    constructor(p?: Ipbreq_trial_rank);
	    public static create(properties?: Ipbreq_trial_rank): pbreq_trial_rank;
	    public static encode(m: Ipbreq_trial_rank, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_trial_rank;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_trial_rank {
	    rank?: (Ipb_trial[]|null);
	}
	
	export class pbrsp_trial_rank implements Ipbrsp_trial_rank {
	    constructor(p?: Ipbrsp_trial_rank);
	    public rank: Ipb_trial[];
	    public static create(properties?: Ipbrsp_trial_rank): pbrsp_trial_rank;
	    public static encode(m: Ipbrsp_trial_rank, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_trial_rank;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_trial_fight {
	    camp?: (Ipb_unit[]|null);
	    tid?: (number|null);
	}
	
	export class pbreq_trial_fight implements Ipbreq_trial_fight {
	    constructor(p?: Ipbreq_trial_fight);
	    public camp: Ipb_unit[];
	    public tid: number;
	    public static create(properties?: Ipbreq_trial_fight): pbreq_trial_fight;
	    public static encode(m: Ipbreq_trial_fight, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_trial_fight;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_trial_fight {
	    status: number;
	    video?: (Ipb_evideo|null);
	}
	
	export class pbrsp_trial_fight implements Ipbrsp_trial_fight {
	    constructor(p?: Ipbrsp_trial_fight);
	    public status: number;
	    public video?: (Ipb_evideo|null);
	    public static create(properties?: Ipbrsp_trial_fight): pbrsp_trial_fight;
	    public static encode(m: Ipbrsp_trial_fight, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_trial_fight;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_trial_video {
	}
	
	export class pbreq_trial_video implements Ipbreq_trial_video {
	    constructor(p?: Ipbreq_trial_video);
	    public static create(properties?: Ipbreq_trial_video): pbreq_trial_video;
	    public static encode(m: Ipbreq_trial_video, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_trial_video;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_trial_video {
	    status: number;
	    videos?: (Ipb_trial[]|null);
	}
	
	export class pbrsp_trial_video implements Ipbrsp_trial_video {
	    constructor(p?: Ipbrsp_trial_video);
	    public status: number;
	    public videos: Ipb_trial[];
	    public static create(properties?: Ipbrsp_trial_video): pbrsp_trial_video;
	    public static encode(m: Ipbrsp_trial_video, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_trial_video;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_trial_tl {
	    num: number;
	}
	
	export class pbreq_trial_tl implements Ipbreq_trial_tl {
	    constructor(p?: Ipbreq_trial_tl);
	    public num: number;
	    public static create(properties?: Ipbreq_trial_tl): pbreq_trial_tl;
	    public static encode(m: Ipbreq_trial_tl, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_trial_tl;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_trial_tl {
	    status: number;
	}
	
	export class pbrsp_trial_tl implements Ipbrsp_trial_tl {
	    constructor(p?: Ipbrsp_trial_tl);
	    public status: number;
	    public static create(properties?: Ipbrsp_trial_tl): pbrsp_trial_tl;
	    public static encode(m: Ipbrsp_trial_tl, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_trial_tl;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_dream_fight {
	    id: number;
	    camp?: (Ipb_unit[]|null);
	    tid?: (number|null);
	}
	
	export class pbreq_dream_fight implements Ipbreq_dream_fight {
	    constructor(p?: Ipbreq_dream_fight);
	    public id: number;
	    public camp: Ipb_unit[];
	    public tid: number;
	    public static create(properties?: Ipbreq_dream_fight): pbreq_dream_fight;
	    public static encode(m: Ipbreq_dream_fight, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_dream_fight;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_dream_fight {
	    status: number;
	    video?: (Ipb_evideo|null);
	}
	
	export class pbrsp_dream_fight implements Ipbrsp_dream_fight {
	    constructor(p?: Ipbrsp_dream_fight);
	    public status: number;
	    public video?: (Ipb_evideo|null);
	    public static create(properties?: Ipbrsp_dream_fight): pbrsp_dream_fight;
	    public static encode(m: Ipbrsp_dream_fight, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_dream_fight;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_dream_rank {
	}
	
	export class pbreq_dream_rank implements Ipbreq_dream_rank {
	    constructor(p?: Ipbreq_dream_rank);
	    public static create(properties?: Ipbreq_dream_rank): pbreq_dream_rank;
	    public static encode(m: Ipbreq_dream_rank, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_dream_rank;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_dream_rank {
	    status: number;
	    rank?: (Ipb_trial[]|null);
	}
	
	export class pbrsp_dream_rank implements Ipbrsp_dream_rank {
	    constructor(p?: Ipbrsp_dream_rank);
	    public status: number;
	    public rank: Ipb_trial[];
	    public static create(properties?: Ipbrsp_dream_rank): pbrsp_dream_rank;
	    public static encode(m: Ipbrsp_dream_rank, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_dream_rank;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_dream_diff {
	    diff: number;
	}
	
	export class pbreq_dream_diff implements Ipbreq_dream_diff {
	    constructor(p?: Ipbreq_dream_diff);
	    public diff: number;
	    public static create(properties?: Ipbreq_dream_diff): pbreq_dream_diff;
	    public static encode(m: Ipbreq_dream_diff, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_dream_diff;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_dream_diff {
	    status: number;
	    monsters?: (number[]|null);
	    bufs?: (Ipb_kv[]|null);
	}
	
	export class pbrsp_dream_diff implements Ipbrsp_dream_diff {
	    constructor(p?: Ipbrsp_dream_diff);
	    public status: number;
	    public monsters: number[];
	    public bufs: Ipb_kv[];
	    public static create(properties?: Ipbrsp_dream_diff): pbrsp_dream_diff;
	    public static encode(m: Ipbrsp_dream_diff, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_dream_diff;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_dream_reward {
	}
	
	export class pbreq_dream_reward implements Ipbreq_dream_reward {
	    constructor(p?: Ipbreq_dream_reward);
	    public static create(properties?: Ipbreq_dream_reward): pbreq_dream_reward;
	    public static encode(m: Ipbreq_dream_reward, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_dream_reward;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbrsp_dream_reward {
	    status: number;
	    reward?: (Ipb_bag|null);
	}
	
	export class pbrsp_dream_reward implements Ipbrsp_dream_reward {
	    constructor(p?: Ipbrsp_dream_reward);
	    public status: number;
	    public reward?: (Ipb_bag|null);
	    public static create(properties?: Ipbrsp_dream_reward): pbrsp_dream_reward;
	    public static encode(m: Ipbrsp_dream_reward, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbrsp_dream_reward;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipbreq_dream_buy {
	    num: number;
	}
	
	export class pbreq_dream_buy implements Ipbreq_dream_buy {
	    constructor(p?: Ipbreq_dream_buy);
	    public num: number;
	    public static create(properties?: Ipbreq_dream_buy): pbreq_dream_buy;
	    public static encode(m: Ipbreq_dream_buy, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pbreq_dream_buy;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_player {
	    name: string;
	    logo: number;
	    gid?: (number|null);
	    gname?: (string|null);
	    border?: (number|null);
	    glv?: (number|null);
	    country?: (string|null);
	    sds?: (string|null);
	    city?: (string|null);
	}
	
	export class pb_player implements Ipb_player {
	    constructor(p?: Ipb_player);
	    public name: string;
	    public logo: number;
	    public gid: number;
	    public gname: string;
	    public border: number;
	    public glv: number;
	    public country: string;
	    public sds: string;
	    public city: string;
	    public static create(properties?: Ipb_player): pb_player;
	    public static encode(m: Ipb_player, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_player;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_server {
	    sid: number;
	    sname: string;
	    pname?: (string|null);
	    plogo?: (number|null);
	    plv?: (number|null);
	    flag?: (number|null);
	    uid?: (number|null);
	    border?: (number|null);
	}
	
	export class pb_server implements Ipb_server {
	    constructor(p?: Ipb_server);
	    public sid: number;
	    public sname: string;
	    public pname: string;
	    public plogo: number;
	    public plv: number;
	    public flag: number;
	    public uid: number;
	    public border: number;
	    public static create(properties?: Ipb_server): pb_server;
	    public static encode(m: Ipb_server, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_server;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_item {
	    id: number;
	    num: (number|Long);
	}
	
	export class pb_item implements Ipb_item {
	    constructor(p?: Ipb_item);
	    public id: number;
	    public num: (number|Long);
	    public static create(properties?: Ipb_item): pb_item;
	    public static encode(m: Ipb_item, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_item;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_equip {
	    id: number;
	    num: number;
	    eid?: (number|null);
	    hid?: (number|null);
	}
	
	export class pb_equip implements Ipb_equip {
	    constructor(p?: Ipb_equip);
	    public id: number;
	    public num: number;
	    public eid: number;
	    public hid: number;
	    public static create(properties?: Ipb_equip): pb_equip;
	    public static encode(m: Ipb_equip, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_equip;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_bag {
	    items?: (Ipb_item[]|null);
	    equips?: (Ipb_equip[]|null);
	}
	
	export class pb_bag implements Ipb_bag {
	    constructor(p?: Ipb_bag);
	    public items: Ipb_item[];
	    public equips: Ipb_equip[];
	    public static create(properties?: Ipb_bag): pb_bag;
	    public static encode(m: Ipb_bag, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_bag;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_hero_qlc {
	    lv?: (number|null);
	    atk?: (number|null);
	    hp?: (number|null);
	    spd?: (number|null);
	    attrIdx?: (number|Long|null);
	    time?: (number|null);
	    cd?: (number|null);
	}
	
	export class pb_hero_qlc implements Ipb_hero_qlc {
	    constructor(p?: Ipb_hero_qlc);
	    public lv: number;
	    public atk: number;
	    public hp: number;
	    public spd: number;
	    public attrIdx: (number|Long);
	    public time: number;
	    public cd: number;
	    public static create(properties?: Ipb_hero_qlc): pb_hero_qlc;
	    public static encode(m: Ipb_hero_qlc, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_hero_qlc;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_hero_qlt {
	    qlc?: (Ipb_hero_qlc|null);
	    qlcs?: (Ipb_hero_qlc[]|null);
	    attrIdx?: (number|Long|null);
	}
	
	export class pb_hero_qlt implements Ipb_hero_qlt {
	    constructor(p?: Ipb_hero_qlt);
	    public qlc?: (Ipb_hero_qlc|null);
	    public qlcs: Ipb_hero_qlc[];
	    public attrIdx: (number|Long);
	    public static create(properties?: Ipb_hero_qlt): pb_hero_qlt;
	    public static encode(m: Ipb_hero_qlt, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_hero_qlt;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_tree {
	    lv?: (number|null);
	    blv?: (number|null);
	    bra?: (number[]|null);
	}
	
	export class pb_tree implements Ipb_tree {
	    constructor(p?: Ipb_tree);
	    public lv: number;
	    public blv: number;
	    public bra: number[];
	    public static create(properties?: Ipb_tree): pb_tree;
	    public static encode(m: Ipb_tree, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_tree;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_hero {
	    hid: number;
	    id: number;
	    lv: number;
	    star: number;
	    flag?: (number|null);
	    equips?: (Ipb_equip[]|null);
	    wake?: (number|null);
	    jade?: (number[]|null);
	    visit?: (boolean|null);
	    skillId?: (number[]|null);
	    sattrs?: (Ipb_sattr[]|null);
	    qlt?: (Ipb_hero_qlt|null);
	    tree?: (Ipb_tree|null);
	}
	
	export class pb_hero implements Ipb_hero {
	    constructor(p?: Ipb_hero);
	    public hid: number;
	    public id: number;
	    public lv: number;
	    public star: number;
	    public flag: number;
	    public equips: Ipb_equip[];
	    public wake: number;
	    public jade: number[];
	    public visit: boolean;
	    public skillId: number[];
	    public sattrs: Ipb_sattr[];
	    public qlt?: (Ipb_hero_qlt|null);
	    public tree?: (Ipb_tree|null);
	    public static create(properties?: Ipb_hero): pb_hero;
	    public static encode(m: Ipb_hero, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_hero;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_sattr {
	    id?: (number|null);
	    attr?: (number|null);
	    value?: (number|null);
	}
	
	export class pb_sattr implements Ipb_sattr {
	    constructor(p?: Ipb_sattr);
	    public id: number;
	    public attr: number;
	    public value: number;
	    public static create(properties?: Ipb_sattr): pb_sattr;
	    public static encode(m: Ipb_sattr, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_sattr;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_dup {
	    id?: (number|null);
	    bids?: (number[]|null);
	    sts?: (number|null);
	    mid?: (number|null);
	    rid?: (number|null);
	    skip?: (number|null);
	}
	
	export class pb_dup implements Ipb_dup {
	    constructor(p?: Ipb_dup);
	    public id: number;
	    public bids: number[];
	    public sts: number;
	    public mid: number;
	    public rid: number;
	    public skip: number;
	    public static create(properties?: Ipb_dup): pb_dup;
	    public static encode(m: Ipb_dup, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_dup;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_embr {
	    uid?: (number|null);
	    lv?: (number|null);
	    status?: (number|null);
	    stime?: (string|null);
	    logo?: (number|null);
	    name?: (string|null);
	    border?: (number|null);
	    id?: (number|null);
	}
	
	export class pb_embr implements Ipb_embr {
	    constructor(p?: Ipb_embr);
	    public uid: number;
	    public lv: number;
	    public status: number;
	    public stime: string;
	    public logo: number;
	    public name: string;
	    public border: number;
	    public id: number;
	    public static create(properties?: Ipb_embr): pb_embr;
	    public static encode(m: Ipb_embr, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_embr;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_scell {
	    pos?: (number|null);
	    status?: (number|null);
	    id?: (number|null);
	    ids1?: (number[]|null);
	    ids2?: (number[]|null);
	}
	
	export class pb_scell implements Ipb_scell {
	    constructor(p?: Ipb_scell);
	    public pos: number;
	    public status: number;
	    public id: number;
	    public ids1: number[];
	    public ids2: number[];
	    public static create(properties?: Ipb_scell): pb_scell;
	    public static encode(m: Ipb_scell, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_scell;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_sbuilding {
	    lv?: (number|null);
	    cd?: (number|null);
	    num?: (number|null);
	}
	
	export class pb_sbuilding implements Ipb_sbuilding {
	    constructor(p?: Ipb_sbuilding);
	    public lv: number;
	    public cd: number;
	    public num: number;
	    public static create(properties?: Ipb_sbuilding): pb_sbuilding;
	    public static encode(m: Ipb_sbuilding, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_sbuilding;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_sscell {
	    pos?: (number|null);
	    status?: (number|null);
	    id?: (number|null);
	    bossId?: (number|null);
	    bossHp?: (number[]|null);
	    mbr?: (Ipb_pmbr|null);
	    hid?: (number|null);
	    cd?: (number|null);
	    lv?: (number|null);
	    add?: (number|null);
	    times?: (number|null);
	    rid?: (number|null);
	    wake?: (number|null);
	    rlv?: (number|null);
	    rqlv?: (number|null);
	}
	
	export class pb_sscell implements Ipb_sscell {
	    constructor(p?: Ipb_sscell);
	    public pos: number;
	    public status: number;
	    public id: number;
	    public bossId: number;
	    public bossHp: number[];
	    public mbr?: (Ipb_pmbr|null);
	    public hid: number;
	    public cd: number;
	    public lv: number;
	    public add: number;
	    public times: number;
	    public rid: number;
	    public wake: number;
	    public rlv: number;
	    public rqlv: number;
	    public static create(properties?: Ipb_sscell): pb_sscell;
	    public static encode(m: Ipb_sscell, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_sscell;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_ssevent {
	    id?: (number|null);
	    num?: (number|null);
	    lvItem?: (number|null);
	    score?: (number|null);
	    num2?: (number|null);
	    reward?: (Ipb_bag[]|null);
	}
	
	export class pb_ssevent implements Ipb_ssevent {
	    constructor(p?: Ipb_ssevent);
	    public id: number;
	    public num: number;
	    public lvItem: number;
	    public score: number;
	    public num2: number;
	    public reward: Ipb_bag[];
	    public static create(properties?: Ipb_ssevent): pb_ssevent;
	    public static encode(m: Ipb_ssevent, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_ssevent;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_sssweep {
	    pos?: (number|null);
	    hid?: (number|null);
	}
	
	export class pb_sssweep implements Ipb_sssweep {
	    constructor(p?: Ipb_sssweep);
	    public pos: number;
	    public hid: number;
	    public static create(properties?: Ipb_sssweep): pb_sssweep;
	    public static encode(m: Ipb_sssweep, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_sssweep;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_gacha {
	    item: number;
	    gem: number;
	    id?: (number|null);
	    act?: (number|null);
	    cd?: (number|null);
	}
	
	export class pb_gacha implements Ipb_gacha {
	    constructor(p?: Ipb_gacha);
	    public item: number;
	    public gem: number;
	    public id: number;
	    public act: number;
	    public cd: number;
	    public static create(properties?: Ipb_gacha): pb_gacha;
	    public static encode(m: Ipb_gacha, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_gacha;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_mail {
	    mid: number;
	    id: number;
	    uid?: (number|Long|null);
	    flag: number;
	    sendTime: number;
	    title?: (string|null);
	    from?: (string|null);
	    content?: (string|null);
	    contentO?: (string|null);
	    affix?: (Ipb_bag|null);
	}
	
	export class pb_mail implements Ipb_mail {
	    constructor(p?: Ipb_mail);
	    public mid: number;
	    public id: number;
	    public uid: (number|Long);
	    public flag: number;
	    public sendTime: number;
	    public title: string;
	    public from: string;
	    public content: string;
	    public contentO: string;
	    public affix?: (Ipb_bag|null);
	    public static create(properties?: Ipb_mail): pb_mail;
	    public static encode(m: Ipb_mail, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_mail;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_cunit {
	    id: number;
	    lv?: (number|null);
	    star?: (number|null);
	    power?: (number|null);
	    hp?: (number|null);
	    atk?: (number|null);
	    armor?: (number|null);
	    spd?: (number|null);
	    wake?: (number|null);
	    skin?: (number|null);
	    stl?: (number|null);
	    qlv?: (number|null);
	    tree?: (Ipb_tree|null);
	    core?: (number|null);
	}
	
	export class pb_cunit implements Ipb_cunit {
	    constructor(p?: Ipb_cunit);
	    public id: number;
	    public lv: number;
	    public star: number;
	    public power: number;
	    public hp: number;
	    public atk: number;
	    public armor: number;
	    public spd: number;
	    public wake: number;
	    public skin: number;
	    public stl: number;
	    public qlv: number;
	    public tree?: (Ipb_tree|null);
	    public core: number;
	    public static create(properties?: Ipb_cunit): pb_cunit;
	    public static encode(m: Ipb_cunit, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_cunit;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_chat {
	    uid?: (number|Long|null);
	    logo?: (number|null);
	    lv?: (number|null);
	    vip?: (number|null);
	    name?: (string|null);
	    type?: (number|null);
	    text?: (string|null);
	    time?: (number|null);
	    shareId?: (number|null);
	    heroId?: (number|null);
	    finalRank?: (number|null);
	    gid?: (number|null);
	    gname?: (string|null);
	    glv?: (number|null);
	    gmsg?: (string|null);
	    gFight?: (number|null);
	    border?: (number|null);
	    hteam?: (Ipb_hteam|null);
	    country?: (string|null);
	    sds?: (string|null);
	    city?: (string|null);
	}
	
	export class pb_chat implements Ipb_chat {
	    constructor(p?: Ipb_chat);
	    public uid: (number|Long);
	    public logo: number;
	    public lv: number;
	    public vip: number;
	    public name: string;
	    public type: number;
	    public text: string;
	    public time: number;
	    public shareId: number;
	    public heroId: number;
	    public finalRank: number;
	    public gid: number;
	    public gname: string;
	    public glv: number;
	    public gmsg: string;
	    public gFight: number;
	    public border: number;
	    public hteam?: (Ipb_hteam|null);
	    public country: string;
	    public sds: string;
	    public city: string;
	    public static create(properties?: Ipb_chat): pb_chat;
	    public static encode(m: Ipb_chat, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_chat;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_upfile {
	    md5: string;
	    path: string;
	}
	
	export class pb_upfile implements Ipb_upfile {
	    constructor(p?: Ipb_upfile);
	    public md5: string;
	    public path: string;
	    public static create(properties?: Ipb_upfile): pb_upfile;
	    public static encode(m: Ipb_upfile, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_upfile;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_good {
	    id: number;
	    type: number;
	    count: number;
	    excelId: number;
	    bought?: (number|null);
	}
	
	export class pb_good implements Ipb_good {
	    constructor(p?: Ipb_good);
	    public id: number;
	    public type: number;
	    public count: number;
	    public excelId: number;
	    public bought: number;
	    public static create(properties?: Ipb_good): pb_good;
	    public static encode(m: Ipb_good, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_good;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_onepay {
	    tid: string;
	    txid?: (string|null);
	    tdate?: (string|null);
	}
	
	export class pb_onepay implements Ipb_onepay {
	    constructor(p?: Ipb_onepay);
	    public tid: string;
	    public txid: string;
	    public tdate: string;
	    public static create(properties?: Ipb_onepay): pb_onepay;
	    public static encode(m: Ipb_onepay, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_onepay;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_hook {
	    status: number;
	    hookStage?: (number|null);
	    bossCd?: (number|null);
	    pokerCd?: (number|null);
	    reward?: (Ipb_bag|null);
	    pveStage?: (number|null);
	    extra?: (Ipb_bag|null);
	    ids?: (Ipb_item[]|null);
	    hardStage?: (number|null);
	}
	
	export class pb_hook implements Ipb_hook {
	    constructor(p?: Ipb_hook);
	    public status: number;
	    public hookStage: number;
	    public bossCd: number;
	    public pokerCd: number;
	    public reward?: (Ipb_bag|null);
	    public pveStage: number;
	    public extra?: (Ipb_bag|null);
	    public ids: Ipb_item[];
	    public hardStage: number;
	    public static create(properties?: Ipb_hook): pb_hook;
	    public static encode(m: Ipb_hook, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_hook;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_frd {
	    logo: number;
	    name: string;
	    lv: number;
	    flag?: (number|null);
	    uid?: (number|Long|null);
	    last?: (number|null);
	    power?: (number|null);
	    border?: (number|null);
	    country?: (string|null);
	    sds?: (string|null);
	    city?: (string|null);
	}
	
	export class pb_frd implements Ipb_frd {
	    constructor(p?: Ipb_frd);
	    public logo: number;
	    public name: string;
	    public lv: number;
	    public flag: number;
	    public uid: (number|Long);
	    public last: number;
	    public power: number;
	    public border: number;
	    public country: string;
	    public sds: string;
	    public city: string;
	    public static create(properties?: Ipb_frd): pb_frd;
	    public static encode(m: Ipb_frd, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_frd;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_friend {
	    friends?: (Ipb_frd[]|null);
	    love: number;
	    cd: number;
	    apply?: (Ipb_frd[]|null);
	    recmd?: (Ipb_frd[]|null);
	}
	
	export class pb_friend implements Ipb_friend {
	    constructor(p?: Ipb_friend);
	    public friends: Ipb_frd[];
	    public love: number;
	    public cd: number;
	    public apply: Ipb_frd[];
	    public recmd: Ipb_frd[];
	    public static create(properties?: Ipb_friend): pb_friend;
	    public static encode(m: Ipb_friend, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_friend;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_casino_item {
	    type: number;
	    id: number;
	    count: number;
	    cool?: (number|null);
	    limitBuy?: (number|null);
	    weight?: (number|null);
	}
	
	export class pb_casino_item implements Ipb_casino_item {
	    constructor(p?: Ipb_casino_item);
	    public type: number;
	    public id: number;
	    public count: number;
	    public cool: number;
	    public limitBuy: number;
	    public weight: number;
	    public static create(properties?: Ipb_casino_item): pb_casino_item;
	    public static encode(m: Ipb_casino_item, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_casino_item;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_casino_msg {
	    name: string;
	    type: number;
	    id: number;
	    count: number;
	}
	
	export class pb_casino_msg implements Ipb_casino_msg {
	    constructor(p?: Ipb_casino_msg);
	    public name: string;
	    public type: number;
	    public id: number;
	    public count: number;
	    public static create(properties?: Ipb_casino_msg): pb_casino_msg;
	    public static encode(m: Ipb_casino_msg, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_casino_msg;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_gmember {
	    uid: (number|Long);
	    name: string;
	    lv?: (number|null);
	    logo?: (number|null);
	    last?: (number|null);
	    title?: (number|null);
	    power?: (number|null);
	    gfight?: (number|null);
	    border?: (number|null);
	    cwar?: (number|null);
	    country?: (string|null);
	    sds?: (string|null);
	    city?: (string|null);
	}
	
	export class pb_gmember implements Ipb_gmember {
	    constructor(p?: Ipb_gmember);
	    public uid: (number|Long);
	    public name: string;
	    public lv: number;
	    public logo: number;
	    public last: number;
	    public title: number;
	    public power: number;
	    public gfight: number;
	    public border: number;
	    public cwar: number;
	    public country: string;
	    public sds: string;
	    public city: string;
	    public static create(properties?: Ipb_gmember): pb_gmember;
	    public static encode(m: Ipb_gmember, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_gmember;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_guild {
	    id: number;
	    name: string;
	    logo: number;
	    exp: number;
	    notice?: (string|null);
	    power?: (number|null);
	    rank?: (number|null);
	    members?: (number|null);
	    pname?: (string|null);
	    dismissCd?: (number|null);
	    flag?: (number|null);
	}
	
	export class pb_guild implements Ipb_guild {
	    constructor(p?: Ipb_guild);
	    public id: number;
	    public name: string;
	    public logo: number;
	    public exp: number;
	    public notice: string;
	    public power: number;
	    public rank: number;
	    public members: number;
	    public pname: string;
	    public dismissCd: number;
	    public flag: number;
	    public static create(properties?: Ipb_guild): pb_guild;
	    public static encode(m: Ipb_guild, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_guild;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_glog {
	    type: number;
	    time?: (number|null);
	    objName?: (string|null);
	    doName?: (string|null);
	}
	
	export class pb_glog implements Ipb_glog {
	    constructor(p?: Ipb_glog);
	    public type: number;
	    public time: number;
	    public objName: string;
	    public doName: string;
	    public static create(properties?: Ipb_glog): pb_glog;
	    public static encode(m: Ipb_glog, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_glog;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_unit {
	    hid?: (number|null);
	    id?: (number|null);
	    pos?: (number|null);
	    lv?: (number|null);
	    star?: (number|null);
	    energy?: (number|null);
	    hpp?: (number|null);
	    wake?: (number|null);
	    skin?: (number|null);
	    stl?: (number|null);
	    flag?: (number|null);
	    ex2?: (number|null);
	    core?: (number|null);
	    ex4?: (number|null);
	    bra?: (number[]|null);
	}
	
	export class pb_unit implements Ipb_unit {
	    constructor(p?: Ipb_unit);
	    public hid: number;
	    public id: number;
	    public pos: number;
	    public lv: number;
	    public star: number;
	    public energy: number;
	    public hpp: number;
	    public wake: number;
	    public skin: number;
	    public stl: number;
	    public flag: number;
	    public ex2: number;
	    public core: number;
	    public ex4: number;
	    public bra: number[];
	    public static create(properties?: Ipb_unit): pb_unit;
	    public static encode(m: Ipb_unit, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_unit;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_strial {
	    id: number;
	    tl: number;
	    cd: number;
	}
	
	export class pb_strial implements Ipb_strial {
	    constructor(p?: Ipb_strial);
	    public id: number;
	    public tl: number;
	    public cd: number;
	    public static create(properties?: Ipb_strial): pb_strial;
	    public static encode(m: Ipb_strial, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_strial;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_trial {
	    logo: number;
	    lv: number;
	    name: string;
	    power?: (number|null);
	    stage?: (number|null);
	    video?: (Ipb_evideo|null);
	    border?: (number|null);
	    uid?: (number|Long|null);
	}
	
	export class pb_trial implements Ipb_trial {
	    constructor(p?: Ipb_trial);
	    public logo: number;
	    public lv: number;
	    public name: string;
	    public power: number;
	    public stage: number;
	    public video?: (Ipb_evideo|null);
	    public border: number;
	    public uid: (number|Long);
	    public static create(properties?: Ipb_trial): pb_trial;
	    public static encode(m: Ipb_trial, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_trial;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_plog {
	    rival: Ipb_pmbr;
	    atk: boolean;
	    win: boolean;
	    vid?: (number[]|null);
	    time: number;
	    score: number;
	    wins?: (boolean[]|null);
	}
	
	export class pb_plog implements Ipb_plog {
	    constructor(p?: Ipb_plog);
	    public rival: Ipb_pmbr;
	    public atk: boolean;
	    public win: boolean;
	    public vid: number[];
	    public time: number;
	    public score: number;
	    public wins: boolean[];
	    public static create(properties?: Ipb_plog): pb_plog;
	    public static encode(m: Ipb_plog, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_plog;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_p3plog {
	    def?: (Ipb_p3pmbr|null);
	    atk?: (boolean|null);
	    win?: (boolean|null);
	    vid?: (number|null);
	    time?: (number|null);
	    score?: (number|null);
	}
	
	export class pb_p3plog implements Ipb_p3plog {
	    constructor(p?: Ipb_p3plog);
	    public def?: (Ipb_p3pmbr|null);
	    public atk: boolean;
	    public win: boolean;
	    public vid: number;
	    public time: number;
	    public score: number;
	    public static create(properties?: Ipb_p3plog): pb_p3plog;
	    public static encode(m: Ipb_p3plog, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_p3plog;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_pmbr {
	    name?: (string|null);
	    uid?: (number|Long|null);
	    lv?: (number|null);
	    logo?: (number|null);
	    score?: (number|null);
	    power?: (number|null);
	    rank?: (number|null);
	    gname?: (string|null);
	    trank?: (number|null);
	    tscore?: (number|null);
	    camp?: (Ipb_unit[]|null);
	    win?: (number|null);
	    fight?: (number|null);
	    sid?: (number|null);
	    border?: (number|null);
	    ptype?: (number|null);
	}
	
	export class pb_pmbr implements Ipb_pmbr {
	    constructor(p?: Ipb_pmbr);
	    public name: string;
	    public uid: (number|Long);
	    public lv: number;
	    public logo: number;
	    public score: number;
	    public power: number;
	    public rank: number;
	    public gname: string;
	    public trank: number;
	    public tscore: number;
	    public camp: Ipb_unit[];
	    public win: number;
	    public fight: number;
	    public sid: number;
	    public border: number;
	    public ptype: number;
	    public static create(properties?: Ipb_pmbr): pb_pmbr;
	    public static encode(m: Ipb_pmbr, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_pmbr;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_p3pmbr {
	    name?: (string|null);
	    uid?: (number|Long|null);
	    lv?: (number|null);
	    logo?: (number|null);
	    lbox?: (number|null);
	    power?: (number|null);
	    rank?: (number|null);
	    score?: (number|null);
	    camp?: (Ipb_unit[]|null);
	}
	
	export class pb_p3pmbr implements Ipb_p3pmbr {
	    constructor(p?: Ipb_p3pmbr);
	    public name: string;
	    public uid: (number|Long);
	    public lv: number;
	    public logo: number;
	    public lbox: number;
	    public power: number;
	    public rank: number;
	    public score: number;
	    public camp: Ipb_unit[];
	    public static create(properties?: Ipb_p3pmbr): pb_p3pmbr;
	    public static encode(m: Ipb_p3pmbr, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_p3pmbr;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_smbr {
	    name?: (string|null);
	    uid?: (number|Long|null);
	    lv?: (number|null);
	    logo?: (number|null);
	    lbox?: (number|null);
	    score?: (number|null);
	    like?: (number|null);
	    cluster?: (string|null);
	    udk?: (string|null);
	    gname?: (string|null);
	    camp?: (Ipb_unit[]|null);
	    skls?: (number[]|null);
	    power?: (number|null);
	    hide?: (number[]|null);
	}
	
	export class pb_smbr implements Ipb_smbr {
	    constructor(p?: Ipb_smbr);
	    public name: string;
	    public uid: (number|Long);
	    public lv: number;
	    public logo: number;
	    public lbox: number;
	    public score: number;
	    public like: number;
	    public cluster: string;
	    public udk: string;
	    public gname: string;
	    public camp: Ipb_unit[];
	    public skls: number[];
	    public power: number;
	    public hide: number[];
	    public static create(properties?: Ipb_smbr): pb_smbr;
	    public static encode(m: Ipb_smbr, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_smbr;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_smbrs {
	    mbrs?: (Ipb_smbr[]|null);
	    score?: (number|null);
	    rank?: (number|null);
	    like?: (number|null);
	}
	
	export class pb_smbrs implements Ipb_smbrs {
	    constructor(p?: Ipb_smbrs);
	    public mbrs: Ipb_smbr[];
	    public score: number;
	    public rank: number;
	    public like: number;
	    public static create(properties?: Ipb_smbrs): pb_smbrs;
	    public static encode(m: Ipb_smbrs, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_smbrs;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_template {
	    id?: (number|null);
	    name?: (string|null);
	    buildings?: (Ipb_buildings[]|null);
	    rooms?: (Ipb_room[]|null);
	}
	
	export class pb_template implements Ipb_template {
	    constructor(p?: Ipb_template);
	    public id: number;
	    public name: string;
	    public buildings: Ipb_buildings[];
	    public rooms: Ipb_room[];
	    public static create(properties?: Ipb_template): pb_template;
	    public static encode(m: Ipb_template, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_template;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_pvp {
	    id: number;
	    status: number;
	    self?: (Ipb_pmbr|null);
	    seasonCd?: (number|null);
	    dailyCd?: (number|null);
	}
	
	export class pb_pvp implements Ipb_pvp {
	    constructor(p?: Ipb_pvp);
	    public id: number;
	    public status: number;
	    public self?: (Ipb_pmbr|null);
	    public seasonCd: number;
	    public dailyCd: number;
	    public static create(properties?: Ipb_pvp): pb_pvp;
	    public static encode(m: Ipb_pvp, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_pvp;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_wpvp {
	    wid: number;
	    flag?: (number|null);
	    cd?: (number|null);
	}
	
	export class pb_wpvp implements Ipb_wpvp {
	    constructor(p?: Ipb_wpvp);
	    public wid: number;
	    public flag: number;
	    public cd: number;
	    public static create(properties?: Ipb_wpvp): pb_wpvp;
	    public static encode(m: Ipb_wpvp, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_wpvp;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_wmbr {
	    uid?: (number|Long|null);
	    gname?: (string|null);
	    score?: (number|null);
	    name?: (string|null);
	    logo?: (number|null);
	    lv?: (number|null);
	    power?: (number|null);
	    lbox?: (number|null);
	    like?: (number|null);
	    king?: (boolean|null);
	    num?: (number|null);
	}
	
	export class pb_wmbr implements Ipb_wmbr {
	    constructor(p?: Ipb_wmbr);
	    public uid: (number|Long);
	    public gname: string;
	    public score: number;
	    public name: string;
	    public logo: number;
	    public lv: number;
	    public power: number;
	    public lbox: number;
	    public like: number;
	    public king: boolean;
	    public num: number;
	    public static create(properties?: Ipb_wmbr): pb_wmbr;
	    public static encode(m: Ipb_wmbr, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_wmbr;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_link {
	    cd?: (number|null);
	    win?: (number|null);
	    vid?: (number|Long|null);
	}
	
	export class pb_link implements Ipb_link {
	    constructor(p?: Ipb_link);
	    public cd: number;
	    public win: number;
	    public vid: (number|Long);
	    public static create(properties?: Ipb_link): pb_link;
	    public static encode(m: Ipb_link, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_link;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_wlog {
	    vid?: (number|Long|null);
	    atk?: (Ipb_unit[]|null);
	    def?: (Ipb_unit[]|null);
	    win: boolean;
	}
	
	export class pb_wlog implements Ipb_wlog {
	    constructor(p?: Ipb_wlog);
	    public vid: (number|Long);
	    public atk: Ipb_unit[];
	    public def: Ipb_unit[];
	    public win: boolean;
	    public static create(properties?: Ipb_wlog): pb_wlog;
	    public static encode(m: Ipb_wlog, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_wlog;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_wvideo {
	    atk?: (Ipb_unit[]|null);
	    def?: (Ipb_unit[]|null);
	    frames?: (Uint8Array[]|null);
	    hurts?: (Ipb_hurts[]|null);
	    win: boolean;
	}
	
	export class pb_wvideo implements Ipb_wvideo {
	    constructor(p?: Ipb_wvideo);
	    public atk: Ipb_unit[];
	    public def: Ipb_unit[];
	    public frames: Uint8Array[];
	    public hurts: Ipb_hurts[];
	    public win: boolean;
	    public static create(properties?: Ipb_wvideo): pb_wvideo;
	    public static encode(m: Ipb_wvideo, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_wvideo;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_wscore {
	    score: number;
	    delta: number;
	    king?: (boolean|null);
	}
	
	export class pb_wscore implements Ipb_wscore {
	    constructor(p?: Ipb_wscore);
	    public score: number;
	    public delta: number;
	    public king: boolean;
	    public static create(properties?: Ipb_wscore): pb_wscore;
	    public static encode(m: Ipb_wscore, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_wscore;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_wcamp {
	    camp?: (Ipb_unit[]|null);
	}
	
	export class pb_wcamp implements Ipb_wcamp {
	    constructor(p?: Ipb_wcamp);
	    public camp: Ipb_unit[];
	    public static create(properties?: Ipb_wcamp): pb_wcamp;
	    public static encode(m: Ipb_wcamp, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_wcamp;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_wloger {
	    vid: (number|Long);
	    mbr?: (Ipb_wmbr|null);
	    time?: (number|null);
	    atk?: (boolean|null);
	    win?: (boolean|null);
	    delta?: (number|null);
	}
	
	export class pb_wloger implements Ipb_wloger {
	    constructor(p?: Ipb_wloger);
	    public vid: (number|Long);
	    public mbr?: (Ipb_wmbr|null);
	    public time: number;
	    public atk: boolean;
	    public win: boolean;
	    public delta: number;
	    public static create(properties?: Ipb_wloger): pb_wloger;
	    public static encode(m: Ipb_wloger, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_wloger;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_pvideo {
	    id?: (number|null);
	    atk?: (Ipb_pmbr|null);
	    def?: (Ipb_pmbr|null);
	    win: boolean;
	    frames?: (Uint8Array[]|null);
	    ascore?: (number|null);
	    dscore?: (number|null);
	    adelta?: (number|null);
	    ddelta?: (number|null);
	    hurts?: (Ipb_hurts[]|null);
	    rewards?: (Ipb_bag[]|null);
	    select?: (number|null);
	}
	
	export class pb_pvideo implements Ipb_pvideo {
	    constructor(p?: Ipb_pvideo);
	    public id: number;
	    public atk?: (Ipb_pmbr|null);
	    public def?: (Ipb_pmbr|null);
	    public win: boolean;
	    public frames: Uint8Array[];
	    public ascore: number;
	    public dscore: number;
	    public adelta: number;
	    public ddelta: number;
	    public hurts: Ipb_hurts[];
	    public rewards: Ipb_bag[];
	    public select: number;
	    public static create(properties?: Ipb_pvideo): pb_pvideo;
	    public static encode(m: Ipb_pvideo, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_pvideo;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_p3pvideo {
	    atk?: (Ipb_p3pmbr|null);
	    def?: (Ipb_p3pmbr|null);
	    win: boolean;
	    frames?: (Uint8Array[]|null);
	    hurts?: (Ipb_hurts[]|null);
	    ascore?: (number|null);
	    dscore?: (number|null);
	    adelta?: (number|null);
	    ddelta?: (number|null);
	    rewards?: (Ipb_bag[]|null);
	    select?: (number|null);
	}
	
	export class pb_p3pvideo implements Ipb_p3pvideo {
	    constructor(p?: Ipb_p3pvideo);
	    public atk?: (Ipb_p3pmbr|null);
	    public def?: (Ipb_p3pmbr|null);
	    public win: boolean;
	    public frames: Uint8Array[];
	    public hurts: Ipb_hurts[];
	    public ascore: number;
	    public dscore: number;
	    public adelta: number;
	    public ddelta: number;
	    public rewards: Ipb_bag[];
	    public select: number;
	    public static create(properties?: Ipb_p3pvideo): pb_p3pvideo;
	    public static encode(m: Ipb_p3pvideo, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_p3pvideo;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_htask_info {
	    tid?: (number|null);
	    hids?: (number[]|null);
	    heads?: (number[]|null);
	}
	
	export class pb_htask_info implements Ipb_htask_info {
	    constructor(p?: Ipb_htask_info);
	    public tid: number;
	    public hids: number[];
	    public heads: number[];
	    public static create(properties?: Ipb_htask_info): pb_htask_info;
	    public static encode(m: Ipb_htask_info, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_htask_info;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_htask_cond {
	    type: number;
	    faction?: (number|null);
	}
	
	export class pb_htask_cond implements Ipb_htask_cond {
	    constructor(p?: Ipb_htask_cond);
	    public type: number;
	    public faction: number;
	    public static create(properties?: Ipb_htask_cond): pb_htask_cond;
	    public static encode(m: Ipb_htask_cond, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_htask_cond;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_htask_sync {
	    cd: number;
	    tasks?: (Ipb_htask[]|null);
	}
	
	export class pb_htask_sync implements Ipb_htask_sync {
	    constructor(p?: Ipb_htask_sync);
	    public cd: number;
	    public tasks: Ipb_htask[];
	    public static create(properties?: Ipb_htask_sync): pb_htask_sync;
	    public static encode(m: Ipb_htask_sync, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_htask_sync;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_htask {
	    tid: number;
	    id: number;
	    cd?: (number|null);
	    heroes?: (Ipb_unit[]|null);
	    reward?: (Ipb_bag|null);
	    conds?: (Ipb_htask_cond[]|null);
	    power?: (number|null);
	    lock?: (number|null);
	    nameid: number;
	    heads?: (number[]|null);
	}
	
	export class pb_htask implements Ipb_htask {
	    constructor(p?: Ipb_htask);
	    public tid: number;
	    public id: number;
	    public cd: number;
	    public heroes: Ipb_unit[];
	    public reward?: (Ipb_bag|null);
	    public conds: Ipb_htask_cond[];
	    public power: number;
	    public lock: number;
	    public nameid: number;
	    public heads: number[];
	    public static create(properties?: Ipb_htask): pb_htask;
	    public static encode(m: Ipb_htask, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_htask;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_evideo {
	    frames?: (Uint8Array[]|null);
	    win?: (boolean|null);
	    reward?: (Ipb_bag|null);
	    camp?: (Ipb_unit[]|null);
	    hurts?: (Ipb_hurts[]|null);
	}
	
	export class pb_evideo implements Ipb_evideo {
	    constructor(p?: Ipb_evideo);
	    public frames: Uint8Array[];
	    public win: boolean;
	    public reward?: (Ipb_bag|null);
	    public camp: Ipb_unit[];
	    public hurts: Ipb_hurts[];
	    public static create(properties?: Ipb_evideo): pb_evideo;
	    public static encode(m: Ipb_evideo, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_evideo;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_hurts {
	    pos: number;
	    value: (number|Long);
	    heal?: (number|Long|null);
	}
	
	export class pb_hurts implements Ipb_hurts {
	    constructor(p?: Ipb_hurts);
	    public pos: number;
	    public value: (number|Long);
	    public heal: (number|Long);
	    public static create(properties?: Ipb_hurts): pb_hurts;
	    public static encode(m: Ipb_hurts, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_hurts;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_alogin {
	    flag: string;
	    cd?: (number|null);
	    idx?: (number|null);
	    num?: (number|null);
	    cd2?: (number|null);
	    first?: (number|null);
	}
	
	export class pb_alogin implements Ipb_alogin {
	    constructor(p?: Ipb_alogin);
	    public flag: string;
	    public cd: number;
	    public idx: number;
	    public num: number;
	    public cd2: number;
	    public first: number;
	    public static create(properties?: Ipb_alogin): pb_alogin;
	    public static encode(m: Ipb_alogin, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_alogin;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_act {
	    id: number;
	    status?: (number|null);
	    cd?: (number|null);
	    limits?: (number|null);
	    read?: (number|null);
	    next?: (number|null);
	    loop?: (number|null);
	    bomb?: (number|null);
	    monopoly?: (Ipb_monopoly|null);
	    code?: (string|null);
	    limits2?: (number|null);
	    bir?: (number|null);
	    kv?: (Ipb_kvs|null);
	    grow?: (Ipb_growup[]|null);
	}
	
	export class pb_act implements Ipb_act {
	    constructor(p?: Ipb_act);
	    public id: number;
	    public status: number;
	    public cd: number;
	    public limits: number;
	    public read: number;
	    public next: number;
	    public loop: number;
	    public bomb: number;
	    public monopoly?: (Ipb_monopoly|null);
	    public code: string;
	    public limits2: number;
	    public bir: number;
	    public kv?: (Ipb_kvs|null);
	    public grow: Ipb_growup[];
	    public static create(properties?: Ipb_act): pb_act;
	    public static encode(m: Ipb_act, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_act;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_qstar {
	    uid?: (number|Long|null);
	    name?: (string|null);
	    logo?: (number|null);
	    score?: (number|null);
	}
	
	export class pb_qstar implements Ipb_qstar {
	    constructor(p?: Ipb_qstar);
	    public uid: (number|Long);
	    public name: string;
	    public logo: number;
	    public score: number;
	    public static create(properties?: Ipb_qstar): pb_qstar;
	    public static encode(m: Ipb_qstar, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_qstar;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_monopoly {
	    pos: number;
	    lv?: (number[]|null);
	    nextEvent?: (number|null);
	    star?: (number|null);
	}
	
	export class pb_monopoly implements Ipb_monopoly {
	    constructor(p?: Ipb_monopoly);
	    public pos: number;
	    public lv: number[];
	    public nextEvent: number;
	    public star: number;
	    public static create(properties?: Ipb_monopoly): pb_monopoly;
	    public static encode(m: Ipb_monopoly, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_monopoly;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_monopoly_step {
	    id: number;
	    reward?: (Ipb_item[]|null);
	    star?: (number|null);
	    event?: (number|null);
	    cards?: (number[]|null);
	    opId?: (number|null);
	}
	
	export class pb_monopoly_step implements Ipb_monopoly_step {
	    constructor(p?: Ipb_monopoly_step);
	    public id: number;
	    public reward: Ipb_item[];
	    public star: number;
	    public event: number;
	    public cards: number[];
	    public opId: number;
	    public static create(properties?: Ipb_monopoly_step): pb_monopoly_step;
	    public static encode(m: Ipb_monopoly_step, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_monopoly_step;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_sact_item {
	    id: number;
	    cd?: (number|null);
	    bomb?: (number|null);
	    limits?: (number|null);
	    next?: (number|null);
	    maze?: (Ipb_sact_maze[]|null);
	    spec?: (number|null);
	}
	
	export class pb_sact_item implements Ipb_sact_item {
	    constructor(p?: Ipb_sact_item);
	    public id: number;
	    public cd: number;
	    public bomb: number;
	    public limits: number;
	    public next: number;
	    public maze: Ipb_sact_maze[];
	    public spec: number;
	    public static create(properties?: Ipb_sact_item): pb_sact_item;
	    public static encode(m: Ipb_sact_item, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_sact_item;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_ract_item {
	    id: number;
	    rewards?: (number[]|null);
	    item?: (Ipb_item[]|null);
	    day?: (number|null);
	    cd?: (number|null);
	}
	
	export class pb_ract_item implements Ipb_ract_item {
	    constructor(p?: Ipb_ract_item);
	    public id: number;
	    public rewards: number[];
	    public item: Ipb_item[];
	    public day: number;
	    public cd: number;
	    public static create(properties?: Ipb_ract_item): pb_ract_item;
	    public static encode(m: Ipb_ract_item, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_ract_item;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_sact_maze {
	    pos: number;
	    id?: (number|null);
	    rewards?: (Ipb_bag|null);
	    num?: (number|null);
	}
	
	export class pb_sact_maze implements Ipb_sact_maze {
	    constructor(p?: Ipb_sact_maze);
	    public pos: number;
	    public id: number;
	    public rewards?: (Ipb_bag|null);
	    public num: number;
	    public static create(properties?: Ipb_sact_maze): pb_sact_maze;
	    public static encode(m: Ipb_sact_maze, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_sact_maze;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_sact_log {
	    time?: (number|null);
	    result?: (number|null);
	}
	
	export class pb_sact_log implements Ipb_sact_log {
	    constructor(p?: Ipb_sact_log);
	    public time: number;
	    public result: number;
	    public static create(properties?: Ipb_sact_log): pb_sact_log;
	    public static encode(m: Ipb_sact_log, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_sact_log;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_mact {
	    cd: number;
	    war?: (Ipb_item[]|null);
	    htask?: (Ipb_item[]|null);
	    hmerge?: (Ipb_item[]|null);
	    spaceSt?: (number|null);
	    brave?: (Ipb_item[]|null);
	    status?: (number|null);
	    hmerge2?: (Ipb_item[]|null);
	}
	
	export class pb_mact implements Ipb_mact {
	    constructor(p?: Ipb_mact);
	    public cd: number;
	    public war: Ipb_item[];
	    public htask: Ipb_item[];
	    public hmerge: Ipb_item[];
	    public spaceSt: number;
	    public brave: Ipb_item[];
	    public status: number;
	    public hmerge2: Ipb_item[];
	    public static create(properties?: Ipb_mact): pb_mact;
	    public static encode(m: Ipb_mact, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_mact;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_task {
	    id: number;
	    count: number;
	    isClaim: number;
	}
	
	export class pb_task implements Ipb_task {
	    constructor(p?: Ipb_task);
	    public id: number;
	    public count: number;
	    public isClaim: number;
	    public static create(properties?: Ipb_task): pb_task;
	    public static encode(m: Ipb_task, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_task;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_online {
	    id: number;
	    cd?: (number|null);
	}
	
	export class pb_online implements Ipb_online {
	    constructor(p?: Ipb_online);
	    public id: number;
	    public cd: number;
	    public static create(properties?: Ipb_online): pb_online;
	    public static encode(m: Ipb_online, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_online;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_sachieve {
	    num?: (number[]|null);
	    id?: (number[]|null);
	    curnum?: (number[]|null);
	}
	
	export class pb_sachieve implements Ipb_sachieve {
	    constructor(p?: Ipb_sachieve);
	    public num: number[];
	    public id: number[];
	    public curnum: number[];
	    public static create(properties?: Ipb_sachieve): pb_sachieve;
	    public static encode(m: Ipb_sachieve, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_sachieve;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_hmarket {
	    id: number;
	    num?: (number|null);
	    cd?: (number|null);
	}
	
	export class pb_hmarket implements Ipb_hmarket {
	    constructor(p?: Ipb_hmarket);
	    public id: number;
	    public num: number;
	    public cd: number;
	    public static create(properties?: Ipb_hmarket): pb_hmarket;
	    public static encode(m: Ipb_hmarket, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_hmarket;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_gmarket {
	    id: number;
	    num?: (number|null);
	    gid?: (number|null);
	}
	
	export class pb_gmarket implements Ipb_gmarket {
	    constructor(p?: Ipb_gmarket);
	    public id: number;
	    public num: number;
	    public gid: number;
	    public static create(properties?: Ipb_gmarket): pb_gmarket;
	    public static encode(m: Ipb_gmarket, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_gmarket;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_gvrank {
	    uid: (number|Long);
	    name?: (string|null);
	    lv?: (number|null);
	    logo?: (number|null);
	    hurt: (number|Long);
	    reward?: (Ipb_bag|null);
	    border?: (number|null);
	}
	
	export class pb_gvrank implements Ipb_gvrank {
	    constructor(p?: Ipb_gvrank);
	    public uid: (number|Long);
	    public name: string;
	    public lv: number;
	    public logo: number;
	    public hurt: (number|Long);
	    public reward?: (Ipb_bag|null);
	    public border: number;
	    public static create(properties?: Ipb_gvrank): pb_gvrank;
	    public static encode(m: Ipb_gvrank, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_gvrank;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_gvrank_donate {
	    name: string;
	    lv: number;
	    logo: number;
	    num?: (number|null);
	}
	
	export class pb_gvrank_donate implements Ipb_gvrank_donate {
	    constructor(p?: Ipb_gvrank_donate);
	    public name: string;
	    public lv: number;
	    public logo: number;
	    public num: number;
	    public static create(properties?: Ipb_gvrank_donate): pb_gvrank_donate;
	    public static encode(m: Ipb_gvrank_donate, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_gvrank_donate;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_bboss {
	    uid: number;
	    name?: (string|null);
	    lv?: (number|null);
	    logo?: (number|null);
	    hurt: (number|Long);
	    sid?: (number|null);
	}
	
	export class pb_bboss implements Ipb_bboss {
	    constructor(p?: Ipb_bboss);
	    public uid: number;
	    public name: string;
	    public lv: number;
	    public logo: number;
	    public hurt: (number|Long);
	    public sid: number;
	    public static create(properties?: Ipb_bboss): pb_bboss;
	    public static encode(m: Ipb_bboss, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_bboss;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_gskl {
	    id: number;
	    lv: number;
	}
	
	export class pb_gskl implements Ipb_gskl {
	    constructor(p?: Ipb_gskl);
	    public id: number;
	    public lv: number;
	    public static create(properties?: Ipb_gskl): pb_gskl;
	    public static encode(m: Ipb_gskl, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_gskl;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_bunit {
	    hid?: (number|null);
	    id?: (number|null);
	    lv?: (number|null);
	    star?: (number|null);
	    hpp?: (number|null);
	    pos?: (number|null);
	    wake?: (number|null);
	    revive?: (number|null);
	    skin?: (number|null);
	    flag?: (number|null);
	    qlv?: (number|null);
	    core?: (number|null);
	}
	
	export class pb_bunit implements Ipb_bunit {
	    constructor(p?: Ipb_bunit);
	    public hid: number;
	    public id: number;
	    public lv: number;
	    public star: number;
	    public hpp: number;
	    public pos: number;
	    public wake: number;
	    public revive: number;
	    public skin: number;
	    public flag: number;
	    public qlv: number;
	    public core: number;
	    public static create(properties?: Ipb_bunit): pb_bunit;
	    public static encode(m: Ipb_bunit, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_bunit;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_benemy {
	    logo: number;
	    lv: number;
	    name: string;
	    power: number;
	    sid: number;
	    camp?: (Ipb_bunit[]|null);
	    border?: (number|null);
	}
	
	export class pb_benemy implements Ipb_benemy {
	    constructor(p?: Ipb_benemy);
	    public logo: number;
	    public lv: number;
	    public name: string;
	    public power: number;
	    public sid: number;
	    public camp: Ipb_bunit[];
	    public border: number;
	    public static create(properties?: Ipb_benemy): pb_benemy;
	    public static encode(m: Ipb_benemy, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_benemy;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_ngwshold {
	    left?: (number|null);
	    total?: (number|null);
	    buffs?: (Ipb_ngwbuff[]|null);
	    power?: (number|Long|null);
	}
	
	export class pb_ngwshold implements Ipb_ngwshold {
	    constructor(p?: Ipb_ngwshold);
	    public left: number;
	    public total: number;
	    public buffs: Ipb_ngwbuff[];
	    public power: (number|Long);
	    public static create(properties?: Ipb_ngwshold): pb_ngwshold;
	    public static encode(m: Ipb_ngwshold, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_ngwshold;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_ngwrank {
	    gid?: (number|null);
	    score?: (number|null);
	    seg?: (number|null);
	    time?: (number|null);
	    logo?: (number|null);
	    name?: (string|null);
	    power?: (number|Long|null);
	}
	
	export class pb_ngwrank implements Ipb_ngwrank {
	    constructor(p?: Ipb_ngwrank);
	    public gid: number;
	    public score: number;
	    public seg: number;
	    public time: number;
	    public logo: number;
	    public name: string;
	    public power: (number|Long);
	    public static create(properties?: Ipb_ngwrank): pb_ngwrank;
	    public static encode(m: Ipb_ngwrank, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_ngwrank;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_ngwprank {
	    uid?: (number|Long|null);
	    name?: (string|null);
	    lv?: (number|null);
	    logo?: (number|null);
	    lbox?: (number|null);
	    gname?: (string|null);
	    score?: (number|null);
	    time?: (number|null);
	    power?: (number|null);
	    daily?: (number[]|null);
	}
	
	export class pb_ngwprank implements Ipb_ngwprank {
	    constructor(p?: Ipb_ngwprank);
	    public uid: (number|Long);
	    public name: string;
	    public lv: number;
	    public logo: number;
	    public lbox: number;
	    public gname: string;
	    public score: number;
	    public time: number;
	    public power: number;
	    public daily: number[];
	    public static create(properties?: Ipb_ngwprank): pb_ngwprank;
	    public static encode(m: Ipb_ngwprank, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_ngwprank;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_ngwbuff {
	    id?: (number|null);
	    num?: (number|null);
	}
	
	export class pb_ngwbuff implements Ipb_ngwbuff {
	    constructor(p?: Ipb_ngwbuff);
	    public id: number;
	    public num: number;
	    public static create(properties?: Ipb_ngwbuff): pb_ngwbuff;
	    public static encode(m: Ipb_ngwbuff, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_ngwbuff;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_ngwmbr {
	    idx?: (number|null);
	    logo?: (number|null);
	    gname?: (string|null);
	    power?: (number|null);
	    lv?: (number|null);
	    lbox?: (number|null);
	    unit?: (Ipb_unit[]|null);
	    uid?: (number|Long|null);
	    gid?: (number|null);
	    win?: (number|null);
	}
	
	export class pb_ngwmbr implements Ipb_ngwmbr {
	    constructor(p?: Ipb_ngwmbr);
	    public idx: number;
	    public logo: number;
	    public gname: string;
	    public power: number;
	    public lv: number;
	    public lbox: number;
	    public unit: Ipb_unit[];
	    public uid: (number|Long);
	    public gid: number;
	    public win: number;
	    public static create(properties?: Ipb_ngwmbr): pb_ngwmbr;
	    public static encode(m: Ipb_ngwmbr, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_ngwmbr;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_clink {
	    cd?: (number|null);
	    atk?: (number|null);
	    def?: (number|null);
	    win?: (number|null);
	    vid?: (number|Long|null);
	}
	
	export class pb_clink implements Ipb_clink {
	    constructor(p?: Ipb_clink);
	    public cd: number;
	    public atk: number;
	    public def: number;
	    public win: number;
	    public vid: (number|Long);
	    public static create(properties?: Ipb_clink): pb_clink;
	    public static encode(m: Ipb_clink, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_clink;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_cgw_info {
	    id?: (number|null);
	    logo?: (number|null);
	    power?: (number|Long|null);
	    name?: (string|null);
	}
	
	export class pb_cgw_info implements Ipb_cgw_info {
	    constructor(p?: Ipb_cgw_info);
	    public id: number;
	    public logo: number;
	    public power: (number|Long);
	    public name: string;
	    public static create(properties?: Ipb_cgw_info): pb_cgw_info;
	    public static encode(m: Ipb_cgw_info, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_cgw_info;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_cgw_mbr {
	    uid?: (number|Long|null);
	    logo?: (number|null);
	    lv?: (number|null);
	    lbox?: (number|null);
	    name?: (string|null);
	    camp?: (Ipb_unit[]|null);
	}
	
	export class pb_cgw_mbr implements Ipb_cgw_mbr {
	    constructor(p?: Ipb_cgw_mbr);
	    public uid: (number|Long);
	    public logo: number;
	    public lv: number;
	    public lbox: number;
	    public name: string;
	    public camp: Ipb_unit[];
	    public static create(properties?: Ipb_cgw_mbr): pb_cgw_mbr;
	    public static encode(m: Ipb_cgw_mbr, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_cgw_mbr;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_cgw_record {
	    gid?: (number|null);
	    logo?: (number|null);
	    vid?: (number|null);
	    cd?: (number|null);
	    flag?: (number|null);
	    power?: (number|Long|null);
	    name?: (string|null);
	    atk?: (boolean|null);
	    win?: (boolean|null);
	    spower?: (number|Long|null);
	}
	
	export class pb_cgw_record implements Ipb_cgw_record {
	    constructor(p?: Ipb_cgw_record);
	    public gid: number;
	    public logo: number;
	    public vid: number;
	    public cd: number;
	    public flag: number;
	    public power: (number|Long);
	    public name: string;
	    public atk: boolean;
	    public win: boolean;
	    public spower: (number|Long);
	    public static create(properties?: Ipb_cgw_record): pb_cgw_record;
	    public static encode(m: Ipb_cgw_record, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_cgw_record;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_cgw_log {
	    atk?: (Ipb_cgw_mbr|null);
	    def?: (Ipb_cgw_mbr|null);
	    win?: (boolean|null);
	}
	
	export class pb_cgw_log implements Ipb_cgw_log {
	    constructor(p?: Ipb_cgw_log);
	    public atk?: (Ipb_cgw_mbr|null);
	    public def?: (Ipb_cgw_mbr|null);
	    public win: boolean;
	    public static create(properties?: Ipb_cgw_log): pb_cgw_log;
	    public static encode(m: Ipb_cgw_log, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_cgw_log;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_ngw_sweep {
	    status?: (number|null);
	    id?: (number|null);
	    destroy?: (number|null);
	}
	
	export class pb_ngw_sweep implements Ipb_ngw_sweep {
	    constructor(p?: Ipb_ngw_sweep);
	    public status: number;
	    public id: number;
	    public destroy: number;
	    public static create(properties?: Ipb_ngw_sweep): pb_ngw_sweep;
	    public static encode(m: Ipb_ngw_sweep, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_ngw_sweep;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_cd {
	    id: number;
	    cd: number;
	}
	
	export class pb_cd implements Ipb_cd {
	    constructor(p?: Ipb_cd);
	    public id: number;
	    public cd: number;
	    public static create(properties?: Ipb_cd): pb_cd;
	    public static encode(m: Ipb_cd, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_cd;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_gpvpteam {
	    leader?: (number|null);
	    mbrs?: (Ipb_pmbr[]|null);
	    sid?: (number|null);
	    score?: (number|null);
	    rank?: (number|null);
	    power?: (number|null);
	    name?: (string|null);
	    needPower?: (number|null);
	    password?: (string|null);
	    id?: (number|null);
	    reg?: (boolean|null);
	    enegy?: (number|null);
	    enggyCd?: (number|null);
	}
	
	export class pb_gpvpteam implements Ipb_gpvpteam {
	    constructor(p?: Ipb_gpvpteam);
	    public leader: number;
	    public mbrs: Ipb_pmbr[];
	    public sid: number;
	    public score: number;
	    public rank: number;
	    public power: number;
	    public name: string;
	    public needPower: number;
	    public password: string;
	    public id: number;
	    public reg: boolean;
	    public enegy: number;
	    public enggyCd: number;
	    public static create(properties?: Ipb_gpvpteam): pb_gpvpteam;
	    public static encode(m: Ipb_gpvpteam, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_gpvpteam;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_gpvplog {
	    logId: number;
	    enemy: Ipb_gpvpteam;
	    score?: (number|null);
	    win?: (boolean|null);
	    time?: (number|null);
	}
	
	export class pb_gpvplog implements Ipb_gpvplog {
	    constructor(p?: Ipb_gpvplog);
	    public logId: number;
	    public enemy: Ipb_gpvpteam;
	    public score: number;
	    public win: boolean;
	    public time: number;
	    public static create(properties?: Ipb_gpvplog): pb_gpvplog;
	    public static encode(m: Ipb_gpvplog, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_gpvplog;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_gpvp_wlog {
	    atk: Ipb_gpvpteam;
	    def: Ipb_gpvpteam;
	    wins?: (boolean[]|null);
	    vids?: (number[]|null);
	}
	
	export class pb_gpvp_wlog implements Ipb_gpvp_wlog {
	    constructor(p?: Ipb_gpvp_wlog);
	    public atk: Ipb_gpvpteam;
	    public def: Ipb_gpvpteam;
	    public wins: boolean[];
	    public vids: number[];
	    public static create(properties?: Ipb_gpvp_wlog): pb_gpvp_wlog;
	    public static encode(m: Ipb_gpvp_wlog, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_gpvp_wlog;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_pet {
	    id: number;
	    lv: number;
	    star: number;
	    skl?: (number[]|null);
	}
	
	export class pb_pet implements Ipb_pet {
	    constructor(p?: Ipb_pet);
	    public id: number;
	    public lv: number;
	    public star: number;
	    public skl: number[];
	    public static create(properties?: Ipb_pet): pb_pet;
	    public static encode(m: Ipb_pet, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_pet;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_spkunit {
	    base?: (Ipb_unit|null);
	    buf?: (Ipb_item[]|null);
	}
	
	export class pb_spkunit implements Ipb_spkunit {
	    constructor(p?: Ipb_spkunit);
	    public base?: (Ipb_unit|null);
	    public buf: Ipb_item[];
	    public static create(properties?: Ipb_spkunit): pb_spkunit;
	    public static encode(m: Ipb_spkunit, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_spkunit;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_spkmbr {
	    uid: number;
	    lv: number;
	    wave: number;
	    time: number;
	    logo: number;
	    name: string;
	    border?: (number|null);
	}
	
	export class pb_spkmbr implements Ipb_spkmbr {
	    constructor(p?: Ipb_spkmbr);
	    public uid: number;
	    public lv: number;
	    public wave: number;
	    public time: number;
	    public logo: number;
	    public name: string;
	    public border: number;
	    public static create(properties?: Ipb_spkmbr): pb_spkmbr;
	    public static encode(m: Ipb_spkmbr, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_spkmbr;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_holy {
	    id: number;
	    pos: number;
	    val?: (number|null);
	}
	
	export class pb_holy implements Ipb_holy {
	    constructor(p?: Ipb_holy);
	    public id: number;
	    public pos: number;
	    public val: number;
	    public static create(properties?: Ipb_holy): pb_holy;
	    public static encode(m: Ipb_holy, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_holy;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_mine {
	    id: number;
	    pos: number;
	    val: number;
	}
	
	export class pb_mine implements Ipb_mine {
	    constructor(p?: Ipb_mine);
	    public id: number;
	    public pos: number;
	    public val: number;
	    public static create(properties?: Ipb_mine): pb_mine;
	    public static encode(m: Ipb_mine, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_mine;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_land {
	    id: number;
	    pos: number;
	    cd?: (number|null);
	    cdk?: (number|null);
	    dead?: (boolean|null);
	}
	
	export class pb_land implements Ipb_land {
	    constructor(p?: Ipb_land);
	    public id: number;
	    public pos: number;
	    public cd: number;
	    public cdk: number;
	    public dead: boolean;
	    public static create(properties?: Ipb_land): pb_land;
	    public static encode(m: Ipb_land, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_land;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_vit {
	    vit: number;
	    buy?: (number|null);
	}
	
	export class pb_vit implements Ipb_vit {
	    constructor(p?: Ipb_vit);
	    public vit: number;
	    public buy: number;
	    public static create(properties?: Ipb_vit): pb_vit;
	    public static encode(m: Ipb_vit, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_vit;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_ievent {
	    id: number;
	    cd?: (number|null);
	    ext?: (string|null);
	    sid?: (number|null);
	    reward?: (Ipb_bag|null);
	}
	
	export class pb_ievent implements Ipb_ievent {
	    constructor(p?: Ipb_ievent);
	    public id: number;
	    public cd: number;
	    public ext: string;
	    public sid: number;
	    public reward?: (Ipb_bag|null);
	    public static create(properties?: Ipb_ievent): pb_ievent;
	    public static encode(m: Ipb_ievent, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_ievent;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_iadt {
	    dist?: (number|null);
	    mevts?: (Ipb_ievent[]|null);
	    pevts?: (Ipb_ievent[]|null);
	    vit?: (number|null);
	    vitcd?: (number|null);
	    reward?: (Ipb_bag|null);
	    rt?: (number|null);
	    num?: (number|null);
	}
	
	export class pb_iadt implements Ipb_iadt {
	    constructor(p?: Ipb_iadt);
	    public dist: number;
	    public mevts: Ipb_ievent[];
	    public pevts: Ipb_ievent[];
	    public vit: number;
	    public vitcd: number;
	    public reward?: (Ipb_bag|null);
	    public rt: number;
	    public num: number;
	    public static create(properties?: Ipb_iadt): pb_iadt;
	    public static encode(m: Ipb_iadt, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_iadt;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_iboat {
	    name?: (string|null);
	    exp?: (number|null);
	    arm?: (number|null);
	    spd?: (number|null);
	    skls?: (number[]|null);
	}
	
	export class pb_iboat implements Ipb_iboat {
	    constructor(p?: Ipb_iboat);
	    public name: string;
	    public exp: number;
	    public arm: number;
	    public spd: number;
	    public skls: number[];
	    public static create(properties?: Ipb_iboat): pb_iboat;
	    public static encode(m: Ipb_iboat, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_iboat;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_ipro {
	    id?: (number|null);
	    num?: (number|null);
	    cd?: (number|null);
	}
	
	export class pb_ipro implements Ipb_ipro {
	    constructor(p?: Ipb_ipro);
	    public id: number;
	    public num: number;
	    public cd: number;
	    public static create(properties?: Ipb_ipro): pb_ipro;
	    public static encode(m: Ipb_ipro, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_ipro;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_identity {
	    onlineTime?: (number|null);
	    adult?: (number|null);
	    locale?: (string|null);
	    age?: (number|null);
	    mrecharge?: (number|null);
	}
	
	export class pb_identity implements Ipb_identity {
	    constructor(p?: Ipb_identity);
	    public onlineTime: number;
	    public adult: number;
	    public locale: string;
	    public age: number;
	    public mrecharge: number;
	    public static create(properties?: Ipb_identity): pb_identity;
	    public static encode(m: Ipb_identity, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_identity;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_sact {
	    acts?: (Ipb_sact_item[]|null);
	}
	
	export class pb_sact implements Ipb_sact {
	    constructor(p?: Ipb_sact);
	    public acts: Ipb_sact_item[];
	    public static create(properties?: Ipb_sact): pb_sact;
	    public static encode(m: Ipb_sact, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_sact;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_ract {
	    acts?: (Ipb_ract_item[]|null);
	    show?: (number|null);
	}
	
	export class pb_ract implements Ipb_ract {
	    constructor(p?: Ipb_ract);
	    public acts: Ipb_ract_item[];
	    public show: number;
	    public static create(properties?: Ipb_ract): pb_ract;
	    public static encode(m: Ipb_ract, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_ract;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_brave_box {
	    id: number;
	}
	
	export class pb_brave_box implements Ipb_brave_box {
	    constructor(p?: Ipb_brave_box);
	    public id: number;
	    public static create(properties?: Ipb_brave_box): pb_brave_box;
	    public static encode(m: Ipb_brave_box, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_brave_box;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_brave_buff {
	    id: number;
	    num: number;
	}
	
	export class pb_brave_buff implements Ipb_brave_buff {
	    constructor(p?: Ipb_brave_buff);
	    public id: number;
	    public num: number;
	    public static create(properties?: Ipb_brave_buff): pb_brave_buff;
	    public static encode(m: Ipb_brave_buff, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_brave_buff;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_re_sync {
	    role?: (number|null);
	    giftId?: (number|null);
	    backGift?: (number|null);
	    bindTimes?: (number|null);
	    helpTimes?: (number|null);
	    backCd?: (number|null);
	    bind?: (number|null);
	    sTasks?: (Ipb_re_task[]|null);
	    hTasks?: (Ipb_re_task[]|null);
	    cd?: (number|null);
	    cd2?: (number|null);
	    applys?: (Ipb_re_apply[]|null);
	    code?: (string|null);
	    players?: (Ipb_re_bind_player[]|null);
	}
	
	export class pb_re_sync implements Ipb_re_sync {
	    constructor(p?: Ipb_re_sync);
	    public role: number;
	    public giftId: number;
	    public backGift: number;
	    public bindTimes: number;
	    public helpTimes: number;
	    public backCd: number;
	    public bind: number;
	    public sTasks: Ipb_re_task[];
	    public hTasks: Ipb_re_task[];
	    public cd: number;
	    public cd2: number;
	    public applys: Ipb_re_apply[];
	    public code: string;
	    public players: Ipb_re_bind_player[];
	    public static create(properties?: Ipb_re_sync): pb_re_sync;
	    public static encode(m: Ipb_re_sync, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_re_sync;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_re_bind_player {
	    logo?: (number|null);
	    uid?: (number|null);
	    name?: (string|null);
	    bind?: (number|null);
	}
	
	export class pb_re_bind_player implements Ipb_re_bind_player {
	    constructor(p?: Ipb_re_bind_player);
	    public logo: number;
	    public uid: number;
	    public name: string;
	    public bind: number;
	    public static create(properties?: Ipb_re_bind_player): pb_re_bind_player;
	    public static encode(m: Ipb_re_bind_player, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_re_bind_player;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_re_apply {
	    logo: number;
	    uid?: (number|Long|null);
	    name?: (string|null);
	    cd?: (number|null);
	}
	
	export class pb_re_apply implements Ipb_re_apply {
	    constructor(p?: Ipb_re_apply);
	    public logo: number;
	    public uid: (number|Long);
	    public name: string;
	    public cd: number;
	    public static create(properties?: Ipb_re_apply): pb_re_apply;
	    public static encode(m: Ipb_re_apply, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_re_apply;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_re_task {
	    id: number;
	    num1?: (number|null);
	    num2?: (number|null);
	}
	
	export class pb_re_task implements Ipb_re_task {
	    constructor(p?: Ipb_re_task);
	    public id: number;
	    public num1: number;
	    public num2: number;
	    public static create(properties?: Ipb_re_task): pb_re_task;
	    public static encode(m: Ipb_re_task, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_re_task;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_vbuff {
	    id?: (number|null);
	    type?: (number|null);
	}
	
	export class pb_vbuff implements Ipb_vbuff {
	    constructor(p?: Ipb_vbuff);
	    public id: number;
	    public type: number;
	    public static create(properties?: Ipb_vbuff): pb_vbuff;
	    public static encode(m: Ipb_vbuff, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_vbuff;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_stele {
	    hook?: (number|null);
	    solo?: (number|null);
	    crush?: (number|null);
	    tower?: (number|null);
	    sealland?: (number[]|null);
	    st?: (number|null);
	}
	
	export class pb_stele implements Ipb_stele {
	    constructor(p?: Ipb_stele);
	    public hook: number;
	    public solo: number;
	    public crush: number;
	    public tower: number;
	    public sealland: number[];
	    public st: number;
	    public static create(properties?: Ipb_stele): pb_stele;
	    public static encode(m: Ipb_stele, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_stele;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_midas {
	    type: number;
	    cd: number;
	    index: number;
	}
	
	export class pb_midas implements Ipb_midas {
	    constructor(p?: Ipb_midas);
	    public type: number;
	    public cd: number;
	    public index: number;
	    public static create(properties?: Ipb_midas): pb_midas;
	    public static encode(m: Ipb_midas, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_midas;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_gve {
	    id?: (number|null);
	    exp?: (number|null);
	    record?: (number[]|null);
	    fight?: (number|null);
	}
	
	export class pb_gve implements Ipb_gve {
	    constructor(p?: Ipb_gve);
	    public id: number;
	    public exp: number;
	    public record: number[];
	    public fight: number;
	    public static create(properties?: Ipb_gve): pb_gve;
	    public static encode(m: Ipb_gve, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_gve;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_gve_rank {
	    id?: (number|null);
	    name?: (string|null);
	    exp?: (number|null);
	    texp?: (number|null);
	}
	
	export class pb_gve_rank implements Ipb_gve_rank {
	    constructor(p?: Ipb_gve_rank);
	    public id: number;
	    public name: string;
	    public exp: number;
	    public texp: number;
	    public static create(properties?: Ipb_gve_rank): pb_gve_rank;
	    public static encode(m: Ipb_gve_rank, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_gve_rank;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_act_block {
	    pos?: (number|null);
	    eventid?: (number|null);
	}
	
	export class pb_act_block implements Ipb_act_block {
	    constructor(p?: Ipb_act_block);
	    public pos: number;
	    public eventid: number;
	    public static create(properties?: Ipb_act_block): pb_act_block;
	    public static encode(m: Ipb_act_block, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_act_block;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_act_maze {
	    floor?: (number|null);
	    events?: (Ipb_act_block[]|null);
	    heroid?: (number|null);
	    skill?: (number|null);
	    skillLv?: (number|null);
	    change?: (number|null);
	    treasures?: (number|null);
	    buff?: (number|null);
	    type?: (number|null);
	    pos?: (number|null);
	    buyNum?: (number|null);
	    getFrag?: (boolean|null);
	}
	
	export class pb_act_maze implements Ipb_act_maze {
	    constructor(p?: Ipb_act_maze);
	    public floor: number;
	    public events: Ipb_act_block[];
	    public heroid: number;
	    public skill: number;
	    public skillLv: number;
	    public change: number;
	    public treasures: number;
	    public buff: number;
	    public type: number;
	    public pos: number;
	    public buyNum: number;
	    public getFrag: boolean;
	    public static create(properties?: Ipb_act_maze): pb_act_maze;
	    public static encode(m: Ipb_act_maze, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_act_maze;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_ntask {
	    id: number;
	    count: (number|Long);
	    status: number;
	    extra?: (Ipb_nextra[]|null);
	}
	
	export class pb_ntask implements Ipb_ntask {
	    constructor(p?: Ipb_ntask);
	    public id: number;
	    public count: (number|Long);
	    public status: number;
	    public extra: Ipb_nextra[];
	    public static create(properties?: Ipb_ntask): pb_ntask;
	    public static encode(m: Ipb_ntask, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_ntask;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_nextra {
	    id?: (number[]|null);
	}
	
	export class pb_nextra implements Ipb_nextra {
	    constructor(p?: Ipb_nextra);
	    public id: number[];
	    public static create(properties?: Ipb_nextra): pb_nextra;
	    public static encode(m: Ipb_nextra, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_nextra;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_nt_sync {
	    type: number;
	    value?: ((number|Long)[]|null);
	}
	
	export class pb_nt_sync implements Ipb_nt_sync {
	    constructor(p?: Ipb_nt_sync);
	    public type: number;
	    public value: (number|Long)[];
	    public static create(properties?: Ipb_nt_sync): pb_nt_sync;
	    public static encode(m: Ipb_nt_sync, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_nt_sync;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_room {
	    id?: (number|null);
	    pos?: (number|null);
	    skinid?: (number|null);
	    hid?: (number|null);
	}
	
	export class pb_room implements Ipb_room {
	    constructor(p?: Ipb_room);
	    public id: number;
	    public pos: number;
	    public skinid: number;
	    public hid: number;
	    public static create(properties?: Ipb_room): pb_room;
	    public static encode(m: Ipb_room, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_room;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_home_land {
	    landId?: (number|null);
	    name?: (string|null);
	    rooms?: (Ipb_room[]|null);
	    owner?: (number|null);
	}
	
	export class pb_home_land implements Ipb_home_land {
	    constructor(p?: Ipb_home_land);
	    public landId: number;
	    public name: string;
	    public rooms: Ipb_room[];
	    public owner: number;
	    public static create(properties?: Ipb_home_land): pb_home_land;
	    public static encode(m: Ipb_home_land, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_home_land;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_block {
	    type?: (number|null);
	    from?: (number|null);
	    to?: (number|null);
	}
	
	export class pb_block implements Ipb_block {
	    constructor(p?: Ipb_block);
	    public type: number;
	    public from: number;
	    public to: number;
	    public static create(properties?: Ipb_block): pb_block;
	    public static encode(m: Ipb_block, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_block;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_living {
	    type?: (number|null);
	    hid?: (number|null);
	}
	
	export class pb_living implements Ipb_living {
	    constructor(p?: Ipb_living);
	    public type: number;
	    public hid: number;
	    public static create(properties?: Ipb_living): pb_living;
	    public static encode(m: Ipb_living, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_living;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_buildings {
	    id: number;
	    pos: number;
	    skinid: number;
	    collectTime?: (number|null);
	    store?: (number|null);
	}
	
	export class pb_buildings implements Ipb_buildings {
	    constructor(p?: Ipb_buildings);
	    public id: number;
	    public pos: number;
	    public skinid: number;
	    public collectTime: number;
	    public store: number;
	    public static create(properties?: Ipb_buildings): pb_buildings;
	    public static encode(m: Ipb_buildings, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_buildings;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_home_roomer {
	    roomId?: (number|null);
	    hid?: (number|null);
	    skinid?: (number|null);
	}
	
	export class pb_home_roomer implements Ipb_home_roomer {
	    constructor(p?: Ipb_home_roomer);
	    public roomId: number;
	    public hid: number;
	    public skinid: number;
	    public static create(properties?: Ipb_home_roomer): pb_home_roomer;
	    public static encode(m: Ipb_home_roomer, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_home_roomer;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_home_heroes {
	    hid?: (number|null);
	    landId?: (number|null);
	    roomers?: (Ipb_home_roomer[]|null);
	}
	
	export class pb_home_heroes implements Ipb_home_heroes {
	    constructor(p?: Ipb_home_heroes);
	    public hid: number;
	    public landId: number;
	    public roomers: Ipb_home_roomer[];
	    public static create(properties?: Ipb_home_heroes): pb_home_heroes;
	    public static encode(m: Ipb_home_heroes, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_home_heroes;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_coll {
	    type?: (number|null);
	    score?: (number|null);
	    lv?: (number|null);
	}
	
	export class pb_coll implements Ipb_coll {
	    constructor(p?: Ipb_coll);
	    public type: number;
	    public score: number;
	    public lv: number;
	    public static create(properties?: Ipb_coll): pb_coll;
	    public static encode(m: Ipb_coll, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_coll;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_stove {
	    id?: (number|null);
	    num?: (number|null);
	    cd?: (number|null);
	    buy?: (Ipb_stove_buy[]|null);
	}
	
	export class pb_stove implements Ipb_stove {
	    constructor(p?: Ipb_stove);
	    public id: number;
	    public num: number;
	    public cd: number;
	    public buy: Ipb_stove_buy[];
	    public static create(properties?: Ipb_stove): pb_stove;
	    public static encode(m: Ipb_stove, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_stove;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_stove_buy {
	    id: number;
	    num: number;
	}
	
	export class pb_stove_buy implements Ipb_stove_buy {
	    constructor(p?: Ipb_stove_buy);
	    public id: number;
	    public num: number;
	    public static create(properties?: Ipb_stove_buy): pb_stove_buy;
	    public static encode(m: Ipb_stove_buy, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_stove_buy;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_gvm_stone {
	    bid?: (number|null);
	    id: number;
	    num?: (number[]|null);
	    pos?: (number|null);
	}
	
	export class pb_gvm_stone implements Ipb_gvm_stone {
	    constructor(p?: Ipb_gvm_stone);
	    public bid: number;
	    public id: number;
	    public num: number[];
	    public pos: number;
	    public static create(properties?: Ipb_gvm_stone): pb_gvm_stone;
	    public static encode(m: Ipb_gvm_stone, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_gvm_stone;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_gvm_map {
	    id: number;
	    buffNum?: (number|null);
	}
	
	export class pb_gvm_map implements Ipb_gvm_map {
	    constructor(p?: Ipb_gvm_map);
	    public id: number;
	    public buffNum: number;
	    public static create(properties?: Ipb_gvm_map): pb_gvm_map;
	    public static encode(m: Ipb_gvm_map, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_gvm_map;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_gvm_map_node {
	    id: number;
	    state: number;
	    cfgId?: (number|null);
	    hps?: (number[]|null);
	}
	
	export class pb_gvm_map_node implements Ipb_gvm_map_node {
	    constructor(p?: Ipb_gvm_map_node);
	    public id: number;
	    public state: number;
	    public cfgId: number;
	    public hps: number[];
	    public static create(properties?: Ipb_gvm_map_node): pb_gvm_map_node;
	    public static encode(m: Ipb_gvm_map_node, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_gvm_map_node;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_gvm_rank {
	    gid?: (number|null);
	    score?: (number|Long|null);
	    time?: (number|null);
	    logo?: (number|null);
	    name?: (string|null);
	    member?: (number|null);
	    exp?: (number|Long|null);
	}
	
	export class pb_gvm_rank implements Ipb_gvm_rank {
	    constructor(p?: Ipb_gvm_rank);
	    public gid: number;
	    public score: (number|Long);
	    public time: number;
	    public logo: number;
	    public name: string;
	    public member: number;
	    public exp: (number|Long);
	    public static create(properties?: Ipb_gvm_rank): pb_gvm_rank;
	    public static encode(m: Ipb_gvm_rank, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_gvm_rank;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_match {
	    idx: number;
	    name?: (string|null);
	    uid?: (number|Long|null);
	    lv?: (number|null);
	    logo?: (number|null);
	    lbox?: (number|null);
	    win?: (number|null);
	    heroes?: (Ipb_match_hero[]|null);
	    power?: (number|Long|null);
	}
	
	export class pb_match implements Ipb_match {
	    constructor(p?: Ipb_match);
	    public idx: number;
	    public name: string;
	    public uid: (number|Long);
	    public lv: number;
	    public logo: number;
	    public lbox: number;
	    public win: number;
	    public heroes: Ipb_match_hero[];
	    public power: (number|Long);
	    public static create(properties?: Ipb_match): pb_match;
	    public static encode(m: Ipb_match, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_match;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_match_hero {
	    pos: number;
	    id: number;
	    lv?: (number|null);
	    stl?: (number|null);
	    flag?: (number|null);
	    equips?: (Ipb_equip[]|null);
	    wake?: (number|null);
	    skillId?: (number[]|null);
	    attr?: (Ipb_attr|null);
	    skin?: (number|null);
	    qlv?: (number|null);
	    treeFlag?: (number|null);
	    core?: (number|null);
	    times?: (number|null);
	    use?: (number|null);
	}
	
	export class pb_match_hero implements Ipb_match_hero {
	    constructor(p?: Ipb_match_hero);
	    public pos: number;
	    public id: number;
	    public lv: number;
	    public stl: number;
	    public flag: number;
	    public equips: Ipb_equip[];
	    public wake: number;
	    public skillId: number[];
	    public attr?: (Ipb_attr|null);
	    public skin: number;
	    public qlv: number;
	    public treeFlag: number;
	    public core: number;
	    public times: number;
	    public use: number;
	    public static create(properties?: Ipb_match_hero): pb_match_hero;
	    public static encode(m: Ipb_match_hero, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_match_hero;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_pvp_accounts {
	    score: number;
	    win: number;
	}
	
	export class pb_pvp_accounts implements Ipb_pvp_accounts {
	    constructor(p?: Ipb_pvp_accounts);
	    public score: number;
	    public win: number;
	    public static create(properties?: Ipb_pvp_accounts): pb_pvp_accounts;
	    public static encode(m: Ipb_pvp_accounts, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_pvp_accounts;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_attr {
	    atk?: (number|null);
	    hp?: (number|null);
	    arm?: (number|null);
	    spd?: (number|null);
	    sklP?: (number|null);
	    hit?: (number|null);
	    miss?: (number|null);
	    crit?: (number|null);
	    critTime?: (number|null);
	    brk?: (number|null);
	    free?: (number|null);
	    decDmg?: (number|null);
	    trueAtk?: (number|null);
	}
	
	export class pb_attr implements Ipb_attr {
	    constructor(p?: Ipb_attr);
	    public atk: number;
	    public hp: number;
	    public arm: number;
	    public spd: number;
	    public sklP: number;
	    public hit: number;
	    public miss: number;
	    public crit: number;
	    public critTime: number;
	    public brk: number;
	    public free: number;
	    public decDmg: number;
	    public trueAtk: number;
	    public static create(properties?: Ipb_attr): pb_attr;
	    public static encode(m: Ipb_attr, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_attr;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_gvm_mbr {
	    name?: (string|null);
	    uid?: (number|Long|null);
	    lv?: (number|null);
	    logo?: (number|null);
	    lbox?: (number|null);
	    scores?: ((number|Long)[]|null);
	    score?: (number|Long|null);
	}
	
	export class pb_gvm_mbr implements Ipb_gvm_mbr {
	    constructor(p?: Ipb_gvm_mbr);
	    public name: string;
	    public uid: (number|Long);
	    public lv: number;
	    public logo: number;
	    public lbox: number;
	    public scores: (number|Long)[];
	    public score: (number|Long);
	    public static create(properties?: Ipb_gvm_mbr): pb_gvm_mbr;
	    public static encode(m: Ipb_gvm_mbr, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_gvm_mbr;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_up_star {
	    id: number;
	    hid?: (number[]|null);
	}
	
	export class pb_up_star implements Ipb_up_star {
	    constructor(p?: Ipb_up_star);
	    public id: number;
	    public hid: number[];
	    public static create(properties?: Ipb_up_star): pb_up_star;
	    public static encode(m: Ipb_up_star, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_up_star;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_fun {
	    open: number;
	    cd: number;
	}
	
	export class pb_fun implements Ipb_fun {
	    constructor(p?: Ipb_fun);
	    public open: number;
	    public cd: number;
	    public static create(properties?: Ipb_fun): pb_fun;
	    public static encode(m: Ipb_fun, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_fun;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ihland_change_skin {
	    skin: number;
	    pos: number;
	}
	
	export class hland_change_skin implements Ihland_change_skin {
	    constructor(p?: Ihland_change_skin);
	    public skin: number;
	    public pos: number;
	    public static create(properties?: Ihland_change_skin): hland_change_skin;
	    public static encode(m: Ihland_change_skin, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): hland_change_skin;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_hland_log {
	    name?: (string|null);
	    uid?: (number|Long|null);
	    lv?: (number|null);
	    logo?: (number|null);
	    lbox?: (number|null);
	    type?: (number|null);
	    time?: (number|Long|null);
	}
	
	export class pb_hland_log implements Ipb_hland_log {
	    constructor(p?: Ipb_hland_log);
	    public name: string;
	    public uid: (number|Long);
	    public lv: number;
	    public logo: number;
	    public lbox: number;
	    public type: number;
	    public time: (number|Long);
	    public static create(properties?: Ipb_hland_log): pb_hland_log;
	    public static encode(m: Ipb_hland_log, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_hland_log;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_hmbr {
	    name?: (string|null);
	    uid?: (number|Long|null);
	    lv?: (number|null);
	    logo?: (number|null);
	    lbox?: (number|null);
	    itemIds?: (number[]|null);
	}
	
	export class pb_hmbr implements Ipb_hmbr {
	    constructor(p?: Ipb_hmbr);
	    public name: string;
	    public uid: (number|Long);
	    public lv: number;
	    public logo: number;
	    public lbox: number;
	    public itemIds: number[];
	    public static create(properties?: Ipb_hmbr): pb_hmbr;
	    public static encode(m: Ipb_hmbr, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_hmbr;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_hteam {
	    id?: (string|null);
	    leader?: (number|Long|null);
	    type?: (number|null);
	    mbr?: (Ipb_hmbr[]|null);
	    cd?: (number|null);
	    shape?: (boolean|null);
	    invites?: ((number|Long)[]|null);
	}
	
	export class pb_hteam implements Ipb_hteam {
	    constructor(p?: Ipb_hteam);
	    public id: string;
	    public leader: (number|Long);
	    public type: number;
	    public mbr: Ipb_hmbr[];
	    public cd: number;
	    public shape: boolean;
	    public invites: (number|Long)[];
	    public static create(properties?: Ipb_hteam): pb_hteam;
	    public static encode(m: Ipb_hteam, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_hteam;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_team_info {
	    id: number;
	    name?: (string|null);
	    heroes?: (Ipb_team_hero[]|null);
	    petid?: (number|null);
	    flag?: (number|null);
	}
	
	export class pb_team_info implements Ipb_team_info {
	    constructor(p?: Ipb_team_info);
	    public id: number;
	    public name: string;
	    public heroes: Ipb_team_hero[];
	    public petid: number;
	    public flag: number;
	    public static create(properties?: Ipb_team_info): pb_team_info;
	    public static encode(m: Ipb_team_info, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_team_info;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_team_hero {
	    pos: number;
	    hid: number;
	    equips?: (Ipb_equip[]|null);
	    skillId?: (number[]|null);
	    sattrs?: (Ipb_sattr[]|null);
	    flag?: (number|null);
	}
	
	export class pb_team_hero implements Ipb_team_hero {
	    constructor(p?: Ipb_team_hero);
	    public pos: number;
	    public hid: number;
	    public equips: Ipb_equip[];
	    public skillId: number[];
	    public sattrs: Ipb_sattr[];
	    public flag: number;
	    public static create(properties?: Ipb_team_hero): pb_team_hero;
	    public static encode(m: Ipb_team_hero, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_team_hero;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Igood {
	    goodId?: (number|null);
	    heroId?: (number|null);
	    qlt?: (Ipb_hero_qlc|null);
	    price?: (number|Long|null);
	    delPrice?: (number|Long|null);
	    state?: (number|null);
	    cd?: (number|null);
	    rprice?: (number|null);
	    seller?: (Ipb_give_role|null);
	    buyer?: (Ipb_give_role|null);
	}
	
	export class good implements Igood {
	    constructor(p?: Igood);
	    public goodId: number;
	    public heroId: number;
	    public qlt?: (Ipb_hero_qlc|null);
	    public price: (number|Long);
	    public delPrice: (number|Long);
	    public state: number;
	    public cd: number;
	    public rprice: number;
	    public seller?: (Ipb_give_role|null);
	    public buyer?: (Ipb_give_role|null);
	    public static create(properties?: Igood): good;
	    public static encode(m: Igood, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): good;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Imall_log {
	    time?: (number|null);
	    heroid?: (number|null);
	    qlt?: (Ipb_hero_qlc|null);
	    price?: (number|null);
	    type?: (number|null);
	    status?: (number|null);
	    goodid?: (number|null);
	    user?: (Ipb_give_role|null);
	}
	
	export class mall_log implements Imall_log {
	    constructor(p?: Imall_log);
	    public time: number;
	    public heroid: number;
	    public qlt?: (Ipb_hero_qlc|null);
	    public price: number;
	    public type: number;
	    public status: number;
	    public goodid: number;
	    public user?: (Ipb_give_role|null);
	    public static create(properties?: Imall_log): mall_log;
	    public static encode(m: Imall_log, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): mall_log;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_kv {
	    k?: (number|null);
	    v?: (number|null);
	}
	
	export class pb_kv implements Ipb_kv {
	    constructor(p?: Ipb_kv);
	    public k: number;
	    public v: number;
	    public static create(properties?: Ipb_kv): pb_kv;
	    public static encode(m: Ipb_kv, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_kv;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_kvs {
	    k?: (number[]|null);
	    v?: (number[]|null);
	    v2?: (number[]|null);
	}
	
	export class pb_kvs implements Ipb_kvs {
	    constructor(p?: Ipb_kvs);
	    public k: number[];
	    public v: number[];
	    public v2: number[];
	    public static create(properties?: Ipb_kvs): pb_kvs;
	    public static encode(m: Ipb_kvs, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_kvs;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_growup {
	    id?: (number|null);
	    index?: (number|null);
	    claim?: (number|null);
	}
	
	export class pb_growup implements Ipb_growup {
	    constructor(p?: Ipb_growup);
	    public id: number;
	    public index: number;
	    public claim: number;
	    public static create(properties?: Ipb_growup): pb_growup;
	    public static encode(m: Ipb_growup, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_growup;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_puzzle {
	    id?: (number|null);
	    next?: (number|null);
	    cur?: (number|null);
	    pos?: (Ipb_kv[]|null);
	    bag?: (number[]|null);
	    num?: (number|null);
	    ring?: (number|null);
	    siz?: (number|null);
	}
	
	export class pb_puzzle implements Ipb_puzzle {
	    constructor(p?: Ipb_puzzle);
	    public id: number;
	    public next: number;
	    public cur: number;
	    public pos: Ipb_kv[];
	    public bag: number[];
	    public num: number;
	    public ring: number;
	    public siz: number;
	    public static create(properties?: Ipb_puzzle): pb_puzzle;
	    public static encode(m: Ipb_puzzle, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_puzzle;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_give_role {
	    uid64: (number|Long);
	    channel: string;
	    lv: number;
	    lbox?: (number|null);
	    name: string;
	    logo: number;
	}
	
	export class pb_give_role implements Ipb_give_role {
	    constructor(p?: Ipb_give_role);
	    public uid64: (number|Long);
	    public channel: string;
	    public lv: number;
	    public lbox: number;
	    public name: string;
	    public logo: number;
	    public static create(properties?: Ipb_give_role): pb_give_role;
	    public static encode(m: Ipb_give_role, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_give_role;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_give_order {
	    id?: (number|Long|null);
	    type?: (number|null);
	    num?: (number|null);
	    status?: (number|null);
	    role?: (Ipb_give_role|null);
	    cd?: (number|null);
	}
	
	export class pb_give_order implements Ipb_give_order {
	    constructor(p?: Ipb_give_order);
	    public id: (number|Long);
	    public type: number;
	    public num: number;
	    public status: number;
	    public role?: (Ipb_give_role|null);
	    public cd: number;
	    public static create(properties?: Ipb_give_order): pb_give_order;
	    public static encode(m: Ipb_give_order, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_give_order;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_give_log {
	    name?: (string|null);
	    num?: (number|null);
	    tax?: (number|null);
	    time?: (number|Long|null);
	}
	
	export class pb_give_log implements Ipb_give_log {
	    constructor(p?: Ipb_give_log);
	    public name: string;
	    public num: number;
	    public tax: number;
	    public time: (number|Long);
	    public static create(properties?: Ipb_give_log): pb_give_log;
	    public static encode(m: Ipb_give_log, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_give_log;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_qlt_pvp_enemy {
	    idx?: (number|null);
	    logo?: (number|null);
	    name?: (string|null);
	    cluster?: (string|null);
	    lv?: (number|null);
	    lbox?: (number|null);
	    camp?: (Ipb_unit[]|null);
	    skls?: (number[]|null);
	    hide?: (number[]|null);
	    uid?: (number|Long|null);
	    power?: (number|null);
	    isFight?: (number|null);
	    gname?: (string|null);
	}
	
	export class pb_qlt_pvp_enemy implements Ipb_qlt_pvp_enemy {
	    constructor(p?: Ipb_qlt_pvp_enemy);
	    public idx: number;
	    public logo: number;
	    public name: string;
	    public cluster: string;
	    public lv: number;
	    public lbox: number;
	    public camp: Ipb_unit[];
	    public skls: number[];
	    public hide: number[];
	    public uid: (number|Long);
	    public power: number;
	    public isFight: number;
	    public gname: string;
	    public static create(properties?: Ipb_qlt_pvp_enemy): pb_qlt_pvp_enemy;
	    public static encode(m: Ipb_qlt_pvp_enemy, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_qlt_pvp_enemy;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_qloger {
	    vid: (number|Long);
	    aMbr?: (Ipb_smbr|null);
	    dMbr?: (Ipb_smbr|null);
	    time?: (number|null);
	    win?: (boolean|null);
	    delta?: (number|null);
	    aSkls?: (number[]|null);
	    dSkls?: (number[]|null);
	}
	
	export class pb_qloger implements Ipb_qloger {
	    constructor(p?: Ipb_qloger);
	    public vid: (number|Long);
	    public aMbr?: (Ipb_smbr|null);
	    public dMbr?: (Ipb_smbr|null);
	    public time: number;
	    public win: boolean;
	    public delta: number;
	    public aSkls: number[];
	    public dSkls: number[];
	    public static create(properties?: Ipb_qloger): pb_qloger;
	    public static encode(m: Ipb_qloger, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_qloger;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_qvideo {
	    atk?: (Ipb_unit[]|null);
	    def?: (Ipb_unit[]|null);
	    frames?: (Uint8Array[]|null);
	    hurts?: (Ipb_hurts[]|null);
	    win: boolean;
	}
	
	export class pb_qvideo implements Ipb_qvideo {
	    constructor(p?: Ipb_qvideo);
	    public atk: Ipb_unit[];
	    public def: Ipb_unit[];
	    public frames: Uint8Array[];
	    public hurts: Ipb_hurts[];
	    public win: boolean;
	    public static create(properties?: Ipb_qvideo): pb_qvideo;
	    public static encode(m: Ipb_qvideo, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_qvideo;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipb_qlog {
	    video?: (Ipb_qvideo[]|null);
	    aMbr?: (Ipb_smbr|null);
	    dMbr?: (Ipb_smbr|null);
	    time?: (number|null);
	    win?: (boolean|null);
	    delta?: (number|null);
	    aSkls?: (number[]|null);
	    dSkls?: (number[]|null);
	}
	
	export class pb_qlog implements Ipb_qlog {
	    constructor(p?: Ipb_qlog);
	    public video: Ipb_qvideo[];
	    public aMbr?: (Ipb_smbr|null);
	    public dMbr?: (Ipb_smbr|null);
	    public time: number;
	    public win: boolean;
	    public delta: number;
	    public aSkls: number[];
	    public dSkls: number[];
	    public static create(properties?: Ipb_qlog): pb_qlog;
	    public static encode(m: Ipb_qlog, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_qlog;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipower_rank {
	    id?: (number|null);
	    player?: (Ipb_give_role|null);
	    score?: (number|null);
	}
	
	export class power_rank implements Ipower_rank {
	    constructor(p?: Ipower_rank);
	    public id: number;
	    public player?: (Ipb_give_role|null);
	    public score: number;
	    public static create(properties?: Ipower_rank): power_rank;
	    public static encode(m: Ipower_rank, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): power_rank;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipower_task {
	    id: number;
	    type?: (number|null);
	    cd?: (number|null);
	    num?: (number|null);
	    dotId?: (number|null);
	    flag?: (number|null);
	}
	
	export class power_task implements Ipower_task {
	    constructor(p?: Ipower_task);
	    public id: number;
	    public type: number;
	    public cd: number;
	    public num: number;
	    public dotId: number;
	    public flag: number;
	    public static create(properties?: Ipower_task): power_task;
	    public static encode(m: Ipower_task, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): power_task;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Idot_info {
	    id?: (number|null);
	    powerId?: (number|null);
	    degree?: (number|null);
	    max?: (number|null);
	    status?: (number|null);
	    item?: (number|null);
	    buff?: (Ipb_item[]|null);
	    tmpId?: (number|null);
	    skill?: (number[]|null);
	    cd?: (number|null);
	    cd2?: (number|null);
	    cd3?: (number|null);
	    cd4?: (number|null);
	    cd5?: (number|null);
	}
	
	export class dot_info implements Idot_info {
	    constructor(p?: Idot_info);
	    public id: number;
	    public powerId: number;
	    public degree: number;
	    public max: number;
	    public status: number;
	    public item: number;
	    public buff: Ipb_item[];
	    public tmpId: number;
	    public skill: number[];
	    public cd: number;
	    public cd2: number;
	    public cd3: number;
	    public cd4: number;
	    public cd5: number;
	    public static create(properties?: Idot_info): dot_info;
	    public static encode(m: Idot_info, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): dot_info;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Idot_log {
	    type?: (number|null);
	    degree?: (number|null);
	    time?: (string|null);
	    id?: (number|null);
	    add?: (number|null);
	}
	
	export class dot_log implements Idot_log {
	    constructor(p?: Idot_log);
	    public type: number;
	    public degree: number;
	    public time: string;
	    public id: number;
	    public add: number;
	    public static create(properties?: Idot_log): dot_log;
	    public static encode(m: Idot_log, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): dot_log;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipower_monster {
	    id: number;
	    camp?: (Ipb_unit[]|null);
	    buff?: (number[]|null);
	}
	
	export class power_monster implements Ipower_monster {
	    constructor(p?: Ipower_monster);
	    public id: number;
	    public camp: Ipb_unit[];
	    public buff: number[];
	    public static create(properties?: Ipower_monster): power_monster;
	    public static encode(m: Ipower_monster, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): power_monster;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipower_skill {
	    id: number;
	    name?: (string|null);
	    skill?: (number[]|null);
	    cd?: (number|null);
	}
	
	export class power_skill implements Ipower_skill {
	    constructor(p?: Ipower_skill);
	    public id: number;
	    public name: string;
	    public skill: number[];
	    public cd: number;
	    public static create(properties?: Ipower_skill): power_skill;
	    public static encode(m: Ipower_skill, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): power_skill;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
	export interface Ipower_manager {
	    udk?: (string|null);
	    cluster?: (string|null);
	    uid?: (number|Long|null);
	}
	
	export class power_manager implements Ipower_manager {
	    constructor(p?: Ipower_manager);
	    public udk: string;
	    public cluster: string;
	    public uid: (number|Long);
	    public static create(properties?: Ipower_manager): power_manager;
	    public static encode(m: Ipower_manager, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): power_manager;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
}

export default Proto;
