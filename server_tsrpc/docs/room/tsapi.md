
# TSRPC API 接口文档

## 通用说明

- 所有请求方法均为 `POST`
- 所有请求均需加入以下 Header :
    - `Content-Type: application/json`

## 目录

- admin
    - [房间服务器授权请求信息](#/admin/Auth)
    - [创建房间请求数据](#/admin/RoomCreate)
- [房间聊天请求数据](#/RoomChat)
- [房间加入请求数据](#/RoomJoin)
- [房间离开请求数据](#/RoomLeave)

---

## admin

### 房间服务器授权请求信息 <a id="/admin/Auth"></a>

**路径**
- POST `/admin/Auth`

**请求**
```ts
interface ReqAuth {
    type: "MatchServer"
}
```

**响应**
```ts
interface ResAuth {

}
```

**配置**
```ts
{
  "needCheckAddress": true
}
```

---

### 创建房间请求数据 <a id="/admin/RoomCreate"></a>

**路径**
- POST `/admin/RoomCreate`

**请求**
```ts
interface ReqRoomCreate {
    /** 房间名 */
    roomName: string
}
```

**响应**
```ts
interface ResRoomCreate {
    /** 房间编号 */
    roomId: string
}
```

**配置**
```ts
{
  "needCheckAddress": true
}
```

---

## 房间聊天请求数据 <a id="/RoomChat"></a>

**路径**
- POST `/RoomChat`

**请求**
```ts
interface ReqRoomChat {
    /** 聊天内容 */
    content: string,
    /** 通行证 */
    __ssoToken?: string
}
```

**响应**
```ts
interface ResRoomChat {
    /** 通行证 */
    __ssoToken?: string
}
```

---

## 房间加入请求数据 <a id="/RoomJoin"></a>

**路径**
- POST `/RoomJoin`

**请求**
```ts
interface ReqRoomJoin {
    /** 玩家账号编号 */
    userId: number,
    /** 房间编号 */
    roomId: string,
    /** 通行证 */
    __ssoToken?: string
}
```

**响应**
```ts
interface ResRoomJoin {
    /** 当前玩家编号 */
    roleId: string,
    /** 房间信息 */
    room: {
        /** 房间编号 */
        id: string,
        /** 房间名 */
        name: string,
        /** 房间可容纳的最大人数 */
        max: /*uint*/ number,
        /** 上一次空房的时间（undefined 代表房内有人） 用于定时解散无人的房间 */
        timeLastEmpty?: number,
        /** 开始匹配的时间，`undefined` 代表不在匹配中 */
        timeStartMatch?: number,
        /** 房间信息的最后更新时间 */
        timeUpdate: number,
        /** 房间内的用户 */
        roles: {
            /** 角色信息 */
            roleInfo: {
                /** 玩家编号 */
                id: string,
                /** 玩家昵称 */
                nickname: string
            },
            /** 玩家状态 */
            state: {
                /** 玩家进房间时生成的唯一编号 */
                id: string,
                /** 玩家位置 */
                pos: {
                    /** X 轴位置 */
                    x: number,
                    /** Y 轴位置 */
                    y: number,
                    /** Z 轴位置 */
                    z: number
                },
                /** 玩家旋转信息 */
                rotation: {
                    /** 四元数 X */
                    x: number,
                    /** 四元数 Y */
                    y: number,
                    /** 四元数 Z */
                    z: number,
                    /** 四元数 W */
                    w: number
                },
                /** 玩家动作（暂不需要使用） */
                action: string
            },
            /** 玩家数值属性 */
            attributes: { [key: string]: number }
        }[],
        /** 房间内非玩家角色 */
        npcs: {
            /** 角色信息 */
            roleInfo: {
                /** 玩家编号 */
                id: string,
                /** 玩家昵称 */
                nickname: string
            },
            /** 玩家状态 */
            state: {
                /** 玩家进房间时生成的唯一编号 */
                id: string,
                /** 玩家位置 */
                pos: {
                    /** X 轴位置 */
                    x: number,
                    /** Y 轴位置 */
                    y: number,
                    /** Z 轴位置 */
                    z: number
                },
                /** 玩家旋转信息 */
                rotation: {
                    /** 四元数 X */
                    x: number,
                    /** 四元数 Y */
                    y: number,
                    /** 四元数 Z */
                    z: number,
                    /** 四元数 W */
                    w: number
                },
                /** 玩家动作（暂不需要使用） */
                action: string
            },
            /** 玩家数值属性 */
            attributes: { [key: string]: number }
        }[],
        /** 历史聊天信息（只保留最近的 N 条） */
        messages: {
            time: /*datetime*/ string,
            /** 玩家信息 */
            role: {
                /** 玩家编号 */
                id: string,
                /** 玩家昵称 */
                nickname: string
            },
            content: string
        }[]
    },
    /** 通行证 */
    __ssoToken?: string
}
```

---

## 房间离开请求数据 <a id="/RoomLeave"></a>

**路径**
- POST `/RoomLeave`

**请求**
```ts
interface ReqRoomLeave {
    /** 通行证 */
    __ssoToken?: string
}
```

**响应**
```ts
interface ResRoomLeave {
    /** 通行证 */
    __ssoToken?: string
}
```

