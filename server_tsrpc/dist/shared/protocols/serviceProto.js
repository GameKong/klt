"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceProto = void 0;
exports.serviceProto = {
    "services": [
        {
            "id": 0,
            "name": "gate/GameArea",
            "type": "api"
        },
        {
            "id": 1,
            "name": "gate/Login",
            "type": "api"
        },
        {
            "id": 2,
            "name": "gate/Register",
            "type": "api"
        },
        {
            "id": 3,
            "name": "match/admin/Logined",
            "type": "api",
            "conf": {
                "needCheckAddress": true
            }
        },
        {
            "id": 4,
            "name": "match/admin/RoomServerJoin",
            "type": "api",
            "conf": {
                "needCheckAddress": true
            }
        },
        {
            "id": 5,
            "name": "match/admin/UserInfo",
            "type": "api",
            "conf": {
                "needCheckAddress": true
            }
        },
        {
            "id": 6,
            "name": "match/MatchStart",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 7,
            "name": "match/RoomCreate",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 8,
            "name": "match/RoomList",
            "type": "api",
            "conf": {
                "needLogin": true
            }
        },
        {
            "id": 9,
            "name": "room/admin/RoomUpdateState",
            "type": "msg",
            "conf": {
                "needCheckAddress": true
            }
        },
        {
            "id": 10,
            "name": "room/admin/Auth",
            "type": "api",
            "conf": {
                "needCheckAddress": true
            }
        },
        {
            "id": 11,
            "name": "room/admin/RoomCreate",
            "type": "api",
            "conf": {
                "needCheckAddress": true
            }
        },
        {
            "id": 12,
            "name": "room/client/RoleMove",
            "type": "msg"
        },
        {
            "id": 13,
            "name": "room/client/RoleState",
            "type": "msg"
        },
        {
            "id": 14,
            "name": "room/RoomChat",
            "type": "api"
        },
        {
            "id": 15,
            "name": "room/RoomJoin",
            "type": "api"
        },
        {
            "id": 16,
            "name": "room/RoomLeave",
            "type": "api"
        },
        {
            "id": 17,
            "name": "room/server/Chat",
            "type": "msg"
        },
        {
            "id": 18,
            "name": "room/server/RoleAttack",
            "type": "msg"
        },
        {
            "id": 19,
            "name": "room/server/RoleJoin",
            "type": "msg"
        },
        {
            "id": 20,
            "name": "room/server/RoleLeave",
            "type": "msg"
        },
        {
            "id": 21,
            "name": "room/server/RoleMove",
            "type": "msg"
        },
        {
            "id": 22,
            "name": "room/server/RoleRevive",
            "type": "msg"
        },
        {
            "id": 23,
            "name": "room/server/RoomRoleState",
            "type": "msg"
        }
    ],
    "types": {
        "gate/PtlGameArea/ReqGameArea": {
            "type": "Interface"
        },
        "gate/PtlGameArea/ResGameArea": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "area",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "name",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "server",
                                    "type": {
                                        "type": "String"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "gate/PtlLogin/ReqLogin": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "server",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "username",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "gate/PtlLogin/ResLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "key",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "__ssoToken",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "gate/PtlRegister/ReqRegister": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "username",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "gate/PtlRegister/ResRegister": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "key",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "match/admin/PtlLogined/ReqLogined": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "user",
                    "type": {
                        "type": "Reference",
                        "target": "../../module/account/bll/User/DbUser"
                    }
                }
            ]
        },
        "base/BaseRequest": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "__ssoToken",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "../../module/account/bll/User/DbUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                },
                {
                    "id": 1,
                    "name": "key",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "username",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "createtime",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 4,
                    "name": "pos",
                    "type": {
                        "type": "Reference",
                        "target": "../../shared/types/RoleState/RolePosition"
                    },
                    "optional": true
                },
                {
                    "id": 5,
                    "name": "rotation",
                    "type": {
                        "type": "Reference",
                        "target": "../../shared/types/RoleState/RoleRotation"
                    },
                    "optional": true
                }
            ]
        },
        "../../shared/types/RoleState/RolePosition": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "x",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "y",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "z",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../../shared/types/RoleState/RoleRotation": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "x",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "y",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "z",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "w",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "match/admin/PtlLogined/ResLogined": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "match/admin/PtlRoomServerJoin/ReqRoomServerJoin": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "serverUrl",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "match/admin/PtlRoomServerJoin/ResRoomServerJoin": {
            "type": "Interface"
        },
        "match/admin/PtlUserInfo/ReqUserInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "match/admin/PtlUserInfo/ResUserInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "user",
                    "type": {
                        "type": "Reference",
                        "target": "../../module/account/bll/User/DbUser"
                    }
                }
            ]
        },
        "match/PtlMatchStart/ReqMatchStart": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "match/PtlMatchStart/ResMatchStart": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "serverUrl",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "roomId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "match/PtlRoomCreate/ReqRoomCreate": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "roomName",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "match/PtlRoomCreate/ResRoomCreate": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "serverUrl",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "roomId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "match/PtlRoomList/ReqRoomList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "match/PtlRoomList/ResRoomList": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "rooms",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "name",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "amount",
                                    "type": {
                                        "type": "Number",
                                        "scalarType": "uint"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "max",
                                    "type": {
                                        "type": "Number",
                                        "scalarType": "uint"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "serverUrl",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 4,
                                    "name": "roomId",
                                    "type": {
                                        "type": "String"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "room/admin/MsgRoomUpdateState/MsgRoomUpdateState": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "rooms",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../types/RoomState/RoomState"
                        }
                    }
                }
            ]
        },
        "../types/RoomState/RoomState": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "amount",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 3,
                    "name": "max",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 4,
                    "name": "timeUpdate",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 5,
                    "name": "timeStartMatch",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    },
                    "optional": true
                }
            ]
        },
        "room/admin/PtlAuth/ReqAuth": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "MatchServer"
                    }
                }
            ]
        },
        "room/admin/PtlAuth/ResAuth": {
            "type": "Interface"
        },
        "room/admin/PtlRoomCreate/ReqRoomCreate": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "roomName",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "room/admin/PtlRoomCreate/ResRoomCreate": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "roomId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "room/client/MsgRoleMove/MsgRoleMove": {
            "target": {
                "type": "Reference",
                "target": "../types/RoleState/RoleMove"
            },
            "keys": [
                "uid"
            ],
            "type": "Omit"
        },
        "../types/RoleState/RoleMove": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "target",
                    "type": {
                        "type": "Reference",
                        "target": "../types/RoleState/RolePosition"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "vector",
                    "type": {
                        "type": "Reference",
                        "target": "../types/RoleState/RolePosition"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "angle",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "joystick",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                },
                {
                    "id": 5,
                    "name": "skillId",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 6,
                    "name": "targetId",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "../types/RoleState/RolePosition": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "x",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "y",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "z",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "room/client/MsgRoleState/MsgRoleState": {
            "target": {
                "type": "Reference",
                "target": "../types/RoleState/RoleState"
            },
            "keys": [
                "id"
            ],
            "type": "Omit"
        },
        "../types/RoleState/RoleState": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "pos",
                    "type": {
                        "type": "Reference",
                        "target": "../types/RoleState/RolePosition"
                    }
                },
                {
                    "id": 2,
                    "name": "rotation",
                    "type": {
                        "type": "Reference",
                        "target": "../types/RoleState/RoleRotation"
                    }
                },
                {
                    "id": 3,
                    "name": "action",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "../types/RoleState/RoleRotation": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "x",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "y",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "z",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "w",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "room/PtlRoomChat/ReqRoomChat": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "room/PtlRoomChat/ResRoomChat": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "room/PtlRoomJoin/ReqRoomJoin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "roomId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "room/PtlRoomJoin/ResRoomJoin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "roleId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "room",
                    "type": {
                        "type": "Reference",
                        "target": "../types/RoomState/RoomDetailed"
                    }
                }
            ]
        },
        "../types/RoomState/RoomDetailed": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "max",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 3,
                    "name": "timeLastEmpty",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "timeStartMatch",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 5,
                    "name": "timeUpdate",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "roles",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../types/RoleState/RoleDetailed"
                        }
                    }
                },
                {
                    "id": 7,
                    "name": "npcs",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../types/RoleState/RoleDetailed"
                        }
                    }
                },
                {
                    "id": 8,
                    "name": "messages",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "time",
                                    "type": {
                                        "type": "Date"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "role",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../types/RoleState/RoleInfo"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "content",
                                    "type": {
                                        "type": "String"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "../types/RoleState/RoleDetailed": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "roleInfo",
                    "type": {
                        "type": "Reference",
                        "target": "../types/RoleState/RoleInfo"
                    }
                },
                {
                    "id": 1,
                    "name": "state",
                    "type": {
                        "type": "Reference",
                        "target": "../types/RoleState/RoleState"
                    }
                },
                {
                    "id": 2,
                    "name": "attributes",
                    "type": {
                        "type": "Interface",
                        "indexSignature": {
                            "keyType": "String",
                            "type": {
                                "type": "Number"
                            }
                        }
                    }
                }
            ]
        },
        "../types/RoleState/RoleInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "nickname",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "room/PtlRoomLeave/ReqRoomLeave": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "room/PtlRoomLeave/ResRoomLeave": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "room/server/MsgChat/MsgChat": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "roleInfo",
                    "type": {
                        "type": "Reference",
                        "target": "../types/RoleState/RoleInfo"
                    }
                },
                {
                    "id": 2,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "room/server/MsgRoleAttack/MsgRoleAttack": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "skillId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "state",
                    "type": {
                        "type": "Reference",
                        "target": "room/server/MsgRoleAttack/SkillState"
                    }
                },
                {
                    "id": 3,
                    "name": "targetId",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "pos",
                    "type": {
                        "type": "Reference",
                        "target": "../types/RoleState/RolePosition"
                    },
                    "optional": true
                }
            ]
        },
        "room/server/MsgRoleAttack/SkillState": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                }
            ]
        },
        "room/server/MsgRoleJoin/MsgRoleJoin": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "role",
                    "type": {
                        "type": "Reference",
                        "target": "../types/RoleState/RoleDetailed"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "room/server/MsgRoleLeave/MsgRoleLeave": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "roleInfo",
                    "type": {
                        "type": "Reference",
                        "target": "../types/RoleState/RoleInfo"
                    }
                }
            ]
        },
        "room/server/MsgRoleMove/MsgRoleMove": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "state",
                    "type": {
                        "type": "Reference",
                        "target": "../types/RoleState/RoleMove"
                    }
                }
            ]
        },
        "room/server/MsgRoleRevive/MsgRoleRevive": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "room/server/MsgRoomRoleState/MsgRoomRoleState": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "states",
                    "type": {
                        "type": "Interface",
                        "indexSignature": {
                            "keyType": "String",
                            "type": {
                                "type": "Reference",
                                "target": "../types/RoleState/RoleState"
                            }
                        }
                    }
                }
            ]
        }
    }
};
