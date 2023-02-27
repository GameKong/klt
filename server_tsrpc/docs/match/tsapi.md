
# TSRPC API 接口文档

## 通用说明

- 所有请求方法均为 `POST`
- 所有请求均需加入以下 Header :
    - `Content-Type: application/json`

## 目录

- admin
    - [网关服务器通知匹配服务登录成功请求数据](#/admin/Logined)
    - [加入房间服务器进入工作状态请求数据](#/admin/RoomServerJoin)
    - [获取玩家信息请求数据](#/admin/UserInfo)
- [开始匹配请求信息](#/MatchStart)
- [创建房间请求信息](#/RoomCreate)
- [在线房间列表请求信息](#/RoomList)

---

## admin

### 网关服务器通知匹配服务登录成功请求数据 <a id="/admin/Logined"></a>

**路径**
- POST `/admin/Logined`

**请求**
```ts
interface ReqLogined {
    /** 玩家数据 */
    user: {
        _id: /*ObjectId*/ string,
        /** 自增量唯一标识 */
        key: number,
        /** 用户名 */
        username: string,
        /** 创建时间 */
        createtime: /*datetime*/ string,
        /** 玩家位置信息 */
        pos?: {
            /** X 轴位置 */
            x: number,
            /** Y 轴位置 */
            y: number,
            /** Z 轴位置 */
            z: number
        },
        /** 玩家旋转信息 */
        rotation?: {
            /** 四元数 X */
            x: number,
            /** 四元数 Y */
            y: number,
            /** 四元数 Z */
            z: number,
            /** 四元数 W */
            w: number
        }
    },
    /** 通行证 */
    __ssoToken?: string
}
```

**响应**
```ts
interface ResLogined {
    /** 通行证 */
    __ssoToken?: string
}
```

**配置**
```ts
{
  "needCheckAddress": true
}
```

---

### 加入房间服务器进入工作状态请求数据 <a id="/admin/RoomServerJoin"></a>

**路径**
- POST `/admin/RoomServerJoin`

**请求**
```ts
interface ReqRoomServerJoin {
    /** 房间服务器 WebSocket 地址 */
    serverUrl: string
}
```

**响应**
```ts
interface ResRoomServerJoin {

}
```

**配置**
```ts
{
  "needCheckAddress": true
}
```

---

### 获取玩家信息请求数据 <a id="/admin/UserInfo"></a>

**路径**
- POST `/admin/UserInfo`

**请求**
```ts
interface ReqUserInfo {
    /** 通行证 */
    __ssoToken?: string
}
```

**响应**
```ts
interface ResUserInfo {
    /** 用户表数据结构 */
    user: {
        _id: /*ObjectId*/ string,
        /** 自增量唯一标识 */
        key: number,
        /** 用户名 */
        username: string,
        /** 创建时间 */
        createtime: /*datetime*/ string,
        /** 玩家位置信息 */
        pos?: {
            /** X 轴位置 */
            x: number,
            /** Y 轴位置 */
            y: number,
            /** Z 轴位置 */
            z: number
        },
        /** 玩家旋转信息 */
        rotation?: {
            /** 四元数 X */
            x: number,
            /** 四元数 Y */
            y: number,
            /** 四元数 Z */
            z: number,
            /** 四元数 W */
            w: number
        }
    }
}
```

**配置**
```ts
{
  "needCheckAddress": true
}
```

---

## 开始匹配请求信息 <a id="/MatchStart"></a>

**路径**
- POST `/MatchStart`

**请求**
```ts
interface ReqMatchStart {
    /** 通行证 */
    __ssoToken?: string
}
```

**响应**
```ts
interface ResMatchStart {
    /** 房间服务器地址 */
    serverUrl: string,
    /** 房间编号 */
    roomId: string,
    /** 通行证 */
    __ssoToken?: string
}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

## 创建房间请求信息 <a id="/RoomCreate"></a>

**路径**
- POST `/RoomCreate`

**请求**
```ts
interface ReqRoomCreate {
    /** 房间名 */
    roomName: string,
    /** 通行证 */
    __ssoToken?: string
}
```

**响应**
```ts
interface ResRoomCreate {
    /** 房间服务器地址 */
    serverUrl: string,
    /** 房间编号 */
    roomId: string,
    /** 通行证 */
    __ssoToken?: string
}
```

**配置**
```ts
{
  "needLogin": true
}
```

---

## 在线房间列表请求信息 <a id="/RoomList"></a>

**路径**
- POST `/RoomList`

**请求**
```ts
interface ReqRoomList {
    /** 通行证 */
    __ssoToken?: string
}
```

**响应**
```ts
interface ResRoomList {
    /** 房间列表 */
    rooms: {
        /** 房间名 */
        name: string,
        /** 当前玩家数量 */
        amount: /*uint*/ number,
        /** 最大玩家数量 */
        max: /*uint*/ number,
        /** 房间服务器地址 */
        serverUrl: string,
        /** 房间编号 */
        roomId: string
    }[]
}
```

**配置**
```ts
{
  "needLogin": true
}
```

