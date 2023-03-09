import { ServiceProto } from 'tsrpc-proto';
import { ReqGameArea, ResGameArea } from './gate/PtlGameArea';
import { ReqLogin, ResLogin } from './gate/PtlLogin';
import { ReqRegister, ResRegister } from './gate/PtlRegister';

export interface ServiceType {
    api: {
        "GameArea": {
            req: ReqGameArea,
            res: ResGameArea
        },
        "Login": {
            req: ReqLogin,
            res: ResLogin
        },
        "Register": {
            req: ReqRegister,
            res: ResRegister
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 1,
    "services": [
        {
            "id": 0,
            "name": "GameArea",
            "type": "api"
        },
        {
            "id": 1,
            "name": "Login",
            "type": "api"
        },
        {
            "id": 3,
            "name": "Register",
            "type": "api"
        }
    ],
    "types": {
        "PtlGameArea/ReqGameArea": {
            "type": "Interface"
        },
        "PtlGameArea/ResGameArea": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "area",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../../models/dbUrl/DbUrl"
                        }
                    }
                }
            ]
        },
        "../../models/dbUrl/DbUrl": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "url",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "port",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlLogin/ReqLogin": {
            "type": "Interface",
            "properties": [
                {
                    "id": 3,
                    "name": "area_number",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "username",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlLogin/ResLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../base/BaseResponse"
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
        "../base/BaseResponse": {
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
        "PtlRegister/ReqRegister": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "username",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlRegister/ResRegister": {
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
        }
    }
};