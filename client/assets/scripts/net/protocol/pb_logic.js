/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pbreq_heartbeat = (function() {

    function pbreq_heartbeat(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_heartbeat.prototype.echo2s = 0;

    pbreq_heartbeat.create = function create(properties) {
        return new pbreq_heartbeat(properties);
    };

    pbreq_heartbeat.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.echo2s);
        return w;
    };

    pbreq_heartbeat.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_heartbeat();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.echo2s = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("echo2s"))
            throw $util.ProtocolError("missing required 'echo2s'", { instance: m });
        return m;
    };

    pbreq_heartbeat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_heartbeat";
    };

    return pbreq_heartbeat;
})();

$root.pbrsp_heartbeat = (function() {

    function pbrsp_heartbeat(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_heartbeat.prototype.echo2c = 0;

    pbrsp_heartbeat.create = function create(properties) {
        return new pbrsp_heartbeat(properties);
    };

    pbrsp_heartbeat.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.echo2c);
        return w;
    };

    pbrsp_heartbeat.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_heartbeat();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.echo2c = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("echo2c"))
            throw $util.ProtocolError("missing required 'echo2c'", { instance: m });
        return m;
    };

    pbrsp_heartbeat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_heartbeat";
    };

    return pbrsp_heartbeat;
})();

$root.pbreq_hellow = (function() {

    function pbreq_hellow(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_hellow.prototype.hellows = 0;

    pbreq_hellow.create = function create(properties) {
        return new pbreq_hellow(properties);
    };

    pbreq_hellow.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.hellows);
        return w;
    };

    pbreq_hellow.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_hellow();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.hellows = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("hellows"))
            throw $util.ProtocolError("missing required 'hellows'", { instance: m });
        return m;
    };

    pbreq_hellow.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_hellow";
    };

    return pbreq_hellow;
})();

$root.pbrsp_hellow = (function() {

    function pbrsp_hellow(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_hellow.prototype.hellowc = 0;

    pbrsp_hellow.create = function create(properties) {
        return new pbrsp_hellow(properties);
    };

    pbrsp_hellow.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.hellowc);
        return w;
    };

    pbrsp_hellow.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_hellow();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.hellowc = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("hellowc"))
            throw $util.ProtocolError("missing required 'hellowc'", { instance: m });
        return m;
    };

    pbrsp_hellow.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_hellow";
    };

    return pbrsp_hellow;
})();

$root.pbrsp_hi = (function() {

    function pbrsp_hi(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_hi.prototype.hic = 0;

    pbrsp_hi.create = function create(properties) {
        return new pbrsp_hi(properties);
    };

    pbrsp_hi.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.hic);
        return w;
    };

    pbrsp_hi.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_hi();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.hic = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("hic"))
            throw $util.ProtocolError("missing required 'hic'", { instance: m });
        return m;
    };

    pbrsp_hi.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_hi";
    };

    return pbrsp_hi;
})();

$root.pbreq_auth = (function() {

    function pbreq_auth(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_auth.prototype.session = "";
    pbreq_auth.prototype.uid = 0;
    pbreq_auth.prototype.env = "";
    pbreq_auth.prototype.ids = "";
    pbreq_auth.prototype.supportZip = 0;

    pbreq_auth.create = function create(properties) {
        return new pbreq_auth(properties);
    };

    pbreq_auth.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.session);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(16).int32(m.uid);
        if (m.env != null && Object.hasOwnProperty.call(m, "env"))
            w.uint32(26).string(m.env);
        if (m.ids != null && Object.hasOwnProperty.call(m, "ids"))
            w.uint32(34).string(m.ids);
        if (m.supportZip != null && Object.hasOwnProperty.call(m, "supportZip"))
            w.uint32(40).int32(m.supportZip);
        return w;
    };

    pbreq_auth.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_auth();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.session = r.string();
                    break;
                }
            case 2: {
                    m.uid = r.int32();
                    break;
                }
            case 3: {
                    m.env = r.string();
                    break;
                }
            case 4: {
                    m.ids = r.string();
                    break;
                }
            case 5: {
                    m.supportZip = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("session"))
            throw $util.ProtocolError("missing required 'session'", { instance: m });
        return m;
    };

    pbreq_auth.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_auth";
    };

    return pbreq_auth;
})();

$root.pbrsp_auth = (function() {

    function pbrsp_auth(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_auth.prototype.status = 0;
    pbrsp_auth.prototype.createTs = "";

    pbrsp_auth.create = function create(properties) {
        return new pbrsp_auth(properties);
    };

    pbrsp_auth.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        if (m.createTs != null && Object.hasOwnProperty.call(m, "createTs"))
            w.uint32(18).string(m.createTs);
        return w;
    };

    pbrsp_auth.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_auth();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            case 2: {
                    m.createTs = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_auth.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_auth";
    };

    return pbrsp_auth;
})();

$root.pbreq_sync = (function() {

    function pbreq_sync(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_sync.prototype.idfa = "";
    pbreq_sync.prototype.keychain = "";
    pbreq_sync.prototype.idfv = "";

    pbreq_sync.create = function create(properties) {
        return new pbreq_sync(properties);
    };

    pbreq_sync.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.idfa != null && Object.hasOwnProperty.call(m, "idfa"))
            w.uint32(10).string(m.idfa);
        if (m.keychain != null && Object.hasOwnProperty.call(m, "keychain"))
            w.uint32(18).string(m.keychain);
        if (m.idfv != null && Object.hasOwnProperty.call(m, "idfv"))
            w.uint32(26).string(m.idfv);
        return w;
    };

    pbreq_sync.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_sync();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.idfa = r.string();
                    break;
                }
            case 2: {
                    m.keychain = r.string();
                    break;
                }
            case 3: {
                    m.idfv = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pbreq_sync.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_sync";
    };

    return pbreq_sync;
})();

$root.pbreq_trash = (function() {

    function pbreq_trash(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_trash.prototype.pwd = "";

    pbreq_trash.create = function create(properties) {
        return new pbreq_trash(properties);
    };

    pbreq_trash.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.pwd);
        return w;
    };

    pbreq_trash.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_trash();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.pwd = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("pwd"))
            throw $util.ProtocolError("missing required 'pwd'", { instance: m });
        return m;
    };

    pbreq_trash.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_trash";
    };

    return pbreq_trash;
})();

$root.pbrsp_trash = (function() {

    function pbrsp_trash(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_trash.prototype.status = 0;
    pbrsp_trash.prototype.flag = 0;
    pbrsp_trash.prototype.cd = 0;

    pbrsp_trash.create = function create(properties) {
        return new pbrsp_trash(properties);
    };

    pbrsp_trash.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        if (m.flag != null && Object.hasOwnProperty.call(m, "flag"))
            w.uint32(16).uint32(m.flag);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(24).uint32(m.cd);
        return w;
    };

    pbrsp_trash.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_trash();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            case 2: {
                    m.flag = r.uint32();
                    break;
                }
            case 3: {
                    m.cd = r.uint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_trash.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_trash";
    };

    return pbrsp_trash;
})();

$root.pbreq_resume = (function() {

    function pbreq_resume(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_resume.create = function create(properties) {
        return new pbreq_resume(properties);
    };

    pbreq_resume.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    pbreq_resume.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_resume();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pbreq_resume.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_resume";
    };

    return pbreq_resume;
})();

$root.pbrsp_resume = (function() {

    function pbrsp_resume(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_resume.prototype.status = 0;

    pbrsp_resume.create = function create(properties) {
        return new pbrsp_resume(properties);
    };

    pbrsp_resume.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        return w;
    };

    pbrsp_resume.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_resume();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_resume.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_resume";
    };

    return pbrsp_resume;
})();

$root.pbrsp_sync = (function() {

    function pbrsp_sync(p) {
        this.heroes = [];
        this.heroIds = [];
        this.mails = [];
        this.payNum = [];
        this.acts = [];
        this.tasks = [];
        this.limitacts = [];
        this.cds = [];
        this.pets = [];
        this.gskls = [];
        this.skin = [];
        this.newMidas = [];
        this.spetIds = [];
        this.skinIds = [];
        this.homeHeroes = [];
        this.collLv = [];
        this.like = [];
        this.care = [];
        this.hteamBag = [];
        this.qltTasks = [];
        this.give = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_sync.prototype.status = 0;
    pbrsp_sync.prototype.player = null;
    pbrsp_sync.prototype.bag = null;
    pbrsp_sync.prototype.heroes = $util.emptyArray;
    pbrsp_sync.prototype.gacha = null;
    pbrsp_sync.prototype.heroIds = $util.emptyArray;
    pbrsp_sync.prototype.mails = $util.emptyArray;
    pbrsp_sync.prototype.midasCd = 0;
    pbrsp_sync.prototype.hook = null;
    pbrsp_sync.prototype.midasCrstcd = 0;
    pbrsp_sync.prototype.payNum = $util.emptyArray;
    pbrsp_sync.prototype.tutorial = 0;
    pbrsp_sync.prototype.friends = null;
    pbrsp_sync.prototype.trial = null;
    pbrsp_sync.prototype.alogin = null;
    pbrsp_sync.prototype.acts = $util.emptyArray;
    pbrsp_sync.prototype.achieve = null;
    pbrsp_sync.prototype.tasks = $util.emptyArray;
    pbrsp_sync.prototype.taskCd = 0;
    pbrsp_sync.prototype.online = null;
    pbrsp_sync.prototype.midasFlag = 0;
    pbrsp_sync.prototype.webFlag = 0;
    pbrsp_sync.prototype.videoAd = 0;
    pbrsp_sync.prototype.limitacts = $util.emptyArray;
    pbrsp_sync.prototype.htask = null;
    pbrsp_sync.prototype.buyHlimit = 0;
    pbrsp_sync.prototype.spaceGacha = 0;
    pbrsp_sync.prototype.cds = $util.emptyArray;
    pbrsp_sync.prototype.finalRank = 0;
    pbrsp_sync.prototype.hideVip = false;
    pbrsp_sync.prototype.tutorial2 = 0;
    pbrsp_sync.prototype.pets = $util.emptyArray;
    pbrsp_sync.prototype.reddot = 0;
    pbrsp_sync.prototype.gskls = $util.emptyArray;
    pbrsp_sync.prototype.subscribed = 0;
    pbrsp_sync.prototype.skin = $util.emptyArray;
    pbrsp_sync.prototype.gsklcode = 0;
    pbrsp_sync.prototype.chatblocks = 0;
    pbrsp_sync.prototype.identity = null;
    pbrsp_sync.prototype.mact = null;
    pbrsp_sync.prototype.audit = 0;
    pbrsp_sync.prototype.sact = null;
    pbrsp_sync.prototype.offCard = 0;
    pbrsp_sync.prototype.videoCd = 0;
    pbrsp_sync.prototype.ract = null;
    pbrsp_sync.prototype.useHitem = 0;
    pbrsp_sync.prototype.reSync = null;
    pbrsp_sync.prototype.newMidas = $util.emptyArray;
    pbrsp_sync.prototype.stele = null;
    pbrsp_sync.prototype.token = "";
    pbrsp_sync.prototype.stowerLv = 0;
    pbrsp_sync.prototype.spetIds = $util.emptyArray;
    pbrsp_sync.prototype.skinIds = $util.emptyArray;
    pbrsp_sync.prototype.homeHeroes = $util.emptyArray;
    pbrsp_sync.prototype.collLv = $util.emptyArray;
    pbrsp_sync.prototype.like = $util.emptyArray;
    pbrsp_sync.prototype.care = $util.emptyArray;
    pbrsp_sync.prototype.hteamBag = $util.emptyArray;
    pbrsp_sync.prototype.qltTasks = $util.emptyArray;
    pbrsp_sync.prototype.give = $util.emptyArray;
    pbrsp_sync.prototype.qscore = 0;
    pbrsp_sync.prototype.mallPwd = 0;
    pbrsp_sync.prototype.qltPvpMarket = 0;

    pbrsp_sync.create = function create(properties) {
        return new pbrsp_sync(properties);
    };

    pbrsp_sync.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        if (m.player != null && Object.hasOwnProperty.call(m, "player"))
            $root.pb_player.encode(m.player, w.uint32(18).fork()).ldelim();
        if (m.bag != null && Object.hasOwnProperty.call(m, "bag"))
            $root.pb_bag.encode(m.bag, w.uint32(26).fork()).ldelim();
        if (m.heroes != null && m.heroes.length) {
            for (var i = 0; i < m.heroes.length; ++i)
                $root.pb_hero.encode(m.heroes[i], w.uint32(34).fork()).ldelim();
        }
        if (m.gacha != null && Object.hasOwnProperty.call(m, "gacha"))
            $root.pb_gacha.encode(m.gacha, w.uint32(42).fork()).ldelim();
        if (m.heroIds != null && m.heroIds.length) {
            for (var i = 0; i < m.heroIds.length; ++i)
                w.uint32(48).int32(m.heroIds[i]);
        }
        if (m.mails != null && m.mails.length) {
            for (var i = 0; i < m.mails.length; ++i)
                $root.pb_mail.encode(m.mails[i], w.uint32(58).fork()).ldelim();
        }
        if (m.midasCd != null && Object.hasOwnProperty.call(m, "midasCd"))
            w.uint32(64).int32(m.midasCd);
        if (m.hook != null && Object.hasOwnProperty.call(m, "hook"))
            $root.pb_hook.encode(m.hook, w.uint32(74).fork()).ldelim();
        if (m.midasCrstcd != null && Object.hasOwnProperty.call(m, "midasCrstcd"))
            w.uint32(80).int32(m.midasCrstcd);
        if (m.payNum != null && m.payNum.length) {
            for (var i = 0; i < m.payNum.length; ++i)
                w.uint32(88).int32(m.payNum[i]);
        }
        if (m.tutorial != null && Object.hasOwnProperty.call(m, "tutorial"))
            w.uint32(96).int32(m.tutorial);
        if (m.friends != null && Object.hasOwnProperty.call(m, "friends"))
            $root.pb_friend.encode(m.friends, w.uint32(106).fork()).ldelim();
        if (m.trial != null && Object.hasOwnProperty.call(m, "trial"))
            $root.pb_strial.encode(m.trial, w.uint32(114).fork()).ldelim();
        if (m.alogin != null && Object.hasOwnProperty.call(m, "alogin"))
            $root.pb_alogin.encode(m.alogin, w.uint32(122).fork()).ldelim();
        if (m.acts != null && m.acts.length) {
            for (var i = 0; i < m.acts.length; ++i)
                $root.pb_act.encode(m.acts[i], w.uint32(130).fork()).ldelim();
        }
        if (m.achieve != null && Object.hasOwnProperty.call(m, "achieve"))
            $root.pb_sachieve.encode(m.achieve, w.uint32(138).fork()).ldelim();
        if (m.tasks != null && m.tasks.length) {
            for (var i = 0; i < m.tasks.length; ++i)
                $root.pb_task.encode(m.tasks[i], w.uint32(146).fork()).ldelim();
        }
        if (m.taskCd != null && Object.hasOwnProperty.call(m, "taskCd"))
            w.uint32(152).int32(m.taskCd);
        if (m.online != null && Object.hasOwnProperty.call(m, "online"))
            $root.pb_online.encode(m.online, w.uint32(162).fork()).ldelim();
        if (m.midasFlag != null && Object.hasOwnProperty.call(m, "midasFlag"))
            w.uint32(168).int32(m.midasFlag);
        if (m.webFlag != null && Object.hasOwnProperty.call(m, "webFlag"))
            w.uint32(176).int32(m.webFlag);
        if (m.videoAd != null && Object.hasOwnProperty.call(m, "videoAd"))
            w.uint32(184).int32(m.videoAd);
        if (m.limitacts != null && m.limitacts.length) {
            for (var i = 0; i < m.limitacts.length; ++i)
                $root.pb_act.encode(m.limitacts[i], w.uint32(194).fork()).ldelim();
        }
        if (m.htask != null && Object.hasOwnProperty.call(m, "htask"))
            $root.pb_htask_sync.encode(m.htask, w.uint32(210).fork()).ldelim();
        if (m.buyHlimit != null && Object.hasOwnProperty.call(m, "buyHlimit"))
            w.uint32(216).int32(m.buyHlimit);
        if (m.spaceGacha != null && Object.hasOwnProperty.call(m, "spaceGacha"))
            w.uint32(224).int32(m.spaceGacha);
        if (m.cds != null && m.cds.length) {
            for (var i = 0; i < m.cds.length; ++i)
                $root.pb_cd.encode(m.cds[i], w.uint32(234).fork()).ldelim();
        }
        if (m.finalRank != null && Object.hasOwnProperty.call(m, "finalRank"))
            w.uint32(240).int32(m.finalRank);
        if (m.hideVip != null && Object.hasOwnProperty.call(m, "hideVip"))
            w.uint32(248).bool(m.hideVip);
        if (m.tutorial2 != null && Object.hasOwnProperty.call(m, "tutorial2"))
            w.uint32(256).int32(m.tutorial2);
        if (m.pets != null && m.pets.length) {
            for (var i = 0; i < m.pets.length; ++i)
                $root.pb_pet.encode(m.pets[i], w.uint32(266).fork()).ldelim();
        }
        if (m.reddot != null && Object.hasOwnProperty.call(m, "reddot"))
            w.uint32(272).int32(m.reddot);
        if (m.gskls != null && m.gskls.length) {
            for (var i = 0; i < m.gskls.length; ++i)
                $root.pb_gskl.encode(m.gskls[i], w.uint32(282).fork()).ldelim();
        }
        if (m.subscribed != null && Object.hasOwnProperty.call(m, "subscribed"))
            w.uint32(288).int32(m.subscribed);
        if (m.skin != null && m.skin.length) {
            for (var i = 0; i < m.skin.length; ++i)
                $root.pb_item.encode(m.skin[i], w.uint32(298).fork()).ldelim();
        }
        if (m.gsklcode != null && Object.hasOwnProperty.call(m, "gsklcode"))
            w.uint32(304).int32(m.gsklcode);
        if (m.chatblocks != null && Object.hasOwnProperty.call(m, "chatblocks"))
            w.uint32(312).int32(m.chatblocks);
        if (m.identity != null && Object.hasOwnProperty.call(m, "identity"))
            $root.pb_identity.encode(m.identity, w.uint32(322).fork()).ldelim();
        if (m.mact != null && Object.hasOwnProperty.call(m, "mact"))
            $root.pb_mact.encode(m.mact, w.uint32(330).fork()).ldelim();
        if (m.audit != null && Object.hasOwnProperty.call(m, "audit"))
            w.uint32(336).int32(m.audit);
        if (m.sact != null && Object.hasOwnProperty.call(m, "sact"))
            $root.pb_sact.encode(m.sact, w.uint32(346).fork()).ldelim();
        if (m.offCard != null && Object.hasOwnProperty.call(m, "offCard"))
            w.uint32(352).int32(m.offCard);
        if (m.videoCd != null && Object.hasOwnProperty.call(m, "videoCd"))
            w.uint32(360).int32(m.videoCd);
        if (m.ract != null && Object.hasOwnProperty.call(m, "ract"))
            $root.pb_ract.encode(m.ract, w.uint32(370).fork()).ldelim();
        if (m.useHitem != null && Object.hasOwnProperty.call(m, "useHitem"))
            w.uint32(376).int32(m.useHitem);
        if (m.reSync != null && Object.hasOwnProperty.call(m, "reSync"))
            $root.pb_re_sync.encode(m.reSync, w.uint32(386).fork()).ldelim();
        if (m.newMidas != null && m.newMidas.length) {
            for (var i = 0; i < m.newMidas.length; ++i)
                $root.pb_midas.encode(m.newMidas[i], w.uint32(394).fork()).ldelim();
        }
        if (m.stele != null && Object.hasOwnProperty.call(m, "stele"))
            $root.pb_stele.encode(m.stele, w.uint32(402).fork()).ldelim();
        if (m.token != null && Object.hasOwnProperty.call(m, "token"))
            w.uint32(410).string(m.token);
        if (m.stowerLv != null && Object.hasOwnProperty.call(m, "stowerLv"))
            w.uint32(416).int32(m.stowerLv);
        if (m.spetIds != null && m.spetIds.length) {
            for (var i = 0; i < m.spetIds.length; ++i)
                w.uint32(424).int32(m.spetIds[i]);
        }
        if (m.skinIds != null && m.skinIds.length) {
            for (var i = 0; i < m.skinIds.length; ++i)
                w.uint32(432).int32(m.skinIds[i]);
        }
        if (m.homeHeroes != null && m.homeHeroes.length) {
            for (var i = 0; i < m.homeHeroes.length; ++i)
                $root.pb_home_heroes.encode(m.homeHeroes[i], w.uint32(442).fork()).ldelim();
        }
        if (m.collLv != null && m.collLv.length) {
            for (var i = 0; i < m.collLv.length; ++i)
                w.uint32(448).int32(m.collLv[i]);
        }
        if (m.like != null && m.like.length) {
            for (var i = 0; i < m.like.length; ++i)
                w.uint32(456).int64(m.like[i]);
        }
        if (m.care != null && m.care.length) {
            for (var i = 0; i < m.care.length; ++i)
                w.uint32(464).int64(m.care[i]);
        }
        if (m.hteamBag != null && m.hteamBag.length) {
            for (var i = 0; i < m.hteamBag.length; ++i)
                w.uint32(472).int32(m.hteamBag[i]);
        }
        if (m.qltTasks != null && m.qltTasks.length) {
            for (var i = 0; i < m.qltTasks.length; ++i)
                $root.pb_task.encode(m.qltTasks[i], w.uint32(482).fork()).ldelim();
        }
        if (m.give != null && m.give.length) {
            for (var i = 0; i < m.give.length; ++i)
                $root.pb_give_order.encode(m.give[i], w.uint32(490).fork()).ldelim();
        }
        if (m.qscore != null && Object.hasOwnProperty.call(m, "qscore"))
            w.uint32(496).int32(m.qscore);
        if (m.mallPwd != null && Object.hasOwnProperty.call(m, "mallPwd"))
            w.uint32(504).sint32(m.mallPwd);
        if (m.qltPvpMarket != null && Object.hasOwnProperty.call(m, "qltPvpMarket"))
            w.uint32(512).sint32(m.qltPvpMarket);
        return w;
    };

    pbrsp_sync.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_sync();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            case 2: {
                    m.player = $root.pb_player.decode(r, r.uint32());
                    break;
                }
            case 3: {
                    m.bag = $root.pb_bag.decode(r, r.uint32());
                    break;
                }
            case 4: {
                    if (!(m.heroes && m.heroes.length))
                        m.heroes = [];
                    m.heroes.push($root.pb_hero.decode(r, r.uint32()));
                    break;
                }
            case 5: {
                    m.gacha = $root.pb_gacha.decode(r, r.uint32());
                    break;
                }
            case 6: {
                    if (!(m.heroIds && m.heroIds.length))
                        m.heroIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.heroIds.push(r.int32());
                    } else
                        m.heroIds.push(r.int32());
                    break;
                }
            case 7: {
                    if (!(m.mails && m.mails.length))
                        m.mails = [];
                    m.mails.push($root.pb_mail.decode(r, r.uint32()));
                    break;
                }
            case 8: {
                    m.midasCd = r.int32();
                    break;
                }
            case 9: {
                    m.hook = $root.pb_hook.decode(r, r.uint32());
                    break;
                }
            case 10: {
                    m.midasCrstcd = r.int32();
                    break;
                }
            case 11: {
                    if (!(m.payNum && m.payNum.length))
                        m.payNum = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.payNum.push(r.int32());
                    } else
                        m.payNum.push(r.int32());
                    break;
                }
            case 12: {
                    m.tutorial = r.int32();
                    break;
                }
            case 13: {
                    m.friends = $root.pb_friend.decode(r, r.uint32());
                    break;
                }
            case 14: {
                    m.trial = $root.pb_strial.decode(r, r.uint32());
                    break;
                }
            case 15: {
                    m.alogin = $root.pb_alogin.decode(r, r.uint32());
                    break;
                }
            case 16: {
                    if (!(m.acts && m.acts.length))
                        m.acts = [];
                    m.acts.push($root.pb_act.decode(r, r.uint32()));
                    break;
                }
            case 17: {
                    m.achieve = $root.pb_sachieve.decode(r, r.uint32());
                    break;
                }
            case 18: {
                    if (!(m.tasks && m.tasks.length))
                        m.tasks = [];
                    m.tasks.push($root.pb_task.decode(r, r.uint32()));
                    break;
                }
            case 19: {
                    m.taskCd = r.int32();
                    break;
                }
            case 20: {
                    m.online = $root.pb_online.decode(r, r.uint32());
                    break;
                }
            case 21: {
                    m.midasFlag = r.int32();
                    break;
                }
            case 22: {
                    m.webFlag = r.int32();
                    break;
                }
            case 23: {
                    m.videoAd = r.int32();
                    break;
                }
            case 24: {
                    if (!(m.limitacts && m.limitacts.length))
                        m.limitacts = [];
                    m.limitacts.push($root.pb_act.decode(r, r.uint32()));
                    break;
                }
            case 26: {
                    m.htask = $root.pb_htask_sync.decode(r, r.uint32());
                    break;
                }
            case 27: {
                    m.buyHlimit = r.int32();
                    break;
                }
            case 28: {
                    m.spaceGacha = r.int32();
                    break;
                }
            case 29: {
                    if (!(m.cds && m.cds.length))
                        m.cds = [];
                    m.cds.push($root.pb_cd.decode(r, r.uint32()));
                    break;
                }
            case 30: {
                    m.finalRank = r.int32();
                    break;
                }
            case 31: {
                    m.hideVip = r.bool();
                    break;
                }
            case 32: {
                    m.tutorial2 = r.int32();
                    break;
                }
            case 33: {
                    if (!(m.pets && m.pets.length))
                        m.pets = [];
                    m.pets.push($root.pb_pet.decode(r, r.uint32()));
                    break;
                }
            case 34: {
                    m.reddot = r.int32();
                    break;
                }
            case 35: {
                    if (!(m.gskls && m.gskls.length))
                        m.gskls = [];
                    m.gskls.push($root.pb_gskl.decode(r, r.uint32()));
                    break;
                }
            case 36: {
                    m.subscribed = r.int32();
                    break;
                }
            case 37: {
                    if (!(m.skin && m.skin.length))
                        m.skin = [];
                    m.skin.push($root.pb_item.decode(r, r.uint32()));
                    break;
                }
            case 38: {
                    m.gsklcode = r.int32();
                    break;
                }
            case 39: {
                    m.chatblocks = r.int32();
                    break;
                }
            case 40: {
                    m.identity = $root.pb_identity.decode(r, r.uint32());
                    break;
                }
            case 41: {
                    m.mact = $root.pb_mact.decode(r, r.uint32());
                    break;
                }
            case 42: {
                    m.audit = r.int32();
                    break;
                }
            case 43: {
                    m.sact = $root.pb_sact.decode(r, r.uint32());
                    break;
                }
            case 44: {
                    m.offCard = r.int32();
                    break;
                }
            case 45: {
                    m.videoCd = r.int32();
                    break;
                }
            case 46: {
                    m.ract = $root.pb_ract.decode(r, r.uint32());
                    break;
                }
            case 47: {
                    m.useHitem = r.int32();
                    break;
                }
            case 48: {
                    m.reSync = $root.pb_re_sync.decode(r, r.uint32());
                    break;
                }
            case 49: {
                    if (!(m.newMidas && m.newMidas.length))
                        m.newMidas = [];
                    m.newMidas.push($root.pb_midas.decode(r, r.uint32()));
                    break;
                }
            case 50: {
                    m.stele = $root.pb_stele.decode(r, r.uint32());
                    break;
                }
            case 51: {
                    m.token = r.string();
                    break;
                }
            case 52: {
                    m.stowerLv = r.int32();
                    break;
                }
            case 53: {
                    if (!(m.spetIds && m.spetIds.length))
                        m.spetIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.spetIds.push(r.int32());
                    } else
                        m.spetIds.push(r.int32());
                    break;
                }
            case 54: {
                    if (!(m.skinIds && m.skinIds.length))
                        m.skinIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.skinIds.push(r.int32());
                    } else
                        m.skinIds.push(r.int32());
                    break;
                }
            case 55: {
                    if (!(m.homeHeroes && m.homeHeroes.length))
                        m.homeHeroes = [];
                    m.homeHeroes.push($root.pb_home_heroes.decode(r, r.uint32()));
                    break;
                }
            case 56: {
                    if (!(m.collLv && m.collLv.length))
                        m.collLv = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.collLv.push(r.int32());
                    } else
                        m.collLv.push(r.int32());
                    break;
                }
            case 57: {
                    if (!(m.like && m.like.length))
                        m.like = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.like.push(r.int64());
                    } else
                        m.like.push(r.int64());
                    break;
                }
            case 58: {
                    if (!(m.care && m.care.length))
                        m.care = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.care.push(r.int64());
                    } else
                        m.care.push(r.int64());
                    break;
                }
            case 59: {
                    if (!(m.hteamBag && m.hteamBag.length))
                        m.hteamBag = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.hteamBag.push(r.int32());
                    } else
                        m.hteamBag.push(r.int32());
                    break;
                }
            case 60: {
                    if (!(m.qltTasks && m.qltTasks.length))
                        m.qltTasks = [];
                    m.qltTasks.push($root.pb_task.decode(r, r.uint32()));
                    break;
                }
            case 61: {
                    if (!(m.give && m.give.length))
                        m.give = [];
                    m.give.push($root.pb_give_order.decode(r, r.uint32()));
                    break;
                }
            case 62: {
                    m.qscore = r.int32();
                    break;
                }
            case 63: {
                    m.mallPwd = r.sint32();
                    break;
                }
            case 64: {
                    m.qltPvpMarket = r.sint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_sync.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_sync";
    };

    return pbrsp_sync;
})();

$root.pbreq_up = (function() {

    function pbreq_up(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_up.prototype.vsn = "";
    pbreq_up.prototype.packagename = "";

    pbreq_up.create = function create(properties) {
        return new pbreq_up(properties);
    };

    pbreq_up.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.vsn);
        if (m.packagename != null && Object.hasOwnProperty.call(m, "packagename"))
            w.uint32(18).string(m.packagename);
        return w;
    };

    pbreq_up.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_up();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.vsn = r.string();
                    break;
                }
            case 2: {
                    m.packagename = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("vsn"))
            throw $util.ProtocolError("missing required 'vsn'", { instance: m });
        return m;
    };

    pbreq_up.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_up";
    };

    return pbreq_up;
})();

$root.pbrsp_up = (function() {

    function pbrsp_up(p) {
        this.files = [];
        this.upurl = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_up.prototype.status = 0;
    pbrsp_up.prototype.vsn = "";
    pbrsp_up.prototype.lv = 0;
    pbrsp_up.prototype.prefix = "";
    pbrsp_up.prototype.files = $util.emptyArray;
    pbrsp_up.prototype.upList = "";
    pbrsp_up.prototype.thcount = 0;
    pbrsp_up.prototype.appurl = "";
    pbrsp_up.prototype.upurl = $util.emptyArray;

    pbrsp_up.create = function create(properties) {
        return new pbrsp_up(properties);
    };

    pbrsp_up.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.status);
        w.uint32(18).string(m.vsn);
        w.uint32(24).int32(m.lv);
        if (m.prefix != null && Object.hasOwnProperty.call(m, "prefix"))
            w.uint32(34).string(m.prefix);
        if (m.files != null && m.files.length) {
            for (var i = 0; i < m.files.length; ++i)
                $root.pb_upfile.encode(m.files[i], w.uint32(42).fork()).ldelim();
        }
        if (m.upList != null && Object.hasOwnProperty.call(m, "upList"))
            w.uint32(50).string(m.upList);
        if (m.thcount != null && Object.hasOwnProperty.call(m, "thcount"))
            w.uint32(56).int32(m.thcount);
        if (m.appurl != null && Object.hasOwnProperty.call(m, "appurl"))
            w.uint32(66).string(m.appurl);
        if (m.upurl != null && m.upurl.length) {
            for (var i = 0; i < m.upurl.length; ++i)
                w.uint32(74).string(m.upurl[i]);
        }
        return w;
    };

    pbrsp_up.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_up();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.int32();
                    break;
                }
            case 2: {
                    m.vsn = r.string();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.prefix = r.string();
                    break;
                }
            case 5: {
                    if (!(m.files && m.files.length))
                        m.files = [];
                    m.files.push($root.pb_upfile.decode(r, r.uint32()));
                    break;
                }
            case 6: {
                    m.upList = r.string();
                    break;
                }
            case 7: {
                    m.thcount = r.int32();
                    break;
                }
            case 8: {
                    m.appurl = r.string();
                    break;
                }
            case 9: {
                    if (!(m.upurl && m.upurl.length))
                        m.upurl = [];
                    m.upurl.push(r.string());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        if (!m.hasOwnProperty("vsn"))
            throw $util.ProtocolError("missing required 'vsn'", { instance: m });
        if (!m.hasOwnProperty("lv"))
            throw $util.ProtocolError("missing required 'lv'", { instance: m });
        return m;
    };

    pbrsp_up.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_up";
    };

    return pbrsp_up;
})();

$root.pbreq_bind = (function() {

    function pbreq_bind(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_bind.prototype.account = "";
    pbreq_bind.prototype.password = "";

    pbreq_bind.create = function create(properties) {
        return new pbreq_bind(properties);
    };

    pbreq_bind.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.account);
        w.uint32(18).string(m.password);
        return w;
    };

    pbreq_bind.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_bind();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.account = r.string();
                    break;
                }
            case 2: {
                    m.password = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("account"))
            throw $util.ProtocolError("missing required 'account'", { instance: m });
        if (!m.hasOwnProperty("password"))
            throw $util.ProtocolError("missing required 'password'", { instance: m });
        return m;
    };

    pbreq_bind.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_bind";
    };

    return pbreq_bind;
})();

$root.pbrsp_bind = (function() {

    function pbrsp_bind(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_bind.prototype.status = 0;

    pbrsp_bind.create = function create(properties) {
        return new pbrsp_bind(properties);
    };

    pbrsp_bind.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        return w;
    };

    pbrsp_bind.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_bind();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_bind.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_bind";
    };

    return pbrsp_bind;
})();

$root.pbreq_change_password = (function() {

    function pbreq_change_password(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_change_password.prototype.old = "";
    pbreq_change_password.prototype["new"] = "";

    pbreq_change_password.create = function create(properties) {
        return new pbreq_change_password(properties);
    };

    pbreq_change_password.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.old);
        w.uint32(18).string(m["new"]);
        return w;
    };

    pbreq_change_password.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_change_password();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.old = r.string();
                    break;
                }
            case 2: {
                    m["new"] = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("old"))
            throw $util.ProtocolError("missing required 'old'", { instance: m });
        if (!m.hasOwnProperty("new"))
            throw $util.ProtocolError("missing required 'new'", { instance: m });
        return m;
    };

    pbreq_change_password.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_change_password";
    };

    return pbreq_change_password;
})();

$root.pbrsp_change_password = (function() {

    function pbrsp_change_password(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_change_password.prototype.status = 0;

    pbrsp_change_password.create = function create(properties) {
        return new pbrsp_change_password(properties);
    };

    pbrsp_change_password.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        return w;
    };

    pbrsp_change_password.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_change_password();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_change_password.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_change_password";
    };

    return pbrsp_change_password;
})();

$root.pbreq_servers = (function() {

    function pbreq_servers(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_servers.create = function create(properties) {
        return new pbreq_servers(properties);
    };

    pbreq_servers.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    pbreq_servers.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_servers();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pbreq_servers.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_servers";
    };

    return pbreq_servers;
})();

$root.pbrsp_servers = (function() {

    function pbrsp_servers(p) {
        this.servers = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_servers.prototype.servers = $util.emptyArray;
    pbrsp_servers.prototype.mid = 0;

    pbrsp_servers.create = function create(properties) {
        return new pbrsp_servers(properties);
    };

    pbrsp_servers.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.servers != null && m.servers.length) {
            for (var i = 0; i < m.servers.length; ++i)
                $root.pb_server.encode(m.servers[i], w.uint32(10).fork()).ldelim();
        }
        if (m.mid != null && Object.hasOwnProperty.call(m, "mid"))
            w.uint32(16).int32(m.mid);
        return w;
    };

    pbrsp_servers.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_servers();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.servers && m.servers.length))
                        m.servers = [];
                    m.servers.push($root.pb_server.decode(r, r.uint32()));
                    break;
                }
            case 2: {
                    m.mid = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pbrsp_servers.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_servers";
    };

    return pbrsp_servers;
})();

$root.pbreq_player = (function() {

    function pbreq_player(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_player.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pbreq_player.prototype.kind = 0;

    pbreq_player.create = function create(properties) {
        return new pbreq_player(properties);
    };

    pbreq_player.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.uid);
        if (m.kind != null && Object.hasOwnProperty.call(m, "kind"))
            w.uint32(16).int32(m.kind);
        return w;
    };

    pbreq_player.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_player();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.uid = r.int64();
                    break;
                }
            case 2: {
                    m.kind = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uid"))
            throw $util.ProtocolError("missing required 'uid'", { instance: m });
        return m;
    };

    pbreq_player.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_player";
    };

    return pbreq_player;
})();

$root.pbrsp_player = (function() {

    function pbrsp_player(p) {
        this.heroes = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_player.prototype.gid = 0;
    pbrsp_player.prototype.gname = "";
    pbrsp_player.prototype.heroes = $util.emptyArray;
    pbrsp_player.prototype.power = 0;
    pbrsp_player.prototype.report = 0;

    pbrsp_player.create = function create(properties) {
        return new pbrsp_player(properties);
    };

    pbrsp_player.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gid != null && Object.hasOwnProperty.call(m, "gid"))
            w.uint32(8).int32(m.gid);
        if (m.gname != null && Object.hasOwnProperty.call(m, "gname"))
            w.uint32(18).string(m.gname);
        if (m.heroes != null && m.heroes.length) {
            for (var i = 0; i < m.heroes.length; ++i)
                $root.pb_unit.encode(m.heroes[i], w.uint32(26).fork()).ldelim();
        }
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(32).int32(m.power);
        if (m.report != null && Object.hasOwnProperty.call(m, "report"))
            w.uint32(40).int32(m.report);
        return w;
    };

    pbrsp_player.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_player();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.gid = r.int32();
                    break;
                }
            case 2: {
                    m.gname = r.string();
                    break;
                }
            case 3: {
                    if (!(m.heroes && m.heroes.length))
                        m.heroes = [];
                    m.heroes.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            case 4: {
                    m.power = r.int32();
                    break;
                }
            case 5: {
                    m.report = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pbrsp_player.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_player";
    };

    return pbrsp_player;
})();

$root.pbreq_change_name = (function() {

    function pbreq_change_name(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_change_name.prototype.name = "";

    pbreq_change_name.create = function create(properties) {
        return new pbreq_change_name(properties);
    };

    pbreq_change_name.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.name);
        return w;
    };

    pbreq_change_name.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_change_name();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.name = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        return m;
    };

    pbreq_change_name.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_change_name";
    };

    return pbreq_change_name;
})();

$root.pbrsp_change_name = (function() {

    function pbrsp_change_name(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_change_name.prototype.status = 0;

    pbrsp_change_name.create = function create(properties) {
        return new pbrsp_change_name(properties);
    };

    pbrsp_change_name.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        return w;
    };

    pbrsp_change_name.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_change_name();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_change_name.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_change_name";
    };

    return pbrsp_change_name;
})();

$root.pbreq_gvm_up_stone = (function() {

    function pbreq_gvm_up_stone(p) {
        this.stone = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_gvm_up_stone.prototype.stone = $util.emptyArray;

    pbreq_gvm_up_stone.create = function create(properties) {
        return new pbreq_gvm_up_stone(properties);
    };

    pbreq_gvm_up_stone.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.stone != null && m.stone.length) {
            for (var i = 0; i < m.stone.length; ++i)
                w.uint32(8).int32(m.stone[i]);
        }
        return w;
    };

    pbreq_gvm_up_stone.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_gvm_up_stone();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.stone && m.stone.length))
                        m.stone = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.stone.push(r.int32());
                    } else
                        m.stone.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pbreq_gvm_up_stone.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_gvm_up_stone";
    };

    return pbreq_gvm_up_stone;
})();

$root.pbrsp_gvm_up_stone = (function() {

    function pbrsp_gvm_up_stone(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_gvm_up_stone.prototype.status = 0;

    pbrsp_gvm_up_stone.create = function create(properties) {
        return new pbrsp_gvm_up_stone(properties);
    };

    pbrsp_gvm_up_stone.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        return w;
    };

    pbrsp_gvm_up_stone.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_gvm_up_stone();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_gvm_up_stone.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_gvm_up_stone";
    };

    return pbrsp_gvm_up_stone;
})();

$root.pbreq_gvm_sell_stone = (function() {

    function pbreq_gvm_sell_stone(p) {
        this.stone = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_gvm_sell_stone.prototype.stone = $util.emptyArray;

    pbreq_gvm_sell_stone.create = function create(properties) {
        return new pbreq_gvm_sell_stone(properties);
    };

    pbreq_gvm_sell_stone.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.stone != null && m.stone.length) {
            for (var i = 0; i < m.stone.length; ++i)
                w.uint32(8).int32(m.stone[i]);
        }
        return w;
    };

    pbreq_gvm_sell_stone.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_gvm_sell_stone();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.stone && m.stone.length))
                        m.stone = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.stone.push(r.int32());
                    } else
                        m.stone.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pbreq_gvm_sell_stone.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_gvm_sell_stone";
    };

    return pbreq_gvm_sell_stone;
})();

$root.pbrsp_gvm_sell_stone = (function() {

    function pbrsp_gvm_sell_stone(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_gvm_sell_stone.prototype.status = 0;

    pbrsp_gvm_sell_stone.create = function create(properties) {
        return new pbrsp_gvm_sell_stone(properties);
    };

    pbrsp_gvm_sell_stone.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        return w;
    };

    pbrsp_gvm_sell_stone.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_gvm_sell_stone();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_gvm_sell_stone.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_gvm_sell_stone";
    };

    return pbrsp_gvm_sell_stone;
})();

$root.pbreq_gvm_up_hero = (function() {

    function pbreq_gvm_up_hero(p) {
        this.hids = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_gvm_up_hero.prototype.hids = $util.emptyArray;

    pbreq_gvm_up_hero.create = function create(properties) {
        return new pbreq_gvm_up_hero(properties);
    };

    pbreq_gvm_up_hero.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.hids != null && m.hids.length) {
            for (var i = 0; i < m.hids.length; ++i)
                w.uint32(8).int32(m.hids[i]);
        }
        return w;
    };

    pbreq_gvm_up_hero.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_gvm_up_hero();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.hids && m.hids.length))
                        m.hids = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.hids.push(r.int32());
                    } else
                        m.hids.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pbreq_gvm_up_hero.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_gvm_up_hero";
    };

    return pbreq_gvm_up_hero;
})();

$root.pbrsp_gvm_up_hero = (function() {

    function pbrsp_gvm_up_hero(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_gvm_up_hero.prototype.status = 0;

    pbrsp_gvm_up_hero.create = function create(properties) {
        return new pbrsp_gvm_up_hero(properties);
    };

    pbrsp_gvm_up_hero.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        return w;
    };

    pbrsp_gvm_up_hero.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_gvm_up_hero();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_gvm_up_hero.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_gvm_up_hero";
    };

    return pbrsp_gvm_up_hero;
})();

$root.pbreq_gvm_rank = (function() {

    function pbreq_gvm_rank(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_gvm_rank.prototype.type = 0;

    pbreq_gvm_rank.create = function create(properties) {
        return new pbreq_gvm_rank(properties);
    };

    pbreq_gvm_rank.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(8).int32(m.type);
        return w;
    };

    pbreq_gvm_rank.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_gvm_rank();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.type = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pbreq_gvm_rank.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_gvm_rank";
    };

    return pbreq_gvm_rank;
})();

$root.pbrsp_gvm_rank = (function() {

    function pbrsp_gvm_rank(p) {
        this.guds = [];
        this.mbrs = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_gvm_rank.prototype.status = 0;
    pbrsp_gvm_rank.prototype.guds = $util.emptyArray;
    pbrsp_gvm_rank.prototype.mbrs = $util.emptyArray;
    pbrsp_gvm_rank.prototype.rankSelf = 0;
    pbrsp_gvm_rank.prototype.scoreSelf = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    pbrsp_gvm_rank.create = function create(properties) {
        return new pbrsp_gvm_rank(properties);
    };

    pbrsp_gvm_rank.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        if (m.guds != null && m.guds.length) {
            for (var i = 0; i < m.guds.length; ++i)
                $root.pb_gvm_rank.encode(m.guds[i], w.uint32(18).fork()).ldelim();
        }
        if (m.mbrs != null && m.mbrs.length) {
            for (var i = 0; i < m.mbrs.length; ++i)
                $root.pb_gvm_mbr.encode(m.mbrs[i], w.uint32(26).fork()).ldelim();
        }
        if (m.rankSelf != null && Object.hasOwnProperty.call(m, "rankSelf"))
            w.uint32(32).int32(m.rankSelf);
        if (m.scoreSelf != null && Object.hasOwnProperty.call(m, "scoreSelf"))
            w.uint32(40).int64(m.scoreSelf);
        return w;
    };

    pbrsp_gvm_rank.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_gvm_rank();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            case 2: {
                    if (!(m.guds && m.guds.length))
                        m.guds = [];
                    m.guds.push($root.pb_gvm_rank.decode(r, r.uint32()));
                    break;
                }
            case 3: {
                    if (!(m.mbrs && m.mbrs.length))
                        m.mbrs = [];
                    m.mbrs.push($root.pb_gvm_mbr.decode(r, r.uint32()));
                    break;
                }
            case 4: {
                    m.rankSelf = r.int32();
                    break;
                }
            case 5: {
                    m.scoreSelf = r.int64();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_gvm_rank.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_gvm_rank";
    };

    return pbrsp_gvm_rank;
})();

$root.pbreq_gvm_reset_map = (function() {

    function pbreq_gvm_reset_map(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_gvm_reset_map.create = function create(properties) {
        return new pbreq_gvm_reset_map(properties);
    };

    pbreq_gvm_reset_map.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    pbreq_gvm_reset_map.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_gvm_reset_map();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pbreq_gvm_reset_map.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_gvm_reset_map";
    };

    return pbreq_gvm_reset_map;
})();

$root.pbrsp_gvm_reset_map = (function() {

    function pbrsp_gvm_reset_map(p) {
        this.nodes = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_gvm_reset_map.prototype.status = 0;
    pbrsp_gvm_reset_map.prototype.nodes = $util.emptyArray;

    pbrsp_gvm_reset_map.create = function create(properties) {
        return new pbrsp_gvm_reset_map(properties);
    };

    pbrsp_gvm_reset_map.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        if (m.nodes != null && m.nodes.length) {
            for (var i = 0; i < m.nodes.length; ++i)
                $root.pb_gvm_map_node.encode(m.nodes[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    pbrsp_gvm_reset_map.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_gvm_reset_map();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            case 2: {
                    if (!(m.nodes && m.nodes.length))
                        m.nodes = [];
                    m.nodes.push($root.pb_gvm_map_node.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_gvm_reset_map.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_gvm_reset_map";
    };

    return pbrsp_gvm_reset_map;
})();

$root.pbreq_trial = (function() {

    function pbreq_trial(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_trial.create = function create(properties) {
        return new pbreq_trial(properties);
    };

    pbreq_trial.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    pbreq_trial.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_trial();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pbreq_trial.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_trial";
    };

    return pbreq_trial;
})();

$root.pbrsp_trial = (function() {

    function pbrsp_trial(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_trial.prototype.status = 0;
    pbrsp_trial.prototype.id = 0;
    pbrsp_trial.prototype.tl = 0;
    pbrsp_trial.prototype.cd = 0;

    pbrsp_trial.create = function create(properties) {
        return new pbrsp_trial(properties);
    };

    pbrsp_trial.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        w.uint32(16).int32(m.id);
        w.uint32(24).int32(m.tl);
        w.uint32(32).int32(m.cd);
        return w;
    };

    pbrsp_trial.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_trial();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            case 2: {
                    m.id = r.int32();
                    break;
                }
            case 3: {
                    m.tl = r.int32();
                    break;
                }
            case 4: {
                    m.cd = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("tl"))
            throw $util.ProtocolError("missing required 'tl'", { instance: m });
        if (!m.hasOwnProperty("cd"))
            throw $util.ProtocolError("missing required 'cd'", { instance: m });
        return m;
    };

    pbrsp_trial.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_trial";
    };

    return pbrsp_trial;
})();

$root.pbreq_trial_rank = (function() {

    function pbreq_trial_rank(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_trial_rank.create = function create(properties) {
        return new pbreq_trial_rank(properties);
    };

    pbreq_trial_rank.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    pbreq_trial_rank.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_trial_rank();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pbreq_trial_rank.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_trial_rank";
    };

    return pbreq_trial_rank;
})();

$root.pbrsp_trial_rank = (function() {

    function pbrsp_trial_rank(p) {
        this.rank = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_trial_rank.prototype.rank = $util.emptyArray;

    pbrsp_trial_rank.create = function create(properties) {
        return new pbrsp_trial_rank(properties);
    };

    pbrsp_trial_rank.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.rank != null && m.rank.length) {
            for (var i = 0; i < m.rank.length; ++i)
                $root.pb_trial.encode(m.rank[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    pbrsp_trial_rank.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_trial_rank();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.rank && m.rank.length))
                        m.rank = [];
                    m.rank.push($root.pb_trial.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pbrsp_trial_rank.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_trial_rank";
    };

    return pbrsp_trial_rank;
})();

$root.pbreq_trial_fight = (function() {

    function pbreq_trial_fight(p) {
        this.camp = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_trial_fight.prototype.camp = $util.emptyArray;
    pbreq_trial_fight.prototype.tid = 0;

    pbreq_trial_fight.create = function create(properties) {
        return new pbreq_trial_fight(properties);
    };

    pbreq_trial_fight.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.camp != null && m.camp.length) {
            for (var i = 0; i < m.camp.length; ++i)
                $root.pb_unit.encode(m.camp[i], w.uint32(10).fork()).ldelim();
        }
        if (m.tid != null && Object.hasOwnProperty.call(m, "tid"))
            w.uint32(16).int32(m.tid);
        return w;
    };

    pbreq_trial_fight.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_trial_fight();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.camp && m.camp.length))
                        m.camp = [];
                    m.camp.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            case 2: {
                    m.tid = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pbreq_trial_fight.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_trial_fight";
    };

    return pbreq_trial_fight;
})();

$root.pbrsp_trial_fight = (function() {

    function pbrsp_trial_fight(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_trial_fight.prototype.status = 0;
    pbrsp_trial_fight.prototype.video = null;

    pbrsp_trial_fight.create = function create(properties) {
        return new pbrsp_trial_fight(properties);
    };

    pbrsp_trial_fight.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        if (m.video != null && Object.hasOwnProperty.call(m, "video"))
            $root.pb_evideo.encode(m.video, w.uint32(18).fork()).ldelim();
        return w;
    };

    pbrsp_trial_fight.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_trial_fight();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            case 2: {
                    m.video = $root.pb_evideo.decode(r, r.uint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_trial_fight.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_trial_fight";
    };

    return pbrsp_trial_fight;
})();

$root.pbreq_trial_video = (function() {

    function pbreq_trial_video(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_trial_video.create = function create(properties) {
        return new pbreq_trial_video(properties);
    };

    pbreq_trial_video.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    pbreq_trial_video.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_trial_video();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pbreq_trial_video.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_trial_video";
    };

    return pbreq_trial_video;
})();

$root.pbrsp_trial_video = (function() {

    function pbrsp_trial_video(p) {
        this.videos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_trial_video.prototype.status = 0;
    pbrsp_trial_video.prototype.videos = $util.emptyArray;

    pbrsp_trial_video.create = function create(properties) {
        return new pbrsp_trial_video(properties);
    };

    pbrsp_trial_video.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        if (m.videos != null && m.videos.length) {
            for (var i = 0; i < m.videos.length; ++i)
                $root.pb_trial.encode(m.videos[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    pbrsp_trial_video.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_trial_video();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            case 2: {
                    if (!(m.videos && m.videos.length))
                        m.videos = [];
                    m.videos.push($root.pb_trial.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_trial_video.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_trial_video";
    };

    return pbrsp_trial_video;
})();

$root.pbreq_trial_tl = (function() {

    function pbreq_trial_tl(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_trial_tl.prototype.num = 0;

    pbreq_trial_tl.create = function create(properties) {
        return new pbreq_trial_tl(properties);
    };

    pbreq_trial_tl.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.num);
        return w;
    };

    pbreq_trial_tl.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_trial_tl();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.num = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("num"))
            throw $util.ProtocolError("missing required 'num'", { instance: m });
        return m;
    };

    pbreq_trial_tl.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_trial_tl";
    };

    return pbreq_trial_tl;
})();

$root.pbrsp_trial_tl = (function() {

    function pbrsp_trial_tl(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_trial_tl.prototype.status = 0;

    pbrsp_trial_tl.create = function create(properties) {
        return new pbrsp_trial_tl(properties);
    };

    pbrsp_trial_tl.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(16).sint32(m.status);
        return w;
    };

    pbrsp_trial_tl.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_trial_tl();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 2: {
                    m.status = r.sint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_trial_tl.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_trial_tl";
    };

    return pbrsp_trial_tl;
})();

$root.pbreq_dream_fight = (function() {

    function pbreq_dream_fight(p) {
        this.camp = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_dream_fight.prototype.id = 0;
    pbreq_dream_fight.prototype.camp = $util.emptyArray;
    pbreq_dream_fight.prototype.tid = 0;

    pbreq_dream_fight.create = function create(properties) {
        return new pbreq_dream_fight(properties);
    };

    pbreq_dream_fight.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        if (m.camp != null && m.camp.length) {
            for (var i = 0; i < m.camp.length; ++i)
                $root.pb_unit.encode(m.camp[i], w.uint32(18).fork()).ldelim();
        }
        if (m.tid != null && Object.hasOwnProperty.call(m, "tid"))
            w.uint32(24).int32(m.tid);
        return w;
    };

    pbreq_dream_fight.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_dream_fight();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    if (!(m.camp && m.camp.length))
                        m.camp = [];
                    m.camp.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            case 3: {
                    m.tid = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    pbreq_dream_fight.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_dream_fight";
    };

    return pbreq_dream_fight;
})();

$root.pbrsp_dream_fight = (function() {

    function pbrsp_dream_fight(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_dream_fight.prototype.status = 0;
    pbrsp_dream_fight.prototype.video = null;

    pbrsp_dream_fight.create = function create(properties) {
        return new pbrsp_dream_fight(properties);
    };

    pbrsp_dream_fight.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        if (m.video != null && Object.hasOwnProperty.call(m, "video"))
            $root.pb_evideo.encode(m.video, w.uint32(18).fork()).ldelim();
        return w;
    };

    pbrsp_dream_fight.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_dream_fight();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            case 2: {
                    m.video = $root.pb_evideo.decode(r, r.uint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_dream_fight.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_dream_fight";
    };

    return pbrsp_dream_fight;
})();

$root.pbreq_dream_rank = (function() {

    function pbreq_dream_rank(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_dream_rank.create = function create(properties) {
        return new pbreq_dream_rank(properties);
    };

    pbreq_dream_rank.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    pbreq_dream_rank.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_dream_rank();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pbreq_dream_rank.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_dream_rank";
    };

    return pbreq_dream_rank;
})();

$root.pbrsp_dream_rank = (function() {

    function pbrsp_dream_rank(p) {
        this.rank = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_dream_rank.prototype.status = 0;
    pbrsp_dream_rank.prototype.rank = $util.emptyArray;

    pbrsp_dream_rank.create = function create(properties) {
        return new pbrsp_dream_rank(properties);
    };

    pbrsp_dream_rank.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        if (m.rank != null && m.rank.length) {
            for (var i = 0; i < m.rank.length; ++i)
                $root.pb_trial.encode(m.rank[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    pbrsp_dream_rank.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_dream_rank();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            case 2: {
                    if (!(m.rank && m.rank.length))
                        m.rank = [];
                    m.rank.push($root.pb_trial.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_dream_rank.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_dream_rank";
    };

    return pbrsp_dream_rank;
})();

$root.pbreq_dream_diff = (function() {

    function pbreq_dream_diff(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_dream_diff.prototype.diff = 0;

    pbreq_dream_diff.create = function create(properties) {
        return new pbreq_dream_diff(properties);
    };

    pbreq_dream_diff.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.diff);
        return w;
    };

    pbreq_dream_diff.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_dream_diff();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.diff = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("diff"))
            throw $util.ProtocolError("missing required 'diff'", { instance: m });
        return m;
    };

    pbreq_dream_diff.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_dream_diff";
    };

    return pbreq_dream_diff;
})();

$root.pbrsp_dream_diff = (function() {

    function pbrsp_dream_diff(p) {
        this.monsters = [];
        this.bufs = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_dream_diff.prototype.status = 0;
    pbrsp_dream_diff.prototype.monsters = $util.emptyArray;
    pbrsp_dream_diff.prototype.bufs = $util.emptyArray;

    pbrsp_dream_diff.create = function create(properties) {
        return new pbrsp_dream_diff(properties);
    };

    pbrsp_dream_diff.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        if (m.monsters != null && m.monsters.length) {
            for (var i = 0; i < m.monsters.length; ++i)
                w.uint32(24).int32(m.monsters[i]);
        }
        if (m.bufs != null && m.bufs.length) {
            for (var i = 0; i < m.bufs.length; ++i)
                $root.pb_kv.encode(m.bufs[i], w.uint32(34).fork()).ldelim();
        }
        return w;
    };

    pbrsp_dream_diff.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_dream_diff();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            case 3: {
                    if (!(m.monsters && m.monsters.length))
                        m.monsters = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.monsters.push(r.int32());
                    } else
                        m.monsters.push(r.int32());
                    break;
                }
            case 4: {
                    if (!(m.bufs && m.bufs.length))
                        m.bufs = [];
                    m.bufs.push($root.pb_kv.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_dream_diff.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_dream_diff";
    };

    return pbrsp_dream_diff;
})();

$root.pbreq_dream_reward = (function() {

    function pbreq_dream_reward(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_dream_reward.create = function create(properties) {
        return new pbreq_dream_reward(properties);
    };

    pbreq_dream_reward.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    pbreq_dream_reward.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_dream_reward();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pbreq_dream_reward.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_dream_reward";
    };

    return pbreq_dream_reward;
})();

$root.pbrsp_dream_reward = (function() {

    function pbrsp_dream_reward(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbrsp_dream_reward.prototype.status = 0;
    pbrsp_dream_reward.prototype.reward = null;

    pbrsp_dream_reward.create = function create(properties) {
        return new pbrsp_dream_reward(properties);
    };

    pbrsp_dream_reward.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        if (m.reward != null && Object.hasOwnProperty.call(m, "reward"))
            $root.pb_bag.encode(m.reward, w.uint32(18).fork()).ldelim();
        return w;
    };

    pbrsp_dream_reward.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbrsp_dream_reward();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            case 2: {
                    m.reward = $root.pb_bag.decode(r, r.uint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pbrsp_dream_reward.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbrsp_dream_reward";
    };

    return pbrsp_dream_reward;
})();

$root.pbreq_dream_buy = (function() {

    function pbreq_dream_buy(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pbreq_dream_buy.prototype.num = 0;

    pbreq_dream_buy.create = function create(properties) {
        return new pbreq_dream_buy(properties);
    };

    pbreq_dream_buy.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.num);
        return w;
    };

    pbreq_dream_buy.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pbreq_dream_buy();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.num = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("num"))
            throw $util.ProtocolError("missing required 'num'", { instance: m });
        return m;
    };

    pbreq_dream_buy.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pbreq_dream_buy";
    };

    return pbreq_dream_buy;
})();

$root.pb_player = (function() {

    function pb_player(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_player.prototype.name = "";
    pb_player.prototype.logo = 0;
    pb_player.prototype.gid = 0;
    pb_player.prototype.gname = "";
    pb_player.prototype.border = 0;
    pb_player.prototype.glv = 0;
    pb_player.prototype.country = "";
    pb_player.prototype.sds = "";
    pb_player.prototype.city = "";

    pb_player.create = function create(properties) {
        return new pb_player(properties);
    };

    pb_player.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.name);
        w.uint32(16).int32(m.logo);
        if (m.gid != null && Object.hasOwnProperty.call(m, "gid"))
            w.uint32(24).int32(m.gid);
        if (m.gname != null && Object.hasOwnProperty.call(m, "gname"))
            w.uint32(34).string(m.gname);
        if (m.border != null && Object.hasOwnProperty.call(m, "border"))
            w.uint32(40).int32(m.border);
        if (m.glv != null && Object.hasOwnProperty.call(m, "glv"))
            w.uint32(48).int32(m.glv);
        if (m.country != null && Object.hasOwnProperty.call(m, "country"))
            w.uint32(58).string(m.country);
        if (m.sds != null && Object.hasOwnProperty.call(m, "sds"))
            w.uint32(66).string(m.sds);
        if (m.city != null && Object.hasOwnProperty.call(m, "city"))
            w.uint32(74).string(m.city);
        return w;
    };

    pb_player.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_player();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.name = r.string();
                    break;
                }
            case 2: {
                    m.logo = r.int32();
                    break;
                }
            case 3: {
                    m.gid = r.int32();
                    break;
                }
            case 4: {
                    m.gname = r.string();
                    break;
                }
            case 5: {
                    m.border = r.int32();
                    break;
                }
            case 6: {
                    m.glv = r.int32();
                    break;
                }
            case 7: {
                    m.country = r.string();
                    break;
                }
            case 8: {
                    m.sds = r.string();
                    break;
                }
            case 9: {
                    m.city = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("logo"))
            throw $util.ProtocolError("missing required 'logo'", { instance: m });
        return m;
    };

    pb_player.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_player";
    };

    return pb_player;
})();

$root.pb_server = (function() {

    function pb_server(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_server.prototype.sid = 0;
    pb_server.prototype.sname = "";
    pb_server.prototype.pname = "";
    pb_server.prototype.plogo = 0;
    pb_server.prototype.plv = 0;
    pb_server.prototype.flag = 0;
    pb_server.prototype.uid = 0;
    pb_server.prototype.border = 0;

    pb_server.create = function create(properties) {
        return new pb_server(properties);
    };

    pb_server.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.sid);
        w.uint32(18).string(m.sname);
        if (m.pname != null && Object.hasOwnProperty.call(m, "pname"))
            w.uint32(26).string(m.pname);
        if (m.plogo != null && Object.hasOwnProperty.call(m, "plogo"))
            w.uint32(32).int32(m.plogo);
        if (m.plv != null && Object.hasOwnProperty.call(m, "plv"))
            w.uint32(40).int32(m.plv);
        if (m.flag != null && Object.hasOwnProperty.call(m, "flag"))
            w.uint32(48).int32(m.flag);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(56).int32(m.uid);
        if (m.border != null && Object.hasOwnProperty.call(m, "border"))
            w.uint32(64).int32(m.border);
        return w;
    };

    pb_server.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_server();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.sid = r.int32();
                    break;
                }
            case 2: {
                    m.sname = r.string();
                    break;
                }
            case 3: {
                    m.pname = r.string();
                    break;
                }
            case 4: {
                    m.plogo = r.int32();
                    break;
                }
            case 5: {
                    m.plv = r.int32();
                    break;
                }
            case 6: {
                    m.flag = r.int32();
                    break;
                }
            case 7: {
                    m.uid = r.int32();
                    break;
                }
            case 8: {
                    m.border = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("sid"))
            throw $util.ProtocolError("missing required 'sid'", { instance: m });
        if (!m.hasOwnProperty("sname"))
            throw $util.ProtocolError("missing required 'sname'", { instance: m });
        return m;
    };

    pb_server.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_server";
    };

    return pb_server;
})();

$root.pb_item = (function() {

    function pb_item(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_item.prototype.id = 0;
    pb_item.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    pb_item.create = function create(properties) {
        return new pb_item(properties);
    };

    pb_item.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).int64(m.num);
        return w;
    };

    pb_item.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_item();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.num = r.int64();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("num"))
            throw $util.ProtocolError("missing required 'num'", { instance: m });
        return m;
    };

    pb_item.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_item";
    };

    return pb_item;
})();

$root.pb_equip = (function() {

    function pb_equip(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_equip.prototype.id = 0;
    pb_equip.prototype.num = 0;
    pb_equip.prototype.eid = 0;
    pb_equip.prototype.hid = 0;

    pb_equip.create = function create(properties) {
        return new pb_equip(properties);
    };

    pb_equip.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).uint32(m.num);
        if (m.eid != null && Object.hasOwnProperty.call(m, "eid"))
            w.uint32(24).int32(m.eid);
        if (m.hid != null && Object.hasOwnProperty.call(m, "hid"))
            w.uint32(32).int32(m.hid);
        return w;
    };

    pb_equip.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_equip();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.num = r.uint32();
                    break;
                }
            case 3: {
                    m.eid = r.int32();
                    break;
                }
            case 4: {
                    m.hid = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("num"))
            throw $util.ProtocolError("missing required 'num'", { instance: m });
        return m;
    };

    pb_equip.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_equip";
    };

    return pb_equip;
})();

$root.pb_bag = (function() {

    function pb_bag(p) {
        this.items = [];
        this.equips = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_bag.prototype.items = $util.emptyArray;
    pb_bag.prototype.equips = $util.emptyArray;

    pb_bag.create = function create(properties) {
        return new pb_bag(properties);
    };

    pb_bag.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.items != null && m.items.length) {
            for (var i = 0; i < m.items.length; ++i)
                $root.pb_item.encode(m.items[i], w.uint32(10).fork()).ldelim();
        }
        if (m.equips != null && m.equips.length) {
            for (var i = 0; i < m.equips.length; ++i)
                $root.pb_equip.encode(m.equips[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    pb_bag.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_bag();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.items && m.items.length))
                        m.items = [];
                    m.items.push($root.pb_item.decode(r, r.uint32()));
                    break;
                }
            case 2: {
                    if (!(m.equips && m.equips.length))
                        m.equips = [];
                    m.equips.push($root.pb_equip.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_bag.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_bag";
    };

    return pb_bag;
})();

$root.pb_hero_qlc = (function() {

    function pb_hero_qlc(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_hero_qlc.prototype.lv = 0;
    pb_hero_qlc.prototype.atk = 0;
    pb_hero_qlc.prototype.hp = 0;
    pb_hero_qlc.prototype.spd = 0;
    pb_hero_qlc.prototype.attrIdx = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_hero_qlc.prototype.time = 0;
    pb_hero_qlc.prototype.cd = 0;

    pb_hero_qlc.create = function create(properties) {
        return new pb_hero_qlc(properties);
    };

    pb_hero_qlc.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(8).int32(m.lv);
        if (m.atk != null && Object.hasOwnProperty.call(m, "atk"))
            w.uint32(16).int32(m.atk);
        if (m.hp != null && Object.hasOwnProperty.call(m, "hp"))
            w.uint32(24).int32(m.hp);
        if (m.spd != null && Object.hasOwnProperty.call(m, "spd"))
            w.uint32(32).int32(m.spd);
        if (m.attrIdx != null && Object.hasOwnProperty.call(m, "attrIdx"))
            w.uint32(40).int64(m.attrIdx);
        if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            w.uint32(48).int32(m.time);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(56).int32(m.cd);
        return w;
    };

    pb_hero_qlc.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_hero_qlc();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.lv = r.int32();
                    break;
                }
            case 2: {
                    m.atk = r.int32();
                    break;
                }
            case 3: {
                    m.hp = r.int32();
                    break;
                }
            case 4: {
                    m.spd = r.int32();
                    break;
                }
            case 5: {
                    m.attrIdx = r.int64();
                    break;
                }
            case 6: {
                    m.time = r.int32();
                    break;
                }
            case 7: {
                    m.cd = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_hero_qlc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_hero_qlc";
    };

    return pb_hero_qlc;
})();

$root.pb_hero_qlt = (function() {

    function pb_hero_qlt(p) {
        this.qlcs = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_hero_qlt.prototype.qlc = null;
    pb_hero_qlt.prototype.qlcs = $util.emptyArray;
    pb_hero_qlt.prototype.attrIdx = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    pb_hero_qlt.create = function create(properties) {
        return new pb_hero_qlt(properties);
    };

    pb_hero_qlt.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.qlc != null && Object.hasOwnProperty.call(m, "qlc"))
            $root.pb_hero_qlc.encode(m.qlc, w.uint32(10).fork()).ldelim();
        if (m.qlcs != null && m.qlcs.length) {
            for (var i = 0; i < m.qlcs.length; ++i)
                $root.pb_hero_qlc.encode(m.qlcs[i], w.uint32(18).fork()).ldelim();
        }
        if (m.attrIdx != null && Object.hasOwnProperty.call(m, "attrIdx"))
            w.uint32(24).int64(m.attrIdx);
        return w;
    };

    pb_hero_qlt.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_hero_qlt();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.qlc = $root.pb_hero_qlc.decode(r, r.uint32());
                    break;
                }
            case 2: {
                    if (!(m.qlcs && m.qlcs.length))
                        m.qlcs = [];
                    m.qlcs.push($root.pb_hero_qlc.decode(r, r.uint32()));
                    break;
                }
            case 3: {
                    m.attrIdx = r.int64();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_hero_qlt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_hero_qlt";
    };

    return pb_hero_qlt;
})();

$root.pb_tree = (function() {

    function pb_tree(p) {
        this.bra = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_tree.prototype.lv = 0;
    pb_tree.prototype.blv = 0;
    pb_tree.prototype.bra = $util.emptyArray;

    pb_tree.create = function create(properties) {
        return new pb_tree(properties);
    };

    pb_tree.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(8).int32(m.lv);
        if (m.blv != null && Object.hasOwnProperty.call(m, "blv"))
            w.uint32(16).int32(m.blv);
        if (m.bra != null && m.bra.length) {
            for (var i = 0; i < m.bra.length; ++i)
                w.uint32(24).int32(m.bra[i]);
        }
        return w;
    };

    pb_tree.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_tree();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.lv = r.int32();
                    break;
                }
            case 2: {
                    m.blv = r.int32();
                    break;
                }
            case 3: {
                    if (!(m.bra && m.bra.length))
                        m.bra = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.bra.push(r.int32());
                    } else
                        m.bra.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_tree.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_tree";
    };

    return pb_tree;
})();

$root.pb_hero = (function() {

    function pb_hero(p) {
        this.equips = [];
        this.jade = [];
        this.skillId = [];
        this.sattrs = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_hero.prototype.hid = 0;
    pb_hero.prototype.id = 0;
    pb_hero.prototype.lv = 0;
    pb_hero.prototype.star = 0;
    pb_hero.prototype.flag = 0;
    pb_hero.prototype.equips = $util.emptyArray;
    pb_hero.prototype.wake = 0;
    pb_hero.prototype.jade = $util.emptyArray;
    pb_hero.prototype.visit = false;
    pb_hero.prototype.skillId = $util.emptyArray;
    pb_hero.prototype.sattrs = $util.emptyArray;
    pb_hero.prototype.qlt = null;
    pb_hero.prototype.tree = null;

    pb_hero.create = function create(properties) {
        return new pb_hero(properties);
    };

    pb_hero.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.hid);
        w.uint32(16).int32(m.id);
        w.uint32(24).int32(m.lv);
        w.uint32(32).int32(m.star);
        if (m.flag != null && Object.hasOwnProperty.call(m, "flag"))
            w.uint32(40).int32(m.flag);
        if (m.equips != null && m.equips.length) {
            for (var i = 0; i < m.equips.length; ++i)
                $root.pb_equip.encode(m.equips[i], w.uint32(50).fork()).ldelim();
        }
        if (m.wake != null && Object.hasOwnProperty.call(m, "wake"))
            w.uint32(56).int32(m.wake);
        if (m.jade != null && m.jade.length) {
            for (var i = 0; i < m.jade.length; ++i)
                w.uint32(64).int32(m.jade[i]);
        }
        if (m.visit != null && Object.hasOwnProperty.call(m, "visit"))
            w.uint32(72).bool(m.visit);
        if (m.skillId != null && m.skillId.length) {
            for (var i = 0; i < m.skillId.length; ++i)
                w.uint32(80).int32(m.skillId[i]);
        }
        if (m.sattrs != null && m.sattrs.length) {
            for (var i = 0; i < m.sattrs.length; ++i)
                $root.pb_sattr.encode(m.sattrs[i], w.uint32(90).fork()).ldelim();
        }
        if (m.qlt != null && Object.hasOwnProperty.call(m, "qlt"))
            $root.pb_hero_qlt.encode(m.qlt, w.uint32(98).fork()).ldelim();
        if (m.tree != null && Object.hasOwnProperty.call(m, "tree"))
            $root.pb_tree.encode(m.tree, w.uint32(106).fork()).ldelim();
        return w;
    };

    pb_hero.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_hero();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.hid = r.int32();
                    break;
                }
            case 2: {
                    m.id = r.int32();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.star = r.int32();
                    break;
                }
            case 5: {
                    m.flag = r.int32();
                    break;
                }
            case 6: {
                    if (!(m.equips && m.equips.length))
                        m.equips = [];
                    m.equips.push($root.pb_equip.decode(r, r.uint32()));
                    break;
                }
            case 7: {
                    m.wake = r.int32();
                    break;
                }
            case 8: {
                    if (!(m.jade && m.jade.length))
                        m.jade = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.jade.push(r.int32());
                    } else
                        m.jade.push(r.int32());
                    break;
                }
            case 9: {
                    m.visit = r.bool();
                    break;
                }
            case 10: {
                    if (!(m.skillId && m.skillId.length))
                        m.skillId = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.skillId.push(r.int32());
                    } else
                        m.skillId.push(r.int32());
                    break;
                }
            case 11: {
                    if (!(m.sattrs && m.sattrs.length))
                        m.sattrs = [];
                    m.sattrs.push($root.pb_sattr.decode(r, r.uint32()));
                    break;
                }
            case 12: {
                    m.qlt = $root.pb_hero_qlt.decode(r, r.uint32());
                    break;
                }
            case 13: {
                    m.tree = $root.pb_tree.decode(r, r.uint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("hid"))
            throw $util.ProtocolError("missing required 'hid'", { instance: m });
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("lv"))
            throw $util.ProtocolError("missing required 'lv'", { instance: m });
        if (!m.hasOwnProperty("star"))
            throw $util.ProtocolError("missing required 'star'", { instance: m });
        return m;
    };

    pb_hero.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_hero";
    };

    return pb_hero;
})();

$root.pb_sattr = (function() {

    function pb_sattr(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_sattr.prototype.id = 0;
    pb_sattr.prototype.attr = 0;
    pb_sattr.prototype.value = 0;

    pb_sattr.create = function create(properties) {
        return new pb_sattr(properties);
    };

    pb_sattr.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.attr != null && Object.hasOwnProperty.call(m, "attr"))
            w.uint32(16).int32(m.attr);
        if (m.value != null && Object.hasOwnProperty.call(m, "value"))
            w.uint32(24).int32(m.value);
        return w;
    };

    pb_sattr.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_sattr();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.attr = r.int32();
                    break;
                }
            case 3: {
                    m.value = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_sattr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_sattr";
    };

    return pb_sattr;
})();

$root.pb_dup = (function() {

    function pb_dup(p) {
        this.bids = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_dup.prototype.id = 0;
    pb_dup.prototype.bids = $util.emptyArray;
    pb_dup.prototype.sts = 0;
    pb_dup.prototype.mid = 0;
    pb_dup.prototype.rid = 0;
    pb_dup.prototype.skip = 0;

    pb_dup.create = function create(properties) {
        return new pb_dup(properties);
    };

    pb_dup.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.bids != null && m.bids.length) {
            for (var i = 0; i < m.bids.length; ++i)
                w.uint32(16).int32(m.bids[i]);
        }
        if (m.sts != null && Object.hasOwnProperty.call(m, "sts"))
            w.uint32(24).int32(m.sts);
        if (m.mid != null && Object.hasOwnProperty.call(m, "mid"))
            w.uint32(32).int32(m.mid);
        if (m.rid != null && Object.hasOwnProperty.call(m, "rid"))
            w.uint32(40).int32(m.rid);
        if (m.skip != null && Object.hasOwnProperty.call(m, "skip"))
            w.uint32(48).int32(m.skip);
        return w;
    };

    pb_dup.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_dup();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    if (!(m.bids && m.bids.length))
                        m.bids = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.bids.push(r.int32());
                    } else
                        m.bids.push(r.int32());
                    break;
                }
            case 3: {
                    m.sts = r.int32();
                    break;
                }
            case 4: {
                    m.mid = r.int32();
                    break;
                }
            case 5: {
                    m.rid = r.int32();
                    break;
                }
            case 6: {
                    m.skip = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_dup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_dup";
    };

    return pb_dup;
})();

$root.pb_embr = (function() {

    function pb_embr(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_embr.prototype.uid = 0;
    pb_embr.prototype.lv = 0;
    pb_embr.prototype.status = 0;
    pb_embr.prototype.stime = "";
    pb_embr.prototype.logo = 0;
    pb_embr.prototype.name = "";
    pb_embr.prototype.border = 0;
    pb_embr.prototype.id = 0;

    pb_embr.create = function create(properties) {
        return new pb_embr(properties);
    };

    pb_embr.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(8).int32(m.uid);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(16).int32(m.lv);
        if (m.status != null && Object.hasOwnProperty.call(m, "status"))
            w.uint32(24).int32(m.status);
        if (m.stime != null && Object.hasOwnProperty.call(m, "stime"))
            w.uint32(34).string(m.stime);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(40).int32(m.logo);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(50).string(m.name);
        if (m.border != null && Object.hasOwnProperty.call(m, "border"))
            w.uint32(56).int32(m.border);
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(64).int32(m.id);
        return w;
    };

    pb_embr.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_embr();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.uid = r.int32();
                    break;
                }
            case 2: {
                    m.lv = r.int32();
                    break;
                }
            case 3: {
                    m.status = r.int32();
                    break;
                }
            case 4: {
                    m.stime = r.string();
                    break;
                }
            case 5: {
                    m.logo = r.int32();
                    break;
                }
            case 6: {
                    m.name = r.string();
                    break;
                }
            case 7: {
                    m.border = r.int32();
                    break;
                }
            case 8: {
                    m.id = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_embr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_embr";
    };

    return pb_embr;
})();

$root.pb_scell = (function() {

    function pb_scell(p) {
        this.ids1 = [];
        this.ids2 = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_scell.prototype.pos = 0;
    pb_scell.prototype.status = 0;
    pb_scell.prototype.id = 0;
    pb_scell.prototype.ids1 = $util.emptyArray;
    pb_scell.prototype.ids2 = $util.emptyArray;

    pb_scell.create = function create(properties) {
        return new pb_scell(properties);
    };

    pb_scell.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.pos != null && Object.hasOwnProperty.call(m, "pos"))
            w.uint32(8).int32(m.pos);
        if (m.status != null && Object.hasOwnProperty.call(m, "status"))
            w.uint32(16).int32(m.status);
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(24).int32(m.id);
        if (m.ids1 != null && m.ids1.length) {
            for (var i = 0; i < m.ids1.length; ++i)
                w.uint32(32).int32(m.ids1[i]);
        }
        if (m.ids2 != null && m.ids2.length) {
            for (var i = 0; i < m.ids2.length; ++i)
                w.uint32(40).int32(m.ids2[i]);
        }
        return w;
    };

    pb_scell.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_scell();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.pos = r.int32();
                    break;
                }
            case 2: {
                    m.status = r.int32();
                    break;
                }
            case 3: {
                    m.id = r.int32();
                    break;
                }
            case 4: {
                    if (!(m.ids1 && m.ids1.length))
                        m.ids1 = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.ids1.push(r.int32());
                    } else
                        m.ids1.push(r.int32());
                    break;
                }
            case 5: {
                    if (!(m.ids2 && m.ids2.length))
                        m.ids2 = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.ids2.push(r.int32());
                    } else
                        m.ids2.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_scell.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_scell";
    };

    return pb_scell;
})();

$root.pb_sbuilding = (function() {

    function pb_sbuilding(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_sbuilding.prototype.lv = 0;
    pb_sbuilding.prototype.cd = 0;
    pb_sbuilding.prototype.num = 0;

    pb_sbuilding.create = function create(properties) {
        return new pb_sbuilding(properties);
    };

    pb_sbuilding.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(8).sint32(m.lv);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(16).sint32(m.cd);
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(24).sint32(m.num);
        return w;
    };

    pb_sbuilding.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_sbuilding();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.lv = r.sint32();
                    break;
                }
            case 2: {
                    m.cd = r.sint32();
                    break;
                }
            case 3: {
                    m.num = r.sint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_sbuilding.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_sbuilding";
    };

    return pb_sbuilding;
})();

$root.pb_sscell = (function() {

    function pb_sscell(p) {
        this.bossHp = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_sscell.prototype.pos = 0;
    pb_sscell.prototype.status = 0;
    pb_sscell.prototype.id = 0;
    pb_sscell.prototype.bossId = 0;
    pb_sscell.prototype.bossHp = $util.emptyArray;
    pb_sscell.prototype.mbr = null;
    pb_sscell.prototype.hid = 0;
    pb_sscell.prototype.cd = 0;
    pb_sscell.prototype.lv = 0;
    pb_sscell.prototype.add = 0;
    pb_sscell.prototype.times = 0;
    pb_sscell.prototype.rid = 0;
    pb_sscell.prototype.wake = 0;
    pb_sscell.prototype.rlv = 0;
    pb_sscell.prototype.rqlv = 0;

    pb_sscell.create = function create(properties) {
        return new pb_sscell(properties);
    };

    pb_sscell.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.pos != null && Object.hasOwnProperty.call(m, "pos"))
            w.uint32(8).int32(m.pos);
        if (m.status != null && Object.hasOwnProperty.call(m, "status"))
            w.uint32(16).int32(m.status);
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(24).int32(m.id);
        if (m.bossId != null && Object.hasOwnProperty.call(m, "bossId"))
            w.uint32(32).int32(m.bossId);
        if (m.bossHp != null && m.bossHp.length) {
            for (var i = 0; i < m.bossHp.length; ++i)
                w.uint32(40).int32(m.bossHp[i]);
        }
        if (m.mbr != null && Object.hasOwnProperty.call(m, "mbr"))
            $root.pb_pmbr.encode(m.mbr, w.uint32(50).fork()).ldelim();
        if (m.hid != null && Object.hasOwnProperty.call(m, "hid"))
            w.uint32(56).int32(m.hid);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(64).int32(m.cd);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(72).int32(m.lv);
        if (m.add != null && Object.hasOwnProperty.call(m, "add"))
            w.uint32(80).int32(m.add);
        if (m.times != null && Object.hasOwnProperty.call(m, "times"))
            w.uint32(88).int32(m.times);
        if (m.rid != null && Object.hasOwnProperty.call(m, "rid"))
            w.uint32(96).int32(m.rid);
        if (m.wake != null && Object.hasOwnProperty.call(m, "wake"))
            w.uint32(104).int32(m.wake);
        if (m.rlv != null && Object.hasOwnProperty.call(m, "rlv"))
            w.uint32(112).int32(m.rlv);
        if (m.rqlv != null && Object.hasOwnProperty.call(m, "rqlv"))
            w.uint32(120).int32(m.rqlv);
        return w;
    };

    pb_sscell.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_sscell();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.pos = r.int32();
                    break;
                }
            case 2: {
                    m.status = r.int32();
                    break;
                }
            case 3: {
                    m.id = r.int32();
                    break;
                }
            case 4: {
                    m.bossId = r.int32();
                    break;
                }
            case 5: {
                    if (!(m.bossHp && m.bossHp.length))
                        m.bossHp = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.bossHp.push(r.int32());
                    } else
                        m.bossHp.push(r.int32());
                    break;
                }
            case 6: {
                    m.mbr = $root.pb_pmbr.decode(r, r.uint32());
                    break;
                }
            case 7: {
                    m.hid = r.int32();
                    break;
                }
            case 8: {
                    m.cd = r.int32();
                    break;
                }
            case 9: {
                    m.lv = r.int32();
                    break;
                }
            case 10: {
                    m.add = r.int32();
                    break;
                }
            case 11: {
                    m.times = r.int32();
                    break;
                }
            case 12: {
                    m.rid = r.int32();
                    break;
                }
            case 13: {
                    m.wake = r.int32();
                    break;
                }
            case 14: {
                    m.rlv = r.int32();
                    break;
                }
            case 15: {
                    m.rqlv = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_sscell.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_sscell";
    };

    return pb_sscell;
})();

$root.pb_ssevent = (function() {

    function pb_ssevent(p) {
        this.reward = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_ssevent.prototype.id = 0;
    pb_ssevent.prototype.num = 0;
    pb_ssevent.prototype.lvItem = 0;
    pb_ssevent.prototype.score = 0;
    pb_ssevent.prototype.num2 = 0;
    pb_ssevent.prototype.reward = $util.emptyArray;

    pb_ssevent.create = function create(properties) {
        return new pb_ssevent(properties);
    };

    pb_ssevent.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(16).int32(m.num);
        if (m.lvItem != null && Object.hasOwnProperty.call(m, "lvItem"))
            w.uint32(24).int32(m.lvItem);
        if (m.score != null && Object.hasOwnProperty.call(m, "score"))
            w.uint32(32).int32(m.score);
        if (m.num2 != null && Object.hasOwnProperty.call(m, "num2"))
            w.uint32(40).int32(m.num2);
        if (m.reward != null && m.reward.length) {
            for (var i = 0; i < m.reward.length; ++i)
                $root.pb_bag.encode(m.reward[i], w.uint32(50).fork()).ldelim();
        }
        return w;
    };

    pb_ssevent.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_ssevent();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.num = r.int32();
                    break;
                }
            case 3: {
                    m.lvItem = r.int32();
                    break;
                }
            case 4: {
                    m.score = r.int32();
                    break;
                }
            case 5: {
                    m.num2 = r.int32();
                    break;
                }
            case 6: {
                    if (!(m.reward && m.reward.length))
                        m.reward = [];
                    m.reward.push($root.pb_bag.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_ssevent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_ssevent";
    };

    return pb_ssevent;
})();

$root.pb_sssweep = (function() {

    function pb_sssweep(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_sssweep.prototype.pos = 0;
    pb_sssweep.prototype.hid = 0;

    pb_sssweep.create = function create(properties) {
        return new pb_sssweep(properties);
    };

    pb_sssweep.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.pos != null && Object.hasOwnProperty.call(m, "pos"))
            w.uint32(8).int32(m.pos);
        if (m.hid != null && Object.hasOwnProperty.call(m, "hid"))
            w.uint32(16).int32(m.hid);
        return w;
    };

    pb_sssweep.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_sssweep();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.pos = r.int32();
                    break;
                }
            case 2: {
                    m.hid = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_sssweep.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_sssweep";
    };

    return pb_sssweep;
})();

$root.pb_gacha = (function() {

    function pb_gacha(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_gacha.prototype.item = 0;
    pb_gacha.prototype.gem = 0;
    pb_gacha.prototype.id = 0;
    pb_gacha.prototype.act = 0;
    pb_gacha.prototype.cd = 0;

    pb_gacha.create = function create(properties) {
        return new pb_gacha(properties);
    };

    pb_gacha.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.item);
        w.uint32(16).int32(m.gem);
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(24).int32(m.id);
        if (m.act != null && Object.hasOwnProperty.call(m, "act"))
            w.uint32(32).int32(m.act);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(40).int32(m.cd);
        return w;
    };

    pb_gacha.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_gacha();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.item = r.int32();
                    break;
                }
            case 2: {
                    m.gem = r.int32();
                    break;
                }
            case 3: {
                    m.id = r.int32();
                    break;
                }
            case 4: {
                    m.act = r.int32();
                    break;
                }
            case 5: {
                    m.cd = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("item"))
            throw $util.ProtocolError("missing required 'item'", { instance: m });
        if (!m.hasOwnProperty("gem"))
            throw $util.ProtocolError("missing required 'gem'", { instance: m });
        return m;
    };

    pb_gacha.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_gacha";
    };

    return pb_gacha;
})();

$root.pb_mail = (function() {

    function pb_mail(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_mail.prototype.mid = 0;
    pb_mail.prototype.id = 0;
    pb_mail.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_mail.prototype.flag = 0;
    pb_mail.prototype.sendTime = 0;
    pb_mail.prototype.title = "";
    pb_mail.prototype.from = "";
    pb_mail.prototype.content = "";
    pb_mail.prototype.contentO = "";
    pb_mail.prototype.affix = null;

    pb_mail.create = function create(properties) {
        return new pb_mail(properties);
    };

    pb_mail.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.mid);
        w.uint32(16).int32(m.id);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(24).int64(m.uid);
        w.uint32(32).int32(m.flag);
        w.uint32(40).int32(m.sendTime);
        if (m.title != null && Object.hasOwnProperty.call(m, "title"))
            w.uint32(50).string(m.title);
        if (m.from != null && Object.hasOwnProperty.call(m, "from"))
            w.uint32(58).string(m.from);
        if (m.content != null && Object.hasOwnProperty.call(m, "content"))
            w.uint32(66).string(m.content);
        if (m.contentO != null && Object.hasOwnProperty.call(m, "contentO"))
            w.uint32(74).string(m.contentO);
        if (m.affix != null && Object.hasOwnProperty.call(m, "affix"))
            $root.pb_bag.encode(m.affix, w.uint32(82).fork()).ldelim();
        return w;
    };

    pb_mail.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_mail();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.mid = r.int32();
                    break;
                }
            case 2: {
                    m.id = r.int32();
                    break;
                }
            case 3: {
                    m.uid = r.int64();
                    break;
                }
            case 4: {
                    m.flag = r.int32();
                    break;
                }
            case 5: {
                    m.sendTime = r.int32();
                    break;
                }
            case 6: {
                    m.title = r.string();
                    break;
                }
            case 7: {
                    m.from = r.string();
                    break;
                }
            case 8: {
                    m.content = r.string();
                    break;
                }
            case 9: {
                    m.contentO = r.string();
                    break;
                }
            case 10: {
                    m.affix = $root.pb_bag.decode(r, r.uint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("mid"))
            throw $util.ProtocolError("missing required 'mid'", { instance: m });
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("flag"))
            throw $util.ProtocolError("missing required 'flag'", { instance: m });
        if (!m.hasOwnProperty("sendTime"))
            throw $util.ProtocolError("missing required 'sendTime'", { instance: m });
        return m;
    };

    pb_mail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_mail";
    };

    return pb_mail;
})();

$root.pb_cunit = (function() {

    function pb_cunit(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_cunit.prototype.id = 0;
    pb_cunit.prototype.lv = 0;
    pb_cunit.prototype.star = 0;
    pb_cunit.prototype.power = 0;
    pb_cunit.prototype.hp = 0;
    pb_cunit.prototype.atk = 0;
    pb_cunit.prototype.armor = 0;
    pb_cunit.prototype.spd = 0;
    pb_cunit.prototype.wake = 0;
    pb_cunit.prototype.skin = 0;
    pb_cunit.prototype.stl = 0;
    pb_cunit.prototype.qlv = 0;
    pb_cunit.prototype.tree = null;
    pb_cunit.prototype.core = 0;

    pb_cunit.create = function create(properties) {
        return new pb_cunit(properties);
    };

    pb_cunit.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(16).int32(m.lv);
        if (m.star != null && Object.hasOwnProperty.call(m, "star"))
            w.uint32(24).int32(m.star);
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(32).int32(m.power);
        if (m.hp != null && Object.hasOwnProperty.call(m, "hp"))
            w.uint32(40).int32(m.hp);
        if (m.atk != null && Object.hasOwnProperty.call(m, "atk"))
            w.uint32(48).int32(m.atk);
        if (m.armor != null && Object.hasOwnProperty.call(m, "armor"))
            w.uint32(56).int32(m.armor);
        if (m.spd != null && Object.hasOwnProperty.call(m, "spd"))
            w.uint32(64).int32(m.spd);
        if (m.wake != null && Object.hasOwnProperty.call(m, "wake"))
            w.uint32(72).int32(m.wake);
        if (m.skin != null && Object.hasOwnProperty.call(m, "skin"))
            w.uint32(80).int32(m.skin);
        if (m.stl != null && Object.hasOwnProperty.call(m, "stl"))
            w.uint32(88).int32(m.stl);
        if (m.qlv != null && Object.hasOwnProperty.call(m, "qlv"))
            w.uint32(96).int32(m.qlv);
        if (m.tree != null && Object.hasOwnProperty.call(m, "tree"))
            $root.pb_tree.encode(m.tree, w.uint32(106).fork()).ldelim();
        if (m.core != null && Object.hasOwnProperty.call(m, "core"))
            w.uint32(112).int32(m.core);
        return w;
    };

    pb_cunit.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_cunit();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.lv = r.int32();
                    break;
                }
            case 3: {
                    m.star = r.int32();
                    break;
                }
            case 4: {
                    m.power = r.int32();
                    break;
                }
            case 5: {
                    m.hp = r.int32();
                    break;
                }
            case 6: {
                    m.atk = r.int32();
                    break;
                }
            case 7: {
                    m.armor = r.int32();
                    break;
                }
            case 8: {
                    m.spd = r.int32();
                    break;
                }
            case 9: {
                    m.wake = r.int32();
                    break;
                }
            case 10: {
                    m.skin = r.int32();
                    break;
                }
            case 11: {
                    m.stl = r.int32();
                    break;
                }
            case 12: {
                    m.qlv = r.int32();
                    break;
                }
            case 13: {
                    m.tree = $root.pb_tree.decode(r, r.uint32());
                    break;
                }
            case 14: {
                    m.core = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    pb_cunit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_cunit";
    };

    return pb_cunit;
})();

$root.pb_chat = (function() {

    function pb_chat(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_chat.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_chat.prototype.logo = 0;
    pb_chat.prototype.lv = 0;
    pb_chat.prototype.vip = 0;
    pb_chat.prototype.name = "";
    pb_chat.prototype.type = 0;
    pb_chat.prototype.text = "";
    pb_chat.prototype.time = 0;
    pb_chat.prototype.shareId = 0;
    pb_chat.prototype.heroId = 0;
    pb_chat.prototype.finalRank = 0;
    pb_chat.prototype.gid = 0;
    pb_chat.prototype.gname = "";
    pb_chat.prototype.glv = 0;
    pb_chat.prototype.gmsg = "";
    pb_chat.prototype.gFight = 0;
    pb_chat.prototype.border = 0;
    pb_chat.prototype.hteam = null;
    pb_chat.prototype.country = "";
    pb_chat.prototype.sds = "";
    pb_chat.prototype.city = "";

    pb_chat.create = function create(properties) {
        return new pb_chat(properties);
    };

    pb_chat.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(8).int64(m.uid);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(16).int32(m.logo);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(24).int32(m.lv);
        if (m.vip != null && Object.hasOwnProperty.call(m, "vip"))
            w.uint32(32).int32(m.vip);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(42).string(m.name);
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(48).int32(m.type);
        if (m.text != null && Object.hasOwnProperty.call(m, "text"))
            w.uint32(58).string(m.text);
        if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            w.uint32(64).int32(m.time);
        if (m.shareId != null && Object.hasOwnProperty.call(m, "shareId"))
            w.uint32(72).int32(m.shareId);
        if (m.heroId != null && Object.hasOwnProperty.call(m, "heroId"))
            w.uint32(80).int32(m.heroId);
        if (m.finalRank != null && Object.hasOwnProperty.call(m, "finalRank"))
            w.uint32(88).int32(m.finalRank);
        if (m.gid != null && Object.hasOwnProperty.call(m, "gid"))
            w.uint32(96).int32(m.gid);
        if (m.gname != null && Object.hasOwnProperty.call(m, "gname"))
            w.uint32(106).string(m.gname);
        if (m.glv != null && Object.hasOwnProperty.call(m, "glv"))
            w.uint32(112).int32(m.glv);
        if (m.gmsg != null && Object.hasOwnProperty.call(m, "gmsg"))
            w.uint32(122).string(m.gmsg);
        if (m.gFight != null && Object.hasOwnProperty.call(m, "gFight"))
            w.uint32(128).int32(m.gFight);
        if (m.border != null && Object.hasOwnProperty.call(m, "border"))
            w.uint32(136).int32(m.border);
        if (m.hteam != null && Object.hasOwnProperty.call(m, "hteam"))
            $root.pb_hteam.encode(m.hteam, w.uint32(146).fork()).ldelim();
        if (m.country != null && Object.hasOwnProperty.call(m, "country"))
            w.uint32(154).string(m.country);
        if (m.sds != null && Object.hasOwnProperty.call(m, "sds"))
            w.uint32(162).string(m.sds);
        if (m.city != null && Object.hasOwnProperty.call(m, "city"))
            w.uint32(170).string(m.city);
        return w;
    };

    pb_chat.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_chat();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.uid = r.int64();
                    break;
                }
            case 2: {
                    m.logo = r.int32();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.vip = r.int32();
                    break;
                }
            case 5: {
                    m.name = r.string();
                    break;
                }
            case 6: {
                    m.type = r.int32();
                    break;
                }
            case 7: {
                    m.text = r.string();
                    break;
                }
            case 8: {
                    m.time = r.int32();
                    break;
                }
            case 9: {
                    m.shareId = r.int32();
                    break;
                }
            case 10: {
                    m.heroId = r.int32();
                    break;
                }
            case 11: {
                    m.finalRank = r.int32();
                    break;
                }
            case 12: {
                    m.gid = r.int32();
                    break;
                }
            case 13: {
                    m.gname = r.string();
                    break;
                }
            case 14: {
                    m.glv = r.int32();
                    break;
                }
            case 15: {
                    m.gmsg = r.string();
                    break;
                }
            case 16: {
                    m.gFight = r.int32();
                    break;
                }
            case 17: {
                    m.border = r.int32();
                    break;
                }
            case 18: {
                    m.hteam = $root.pb_hteam.decode(r, r.uint32());
                    break;
                }
            case 19: {
                    m.country = r.string();
                    break;
                }
            case 20: {
                    m.sds = r.string();
                    break;
                }
            case 21: {
                    m.city = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_chat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_chat";
    };

    return pb_chat;
})();

$root.pb_upfile = (function() {

    function pb_upfile(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_upfile.prototype.md5 = "";
    pb_upfile.prototype.path = "";

    pb_upfile.create = function create(properties) {
        return new pb_upfile(properties);
    };

    pb_upfile.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.md5);
        w.uint32(18).string(m.path);
        return w;
    };

    pb_upfile.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_upfile();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.md5 = r.string();
                    break;
                }
            case 2: {
                    m.path = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("md5"))
            throw $util.ProtocolError("missing required 'md5'", { instance: m });
        if (!m.hasOwnProperty("path"))
            throw $util.ProtocolError("missing required 'path'", { instance: m });
        return m;
    };

    pb_upfile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_upfile";
    };

    return pb_upfile;
})();

$root.pb_good = (function() {

    function pb_good(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_good.prototype.id = 0;
    pb_good.prototype.type = 0;
    pb_good.prototype.count = 0;
    pb_good.prototype.excelId = 0;
    pb_good.prototype.bought = 0;

    pb_good.create = function create(properties) {
        return new pb_good(properties);
    };

    pb_good.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).int32(m.type);
        w.uint32(24).int32(m.count);
        w.uint32(32).int32(m.excelId);
        if (m.bought != null && Object.hasOwnProperty.call(m, "bought"))
            w.uint32(40).int32(m.bought);
        return w;
    };

    pb_good.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_good();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.type = r.int32();
                    break;
                }
            case 3: {
                    m.count = r.int32();
                    break;
                }
            case 4: {
                    m.excelId = r.int32();
                    break;
                }
            case 5: {
                    m.bought = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        if (!m.hasOwnProperty("count"))
            throw $util.ProtocolError("missing required 'count'", { instance: m });
        if (!m.hasOwnProperty("excelId"))
            throw $util.ProtocolError("missing required 'excelId'", { instance: m });
        return m;
    };

    pb_good.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_good";
    };

    return pb_good;
})();

$root.pb_onepay = (function() {

    function pb_onepay(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_onepay.prototype.tid = "";
    pb_onepay.prototype.txid = "";
    pb_onepay.prototype.tdate = "";

    pb_onepay.create = function create(properties) {
        return new pb_onepay(properties);
    };

    pb_onepay.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.tid);
        if (m.txid != null && Object.hasOwnProperty.call(m, "txid"))
            w.uint32(18).string(m.txid);
        if (m.tdate != null && Object.hasOwnProperty.call(m, "tdate"))
            w.uint32(26).string(m.tdate);
        return w;
    };

    pb_onepay.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_onepay();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.tid = r.string();
                    break;
                }
            case 2: {
                    m.txid = r.string();
                    break;
                }
            case 3: {
                    m.tdate = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("tid"))
            throw $util.ProtocolError("missing required 'tid'", { instance: m });
        return m;
    };

    pb_onepay.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_onepay";
    };

    return pb_onepay;
})();

$root.pb_hook = (function() {

    function pb_hook(p) {
        this.ids = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_hook.prototype.status = 0;
    pb_hook.prototype.hookStage = 0;
    pb_hook.prototype.bossCd = 0;
    pb_hook.prototype.pokerCd = 0;
    pb_hook.prototype.reward = null;
    pb_hook.prototype.pveStage = 0;
    pb_hook.prototype.extra = null;
    pb_hook.prototype.ids = $util.emptyArray;
    pb_hook.prototype.hardStage = 0;

    pb_hook.create = function create(properties) {
        return new pb_hook(properties);
    };

    pb_hook.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.status);
        if (m.hookStage != null && Object.hasOwnProperty.call(m, "hookStage"))
            w.uint32(16).int32(m.hookStage);
        if (m.bossCd != null && Object.hasOwnProperty.call(m, "bossCd"))
            w.uint32(24).int32(m.bossCd);
        if (m.pokerCd != null && Object.hasOwnProperty.call(m, "pokerCd"))
            w.uint32(32).int32(m.pokerCd);
        if (m.reward != null && Object.hasOwnProperty.call(m, "reward"))
            $root.pb_bag.encode(m.reward, w.uint32(42).fork()).ldelim();
        if (m.pveStage != null && Object.hasOwnProperty.call(m, "pveStage"))
            w.uint32(48).int32(m.pveStage);
        if (m.extra != null && Object.hasOwnProperty.call(m, "extra"))
            $root.pb_bag.encode(m.extra, w.uint32(58).fork()).ldelim();
        if (m.ids != null && m.ids.length) {
            for (var i = 0; i < m.ids.length; ++i)
                $root.pb_item.encode(m.ids[i], w.uint32(66).fork()).ldelim();
        }
        if (m.hardStage != null && Object.hasOwnProperty.call(m, "hardStage"))
            w.uint32(72).uint32(m.hardStage);
        return w;
    };

    pb_hook.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_hook();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.sint32();
                    break;
                }
            case 2: {
                    m.hookStage = r.int32();
                    break;
                }
            case 3: {
                    m.bossCd = r.int32();
                    break;
                }
            case 4: {
                    m.pokerCd = r.int32();
                    break;
                }
            case 5: {
                    m.reward = $root.pb_bag.decode(r, r.uint32());
                    break;
                }
            case 6: {
                    m.pveStage = r.int32();
                    break;
                }
            case 7: {
                    m.extra = $root.pb_bag.decode(r, r.uint32());
                    break;
                }
            case 8: {
                    if (!(m.ids && m.ids.length))
                        m.ids = [];
                    m.ids.push($root.pb_item.decode(r, r.uint32()));
                    break;
                }
            case 9: {
                    m.hardStage = r.uint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pb_hook.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_hook";
    };

    return pb_hook;
})();

$root.pb_frd = (function() {

    function pb_frd(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_frd.prototype.logo = 0;
    pb_frd.prototype.name = "";
    pb_frd.prototype.lv = 0;
    pb_frd.prototype.flag = 0;
    pb_frd.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_frd.prototype.last = 0;
    pb_frd.prototype.power = 0;
    pb_frd.prototype.border = 0;
    pb_frd.prototype.country = "";
    pb_frd.prototype.sds = "";
    pb_frd.prototype.city = "";

    pb_frd.create = function create(properties) {
        return new pb_frd(properties);
    };

    pb_frd.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.logo);
        w.uint32(18).string(m.name);
        w.uint32(24).int32(m.lv);
        if (m.flag != null && Object.hasOwnProperty.call(m, "flag"))
            w.uint32(32).int32(m.flag);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(40).int64(m.uid);
        if (m.last != null && Object.hasOwnProperty.call(m, "last"))
            w.uint32(48).int32(m.last);
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(56).int32(m.power);
        if (m.border != null && Object.hasOwnProperty.call(m, "border"))
            w.uint32(64).int32(m.border);
        if (m.country != null && Object.hasOwnProperty.call(m, "country"))
            w.uint32(74).string(m.country);
        if (m.sds != null && Object.hasOwnProperty.call(m, "sds"))
            w.uint32(82).string(m.sds);
        if (m.city != null && Object.hasOwnProperty.call(m, "city"))
            w.uint32(90).string(m.city);
        return w;
    };

    pb_frd.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_frd();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.logo = r.int32();
                    break;
                }
            case 2: {
                    m.name = r.string();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.flag = r.int32();
                    break;
                }
            case 5: {
                    m.uid = r.int64();
                    break;
                }
            case 6: {
                    m.last = r.int32();
                    break;
                }
            case 7: {
                    m.power = r.int32();
                    break;
                }
            case 8: {
                    m.border = r.int32();
                    break;
                }
            case 9: {
                    m.country = r.string();
                    break;
                }
            case 10: {
                    m.sds = r.string();
                    break;
                }
            case 11: {
                    m.city = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("logo"))
            throw $util.ProtocolError("missing required 'logo'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("lv"))
            throw $util.ProtocolError("missing required 'lv'", { instance: m });
        return m;
    };

    pb_frd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_frd";
    };

    return pb_frd;
})();

$root.pb_friend = (function() {

    function pb_friend(p) {
        this.friends = [];
        this.apply = [];
        this.recmd = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_friend.prototype.friends = $util.emptyArray;
    pb_friend.prototype.love = 0;
    pb_friend.prototype.cd = 0;
    pb_friend.prototype.apply = $util.emptyArray;
    pb_friend.prototype.recmd = $util.emptyArray;

    pb_friend.create = function create(properties) {
        return new pb_friend(properties);
    };

    pb_friend.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.friends != null && m.friends.length) {
            for (var i = 0; i < m.friends.length; ++i)
                $root.pb_frd.encode(m.friends[i], w.uint32(10).fork()).ldelim();
        }
        w.uint32(16).int32(m.love);
        w.uint32(24).int32(m.cd);
        if (m.apply != null && m.apply.length) {
            for (var i = 0; i < m.apply.length; ++i)
                $root.pb_frd.encode(m.apply[i], w.uint32(34).fork()).ldelim();
        }
        if (m.recmd != null && m.recmd.length) {
            for (var i = 0; i < m.recmd.length; ++i)
                $root.pb_frd.encode(m.recmd[i], w.uint32(42).fork()).ldelim();
        }
        return w;
    };

    pb_friend.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_friend();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.friends && m.friends.length))
                        m.friends = [];
                    m.friends.push($root.pb_frd.decode(r, r.uint32()));
                    break;
                }
            case 2: {
                    m.love = r.int32();
                    break;
                }
            case 3: {
                    m.cd = r.int32();
                    break;
                }
            case 4: {
                    if (!(m.apply && m.apply.length))
                        m.apply = [];
                    m.apply.push($root.pb_frd.decode(r, r.uint32()));
                    break;
                }
            case 5: {
                    if (!(m.recmd && m.recmd.length))
                        m.recmd = [];
                    m.recmd.push($root.pb_frd.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("love"))
            throw $util.ProtocolError("missing required 'love'", { instance: m });
        if (!m.hasOwnProperty("cd"))
            throw $util.ProtocolError("missing required 'cd'", { instance: m });
        return m;
    };

    pb_friend.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_friend";
    };

    return pb_friend;
})();

$root.pb_casino_item = (function() {

    function pb_casino_item(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_casino_item.prototype.type = 0;
    pb_casino_item.prototype.id = 0;
    pb_casino_item.prototype.count = 0;
    pb_casino_item.prototype.cool = 0;
    pb_casino_item.prototype.limitBuy = 0;
    pb_casino_item.prototype.weight = 0;

    pb_casino_item.create = function create(properties) {
        return new pb_casino_item(properties);
    };

    pb_casino_item.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        w.uint32(16).int32(m.id);
        w.uint32(24).int32(m.count);
        if (m.cool != null && Object.hasOwnProperty.call(m, "cool"))
            w.uint32(32).int32(m.cool);
        if (m.limitBuy != null && Object.hasOwnProperty.call(m, "limitBuy"))
            w.uint32(40).int32(m.limitBuy);
        if (m.weight != null && Object.hasOwnProperty.call(m, "weight"))
            w.uint32(48).int32(m.weight);
        return w;
    };

    pb_casino_item.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_casino_item();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.type = r.int32();
                    break;
                }
            case 2: {
                    m.id = r.int32();
                    break;
                }
            case 3: {
                    m.count = r.int32();
                    break;
                }
            case 4: {
                    m.cool = r.int32();
                    break;
                }
            case 5: {
                    m.limitBuy = r.int32();
                    break;
                }
            case 6: {
                    m.weight = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("count"))
            throw $util.ProtocolError("missing required 'count'", { instance: m });
        return m;
    };

    pb_casino_item.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_casino_item";
    };

    return pb_casino_item;
})();

$root.pb_casino_msg = (function() {

    function pb_casino_msg(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_casino_msg.prototype.name = "";
    pb_casino_msg.prototype.type = 0;
    pb_casino_msg.prototype.id = 0;
    pb_casino_msg.prototype.count = 0;

    pb_casino_msg.create = function create(properties) {
        return new pb_casino_msg(properties);
    };

    pb_casino_msg.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.name);
        w.uint32(16).int32(m.type);
        w.uint32(24).int32(m.id);
        w.uint32(32).int32(m.count);
        return w;
    };

    pb_casino_msg.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_casino_msg();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.name = r.string();
                    break;
                }
            case 2: {
                    m.type = r.int32();
                    break;
                }
            case 3: {
                    m.id = r.int32();
                    break;
                }
            case 4: {
                    m.count = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("count"))
            throw $util.ProtocolError("missing required 'count'", { instance: m });
        return m;
    };

    pb_casino_msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_casino_msg";
    };

    return pb_casino_msg;
})();

$root.pb_gmember = (function() {

    function pb_gmember(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_gmember.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_gmember.prototype.name = "";
    pb_gmember.prototype.lv = 0;
    pb_gmember.prototype.logo = 0;
    pb_gmember.prototype.last = 0;
    pb_gmember.prototype.title = 0;
    pb_gmember.prototype.power = 0;
    pb_gmember.prototype.gfight = 0;
    pb_gmember.prototype.border = 0;
    pb_gmember.prototype.cwar = 0;
    pb_gmember.prototype.country = "";
    pb_gmember.prototype.sds = "";
    pb_gmember.prototype.city = "";

    pb_gmember.create = function create(properties) {
        return new pb_gmember(properties);
    };

    pb_gmember.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.uid);
        w.uint32(18).string(m.name);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(24).int32(m.lv);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(32).int32(m.logo);
        if (m.last != null && Object.hasOwnProperty.call(m, "last"))
            w.uint32(40).int32(m.last);
        if (m.title != null && Object.hasOwnProperty.call(m, "title"))
            w.uint32(48).int32(m.title);
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(56).int32(m.power);
        if (m.gfight != null && Object.hasOwnProperty.call(m, "gfight"))
            w.uint32(64).int32(m.gfight);
        if (m.border != null && Object.hasOwnProperty.call(m, "border"))
            w.uint32(72).int32(m.border);
        if (m.cwar != null && Object.hasOwnProperty.call(m, "cwar"))
            w.uint32(80).int32(m.cwar);
        if (m.country != null && Object.hasOwnProperty.call(m, "country"))
            w.uint32(90).string(m.country);
        if (m.sds != null && Object.hasOwnProperty.call(m, "sds"))
            w.uint32(98).string(m.sds);
        if (m.city != null && Object.hasOwnProperty.call(m, "city"))
            w.uint32(106).string(m.city);
        return w;
    };

    pb_gmember.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_gmember();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.uid = r.int64();
                    break;
                }
            case 2: {
                    m.name = r.string();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.logo = r.int32();
                    break;
                }
            case 5: {
                    m.last = r.int32();
                    break;
                }
            case 6: {
                    m.title = r.int32();
                    break;
                }
            case 7: {
                    m.power = r.int32();
                    break;
                }
            case 8: {
                    m.gfight = r.int32();
                    break;
                }
            case 9: {
                    m.border = r.int32();
                    break;
                }
            case 10: {
                    m.cwar = r.int32();
                    break;
                }
            case 11: {
                    m.country = r.string();
                    break;
                }
            case 12: {
                    m.sds = r.string();
                    break;
                }
            case 13: {
                    m.city = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uid"))
            throw $util.ProtocolError("missing required 'uid'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        return m;
    };

    pb_gmember.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_gmember";
    };

    return pb_gmember;
})();

$root.pb_guild = (function() {

    function pb_guild(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_guild.prototype.id = 0;
    pb_guild.prototype.name = "";
    pb_guild.prototype.logo = 0;
    pb_guild.prototype.exp = 0;
    pb_guild.prototype.notice = "";
    pb_guild.prototype.power = 0;
    pb_guild.prototype.rank = 0;
    pb_guild.prototype.members = 0;
    pb_guild.prototype.pname = "";
    pb_guild.prototype.dismissCd = 0;
    pb_guild.prototype.flag = 0;

    pb_guild.create = function create(properties) {
        return new pb_guild(properties);
    };

    pb_guild.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(18).string(m.name);
        w.uint32(24).int32(m.logo);
        w.uint32(32).int32(m.exp);
        if (m.notice != null && Object.hasOwnProperty.call(m, "notice"))
            w.uint32(42).string(m.notice);
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(48).int32(m.power);
        if (m.rank != null && Object.hasOwnProperty.call(m, "rank"))
            w.uint32(56).int32(m.rank);
        if (m.members != null && Object.hasOwnProperty.call(m, "members"))
            w.uint32(64).int32(m.members);
        if (m.pname != null && Object.hasOwnProperty.call(m, "pname"))
            w.uint32(74).string(m.pname);
        if (m.dismissCd != null && Object.hasOwnProperty.call(m, "dismissCd"))
            w.uint32(80).int32(m.dismissCd);
        if (m.flag != null && Object.hasOwnProperty.call(m, "flag"))
            w.uint32(88).int32(m.flag);
        return w;
    };

    pb_guild.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_guild();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.name = r.string();
                    break;
                }
            case 3: {
                    m.logo = r.int32();
                    break;
                }
            case 4: {
                    m.exp = r.int32();
                    break;
                }
            case 5: {
                    m.notice = r.string();
                    break;
                }
            case 6: {
                    m.power = r.int32();
                    break;
                }
            case 7: {
                    m.rank = r.int32();
                    break;
                }
            case 8: {
                    m.members = r.int32();
                    break;
                }
            case 9: {
                    m.pname = r.string();
                    break;
                }
            case 10: {
                    m.dismissCd = r.int32();
                    break;
                }
            case 11: {
                    m.flag = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("logo"))
            throw $util.ProtocolError("missing required 'logo'", { instance: m });
        if (!m.hasOwnProperty("exp"))
            throw $util.ProtocolError("missing required 'exp'", { instance: m });
        return m;
    };

    pb_guild.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_guild";
    };

    return pb_guild;
})();

$root.pb_glog = (function() {

    function pb_glog(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_glog.prototype.type = 0;
    pb_glog.prototype.time = 0;
    pb_glog.prototype.objName = "";
    pb_glog.prototype.doName = "";

    pb_glog.create = function create(properties) {
        return new pb_glog(properties);
    };

    pb_glog.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            w.uint32(16).int32(m.time);
        if (m.objName != null && Object.hasOwnProperty.call(m, "objName"))
            w.uint32(26).string(m.objName);
        if (m.doName != null && Object.hasOwnProperty.call(m, "doName"))
            w.uint32(34).string(m.doName);
        return w;
    };

    pb_glog.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_glog();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.type = r.int32();
                    break;
                }
            case 2: {
                    m.time = r.int32();
                    break;
                }
            case 3: {
                    m.objName = r.string();
                    break;
                }
            case 4: {
                    m.doName = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        return m;
    };

    pb_glog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_glog";
    };

    return pb_glog;
})();

$root.pb_unit = (function() {

    function pb_unit(p) {
        this.bra = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_unit.prototype.hid = 0;
    pb_unit.prototype.id = 0;
    pb_unit.prototype.pos = 0;
    pb_unit.prototype.lv = 0;
    pb_unit.prototype.star = 0;
    pb_unit.prototype.energy = 0;
    pb_unit.prototype.hpp = 0;
    pb_unit.prototype.wake = 0;
    pb_unit.prototype.skin = 0;
    pb_unit.prototype.stl = 0;
    pb_unit.prototype.flag = 0;
    pb_unit.prototype.ex2 = 0;
    pb_unit.prototype.core = 0;
    pb_unit.prototype.ex4 = 0;
    pb_unit.prototype.bra = $util.emptyArray;

    pb_unit.create = function create(properties) {
        return new pb_unit(properties);
    };

    pb_unit.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.hid != null && Object.hasOwnProperty.call(m, "hid"))
            w.uint32(8).int32(m.hid);
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(16).int32(m.id);
        if (m.pos != null && Object.hasOwnProperty.call(m, "pos"))
            w.uint32(24).int32(m.pos);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(32).int32(m.lv);
        if (m.star != null && Object.hasOwnProperty.call(m, "star"))
            w.uint32(40).int32(m.star);
        if (m.energy != null && Object.hasOwnProperty.call(m, "energy"))
            w.uint32(48).int32(m.energy);
        if (m.hpp != null && Object.hasOwnProperty.call(m, "hpp"))
            w.uint32(56).int32(m.hpp);
        if (m.wake != null && Object.hasOwnProperty.call(m, "wake"))
            w.uint32(64).int32(m.wake);
        if (m.skin != null && Object.hasOwnProperty.call(m, "skin"))
            w.uint32(72).int32(m.skin);
        if (m.stl != null && Object.hasOwnProperty.call(m, "stl"))
            w.uint32(80).int32(m.stl);
        if (m.flag != null && Object.hasOwnProperty.call(m, "flag"))
            w.uint32(88).int32(m.flag);
        if (m.ex2 != null && Object.hasOwnProperty.call(m, "ex2"))
            w.uint32(96).int32(m.ex2);
        if (m.core != null && Object.hasOwnProperty.call(m, "core"))
            w.uint32(104).int32(m.core);
        if (m.ex4 != null && Object.hasOwnProperty.call(m, "ex4"))
            w.uint32(112).int32(m.ex4);
        if (m.bra != null && m.bra.length) {
            for (var i = 0; i < m.bra.length; ++i)
                w.uint32(120).int32(m.bra[i]);
        }
        return w;
    };

    pb_unit.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_unit();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.hid = r.int32();
                    break;
                }
            case 2: {
                    m.id = r.int32();
                    break;
                }
            case 3: {
                    m.pos = r.int32();
                    break;
                }
            case 4: {
                    m.lv = r.int32();
                    break;
                }
            case 5: {
                    m.star = r.int32();
                    break;
                }
            case 6: {
                    m.energy = r.int32();
                    break;
                }
            case 7: {
                    m.hpp = r.int32();
                    break;
                }
            case 8: {
                    m.wake = r.int32();
                    break;
                }
            case 9: {
                    m.skin = r.int32();
                    break;
                }
            case 10: {
                    m.stl = r.int32();
                    break;
                }
            case 11: {
                    m.flag = r.int32();
                    break;
                }
            case 12: {
                    m.ex2 = r.int32();
                    break;
                }
            case 13: {
                    m.core = r.int32();
                    break;
                }
            case 14: {
                    m.ex4 = r.int32();
                    break;
                }
            case 15: {
                    if (!(m.bra && m.bra.length))
                        m.bra = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.bra.push(r.int32());
                    } else
                        m.bra.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_unit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_unit";
    };

    return pb_unit;
})();

$root.pb_strial = (function() {

    function pb_strial(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_strial.prototype.id = 0;
    pb_strial.prototype.tl = 0;
    pb_strial.prototype.cd = 0;

    pb_strial.create = function create(properties) {
        return new pb_strial(properties);
    };

    pb_strial.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).int32(m.tl);
        w.uint32(24).int32(m.cd);
        return w;
    };

    pb_strial.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_strial();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.tl = r.int32();
                    break;
                }
            case 3: {
                    m.cd = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("tl"))
            throw $util.ProtocolError("missing required 'tl'", { instance: m });
        if (!m.hasOwnProperty("cd"))
            throw $util.ProtocolError("missing required 'cd'", { instance: m });
        return m;
    };

    pb_strial.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_strial";
    };

    return pb_strial;
})();

$root.pb_trial = (function() {

    function pb_trial(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_trial.prototype.logo = 0;
    pb_trial.prototype.lv = 0;
    pb_trial.prototype.name = "";
    pb_trial.prototype.power = 0;
    pb_trial.prototype.stage = 0;
    pb_trial.prototype.video = null;
    pb_trial.prototype.border = 0;
    pb_trial.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    pb_trial.create = function create(properties) {
        return new pb_trial(properties);
    };

    pb_trial.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.logo);
        w.uint32(16).int32(m.lv);
        w.uint32(26).string(m.name);
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(32).int32(m.power);
        if (m.stage != null && Object.hasOwnProperty.call(m, "stage"))
            w.uint32(40).int32(m.stage);
        if (m.video != null && Object.hasOwnProperty.call(m, "video"))
            $root.pb_evideo.encode(m.video, w.uint32(50).fork()).ldelim();
        if (m.border != null && Object.hasOwnProperty.call(m, "border"))
            w.uint32(56).int32(m.border);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(64).int64(m.uid);
        return w;
    };

    pb_trial.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_trial();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.logo = r.int32();
                    break;
                }
            case 2: {
                    m.lv = r.int32();
                    break;
                }
            case 3: {
                    m.name = r.string();
                    break;
                }
            case 4: {
                    m.power = r.int32();
                    break;
                }
            case 5: {
                    m.stage = r.int32();
                    break;
                }
            case 6: {
                    m.video = $root.pb_evideo.decode(r, r.uint32());
                    break;
                }
            case 7: {
                    m.border = r.int32();
                    break;
                }
            case 8: {
                    m.uid = r.int64();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("logo"))
            throw $util.ProtocolError("missing required 'logo'", { instance: m });
        if (!m.hasOwnProperty("lv"))
            throw $util.ProtocolError("missing required 'lv'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        return m;
    };

    pb_trial.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_trial";
    };

    return pb_trial;
})();

$root.pb_plog = (function() {

    function pb_plog(p) {
        this.vid = [];
        this.wins = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_plog.prototype.rival = null;
    pb_plog.prototype.atk = false;
    pb_plog.prototype.win = false;
    pb_plog.prototype.vid = $util.emptyArray;
    pb_plog.prototype.time = 0;
    pb_plog.prototype.score = 0;
    pb_plog.prototype.wins = $util.emptyArray;

    pb_plog.create = function create(properties) {
        return new pb_plog(properties);
    };

    pb_plog.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.pb_pmbr.encode(m.rival, w.uint32(10).fork()).ldelim();
        w.uint32(16).bool(m.atk);
        w.uint32(24).bool(m.win);
        if (m.vid != null && m.vid.length) {
            for (var i = 0; i < m.vid.length; ++i)
                w.uint32(32).int32(m.vid[i]);
        }
        w.uint32(40).int32(m.time);
        w.uint32(48).int32(m.score);
        if (m.wins != null && m.wins.length) {
            for (var i = 0; i < m.wins.length; ++i)
                w.uint32(56).bool(m.wins[i]);
        }
        return w;
    };

    pb_plog.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_plog();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.rival = $root.pb_pmbr.decode(r, r.uint32());
                    break;
                }
            case 2: {
                    m.atk = r.bool();
                    break;
                }
            case 3: {
                    m.win = r.bool();
                    break;
                }
            case 4: {
                    if (!(m.vid && m.vid.length))
                        m.vid = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.vid.push(r.int32());
                    } else
                        m.vid.push(r.int32());
                    break;
                }
            case 5: {
                    m.time = r.int32();
                    break;
                }
            case 6: {
                    m.score = r.int32();
                    break;
                }
            case 7: {
                    if (!(m.wins && m.wins.length))
                        m.wins = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.wins.push(r.bool());
                    } else
                        m.wins.push(r.bool());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("rival"))
            throw $util.ProtocolError("missing required 'rival'", { instance: m });
        if (!m.hasOwnProperty("atk"))
            throw $util.ProtocolError("missing required 'atk'", { instance: m });
        if (!m.hasOwnProperty("win"))
            throw $util.ProtocolError("missing required 'win'", { instance: m });
        if (!m.hasOwnProperty("time"))
            throw $util.ProtocolError("missing required 'time'", { instance: m });
        if (!m.hasOwnProperty("score"))
            throw $util.ProtocolError("missing required 'score'", { instance: m });
        return m;
    };

    pb_plog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_plog";
    };

    return pb_plog;
})();

$root.pb_p3plog = (function() {

    function pb_p3plog(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_p3plog.prototype.def = null;
    pb_p3plog.prototype.atk = false;
    pb_p3plog.prototype.win = false;
    pb_p3plog.prototype.vid = 0;
    pb_p3plog.prototype.time = 0;
    pb_p3plog.prototype.score = 0;

    pb_p3plog.create = function create(properties) {
        return new pb_p3plog(properties);
    };

    pb_p3plog.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.def != null && Object.hasOwnProperty.call(m, "def"))
            $root.pb_p3pmbr.encode(m.def, w.uint32(10).fork()).ldelim();
        if (m.atk != null && Object.hasOwnProperty.call(m, "atk"))
            w.uint32(16).bool(m.atk);
        if (m.win != null && Object.hasOwnProperty.call(m, "win"))
            w.uint32(24).bool(m.win);
        if (m.vid != null && Object.hasOwnProperty.call(m, "vid"))
            w.uint32(32).int32(m.vid);
        if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            w.uint32(40).int32(m.time);
        if (m.score != null && Object.hasOwnProperty.call(m, "score"))
            w.uint32(48).int32(m.score);
        return w;
    };

    pb_p3plog.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_p3plog();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.def = $root.pb_p3pmbr.decode(r, r.uint32());
                    break;
                }
            case 2: {
                    m.atk = r.bool();
                    break;
                }
            case 3: {
                    m.win = r.bool();
                    break;
                }
            case 4: {
                    m.vid = r.int32();
                    break;
                }
            case 5: {
                    m.time = r.int32();
                    break;
                }
            case 6: {
                    m.score = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_p3plog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_p3plog";
    };

    return pb_p3plog;
})();

$root.pb_pmbr = (function() {

    function pb_pmbr(p) {
        this.camp = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_pmbr.prototype.name = "";
    pb_pmbr.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_pmbr.prototype.lv = 0;
    pb_pmbr.prototype.logo = 0;
    pb_pmbr.prototype.score = 0;
    pb_pmbr.prototype.power = 0;
    pb_pmbr.prototype.rank = 0;
    pb_pmbr.prototype.gname = "";
    pb_pmbr.prototype.trank = 0;
    pb_pmbr.prototype.tscore = 0;
    pb_pmbr.prototype.camp = $util.emptyArray;
    pb_pmbr.prototype.win = 0;
    pb_pmbr.prototype.fight = 0;
    pb_pmbr.prototype.sid = 0;
    pb_pmbr.prototype.border = 0;
    pb_pmbr.prototype.ptype = 0;

    pb_pmbr.create = function create(properties) {
        return new pb_pmbr(properties);
    };

    pb_pmbr.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(10).string(m.name);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(16).int64(m.uid);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(24).int32(m.lv);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(32).int32(m.logo);
        if (m.score != null && Object.hasOwnProperty.call(m, "score"))
            w.uint32(40).int32(m.score);
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(48).int32(m.power);
        if (m.rank != null && Object.hasOwnProperty.call(m, "rank"))
            w.uint32(56).int32(m.rank);
        if (m.gname != null && Object.hasOwnProperty.call(m, "gname"))
            w.uint32(66).string(m.gname);
        if (m.trank != null && Object.hasOwnProperty.call(m, "trank"))
            w.uint32(72).int32(m.trank);
        if (m.tscore != null && Object.hasOwnProperty.call(m, "tscore"))
            w.uint32(80).int32(m.tscore);
        if (m.camp != null && m.camp.length) {
            for (var i = 0; i < m.camp.length; ++i)
                $root.pb_unit.encode(m.camp[i], w.uint32(90).fork()).ldelim();
        }
        if (m.win != null && Object.hasOwnProperty.call(m, "win"))
            w.uint32(96).int32(m.win);
        if (m.fight != null && Object.hasOwnProperty.call(m, "fight"))
            w.uint32(104).int32(m.fight);
        if (m.sid != null && Object.hasOwnProperty.call(m, "sid"))
            w.uint32(112).int32(m.sid);
        if (m.border != null && Object.hasOwnProperty.call(m, "border"))
            w.uint32(120).int32(m.border);
        if (m.ptype != null && Object.hasOwnProperty.call(m, "ptype"))
            w.uint32(128).int32(m.ptype);
        return w;
    };

    pb_pmbr.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_pmbr();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.name = r.string();
                    break;
                }
            case 2: {
                    m.uid = r.int64();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.logo = r.int32();
                    break;
                }
            case 5: {
                    m.score = r.int32();
                    break;
                }
            case 6: {
                    m.power = r.int32();
                    break;
                }
            case 7: {
                    m.rank = r.int32();
                    break;
                }
            case 8: {
                    m.gname = r.string();
                    break;
                }
            case 9: {
                    m.trank = r.int32();
                    break;
                }
            case 10: {
                    m.tscore = r.int32();
                    break;
                }
            case 11: {
                    if (!(m.camp && m.camp.length))
                        m.camp = [];
                    m.camp.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            case 12: {
                    m.win = r.int32();
                    break;
                }
            case 13: {
                    m.fight = r.int32();
                    break;
                }
            case 14: {
                    m.sid = r.int32();
                    break;
                }
            case 15: {
                    m.border = r.int32();
                    break;
                }
            case 16: {
                    m.ptype = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_pmbr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_pmbr";
    };

    return pb_pmbr;
})();

$root.pb_p3pmbr = (function() {

    function pb_p3pmbr(p) {
        this.camp = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_p3pmbr.prototype.name = "";
    pb_p3pmbr.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_p3pmbr.prototype.lv = 0;
    pb_p3pmbr.prototype.logo = 0;
    pb_p3pmbr.prototype.lbox = 0;
    pb_p3pmbr.prototype.power = 0;
    pb_p3pmbr.prototype.rank = 0;
    pb_p3pmbr.prototype.score = 0;
    pb_p3pmbr.prototype.camp = $util.emptyArray;

    pb_p3pmbr.create = function create(properties) {
        return new pb_p3pmbr(properties);
    };

    pb_p3pmbr.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(10).string(m.name);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(16).int64(m.uid);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(24).int32(m.lv);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(32).int32(m.logo);
        if (m.lbox != null && Object.hasOwnProperty.call(m, "lbox"))
            w.uint32(40).int32(m.lbox);
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(48).int32(m.power);
        if (m.rank != null && Object.hasOwnProperty.call(m, "rank"))
            w.uint32(56).int32(m.rank);
        if (m.score != null && Object.hasOwnProperty.call(m, "score"))
            w.uint32(64).int32(m.score);
        if (m.camp != null && m.camp.length) {
            for (var i = 0; i < m.camp.length; ++i)
                $root.pb_unit.encode(m.camp[i], w.uint32(74).fork()).ldelim();
        }
        return w;
    };

    pb_p3pmbr.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_p3pmbr();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.name = r.string();
                    break;
                }
            case 2: {
                    m.uid = r.int64();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.logo = r.int32();
                    break;
                }
            case 5: {
                    m.lbox = r.int32();
                    break;
                }
            case 6: {
                    m.power = r.int32();
                    break;
                }
            case 7: {
                    m.rank = r.int32();
                    break;
                }
            case 8: {
                    m.score = r.int32();
                    break;
                }
            case 9: {
                    if (!(m.camp && m.camp.length))
                        m.camp = [];
                    m.camp.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_p3pmbr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_p3pmbr";
    };

    return pb_p3pmbr;
})();

$root.pb_smbr = (function() {

    function pb_smbr(p) {
        this.camp = [];
        this.skls = [];
        this.hide = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_smbr.prototype.name = "";
    pb_smbr.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_smbr.prototype.lv = 0;
    pb_smbr.prototype.logo = 0;
    pb_smbr.prototype.lbox = 0;
    pb_smbr.prototype.score = 0;
    pb_smbr.prototype.like = 0;
    pb_smbr.prototype.cluster = "";
    pb_smbr.prototype.udk = "";
    pb_smbr.prototype.gname = "";
    pb_smbr.prototype.camp = $util.emptyArray;
    pb_smbr.prototype.skls = $util.emptyArray;
    pb_smbr.prototype.power = 0;
    pb_smbr.prototype.hide = $util.emptyArray;

    pb_smbr.create = function create(properties) {
        return new pb_smbr(properties);
    };

    pb_smbr.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(10).string(m.name);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(16).int64(m.uid);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(24).int32(m.lv);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(32).int32(m.logo);
        if (m.lbox != null && Object.hasOwnProperty.call(m, "lbox"))
            w.uint32(40).int32(m.lbox);
        if (m.score != null && Object.hasOwnProperty.call(m, "score"))
            w.uint32(48).int32(m.score);
        if (m.like != null && Object.hasOwnProperty.call(m, "like"))
            w.uint32(56).int32(m.like);
        if (m.cluster != null && Object.hasOwnProperty.call(m, "cluster"))
            w.uint32(66).string(m.cluster);
        if (m.udk != null && Object.hasOwnProperty.call(m, "udk"))
            w.uint32(74).string(m.udk);
        if (m.gname != null && Object.hasOwnProperty.call(m, "gname"))
            w.uint32(82).string(m.gname);
        if (m.camp != null && m.camp.length) {
            for (var i = 0; i < m.camp.length; ++i)
                $root.pb_unit.encode(m.camp[i], w.uint32(90).fork()).ldelim();
        }
        if (m.skls != null && m.skls.length) {
            for (var i = 0; i < m.skls.length; ++i)
                w.uint32(96).int32(m.skls[i]);
        }
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(104).sint32(m.power);
        if (m.hide != null && m.hide.length) {
            for (var i = 0; i < m.hide.length; ++i)
                w.uint32(112).sint32(m.hide[i]);
        }
        return w;
    };

    pb_smbr.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_smbr();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.name = r.string();
                    break;
                }
            case 2: {
                    m.uid = r.int64();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.logo = r.int32();
                    break;
                }
            case 5: {
                    m.lbox = r.int32();
                    break;
                }
            case 6: {
                    m.score = r.int32();
                    break;
                }
            case 7: {
                    m.like = r.int32();
                    break;
                }
            case 8: {
                    m.cluster = r.string();
                    break;
                }
            case 9: {
                    m.udk = r.string();
                    break;
                }
            case 10: {
                    m.gname = r.string();
                    break;
                }
            case 11: {
                    if (!(m.camp && m.camp.length))
                        m.camp = [];
                    m.camp.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            case 12: {
                    if (!(m.skls && m.skls.length))
                        m.skls = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.skls.push(r.int32());
                    } else
                        m.skls.push(r.int32());
                    break;
                }
            case 13: {
                    m.power = r.sint32();
                    break;
                }
            case 14: {
                    if (!(m.hide && m.hide.length))
                        m.hide = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.hide.push(r.sint32());
                    } else
                        m.hide.push(r.sint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_smbr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_smbr";
    };

    return pb_smbr;
})();

$root.pb_smbrs = (function() {

    function pb_smbrs(p) {
        this.mbrs = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_smbrs.prototype.mbrs = $util.emptyArray;
    pb_smbrs.prototype.score = 0;
    pb_smbrs.prototype.rank = 0;
    pb_smbrs.prototype.like = 0;

    pb_smbrs.create = function create(properties) {
        return new pb_smbrs(properties);
    };

    pb_smbrs.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.mbrs != null && m.mbrs.length) {
            for (var i = 0; i < m.mbrs.length; ++i)
                $root.pb_smbr.encode(m.mbrs[i], w.uint32(10).fork()).ldelim();
        }
        if (m.score != null && Object.hasOwnProperty.call(m, "score"))
            w.uint32(16).int32(m.score);
        if (m.rank != null && Object.hasOwnProperty.call(m, "rank"))
            w.uint32(24).int32(m.rank);
        if (m.like != null && Object.hasOwnProperty.call(m, "like"))
            w.uint32(32).int32(m.like);
        return w;
    };

    pb_smbrs.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_smbrs();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.mbrs && m.mbrs.length))
                        m.mbrs = [];
                    m.mbrs.push($root.pb_smbr.decode(r, r.uint32()));
                    break;
                }
            case 2: {
                    m.score = r.int32();
                    break;
                }
            case 3: {
                    m.rank = r.int32();
                    break;
                }
            case 4: {
                    m.like = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_smbrs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_smbrs";
    };

    return pb_smbrs;
})();

$root.pb_template = (function() {

    function pb_template(p) {
        this.buildings = [];
        this.rooms = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_template.prototype.id = 0;
    pb_template.prototype.name = "";
    pb_template.prototype.buildings = $util.emptyArray;
    pb_template.prototype.rooms = $util.emptyArray;

    pb_template.create = function create(properties) {
        return new pb_template(properties);
    };

    pb_template.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(18).string(m.name);
        if (m.buildings != null && m.buildings.length) {
            for (var i = 0; i < m.buildings.length; ++i)
                $root.pb_buildings.encode(m.buildings[i], w.uint32(26).fork()).ldelim();
        }
        if (m.rooms != null && m.rooms.length) {
            for (var i = 0; i < m.rooms.length; ++i)
                $root.pb_room.encode(m.rooms[i], w.uint32(34).fork()).ldelim();
        }
        return w;
    };

    pb_template.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_template();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.name = r.string();
                    break;
                }
            case 3: {
                    if (!(m.buildings && m.buildings.length))
                        m.buildings = [];
                    m.buildings.push($root.pb_buildings.decode(r, r.uint32()));
                    break;
                }
            case 4: {
                    if (!(m.rooms && m.rooms.length))
                        m.rooms = [];
                    m.rooms.push($root.pb_room.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_template.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_template";
    };

    return pb_template;
})();

$root.pb_pvp = (function() {

    function pb_pvp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_pvp.prototype.id = 0;
    pb_pvp.prototype.status = 0;
    pb_pvp.prototype.self = null;
    pb_pvp.prototype.seasonCd = 0;
    pb_pvp.prototype.dailyCd = 0;

    pb_pvp.create = function create(properties) {
        return new pb_pvp(properties);
    };

    pb_pvp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).sint32(m.status);
        if (m.self != null && Object.hasOwnProperty.call(m, "self"))
            $root.pb_pmbr.encode(m.self, w.uint32(26).fork()).ldelim();
        if (m.seasonCd != null && Object.hasOwnProperty.call(m, "seasonCd"))
            w.uint32(32).int32(m.seasonCd);
        if (m.dailyCd != null && Object.hasOwnProperty.call(m, "dailyCd"))
            w.uint32(40).int32(m.dailyCd);
        return w;
    };

    pb_pvp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_pvp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.status = r.sint32();
                    break;
                }
            case 3: {
                    m.self = $root.pb_pmbr.decode(r, r.uint32());
                    break;
                }
            case 4: {
                    m.seasonCd = r.int32();
                    break;
                }
            case 5: {
                    m.dailyCd = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pb_pvp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_pvp";
    };

    return pb_pvp;
})();

$root.pb_wpvp = (function() {

    function pb_wpvp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_wpvp.prototype.wid = 0;
    pb_wpvp.prototype.flag = 0;
    pb_wpvp.prototype.cd = 0;

    pb_wpvp.create = function create(properties) {
        return new pb_wpvp(properties);
    };

    pb_wpvp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.wid);
        if (m.flag != null && Object.hasOwnProperty.call(m, "flag"))
            w.uint32(16).int32(m.flag);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(24).int32(m.cd);
        return w;
    };

    pb_wpvp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_wpvp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.wid = r.int32();
                    break;
                }
            case 2: {
                    m.flag = r.int32();
                    break;
                }
            case 3: {
                    m.cd = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("wid"))
            throw $util.ProtocolError("missing required 'wid'", { instance: m });
        return m;
    };

    pb_wpvp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_wpvp";
    };

    return pb_wpvp;
})();

$root.pb_wmbr = (function() {

    function pb_wmbr(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_wmbr.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_wmbr.prototype.gname = "";
    pb_wmbr.prototype.score = 0;
    pb_wmbr.prototype.name = "";
    pb_wmbr.prototype.logo = 0;
    pb_wmbr.prototype.lv = 0;
    pb_wmbr.prototype.power = 0;
    pb_wmbr.prototype.lbox = 0;
    pb_wmbr.prototype.like = 0;
    pb_wmbr.prototype.king = false;
    pb_wmbr.prototype.num = 0;

    pb_wmbr.create = function create(properties) {
        return new pb_wmbr(properties);
    };

    pb_wmbr.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(8).int64(m.uid);
        if (m.gname != null && Object.hasOwnProperty.call(m, "gname"))
            w.uint32(18).string(m.gname);
        if (m.score != null && Object.hasOwnProperty.call(m, "score"))
            w.uint32(24).int32(m.score);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(34).string(m.name);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(40).int32(m.logo);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(48).int32(m.lv);
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(56).int32(m.power);
        if (m.lbox != null && Object.hasOwnProperty.call(m, "lbox"))
            w.uint32(64).int32(m.lbox);
        if (m.like != null && Object.hasOwnProperty.call(m, "like"))
            w.uint32(72).int32(m.like);
        if (m.king != null && Object.hasOwnProperty.call(m, "king"))
            w.uint32(80).bool(m.king);
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(88).int32(m.num);
        return w;
    };

    pb_wmbr.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_wmbr();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.uid = r.int64();
                    break;
                }
            case 2: {
                    m.gname = r.string();
                    break;
                }
            case 3: {
                    m.score = r.int32();
                    break;
                }
            case 4: {
                    m.name = r.string();
                    break;
                }
            case 5: {
                    m.logo = r.int32();
                    break;
                }
            case 6: {
                    m.lv = r.int32();
                    break;
                }
            case 7: {
                    m.power = r.int32();
                    break;
                }
            case 8: {
                    m.lbox = r.int32();
                    break;
                }
            case 9: {
                    m.like = r.int32();
                    break;
                }
            case 10: {
                    m.king = r.bool();
                    break;
                }
            case 11: {
                    m.num = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_wmbr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_wmbr";
    };

    return pb_wmbr;
})();

$root.pb_link = (function() {

    function pb_link(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_link.prototype.cd = 0;
    pb_link.prototype.win = 0;
    pb_link.prototype.vid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    pb_link.create = function create(properties) {
        return new pb_link(properties);
    };

    pb_link.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(8).int32(m.cd);
        if (m.win != null && Object.hasOwnProperty.call(m, "win"))
            w.uint32(16).int32(m.win);
        if (m.vid != null && Object.hasOwnProperty.call(m, "vid"))
            w.uint32(24).int64(m.vid);
        return w;
    };

    pb_link.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_link();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.cd = r.int32();
                    break;
                }
            case 2: {
                    m.win = r.int32();
                    break;
                }
            case 3: {
                    m.vid = r.int64();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_link.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_link";
    };

    return pb_link;
})();

$root.pb_wlog = (function() {

    function pb_wlog(p) {
        this.atk = [];
        this.def = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_wlog.prototype.vid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_wlog.prototype.atk = $util.emptyArray;
    pb_wlog.prototype.def = $util.emptyArray;
    pb_wlog.prototype.win = false;

    pb_wlog.create = function create(properties) {
        return new pb_wlog(properties);
    };

    pb_wlog.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.vid != null && Object.hasOwnProperty.call(m, "vid"))
            w.uint32(8).int64(m.vid);
        if (m.atk != null && m.atk.length) {
            for (var i = 0; i < m.atk.length; ++i)
                $root.pb_unit.encode(m.atk[i], w.uint32(18).fork()).ldelim();
        }
        if (m.def != null && m.def.length) {
            for (var i = 0; i < m.def.length; ++i)
                $root.pb_unit.encode(m.def[i], w.uint32(26).fork()).ldelim();
        }
        w.uint32(32).bool(m.win);
        return w;
    };

    pb_wlog.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_wlog();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.vid = r.int64();
                    break;
                }
            case 2: {
                    if (!(m.atk && m.atk.length))
                        m.atk = [];
                    m.atk.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            case 3: {
                    if (!(m.def && m.def.length))
                        m.def = [];
                    m.def.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            case 4: {
                    m.win = r.bool();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("win"))
            throw $util.ProtocolError("missing required 'win'", { instance: m });
        return m;
    };

    pb_wlog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_wlog";
    };

    return pb_wlog;
})();

$root.pb_wvideo = (function() {

    function pb_wvideo(p) {
        this.atk = [];
        this.def = [];
        this.frames = [];
        this.hurts = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_wvideo.prototype.atk = $util.emptyArray;
    pb_wvideo.prototype.def = $util.emptyArray;
    pb_wvideo.prototype.frames = $util.emptyArray;
    pb_wvideo.prototype.hurts = $util.emptyArray;
    pb_wvideo.prototype.win = false;

    pb_wvideo.create = function create(properties) {
        return new pb_wvideo(properties);
    };

    pb_wvideo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.atk != null && m.atk.length) {
            for (var i = 0; i < m.atk.length; ++i)
                $root.pb_unit.encode(m.atk[i], w.uint32(10).fork()).ldelim();
        }
        if (m.def != null && m.def.length) {
            for (var i = 0; i < m.def.length; ++i)
                $root.pb_unit.encode(m.def[i], w.uint32(18).fork()).ldelim();
        }
        if (m.frames != null && m.frames.length) {
            for (var i = 0; i < m.frames.length; ++i)
                w.uint32(26).bytes(m.frames[i]);
        }
        if (m.hurts != null && m.hurts.length) {
            for (var i = 0; i < m.hurts.length; ++i)
                $root.pb_hurts.encode(m.hurts[i], w.uint32(34).fork()).ldelim();
        }
        w.uint32(40).bool(m.win);
        return w;
    };

    pb_wvideo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_wvideo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.atk && m.atk.length))
                        m.atk = [];
                    m.atk.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            case 2: {
                    if (!(m.def && m.def.length))
                        m.def = [];
                    m.def.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            case 3: {
                    if (!(m.frames && m.frames.length))
                        m.frames = [];
                    m.frames.push(r.bytes());
                    break;
                }
            case 4: {
                    if (!(m.hurts && m.hurts.length))
                        m.hurts = [];
                    m.hurts.push($root.pb_hurts.decode(r, r.uint32()));
                    break;
                }
            case 5: {
                    m.win = r.bool();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("win"))
            throw $util.ProtocolError("missing required 'win'", { instance: m });
        return m;
    };

    pb_wvideo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_wvideo";
    };

    return pb_wvideo;
})();

$root.pb_wscore = (function() {

    function pb_wscore(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_wscore.prototype.score = 0;
    pb_wscore.prototype.delta = 0;
    pb_wscore.prototype.king = false;

    pb_wscore.create = function create(properties) {
        return new pb_wscore(properties);
    };

    pb_wscore.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.score);
        w.uint32(16).sint32(m.delta);
        if (m.king != null && Object.hasOwnProperty.call(m, "king"))
            w.uint32(24).bool(m.king);
        return w;
    };

    pb_wscore.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_wscore();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.score = r.sint32();
                    break;
                }
            case 2: {
                    m.delta = r.sint32();
                    break;
                }
            case 3: {
                    m.king = r.bool();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("score"))
            throw $util.ProtocolError("missing required 'score'", { instance: m });
        if (!m.hasOwnProperty("delta"))
            throw $util.ProtocolError("missing required 'delta'", { instance: m });
        return m;
    };

    pb_wscore.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_wscore";
    };

    return pb_wscore;
})();

$root.pb_wcamp = (function() {

    function pb_wcamp(p) {
        this.camp = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_wcamp.prototype.camp = $util.emptyArray;

    pb_wcamp.create = function create(properties) {
        return new pb_wcamp(properties);
    };

    pb_wcamp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.camp != null && m.camp.length) {
            for (var i = 0; i < m.camp.length; ++i)
                $root.pb_unit.encode(m.camp[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    pb_wcamp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_wcamp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.camp && m.camp.length))
                        m.camp = [];
                    m.camp.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_wcamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_wcamp";
    };

    return pb_wcamp;
})();

$root.pb_wloger = (function() {

    function pb_wloger(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_wloger.prototype.vid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_wloger.prototype.mbr = null;
    pb_wloger.prototype.time = 0;
    pb_wloger.prototype.atk = false;
    pb_wloger.prototype.win = false;
    pb_wloger.prototype.delta = 0;

    pb_wloger.create = function create(properties) {
        return new pb_wloger(properties);
    };

    pb_wloger.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.vid);
        if (m.mbr != null && Object.hasOwnProperty.call(m, "mbr"))
            $root.pb_wmbr.encode(m.mbr, w.uint32(18).fork()).ldelim();
        if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            w.uint32(24).int32(m.time);
        if (m.atk != null && Object.hasOwnProperty.call(m, "atk"))
            w.uint32(32).bool(m.atk);
        if (m.win != null && Object.hasOwnProperty.call(m, "win"))
            w.uint32(40).bool(m.win);
        if (m.delta != null && Object.hasOwnProperty.call(m, "delta"))
            w.uint32(48).sint32(m.delta);
        return w;
    };

    pb_wloger.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_wloger();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.vid = r.int64();
                    break;
                }
            case 2: {
                    m.mbr = $root.pb_wmbr.decode(r, r.uint32());
                    break;
                }
            case 3: {
                    m.time = r.int32();
                    break;
                }
            case 4: {
                    m.atk = r.bool();
                    break;
                }
            case 5: {
                    m.win = r.bool();
                    break;
                }
            case 6: {
                    m.delta = r.sint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("vid"))
            throw $util.ProtocolError("missing required 'vid'", { instance: m });
        return m;
    };

    pb_wloger.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_wloger";
    };

    return pb_wloger;
})();

$root.pb_pvideo = (function() {

    function pb_pvideo(p) {
        this.frames = [];
        this.hurts = [];
        this.rewards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_pvideo.prototype.id = 0;
    pb_pvideo.prototype.atk = null;
    pb_pvideo.prototype.def = null;
    pb_pvideo.prototype.win = false;
    pb_pvideo.prototype.frames = $util.emptyArray;
    pb_pvideo.prototype.ascore = 0;
    pb_pvideo.prototype.dscore = 0;
    pb_pvideo.prototype.adelta = 0;
    pb_pvideo.prototype.ddelta = 0;
    pb_pvideo.prototype.hurts = $util.emptyArray;
    pb_pvideo.prototype.rewards = $util.emptyArray;
    pb_pvideo.prototype.select = 0;

    pb_pvideo.create = function create(properties) {
        return new pb_pvideo(properties);
    };

    pb_pvideo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.atk != null && Object.hasOwnProperty.call(m, "atk"))
            $root.pb_pmbr.encode(m.atk, w.uint32(18).fork()).ldelim();
        if (m.def != null && Object.hasOwnProperty.call(m, "def"))
            $root.pb_pmbr.encode(m.def, w.uint32(26).fork()).ldelim();
        w.uint32(32).bool(m.win);
        if (m.frames != null && m.frames.length) {
            for (var i = 0; i < m.frames.length; ++i)
                w.uint32(42).bytes(m.frames[i]);
        }
        if (m.ascore != null && Object.hasOwnProperty.call(m, "ascore"))
            w.uint32(48).sint32(m.ascore);
        if (m.dscore != null && Object.hasOwnProperty.call(m, "dscore"))
            w.uint32(56).sint32(m.dscore);
        if (m.adelta != null && Object.hasOwnProperty.call(m, "adelta"))
            w.uint32(64).sint32(m.adelta);
        if (m.ddelta != null && Object.hasOwnProperty.call(m, "ddelta"))
            w.uint32(72).sint32(m.ddelta);
        if (m.hurts != null && m.hurts.length) {
            for (var i = 0; i < m.hurts.length; ++i)
                $root.pb_hurts.encode(m.hurts[i], w.uint32(82).fork()).ldelim();
        }
        if (m.rewards != null && m.rewards.length) {
            for (var i = 0; i < m.rewards.length; ++i)
                $root.pb_bag.encode(m.rewards[i], w.uint32(90).fork()).ldelim();
        }
        if (m.select != null && Object.hasOwnProperty.call(m, "select"))
            w.uint32(96).int32(m.select);
        return w;
    };

    pb_pvideo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_pvideo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.atk = $root.pb_pmbr.decode(r, r.uint32());
                    break;
                }
            case 3: {
                    m.def = $root.pb_pmbr.decode(r, r.uint32());
                    break;
                }
            case 4: {
                    m.win = r.bool();
                    break;
                }
            case 5: {
                    if (!(m.frames && m.frames.length))
                        m.frames = [];
                    m.frames.push(r.bytes());
                    break;
                }
            case 6: {
                    m.ascore = r.sint32();
                    break;
                }
            case 7: {
                    m.dscore = r.sint32();
                    break;
                }
            case 8: {
                    m.adelta = r.sint32();
                    break;
                }
            case 9: {
                    m.ddelta = r.sint32();
                    break;
                }
            case 10: {
                    if (!(m.hurts && m.hurts.length))
                        m.hurts = [];
                    m.hurts.push($root.pb_hurts.decode(r, r.uint32()));
                    break;
                }
            case 11: {
                    if (!(m.rewards && m.rewards.length))
                        m.rewards = [];
                    m.rewards.push($root.pb_bag.decode(r, r.uint32()));
                    break;
                }
            case 12: {
                    m.select = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("win"))
            throw $util.ProtocolError("missing required 'win'", { instance: m });
        return m;
    };

    pb_pvideo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_pvideo";
    };

    return pb_pvideo;
})();

$root.pb_p3pvideo = (function() {

    function pb_p3pvideo(p) {
        this.frames = [];
        this.hurts = [];
        this.rewards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_p3pvideo.prototype.atk = null;
    pb_p3pvideo.prototype.def = null;
    pb_p3pvideo.prototype.win = false;
    pb_p3pvideo.prototype.frames = $util.emptyArray;
    pb_p3pvideo.prototype.hurts = $util.emptyArray;
    pb_p3pvideo.prototype.ascore = 0;
    pb_p3pvideo.prototype.dscore = 0;
    pb_p3pvideo.prototype.adelta = 0;
    pb_p3pvideo.prototype.ddelta = 0;
    pb_p3pvideo.prototype.rewards = $util.emptyArray;
    pb_p3pvideo.prototype.select = 0;

    pb_p3pvideo.create = function create(properties) {
        return new pb_p3pvideo(properties);
    };

    pb_p3pvideo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.atk != null && Object.hasOwnProperty.call(m, "atk"))
            $root.pb_p3pmbr.encode(m.atk, w.uint32(10).fork()).ldelim();
        if (m.def != null && Object.hasOwnProperty.call(m, "def"))
            $root.pb_p3pmbr.encode(m.def, w.uint32(18).fork()).ldelim();
        w.uint32(24).bool(m.win);
        if (m.frames != null && m.frames.length) {
            for (var i = 0; i < m.frames.length; ++i)
                w.uint32(34).bytes(m.frames[i]);
        }
        if (m.hurts != null && m.hurts.length) {
            for (var i = 0; i < m.hurts.length; ++i)
                $root.pb_hurts.encode(m.hurts[i], w.uint32(42).fork()).ldelim();
        }
        if (m.ascore != null && Object.hasOwnProperty.call(m, "ascore"))
            w.uint32(48).sint32(m.ascore);
        if (m.dscore != null && Object.hasOwnProperty.call(m, "dscore"))
            w.uint32(56).sint32(m.dscore);
        if (m.adelta != null && Object.hasOwnProperty.call(m, "adelta"))
            w.uint32(64).sint32(m.adelta);
        if (m.ddelta != null && Object.hasOwnProperty.call(m, "ddelta"))
            w.uint32(72).sint32(m.ddelta);
        if (m.rewards != null && m.rewards.length) {
            for (var i = 0; i < m.rewards.length; ++i)
                $root.pb_bag.encode(m.rewards[i], w.uint32(82).fork()).ldelim();
        }
        if (m.select != null && Object.hasOwnProperty.call(m, "select"))
            w.uint32(88).int32(m.select);
        return w;
    };

    pb_p3pvideo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_p3pvideo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.atk = $root.pb_p3pmbr.decode(r, r.uint32());
                    break;
                }
            case 2: {
                    m.def = $root.pb_p3pmbr.decode(r, r.uint32());
                    break;
                }
            case 3: {
                    m.win = r.bool();
                    break;
                }
            case 4: {
                    if (!(m.frames && m.frames.length))
                        m.frames = [];
                    m.frames.push(r.bytes());
                    break;
                }
            case 5: {
                    if (!(m.hurts && m.hurts.length))
                        m.hurts = [];
                    m.hurts.push($root.pb_hurts.decode(r, r.uint32()));
                    break;
                }
            case 6: {
                    m.ascore = r.sint32();
                    break;
                }
            case 7: {
                    m.dscore = r.sint32();
                    break;
                }
            case 8: {
                    m.adelta = r.sint32();
                    break;
                }
            case 9: {
                    m.ddelta = r.sint32();
                    break;
                }
            case 10: {
                    if (!(m.rewards && m.rewards.length))
                        m.rewards = [];
                    m.rewards.push($root.pb_bag.decode(r, r.uint32()));
                    break;
                }
            case 11: {
                    m.select = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("win"))
            throw $util.ProtocolError("missing required 'win'", { instance: m });
        return m;
    };

    pb_p3pvideo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_p3pvideo";
    };

    return pb_p3pvideo;
})();

$root.pb_htask_info = (function() {

    function pb_htask_info(p) {
        this.hids = [];
        this.heads = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_htask_info.prototype.tid = 0;
    pb_htask_info.prototype.hids = $util.emptyArray;
    pb_htask_info.prototype.heads = $util.emptyArray;

    pb_htask_info.create = function create(properties) {
        return new pb_htask_info(properties);
    };

    pb_htask_info.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.tid != null && Object.hasOwnProperty.call(m, "tid"))
            w.uint32(8).int32(m.tid);
        if (m.hids != null && m.hids.length) {
            for (var i = 0; i < m.hids.length; ++i)
                w.uint32(16).int32(m.hids[i]);
        }
        if (m.heads != null && m.heads.length) {
            for (var i = 0; i < m.heads.length; ++i)
                w.uint32(24).int32(m.heads[i]);
        }
        return w;
    };

    pb_htask_info.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_htask_info();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.tid = r.int32();
                    break;
                }
            case 2: {
                    if (!(m.hids && m.hids.length))
                        m.hids = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.hids.push(r.int32());
                    } else
                        m.hids.push(r.int32());
                    break;
                }
            case 3: {
                    if (!(m.heads && m.heads.length))
                        m.heads = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.heads.push(r.int32());
                    } else
                        m.heads.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_htask_info.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_htask_info";
    };

    return pb_htask_info;
})();

$root.pb_htask_cond = (function() {

    function pb_htask_cond(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_htask_cond.prototype.type = 0;
    pb_htask_cond.prototype.faction = 0;

    pb_htask_cond.create = function create(properties) {
        return new pb_htask_cond(properties);
    };

    pb_htask_cond.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        if (m.faction != null && Object.hasOwnProperty.call(m, "faction"))
            w.uint32(16).int32(m.faction);
        return w;
    };

    pb_htask_cond.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_htask_cond();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.type = r.int32();
                    break;
                }
            case 2: {
                    m.faction = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        return m;
    };

    pb_htask_cond.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_htask_cond";
    };

    return pb_htask_cond;
})();

$root.pb_htask_sync = (function() {

    function pb_htask_sync(p) {
        this.tasks = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_htask_sync.prototype.cd = 0;
    pb_htask_sync.prototype.tasks = $util.emptyArray;

    pb_htask_sync.create = function create(properties) {
        return new pb_htask_sync(properties);
    };

    pb_htask_sync.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.cd);
        if (m.tasks != null && m.tasks.length) {
            for (var i = 0; i < m.tasks.length; ++i)
                $root.pb_htask.encode(m.tasks[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    pb_htask_sync.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_htask_sync();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.cd = r.int32();
                    break;
                }
            case 2: {
                    if (!(m.tasks && m.tasks.length))
                        m.tasks = [];
                    m.tasks.push($root.pb_htask.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("cd"))
            throw $util.ProtocolError("missing required 'cd'", { instance: m });
        return m;
    };

    pb_htask_sync.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_htask_sync";
    };

    return pb_htask_sync;
})();

$root.pb_htask = (function() {

    function pb_htask(p) {
        this.heroes = [];
        this.conds = [];
        this.heads = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_htask.prototype.tid = 0;
    pb_htask.prototype.id = 0;
    pb_htask.prototype.cd = 0;
    pb_htask.prototype.heroes = $util.emptyArray;
    pb_htask.prototype.reward = null;
    pb_htask.prototype.conds = $util.emptyArray;
    pb_htask.prototype.power = 0;
    pb_htask.prototype.lock = 0;
    pb_htask.prototype.nameid = 0;
    pb_htask.prototype.heads = $util.emptyArray;

    pb_htask.create = function create(properties) {
        return new pb_htask(properties);
    };

    pb_htask.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.tid);
        w.uint32(16).int32(m.id);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(24).int32(m.cd);
        if (m.heroes != null && m.heroes.length) {
            for (var i = 0; i < m.heroes.length; ++i)
                $root.pb_unit.encode(m.heroes[i], w.uint32(34).fork()).ldelim();
        }
        if (m.reward != null && Object.hasOwnProperty.call(m, "reward"))
            $root.pb_bag.encode(m.reward, w.uint32(42).fork()).ldelim();
        if (m.conds != null && m.conds.length) {
            for (var i = 0; i < m.conds.length; ++i)
                $root.pb_htask_cond.encode(m.conds[i], w.uint32(50).fork()).ldelim();
        }
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(56).int32(m.power);
        if (m.lock != null && Object.hasOwnProperty.call(m, "lock"))
            w.uint32(64).int32(m.lock);
        w.uint32(72).int32(m.nameid);
        if (m.heads != null && m.heads.length) {
            for (var i = 0; i < m.heads.length; ++i)
                w.uint32(80).int32(m.heads[i]);
        }
        return w;
    };

    pb_htask.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_htask();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.tid = r.int32();
                    break;
                }
            case 2: {
                    m.id = r.int32();
                    break;
                }
            case 3: {
                    m.cd = r.int32();
                    break;
                }
            case 4: {
                    if (!(m.heroes && m.heroes.length))
                        m.heroes = [];
                    m.heroes.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            case 5: {
                    m.reward = $root.pb_bag.decode(r, r.uint32());
                    break;
                }
            case 6: {
                    if (!(m.conds && m.conds.length))
                        m.conds = [];
                    m.conds.push($root.pb_htask_cond.decode(r, r.uint32()));
                    break;
                }
            case 7: {
                    m.power = r.int32();
                    break;
                }
            case 8: {
                    m.lock = r.int32();
                    break;
                }
            case 9: {
                    m.nameid = r.int32();
                    break;
                }
            case 10: {
                    if (!(m.heads && m.heads.length))
                        m.heads = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.heads.push(r.int32());
                    } else
                        m.heads.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("tid"))
            throw $util.ProtocolError("missing required 'tid'", { instance: m });
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("nameid"))
            throw $util.ProtocolError("missing required 'nameid'", { instance: m });
        return m;
    };

    pb_htask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_htask";
    };

    return pb_htask;
})();

$root.pb_evideo = (function() {

    function pb_evideo(p) {
        this.frames = [];
        this.camp = [];
        this.hurts = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_evideo.prototype.frames = $util.emptyArray;
    pb_evideo.prototype.win = false;
    pb_evideo.prototype.reward = null;
    pb_evideo.prototype.camp = $util.emptyArray;
    pb_evideo.prototype.hurts = $util.emptyArray;

    pb_evideo.create = function create(properties) {
        return new pb_evideo(properties);
    };

    pb_evideo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.frames != null && m.frames.length) {
            for (var i = 0; i < m.frames.length; ++i)
                w.uint32(10).bytes(m.frames[i]);
        }
        if (m.win != null && Object.hasOwnProperty.call(m, "win"))
            w.uint32(16).bool(m.win);
        if (m.reward != null && Object.hasOwnProperty.call(m, "reward"))
            $root.pb_bag.encode(m.reward, w.uint32(26).fork()).ldelim();
        if (m.camp != null && m.camp.length) {
            for (var i = 0; i < m.camp.length; ++i)
                $root.pb_unit.encode(m.camp[i], w.uint32(34).fork()).ldelim();
        }
        if (m.hurts != null && m.hurts.length) {
            for (var i = 0; i < m.hurts.length; ++i)
                $root.pb_hurts.encode(m.hurts[i], w.uint32(42).fork()).ldelim();
        }
        return w;
    };

    pb_evideo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_evideo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.frames && m.frames.length))
                        m.frames = [];
                    m.frames.push(r.bytes());
                    break;
                }
            case 2: {
                    m.win = r.bool();
                    break;
                }
            case 3: {
                    m.reward = $root.pb_bag.decode(r, r.uint32());
                    break;
                }
            case 4: {
                    if (!(m.camp && m.camp.length))
                        m.camp = [];
                    m.camp.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            case 5: {
                    if (!(m.hurts && m.hurts.length))
                        m.hurts = [];
                    m.hurts.push($root.pb_hurts.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_evideo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_evideo";
    };

    return pb_evideo;
})();

$root.pb_hurts = (function() {

    function pb_hurts(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_hurts.prototype.pos = 0;
    pb_hurts.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_hurts.prototype.heal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    pb_hurts.create = function create(properties) {
        return new pb_hurts(properties);
    };

    pb_hurts.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.pos);
        w.uint32(16).int64(m.value);
        if (m.heal != null && Object.hasOwnProperty.call(m, "heal"))
            w.uint32(24).int64(m.heal);
        return w;
    };

    pb_hurts.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_hurts();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.pos = r.int32();
                    break;
                }
            case 2: {
                    m.value = r.int64();
                    break;
                }
            case 3: {
                    m.heal = r.int64();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("pos"))
            throw $util.ProtocolError("missing required 'pos'", { instance: m });
        if (!m.hasOwnProperty("value"))
            throw $util.ProtocolError("missing required 'value'", { instance: m });
        return m;
    };

    pb_hurts.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_hurts";
    };

    return pb_hurts;
})();

$root.pb_alogin = (function() {

    function pb_alogin(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_alogin.prototype.flag = "";
    pb_alogin.prototype.cd = 0;
    pb_alogin.prototype.idx = 0;
    pb_alogin.prototype.num = 0;
    pb_alogin.prototype.cd2 = 0;
    pb_alogin.prototype.first = 0;

    pb_alogin.create = function create(properties) {
        return new pb_alogin(properties);
    };

    pb_alogin.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.flag);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(16).int32(m.cd);
        if (m.idx != null && Object.hasOwnProperty.call(m, "idx"))
            w.uint32(24).int32(m.idx);
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(32).int32(m.num);
        if (m.cd2 != null && Object.hasOwnProperty.call(m, "cd2"))
            w.uint32(40).int32(m.cd2);
        if (m.first != null && Object.hasOwnProperty.call(m, "first"))
            w.uint32(48).int32(m.first);
        return w;
    };

    pb_alogin.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_alogin();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.flag = r.string();
                    break;
                }
            case 2: {
                    m.cd = r.int32();
                    break;
                }
            case 3: {
                    m.idx = r.int32();
                    break;
                }
            case 4: {
                    m.num = r.int32();
                    break;
                }
            case 5: {
                    m.cd2 = r.int32();
                    break;
                }
            case 6: {
                    m.first = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("flag"))
            throw $util.ProtocolError("missing required 'flag'", { instance: m });
        return m;
    };

    pb_alogin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_alogin";
    };

    return pb_alogin;
})();

$root.pb_act = (function() {

    function pb_act(p) {
        this.grow = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_act.prototype.id = 0;
    pb_act.prototype.status = 0;
    pb_act.prototype.cd = 0;
    pb_act.prototype.limits = 0;
    pb_act.prototype.read = 0;
    pb_act.prototype.next = 0;
    pb_act.prototype.loop = 0;
    pb_act.prototype.bomb = 0;
    pb_act.prototype.monopoly = null;
    pb_act.prototype.code = "";
    pb_act.prototype.limits2 = 0;
    pb_act.prototype.bir = 0;
    pb_act.prototype.kv = null;
    pb_act.prototype.grow = $util.emptyArray;

    pb_act.create = function create(properties) {
        return new pb_act(properties);
    };

    pb_act.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).uint32(m.id);
        if (m.status != null && Object.hasOwnProperty.call(m, "status"))
            w.uint32(16).int32(m.status);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(24).uint32(m.cd);
        if (m.limits != null && Object.hasOwnProperty.call(m, "limits"))
            w.uint32(32).int32(m.limits);
        if (m.read != null && Object.hasOwnProperty.call(m, "read"))
            w.uint32(40).int32(m.read);
        if (m.next != null && Object.hasOwnProperty.call(m, "next"))
            w.uint32(48).uint32(m.next);
        if (m.loop != null && Object.hasOwnProperty.call(m, "loop"))
            w.uint32(56).int32(m.loop);
        if (m.bomb != null && Object.hasOwnProperty.call(m, "bomb"))
            w.uint32(64).int32(m.bomb);
        if (m.monopoly != null && Object.hasOwnProperty.call(m, "monopoly"))
            $root.pb_monopoly.encode(m.monopoly, w.uint32(74).fork()).ldelim();
        if (m.code != null && Object.hasOwnProperty.call(m, "code"))
            w.uint32(82).string(m.code);
        if (m.limits2 != null && Object.hasOwnProperty.call(m, "limits2"))
            w.uint32(88).int32(m.limits2);
        if (m.bir != null && Object.hasOwnProperty.call(m, "bir"))
            w.uint32(96).int32(m.bir);
        if (m.kv != null && Object.hasOwnProperty.call(m, "kv"))
            $root.pb_kvs.encode(m.kv, w.uint32(106).fork()).ldelim();
        if (m.grow != null && m.grow.length) {
            for (var i = 0; i < m.grow.length; ++i)
                $root.pb_growup.encode(m.grow[i], w.uint32(114).fork()).ldelim();
        }
        return w;
    };

    pb_act.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_act();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.uint32();
                    break;
                }
            case 2: {
                    m.status = r.int32();
                    break;
                }
            case 3: {
                    m.cd = r.uint32();
                    break;
                }
            case 4: {
                    m.limits = r.int32();
                    break;
                }
            case 5: {
                    m.read = r.int32();
                    break;
                }
            case 6: {
                    m.next = r.uint32();
                    break;
                }
            case 7: {
                    m.loop = r.int32();
                    break;
                }
            case 8: {
                    m.bomb = r.int32();
                    break;
                }
            case 9: {
                    m.monopoly = $root.pb_monopoly.decode(r, r.uint32());
                    break;
                }
            case 10: {
                    m.code = r.string();
                    break;
                }
            case 11: {
                    m.limits2 = r.int32();
                    break;
                }
            case 12: {
                    m.bir = r.int32();
                    break;
                }
            case 13: {
                    m.kv = $root.pb_kvs.decode(r, r.uint32());
                    break;
                }
            case 14: {
                    if (!(m.grow && m.grow.length))
                        m.grow = [];
                    m.grow.push($root.pb_growup.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    pb_act.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_act";
    };

    return pb_act;
})();

$root.pb_qstar = (function() {

    function pb_qstar(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_qstar.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_qstar.prototype.name = "";
    pb_qstar.prototype.logo = 0;
    pb_qstar.prototype.score = 0;

    pb_qstar.create = function create(properties) {
        return new pb_qstar(properties);
    };

    pb_qstar.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(8).int64(m.uid);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(18).string(m.name);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(24).int32(m.logo);
        if (m.score != null && Object.hasOwnProperty.call(m, "score"))
            w.uint32(32).uint32(m.score);
        return w;
    };

    pb_qstar.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_qstar();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.uid = r.int64();
                    break;
                }
            case 2: {
                    m.name = r.string();
                    break;
                }
            case 3: {
                    m.logo = r.int32();
                    break;
                }
            case 4: {
                    m.score = r.uint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_qstar.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_qstar";
    };

    return pb_qstar;
})();

$root.pb_monopoly = (function() {

    function pb_monopoly(p) {
        this.lv = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_monopoly.prototype.pos = 0;
    pb_monopoly.prototype.lv = $util.emptyArray;
    pb_monopoly.prototype.nextEvent = 0;
    pb_monopoly.prototype.star = 0;

    pb_monopoly.create = function create(properties) {
        return new pb_monopoly(properties);
    };

    pb_monopoly.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.pos);
        if (m.lv != null && m.lv.length) {
            for (var i = 0; i < m.lv.length; ++i)
                w.uint32(16).int32(m.lv[i]);
        }
        if (m.nextEvent != null && Object.hasOwnProperty.call(m, "nextEvent"))
            w.uint32(24).int32(m.nextEvent);
        if (m.star != null && Object.hasOwnProperty.call(m, "star"))
            w.uint32(32).int32(m.star);
        return w;
    };

    pb_monopoly.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_monopoly();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.pos = r.int32();
                    break;
                }
            case 2: {
                    if (!(m.lv && m.lv.length))
                        m.lv = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.lv.push(r.int32());
                    } else
                        m.lv.push(r.int32());
                    break;
                }
            case 3: {
                    m.nextEvent = r.int32();
                    break;
                }
            case 4: {
                    m.star = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("pos"))
            throw $util.ProtocolError("missing required 'pos'", { instance: m });
        return m;
    };

    pb_monopoly.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_monopoly";
    };

    return pb_monopoly;
})();

$root.pb_monopoly_step = (function() {

    function pb_monopoly_step(p) {
        this.reward = [];
        this.cards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_monopoly_step.prototype.id = 0;
    pb_monopoly_step.prototype.reward = $util.emptyArray;
    pb_monopoly_step.prototype.star = 0;
    pb_monopoly_step.prototype.event = 0;
    pb_monopoly_step.prototype.cards = $util.emptyArray;
    pb_monopoly_step.prototype.opId = 0;

    pb_monopoly_step.create = function create(properties) {
        return new pb_monopoly_step(properties);
    };

    pb_monopoly_step.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        if (m.reward != null && m.reward.length) {
            for (var i = 0; i < m.reward.length; ++i)
                $root.pb_item.encode(m.reward[i], w.uint32(18).fork()).ldelim();
        }
        if (m.star != null && Object.hasOwnProperty.call(m, "star"))
            w.uint32(24).int32(m.star);
        if (m.event != null && Object.hasOwnProperty.call(m, "event"))
            w.uint32(32).int32(m.event);
        if (m.cards != null && m.cards.length) {
            for (var i = 0; i < m.cards.length; ++i)
                w.uint32(40).int32(m.cards[i]);
        }
        if (m.opId != null && Object.hasOwnProperty.call(m, "opId"))
            w.uint32(48).int32(m.opId);
        return w;
    };

    pb_monopoly_step.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_monopoly_step();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    if (!(m.reward && m.reward.length))
                        m.reward = [];
                    m.reward.push($root.pb_item.decode(r, r.uint32()));
                    break;
                }
            case 3: {
                    m.star = r.int32();
                    break;
                }
            case 4: {
                    m.event = r.int32();
                    break;
                }
            case 5: {
                    if (!(m.cards && m.cards.length))
                        m.cards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.cards.push(r.int32());
                    } else
                        m.cards.push(r.int32());
                    break;
                }
            case 6: {
                    m.opId = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    pb_monopoly_step.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_monopoly_step";
    };

    return pb_monopoly_step;
})();

$root.pb_sact_item = (function() {

    function pb_sact_item(p) {
        this.maze = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_sact_item.prototype.id = 0;
    pb_sact_item.prototype.cd = 0;
    pb_sact_item.prototype.bomb = 0;
    pb_sact_item.prototype.limits = 0;
    pb_sact_item.prototype.next = 0;
    pb_sact_item.prototype.maze = $util.emptyArray;
    pb_sact_item.prototype.spec = 0;

    pb_sact_item.create = function create(properties) {
        return new pb_sact_item(properties);
    };

    pb_sact_item.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).uint32(m.id);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(16).uint32(m.cd);
        if (m.bomb != null && Object.hasOwnProperty.call(m, "bomb"))
            w.uint32(24).int32(m.bomb);
        if (m.limits != null && Object.hasOwnProperty.call(m, "limits"))
            w.uint32(32).int32(m.limits);
        if (m.next != null && Object.hasOwnProperty.call(m, "next"))
            w.uint32(40).uint32(m.next);
        if (m.maze != null && m.maze.length) {
            for (var i = 0; i < m.maze.length; ++i)
                $root.pb_sact_maze.encode(m.maze[i], w.uint32(50).fork()).ldelim();
        }
        if (m.spec != null && Object.hasOwnProperty.call(m, "spec"))
            w.uint32(56).uint32(m.spec);
        return w;
    };

    pb_sact_item.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_sact_item();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.uint32();
                    break;
                }
            case 2: {
                    m.cd = r.uint32();
                    break;
                }
            case 3: {
                    m.bomb = r.int32();
                    break;
                }
            case 4: {
                    m.limits = r.int32();
                    break;
                }
            case 5: {
                    m.next = r.uint32();
                    break;
                }
            case 6: {
                    if (!(m.maze && m.maze.length))
                        m.maze = [];
                    m.maze.push($root.pb_sact_maze.decode(r, r.uint32()));
                    break;
                }
            case 7: {
                    m.spec = r.uint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    pb_sact_item.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_sact_item";
    };

    return pb_sact_item;
})();

$root.pb_ract_item = (function() {

    function pb_ract_item(p) {
        this.rewards = [];
        this.item = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_ract_item.prototype.id = 0;
    pb_ract_item.prototype.rewards = $util.emptyArray;
    pb_ract_item.prototype.item = $util.emptyArray;
    pb_ract_item.prototype.day = 0;
    pb_ract_item.prototype.cd = 0;

    pb_ract_item.create = function create(properties) {
        return new pb_ract_item(properties);
    };

    pb_ract_item.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).uint32(m.id);
        if (m.rewards != null && m.rewards.length) {
            for (var i = 0; i < m.rewards.length; ++i)
                w.uint32(16).uint32(m.rewards[i]);
        }
        if (m.item != null && m.item.length) {
            for (var i = 0; i < m.item.length; ++i)
                $root.pb_item.encode(m.item[i], w.uint32(26).fork()).ldelim();
        }
        if (m.day != null && Object.hasOwnProperty.call(m, "day"))
            w.uint32(32).int32(m.day);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(40).int32(m.cd);
        return w;
    };

    pb_ract_item.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_ract_item();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.uint32();
                    break;
                }
            case 2: {
                    if (!(m.rewards && m.rewards.length))
                        m.rewards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.rewards.push(r.uint32());
                    } else
                        m.rewards.push(r.uint32());
                    break;
                }
            case 3: {
                    if (!(m.item && m.item.length))
                        m.item = [];
                    m.item.push($root.pb_item.decode(r, r.uint32()));
                    break;
                }
            case 4: {
                    m.day = r.int32();
                    break;
                }
            case 5: {
                    m.cd = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    pb_ract_item.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_ract_item";
    };

    return pb_ract_item;
})();

$root.pb_sact_maze = (function() {

    function pb_sact_maze(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_sact_maze.prototype.pos = 0;
    pb_sact_maze.prototype.id = 0;
    pb_sact_maze.prototype.rewards = null;
    pb_sact_maze.prototype.num = 0;

    pb_sact_maze.create = function create(properties) {
        return new pb_sact_maze(properties);
    };

    pb_sact_maze.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.pos);
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(16).int32(m.id);
        if (m.rewards != null && Object.hasOwnProperty.call(m, "rewards"))
            $root.pb_bag.encode(m.rewards, w.uint32(26).fork()).ldelim();
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(32).int32(m.num);
        return w;
    };

    pb_sact_maze.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_sact_maze();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.pos = r.int32();
                    break;
                }
            case 2: {
                    m.id = r.int32();
                    break;
                }
            case 3: {
                    m.rewards = $root.pb_bag.decode(r, r.uint32());
                    break;
                }
            case 4: {
                    m.num = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("pos"))
            throw $util.ProtocolError("missing required 'pos'", { instance: m });
        return m;
    };

    pb_sact_maze.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_sact_maze";
    };

    return pb_sact_maze;
})();

$root.pb_sact_log = (function() {

    function pb_sact_log(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_sact_log.prototype.time = 0;
    pb_sact_log.prototype.result = 0;

    pb_sact_log.create = function create(properties) {
        return new pb_sact_log(properties);
    };

    pb_sact_log.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            w.uint32(8).int32(m.time);
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            w.uint32(16).int32(m.result);
        return w;
    };

    pb_sact_log.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_sact_log();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.time = r.int32();
                    break;
                }
            case 2: {
                    m.result = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_sact_log.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_sact_log";
    };

    return pb_sact_log;
})();

$root.pb_mact = (function() {

    function pb_mact(p) {
        this.war = [];
        this.htask = [];
        this.hmerge = [];
        this.brave = [];
        this.hmerge2 = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_mact.prototype.cd = 0;
    pb_mact.prototype.war = $util.emptyArray;
    pb_mact.prototype.htask = $util.emptyArray;
    pb_mact.prototype.hmerge = $util.emptyArray;
    pb_mact.prototype.spaceSt = 0;
    pb_mact.prototype.brave = $util.emptyArray;
    pb_mact.prototype.status = 0;
    pb_mact.prototype.hmerge2 = $util.emptyArray;

    pb_mact.create = function create(properties) {
        return new pb_mact(properties);
    };

    pb_mact.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).uint32(m.cd);
        if (m.war != null && m.war.length) {
            for (var i = 0; i < m.war.length; ++i)
                $root.pb_item.encode(m.war[i], w.uint32(18).fork()).ldelim();
        }
        if (m.htask != null && m.htask.length) {
            for (var i = 0; i < m.htask.length; ++i)
                $root.pb_item.encode(m.htask[i], w.uint32(26).fork()).ldelim();
        }
        if (m.hmerge != null && m.hmerge.length) {
            for (var i = 0; i < m.hmerge.length; ++i)
                $root.pb_item.encode(m.hmerge[i], w.uint32(34).fork()).ldelim();
        }
        if (m.spaceSt != null && Object.hasOwnProperty.call(m, "spaceSt"))
            w.uint32(40).int32(m.spaceSt);
        if (m.brave != null && m.brave.length) {
            for (var i = 0; i < m.brave.length; ++i)
                $root.pb_item.encode(m.brave[i], w.uint32(50).fork()).ldelim();
        }
        if (m.status != null && Object.hasOwnProperty.call(m, "status"))
            w.uint32(56).int32(m.status);
        if (m.hmerge2 != null && m.hmerge2.length) {
            for (var i = 0; i < m.hmerge2.length; ++i)
                $root.pb_item.encode(m.hmerge2[i], w.uint32(66).fork()).ldelim();
        }
        return w;
    };

    pb_mact.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_mact();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.cd = r.uint32();
                    break;
                }
            case 2: {
                    if (!(m.war && m.war.length))
                        m.war = [];
                    m.war.push($root.pb_item.decode(r, r.uint32()));
                    break;
                }
            case 3: {
                    if (!(m.htask && m.htask.length))
                        m.htask = [];
                    m.htask.push($root.pb_item.decode(r, r.uint32()));
                    break;
                }
            case 4: {
                    if (!(m.hmerge && m.hmerge.length))
                        m.hmerge = [];
                    m.hmerge.push($root.pb_item.decode(r, r.uint32()));
                    break;
                }
            case 5: {
                    m.spaceSt = r.int32();
                    break;
                }
            case 6: {
                    if (!(m.brave && m.brave.length))
                        m.brave = [];
                    m.brave.push($root.pb_item.decode(r, r.uint32()));
                    break;
                }
            case 7: {
                    m.status = r.int32();
                    break;
                }
            case 8: {
                    if (!(m.hmerge2 && m.hmerge2.length))
                        m.hmerge2 = [];
                    m.hmerge2.push($root.pb_item.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("cd"))
            throw $util.ProtocolError("missing required 'cd'", { instance: m });
        return m;
    };

    pb_mact.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_mact";
    };

    return pb_mact;
})();

$root.pb_task = (function() {

    function pb_task(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_task.prototype.id = 0;
    pb_task.prototype.count = 0;
    pb_task.prototype.isClaim = 0;

    pb_task.create = function create(properties) {
        return new pb_task(properties);
    };

    pb_task.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).int32(m.count);
        w.uint32(24).int32(m.isClaim);
        return w;
    };

    pb_task.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_task();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.count = r.int32();
                    break;
                }
            case 3: {
                    m.isClaim = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("count"))
            throw $util.ProtocolError("missing required 'count'", { instance: m });
        if (!m.hasOwnProperty("isClaim"))
            throw $util.ProtocolError("missing required 'isClaim'", { instance: m });
        return m;
    };

    pb_task.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_task";
    };

    return pb_task;
})();

$root.pb_online = (function() {

    function pb_online(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_online.prototype.id = 0;
    pb_online.prototype.cd = 0;

    pb_online.create = function create(properties) {
        return new pb_online(properties);
    };

    pb_online.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(16).int32(m.cd);
        return w;
    };

    pb_online.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_online();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.cd = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    pb_online.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_online";
    };

    return pb_online;
})();

$root.pb_sachieve = (function() {

    function pb_sachieve(p) {
        this.num = [];
        this.id = [];
        this.curnum = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_sachieve.prototype.num = $util.emptyArray;
    pb_sachieve.prototype.id = $util.emptyArray;
    pb_sachieve.prototype.curnum = $util.emptyArray;

    pb_sachieve.create = function create(properties) {
        return new pb_sachieve(properties);
    };

    pb_sachieve.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.num != null && m.num.length) {
            for (var i = 0; i < m.num.length; ++i)
                w.uint32(8).int32(m.num[i]);
        }
        if (m.id != null && m.id.length) {
            for (var i = 0; i < m.id.length; ++i)
                w.uint32(16).int32(m.id[i]);
        }
        if (m.curnum != null && m.curnum.length) {
            for (var i = 0; i < m.curnum.length; ++i)
                w.uint32(24).int32(m.curnum[i]);
        }
        return w;
    };

    pb_sachieve.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_sachieve();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.num && m.num.length))
                        m.num = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.num.push(r.int32());
                    } else
                        m.num.push(r.int32());
                    break;
                }
            case 2: {
                    if (!(m.id && m.id.length))
                        m.id = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.id.push(r.int32());
                    } else
                        m.id.push(r.int32());
                    break;
                }
            case 3: {
                    if (!(m.curnum && m.curnum.length))
                        m.curnum = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.curnum.push(r.int32());
                    } else
                        m.curnum.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_sachieve.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_sachieve";
    };

    return pb_sachieve;
})();

$root.pb_hmarket = (function() {

    function pb_hmarket(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_hmarket.prototype.id = 0;
    pb_hmarket.prototype.num = 0;
    pb_hmarket.prototype.cd = 0;

    pb_hmarket.create = function create(properties) {
        return new pb_hmarket(properties);
    };

    pb_hmarket.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(16).int32(m.num);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(24).int32(m.cd);
        return w;
    };

    pb_hmarket.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_hmarket();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.num = r.int32();
                    break;
                }
            case 3: {
                    m.cd = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    pb_hmarket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_hmarket";
    };

    return pb_hmarket;
})();

$root.pb_gmarket = (function() {

    function pb_gmarket(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_gmarket.prototype.id = 0;
    pb_gmarket.prototype.num = 0;
    pb_gmarket.prototype.gid = 0;

    pb_gmarket.create = function create(properties) {
        return new pb_gmarket(properties);
    };

    pb_gmarket.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(16).int32(m.num);
        if (m.gid != null && Object.hasOwnProperty.call(m, "gid"))
            w.uint32(24).int32(m.gid);
        return w;
    };

    pb_gmarket.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_gmarket();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.num = r.int32();
                    break;
                }
            case 3: {
                    m.gid = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    pb_gmarket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_gmarket";
    };

    return pb_gmarket;
})();

$root.pb_gvrank = (function() {

    function pb_gvrank(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_gvrank.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_gvrank.prototype.name = "";
    pb_gvrank.prototype.lv = 0;
    pb_gvrank.prototype.logo = 0;
    pb_gvrank.prototype.hurt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_gvrank.prototype.reward = null;
    pb_gvrank.prototype.border = 0;

    pb_gvrank.create = function create(properties) {
        return new pb_gvrank(properties);
    };

    pb_gvrank.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.uid);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(18).string(m.name);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(24).int32(m.lv);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(32).int32(m.logo);
        w.uint32(40).int64(m.hurt);
        if (m.reward != null && Object.hasOwnProperty.call(m, "reward"))
            $root.pb_bag.encode(m.reward, w.uint32(50).fork()).ldelim();
        if (m.border != null && Object.hasOwnProperty.call(m, "border"))
            w.uint32(56).int32(m.border);
        return w;
    };

    pb_gvrank.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_gvrank();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.uid = r.int64();
                    break;
                }
            case 2: {
                    m.name = r.string();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.logo = r.int32();
                    break;
                }
            case 5: {
                    m.hurt = r.int64();
                    break;
                }
            case 6: {
                    m.reward = $root.pb_bag.decode(r, r.uint32());
                    break;
                }
            case 7: {
                    m.border = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uid"))
            throw $util.ProtocolError("missing required 'uid'", { instance: m });
        if (!m.hasOwnProperty("hurt"))
            throw $util.ProtocolError("missing required 'hurt'", { instance: m });
        return m;
    };

    pb_gvrank.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_gvrank";
    };

    return pb_gvrank;
})();

$root.pb_gvrank_donate = (function() {

    function pb_gvrank_donate(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_gvrank_donate.prototype.name = "";
    pb_gvrank_donate.prototype.lv = 0;
    pb_gvrank_donate.prototype.logo = 0;
    pb_gvrank_donate.prototype.num = 0;

    pb_gvrank_donate.create = function create(properties) {
        return new pb_gvrank_donate(properties);
    };

    pb_gvrank_donate.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.name);
        w.uint32(16).int32(m.lv);
        w.uint32(24).int32(m.logo);
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(32).int32(m.num);
        return w;
    };

    pb_gvrank_donate.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_gvrank_donate();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.name = r.string();
                    break;
                }
            case 2: {
                    m.lv = r.int32();
                    break;
                }
            case 3: {
                    m.logo = r.int32();
                    break;
                }
            case 4: {
                    m.num = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("lv"))
            throw $util.ProtocolError("missing required 'lv'", { instance: m });
        if (!m.hasOwnProperty("logo"))
            throw $util.ProtocolError("missing required 'logo'", { instance: m });
        return m;
    };

    pb_gvrank_donate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_gvrank_donate";
    };

    return pb_gvrank_donate;
})();

$root.pb_bboss = (function() {

    function pb_bboss(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_bboss.prototype.uid = 0;
    pb_bboss.prototype.name = "";
    pb_bboss.prototype.lv = 0;
    pb_bboss.prototype.logo = 0;
    pb_bboss.prototype.hurt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    pb_bboss.prototype.sid = 0;

    pb_bboss.create = function create(properties) {
        return new pb_bboss(properties);
    };

    pb_bboss.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.uid);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(18).string(m.name);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(24).int32(m.lv);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(32).int32(m.logo);
        w.uint32(40).uint64(m.hurt);
        if (m.sid != null && Object.hasOwnProperty.call(m, "sid"))
            w.uint32(48).int32(m.sid);
        return w;
    };

    pb_bboss.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_bboss();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.uid = r.int32();
                    break;
                }
            case 2: {
                    m.name = r.string();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.logo = r.int32();
                    break;
                }
            case 5: {
                    m.hurt = r.uint64();
                    break;
                }
            case 6: {
                    m.sid = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uid"))
            throw $util.ProtocolError("missing required 'uid'", { instance: m });
        if (!m.hasOwnProperty("hurt"))
            throw $util.ProtocolError("missing required 'hurt'", { instance: m });
        return m;
    };

    pb_bboss.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_bboss";
    };

    return pb_bboss;
})();

$root.pb_gskl = (function() {

    function pb_gskl(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_gskl.prototype.id = 0;
    pb_gskl.prototype.lv = 0;

    pb_gskl.create = function create(properties) {
        return new pb_gskl(properties);
    };

    pb_gskl.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).int32(m.lv);
        return w;
    };

    pb_gskl.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_gskl();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.lv = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("lv"))
            throw $util.ProtocolError("missing required 'lv'", { instance: m });
        return m;
    };

    pb_gskl.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_gskl";
    };

    return pb_gskl;
})();

$root.pb_bunit = (function() {

    function pb_bunit(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_bunit.prototype.hid = 0;
    pb_bunit.prototype.id = 0;
    pb_bunit.prototype.lv = 0;
    pb_bunit.prototype.star = 0;
    pb_bunit.prototype.hpp = 0;
    pb_bunit.prototype.pos = 0;
    pb_bunit.prototype.wake = 0;
    pb_bunit.prototype.revive = 0;
    pb_bunit.prototype.skin = 0;
    pb_bunit.prototype.flag = 0;
    pb_bunit.prototype.qlv = 0;
    pb_bunit.prototype.core = 0;

    pb_bunit.create = function create(properties) {
        return new pb_bunit(properties);
    };

    pb_bunit.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.hid != null && Object.hasOwnProperty.call(m, "hid"))
            w.uint32(8).int32(m.hid);
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(16).int32(m.id);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(24).int32(m.lv);
        if (m.star != null && Object.hasOwnProperty.call(m, "star"))
            w.uint32(32).int32(m.star);
        if (m.hpp != null && Object.hasOwnProperty.call(m, "hpp"))
            w.uint32(40).int32(m.hpp);
        if (m.pos != null && Object.hasOwnProperty.call(m, "pos"))
            w.uint32(48).int32(m.pos);
        if (m.wake != null && Object.hasOwnProperty.call(m, "wake"))
            w.uint32(56).int32(m.wake);
        if (m.revive != null && Object.hasOwnProperty.call(m, "revive"))
            w.uint32(64).int32(m.revive);
        if (m.skin != null && Object.hasOwnProperty.call(m, "skin"))
            w.uint32(72).int32(m.skin);
        if (m.flag != null && Object.hasOwnProperty.call(m, "flag"))
            w.uint32(80).int32(m.flag);
        if (m.qlv != null && Object.hasOwnProperty.call(m, "qlv"))
            w.uint32(88).int32(m.qlv);
        if (m.core != null && Object.hasOwnProperty.call(m, "core"))
            w.uint32(96).int32(m.core);
        return w;
    };

    pb_bunit.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_bunit();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.hid = r.int32();
                    break;
                }
            case 2: {
                    m.id = r.int32();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.star = r.int32();
                    break;
                }
            case 5: {
                    m.hpp = r.int32();
                    break;
                }
            case 6: {
                    m.pos = r.int32();
                    break;
                }
            case 7: {
                    m.wake = r.int32();
                    break;
                }
            case 8: {
                    m.revive = r.int32();
                    break;
                }
            case 9: {
                    m.skin = r.int32();
                    break;
                }
            case 10: {
                    m.flag = r.int32();
                    break;
                }
            case 11: {
                    m.qlv = r.int32();
                    break;
                }
            case 12: {
                    m.core = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_bunit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_bunit";
    };

    return pb_bunit;
})();

$root.pb_benemy = (function() {

    function pb_benemy(p) {
        this.camp = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_benemy.prototype.logo = 0;
    pb_benemy.prototype.lv = 0;
    pb_benemy.prototype.name = "";
    pb_benemy.prototype.power = 0;
    pb_benemy.prototype.sid = 0;
    pb_benemy.prototype.camp = $util.emptyArray;
    pb_benemy.prototype.border = 0;

    pb_benemy.create = function create(properties) {
        return new pb_benemy(properties);
    };

    pb_benemy.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.logo);
        w.uint32(16).int32(m.lv);
        w.uint32(26).string(m.name);
        w.uint32(32).int32(m.power);
        w.uint32(40).int32(m.sid);
        if (m.camp != null && m.camp.length) {
            for (var i = 0; i < m.camp.length; ++i)
                $root.pb_bunit.encode(m.camp[i], w.uint32(50).fork()).ldelim();
        }
        if (m.border != null && Object.hasOwnProperty.call(m, "border"))
            w.uint32(56).int32(m.border);
        return w;
    };

    pb_benemy.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_benemy();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.logo = r.int32();
                    break;
                }
            case 2: {
                    m.lv = r.int32();
                    break;
                }
            case 3: {
                    m.name = r.string();
                    break;
                }
            case 4: {
                    m.power = r.int32();
                    break;
                }
            case 5: {
                    m.sid = r.int32();
                    break;
                }
            case 6: {
                    if (!(m.camp && m.camp.length))
                        m.camp = [];
                    m.camp.push($root.pb_bunit.decode(r, r.uint32()));
                    break;
                }
            case 7: {
                    m.border = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("logo"))
            throw $util.ProtocolError("missing required 'logo'", { instance: m });
        if (!m.hasOwnProperty("lv"))
            throw $util.ProtocolError("missing required 'lv'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("power"))
            throw $util.ProtocolError("missing required 'power'", { instance: m });
        if (!m.hasOwnProperty("sid"))
            throw $util.ProtocolError("missing required 'sid'", { instance: m });
        return m;
    };

    pb_benemy.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_benemy";
    };

    return pb_benemy;
})();

$root.pb_ngwshold = (function() {

    function pb_ngwshold(p) {
        this.buffs = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_ngwshold.prototype.left = 0;
    pb_ngwshold.prototype.total = 0;
    pb_ngwshold.prototype.buffs = $util.emptyArray;
    pb_ngwshold.prototype.power = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    pb_ngwshold.create = function create(properties) {
        return new pb_ngwshold(properties);
    };

    pb_ngwshold.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.left != null && Object.hasOwnProperty.call(m, "left"))
            w.uint32(8).int32(m.left);
        if (m.total != null && Object.hasOwnProperty.call(m, "total"))
            w.uint32(16).int32(m.total);
        if (m.buffs != null && m.buffs.length) {
            for (var i = 0; i < m.buffs.length; ++i)
                $root.pb_ngwbuff.encode(m.buffs[i], w.uint32(26).fork()).ldelim();
        }
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(32).int64(m.power);
        return w;
    };

    pb_ngwshold.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_ngwshold();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.left = r.int32();
                    break;
                }
            case 2: {
                    m.total = r.int32();
                    break;
                }
            case 3: {
                    if (!(m.buffs && m.buffs.length))
                        m.buffs = [];
                    m.buffs.push($root.pb_ngwbuff.decode(r, r.uint32()));
                    break;
                }
            case 4: {
                    m.power = r.int64();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_ngwshold.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_ngwshold";
    };

    return pb_ngwshold;
})();

$root.pb_ngwrank = (function() {

    function pb_ngwrank(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_ngwrank.prototype.gid = 0;
    pb_ngwrank.prototype.score = 0;
    pb_ngwrank.prototype.seg = 0;
    pb_ngwrank.prototype.time = 0;
    pb_ngwrank.prototype.logo = 0;
    pb_ngwrank.prototype.name = "";
    pb_ngwrank.prototype.power = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    pb_ngwrank.create = function create(properties) {
        return new pb_ngwrank(properties);
    };

    pb_ngwrank.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gid != null && Object.hasOwnProperty.call(m, "gid"))
            w.uint32(8).int32(m.gid);
        if (m.score != null && Object.hasOwnProperty.call(m, "score"))
            w.uint32(16).int32(m.score);
        if (m.seg != null && Object.hasOwnProperty.call(m, "seg"))
            w.uint32(24).int32(m.seg);
        if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            w.uint32(32).int32(m.time);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(40).int32(m.logo);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(50).string(m.name);
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(56).int64(m.power);
        return w;
    };

    pb_ngwrank.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_ngwrank();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.gid = r.int32();
                    break;
                }
            case 2: {
                    m.score = r.int32();
                    break;
                }
            case 3: {
                    m.seg = r.int32();
                    break;
                }
            case 4: {
                    m.time = r.int32();
                    break;
                }
            case 5: {
                    m.logo = r.int32();
                    break;
                }
            case 6: {
                    m.name = r.string();
                    break;
                }
            case 7: {
                    m.power = r.int64();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_ngwrank.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_ngwrank";
    };

    return pb_ngwrank;
})();

$root.pb_ngwprank = (function() {

    function pb_ngwprank(p) {
        this.daily = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_ngwprank.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_ngwprank.prototype.name = "";
    pb_ngwprank.prototype.lv = 0;
    pb_ngwprank.prototype.logo = 0;
    pb_ngwprank.prototype.lbox = 0;
    pb_ngwprank.prototype.gname = "";
    pb_ngwprank.prototype.score = 0;
    pb_ngwprank.prototype.time = 0;
    pb_ngwprank.prototype.power = 0;
    pb_ngwprank.prototype.daily = $util.emptyArray;

    pb_ngwprank.create = function create(properties) {
        return new pb_ngwprank(properties);
    };

    pb_ngwprank.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(8).int64(m.uid);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(18).string(m.name);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(24).int32(m.lv);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(32).int32(m.logo);
        if (m.lbox != null && Object.hasOwnProperty.call(m, "lbox"))
            w.uint32(40).int32(m.lbox);
        if (m.gname != null && Object.hasOwnProperty.call(m, "gname"))
            w.uint32(50).string(m.gname);
        if (m.score != null && Object.hasOwnProperty.call(m, "score"))
            w.uint32(56).int32(m.score);
        if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            w.uint32(64).int32(m.time);
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(72).int32(m.power);
        if (m.daily != null && m.daily.length) {
            for (var i = 0; i < m.daily.length; ++i)
                w.uint32(80).int32(m.daily[i]);
        }
        return w;
    };

    pb_ngwprank.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_ngwprank();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.uid = r.int64();
                    break;
                }
            case 2: {
                    m.name = r.string();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.logo = r.int32();
                    break;
                }
            case 5: {
                    m.lbox = r.int32();
                    break;
                }
            case 6: {
                    m.gname = r.string();
                    break;
                }
            case 7: {
                    m.score = r.int32();
                    break;
                }
            case 8: {
                    m.time = r.int32();
                    break;
                }
            case 9: {
                    m.power = r.int32();
                    break;
                }
            case 10: {
                    if (!(m.daily && m.daily.length))
                        m.daily = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.daily.push(r.int32());
                    } else
                        m.daily.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_ngwprank.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_ngwprank";
    };

    return pb_ngwprank;
})();

$root.pb_ngwbuff = (function() {

    function pb_ngwbuff(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_ngwbuff.prototype.id = 0;
    pb_ngwbuff.prototype.num = 0;

    pb_ngwbuff.create = function create(properties) {
        return new pb_ngwbuff(properties);
    };

    pb_ngwbuff.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(16).int32(m.num);
        return w;
    };

    pb_ngwbuff.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_ngwbuff();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.num = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_ngwbuff.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_ngwbuff";
    };

    return pb_ngwbuff;
})();

$root.pb_ngwmbr = (function() {

    function pb_ngwmbr(p) {
        this.unit = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_ngwmbr.prototype.idx = 0;
    pb_ngwmbr.prototype.logo = 0;
    pb_ngwmbr.prototype.gname = "";
    pb_ngwmbr.prototype.power = 0;
    pb_ngwmbr.prototype.lv = 0;
    pb_ngwmbr.prototype.lbox = 0;
    pb_ngwmbr.prototype.unit = $util.emptyArray;
    pb_ngwmbr.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_ngwmbr.prototype.gid = 0;
    pb_ngwmbr.prototype.win = 0;

    pb_ngwmbr.create = function create(properties) {
        return new pb_ngwmbr(properties);
    };

    pb_ngwmbr.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.idx != null && Object.hasOwnProperty.call(m, "idx"))
            w.uint32(8).int32(m.idx);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(16).int32(m.logo);
        if (m.gname != null && Object.hasOwnProperty.call(m, "gname"))
            w.uint32(26).string(m.gname);
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(32).int32(m.power);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(40).int32(m.lv);
        if (m.lbox != null && Object.hasOwnProperty.call(m, "lbox"))
            w.uint32(48).int32(m.lbox);
        if (m.unit != null && m.unit.length) {
            for (var i = 0; i < m.unit.length; ++i)
                $root.pb_unit.encode(m.unit[i], w.uint32(58).fork()).ldelim();
        }
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(64).int64(m.uid);
        if (m.gid != null && Object.hasOwnProperty.call(m, "gid"))
            w.uint32(72).int32(m.gid);
        if (m.win != null && Object.hasOwnProperty.call(m, "win"))
            w.uint32(80).int32(m.win);
        return w;
    };

    pb_ngwmbr.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_ngwmbr();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.idx = r.int32();
                    break;
                }
            case 2: {
                    m.logo = r.int32();
                    break;
                }
            case 3: {
                    m.gname = r.string();
                    break;
                }
            case 4: {
                    m.power = r.int32();
                    break;
                }
            case 5: {
                    m.lv = r.int32();
                    break;
                }
            case 6: {
                    m.lbox = r.int32();
                    break;
                }
            case 7: {
                    if (!(m.unit && m.unit.length))
                        m.unit = [];
                    m.unit.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            case 8: {
                    m.uid = r.int64();
                    break;
                }
            case 9: {
                    m.gid = r.int32();
                    break;
                }
            case 10: {
                    m.win = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_ngwmbr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_ngwmbr";
    };

    return pb_ngwmbr;
})();

$root.pb_clink = (function() {

    function pb_clink(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_clink.prototype.cd = 0;
    pb_clink.prototype.atk = 0;
    pb_clink.prototype.def = 0;
    pb_clink.prototype.win = 0;
    pb_clink.prototype.vid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    pb_clink.create = function create(properties) {
        return new pb_clink(properties);
    };

    pb_clink.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(8).int32(m.cd);
        if (m.atk != null && Object.hasOwnProperty.call(m, "atk"))
            w.uint32(16).int32(m.atk);
        if (m.def != null && Object.hasOwnProperty.call(m, "def"))
            w.uint32(24).int32(m.def);
        if (m.win != null && Object.hasOwnProperty.call(m, "win"))
            w.uint32(32).int32(m.win);
        if (m.vid != null && Object.hasOwnProperty.call(m, "vid"))
            w.uint32(40).int64(m.vid);
        return w;
    };

    pb_clink.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_clink();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.cd = r.int32();
                    break;
                }
            case 2: {
                    m.atk = r.int32();
                    break;
                }
            case 3: {
                    m.def = r.int32();
                    break;
                }
            case 4: {
                    m.win = r.int32();
                    break;
                }
            case 5: {
                    m.vid = r.int64();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_clink.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_clink";
    };

    return pb_clink;
})();

$root.pb_cgw_info = (function() {

    function pb_cgw_info(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_cgw_info.prototype.id = 0;
    pb_cgw_info.prototype.logo = 0;
    pb_cgw_info.prototype.power = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_cgw_info.prototype.name = "";

    pb_cgw_info.create = function create(properties) {
        return new pb_cgw_info(properties);
    };

    pb_cgw_info.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(16).int32(m.logo);
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(24).int64(m.power);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(34).string(m.name);
        return w;
    };

    pb_cgw_info.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_cgw_info();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.logo = r.int32();
                    break;
                }
            case 3: {
                    m.power = r.int64();
                    break;
                }
            case 4: {
                    m.name = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_cgw_info.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_cgw_info";
    };

    return pb_cgw_info;
})();

$root.pb_cgw_mbr = (function() {

    function pb_cgw_mbr(p) {
        this.camp = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_cgw_mbr.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_cgw_mbr.prototype.logo = 0;
    pb_cgw_mbr.prototype.lv = 0;
    pb_cgw_mbr.prototype.lbox = 0;
    pb_cgw_mbr.prototype.name = "";
    pb_cgw_mbr.prototype.camp = $util.emptyArray;

    pb_cgw_mbr.create = function create(properties) {
        return new pb_cgw_mbr(properties);
    };

    pb_cgw_mbr.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(8).int64(m.uid);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(16).int32(m.logo);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(24).int32(m.lv);
        if (m.lbox != null && Object.hasOwnProperty.call(m, "lbox"))
            w.uint32(32).int32(m.lbox);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(42).string(m.name);
        if (m.camp != null && m.camp.length) {
            for (var i = 0; i < m.camp.length; ++i)
                $root.pb_unit.encode(m.camp[i], w.uint32(50).fork()).ldelim();
        }
        return w;
    };

    pb_cgw_mbr.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_cgw_mbr();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.uid = r.int64();
                    break;
                }
            case 2: {
                    m.logo = r.int32();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.lbox = r.int32();
                    break;
                }
            case 5: {
                    m.name = r.string();
                    break;
                }
            case 6: {
                    if (!(m.camp && m.camp.length))
                        m.camp = [];
                    m.camp.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_cgw_mbr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_cgw_mbr";
    };

    return pb_cgw_mbr;
})();

$root.pb_cgw_record = (function() {

    function pb_cgw_record(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_cgw_record.prototype.gid = 0;
    pb_cgw_record.prototype.logo = 0;
    pb_cgw_record.prototype.vid = 0;
    pb_cgw_record.prototype.cd = 0;
    pb_cgw_record.prototype.flag = 0;
    pb_cgw_record.prototype.power = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_cgw_record.prototype.name = "";
    pb_cgw_record.prototype.atk = false;
    pb_cgw_record.prototype.win = false;
    pb_cgw_record.prototype.spower = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    pb_cgw_record.create = function create(properties) {
        return new pb_cgw_record(properties);
    };

    pb_cgw_record.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gid != null && Object.hasOwnProperty.call(m, "gid"))
            w.uint32(8).int32(m.gid);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(16).int32(m.logo);
        if (m.vid != null && Object.hasOwnProperty.call(m, "vid"))
            w.uint32(24).int32(m.vid);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(32).int32(m.cd);
        if (m.flag != null && Object.hasOwnProperty.call(m, "flag"))
            w.uint32(40).int32(m.flag);
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(48).int64(m.power);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(58).string(m.name);
        if (m.atk != null && Object.hasOwnProperty.call(m, "atk"))
            w.uint32(64).bool(m.atk);
        if (m.win != null && Object.hasOwnProperty.call(m, "win"))
            w.uint32(72).bool(m.win);
        if (m.spower != null && Object.hasOwnProperty.call(m, "spower"))
            w.uint32(80).int64(m.spower);
        return w;
    };

    pb_cgw_record.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_cgw_record();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.gid = r.int32();
                    break;
                }
            case 2: {
                    m.logo = r.int32();
                    break;
                }
            case 3: {
                    m.vid = r.int32();
                    break;
                }
            case 4: {
                    m.cd = r.int32();
                    break;
                }
            case 5: {
                    m.flag = r.int32();
                    break;
                }
            case 6: {
                    m.power = r.int64();
                    break;
                }
            case 7: {
                    m.name = r.string();
                    break;
                }
            case 8: {
                    m.atk = r.bool();
                    break;
                }
            case 9: {
                    m.win = r.bool();
                    break;
                }
            case 10: {
                    m.spower = r.int64();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_cgw_record.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_cgw_record";
    };

    return pb_cgw_record;
})();

$root.pb_cgw_log = (function() {

    function pb_cgw_log(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_cgw_log.prototype.atk = null;
    pb_cgw_log.prototype.def = null;
    pb_cgw_log.prototype.win = false;

    pb_cgw_log.create = function create(properties) {
        return new pb_cgw_log(properties);
    };

    pb_cgw_log.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.atk != null && Object.hasOwnProperty.call(m, "atk"))
            $root.pb_cgw_mbr.encode(m.atk, w.uint32(10).fork()).ldelim();
        if (m.def != null && Object.hasOwnProperty.call(m, "def"))
            $root.pb_cgw_mbr.encode(m.def, w.uint32(18).fork()).ldelim();
        if (m.win != null && Object.hasOwnProperty.call(m, "win"))
            w.uint32(24).bool(m.win);
        return w;
    };

    pb_cgw_log.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_cgw_log();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.atk = $root.pb_cgw_mbr.decode(r, r.uint32());
                    break;
                }
            case 2: {
                    m.def = $root.pb_cgw_mbr.decode(r, r.uint32());
                    break;
                }
            case 3: {
                    m.win = r.bool();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_cgw_log.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_cgw_log";
    };

    return pb_cgw_log;
})();

$root.pb_ngw_sweep = (function() {

    function pb_ngw_sweep(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_ngw_sweep.prototype.status = 0;
    pb_ngw_sweep.prototype.id = 0;
    pb_ngw_sweep.prototype.destroy = 0;

    pb_ngw_sweep.create = function create(properties) {
        return new pb_ngw_sweep(properties);
    };

    pb_ngw_sweep.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.status != null && Object.hasOwnProperty.call(m, "status"))
            w.uint32(8).int32(m.status);
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(16).int32(m.id);
        if (m.destroy != null && Object.hasOwnProperty.call(m, "destroy"))
            w.uint32(24).int32(m.destroy);
        return w;
    };

    pb_ngw_sweep.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_ngw_sweep();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.status = r.int32();
                    break;
                }
            case 2: {
                    m.id = r.int32();
                    break;
                }
            case 3: {
                    m.destroy = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_ngw_sweep.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_ngw_sweep";
    };

    return pb_ngw_sweep;
})();

$root.pb_cd = (function() {

    function pb_cd(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_cd.prototype.id = 0;
    pb_cd.prototype.cd = 0;

    pb_cd.create = function create(properties) {
        return new pb_cd(properties);
    };

    pb_cd.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).int32(m.cd);
        return w;
    };

    pb_cd.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_cd();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.cd = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("cd"))
            throw $util.ProtocolError("missing required 'cd'", { instance: m });
        return m;
    };

    pb_cd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_cd";
    };

    return pb_cd;
})();

$root.pb_gpvpteam = (function() {

    function pb_gpvpteam(p) {
        this.mbrs = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_gpvpteam.prototype.leader = 0;
    pb_gpvpteam.prototype.mbrs = $util.emptyArray;
    pb_gpvpteam.prototype.sid = 0;
    pb_gpvpteam.prototype.score = 0;
    pb_gpvpteam.prototype.rank = 0;
    pb_gpvpteam.prototype.power = 0;
    pb_gpvpteam.prototype.name = "";
    pb_gpvpteam.prototype.needPower = 0;
    pb_gpvpteam.prototype.password = "";
    pb_gpvpteam.prototype.id = 0;
    pb_gpvpteam.prototype.reg = false;
    pb_gpvpteam.prototype.enegy = 0;
    pb_gpvpteam.prototype.enggyCd = 0;

    pb_gpvpteam.create = function create(properties) {
        return new pb_gpvpteam(properties);
    };

    pb_gpvpteam.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.leader != null && Object.hasOwnProperty.call(m, "leader"))
            w.uint32(8).int32(m.leader);
        if (m.mbrs != null && m.mbrs.length) {
            for (var i = 0; i < m.mbrs.length; ++i)
                $root.pb_pmbr.encode(m.mbrs[i], w.uint32(18).fork()).ldelim();
        }
        if (m.sid != null && Object.hasOwnProperty.call(m, "sid"))
            w.uint32(24).int32(m.sid);
        if (m.score != null && Object.hasOwnProperty.call(m, "score"))
            w.uint32(32).int32(m.score);
        if (m.rank != null && Object.hasOwnProperty.call(m, "rank"))
            w.uint32(40).int32(m.rank);
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(48).int32(m.power);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(58).string(m.name);
        if (m.needPower != null && Object.hasOwnProperty.call(m, "needPower"))
            w.uint32(64).int32(m.needPower);
        if (m.password != null && Object.hasOwnProperty.call(m, "password"))
            w.uint32(74).string(m.password);
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(80).int32(m.id);
        if (m.reg != null && Object.hasOwnProperty.call(m, "reg"))
            w.uint32(88).bool(m.reg);
        if (m.enegy != null && Object.hasOwnProperty.call(m, "enegy"))
            w.uint32(96).int32(m.enegy);
        if (m.enggyCd != null && Object.hasOwnProperty.call(m, "enggyCd"))
            w.uint32(104).int32(m.enggyCd);
        return w;
    };

    pb_gpvpteam.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_gpvpteam();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.leader = r.int32();
                    break;
                }
            case 2: {
                    if (!(m.mbrs && m.mbrs.length))
                        m.mbrs = [];
                    m.mbrs.push($root.pb_pmbr.decode(r, r.uint32()));
                    break;
                }
            case 3: {
                    m.sid = r.int32();
                    break;
                }
            case 4: {
                    m.score = r.int32();
                    break;
                }
            case 5: {
                    m.rank = r.int32();
                    break;
                }
            case 6: {
                    m.power = r.int32();
                    break;
                }
            case 7: {
                    m.name = r.string();
                    break;
                }
            case 8: {
                    m.needPower = r.int32();
                    break;
                }
            case 9: {
                    m.password = r.string();
                    break;
                }
            case 10: {
                    m.id = r.int32();
                    break;
                }
            case 11: {
                    m.reg = r.bool();
                    break;
                }
            case 12: {
                    m.enegy = r.int32();
                    break;
                }
            case 13: {
                    m.enggyCd = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_gpvpteam.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_gpvpteam";
    };

    return pb_gpvpteam;
})();

$root.pb_gpvplog = (function() {

    function pb_gpvplog(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_gpvplog.prototype.logId = 0;
    pb_gpvplog.prototype.enemy = null;
    pb_gpvplog.prototype.score = 0;
    pb_gpvplog.prototype.win = false;
    pb_gpvplog.prototype.time = 0;

    pb_gpvplog.create = function create(properties) {
        return new pb_gpvplog(properties);
    };

    pb_gpvplog.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.logId);
        $root.pb_gpvpteam.encode(m.enemy, w.uint32(18).fork()).ldelim();
        if (m.score != null && Object.hasOwnProperty.call(m, "score"))
            w.uint32(24).sint32(m.score);
        if (m.win != null && Object.hasOwnProperty.call(m, "win"))
            w.uint32(32).bool(m.win);
        if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            w.uint32(40).int32(m.time);
        return w;
    };

    pb_gpvplog.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_gpvplog();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.logId = r.int32();
                    break;
                }
            case 2: {
                    m.enemy = $root.pb_gpvpteam.decode(r, r.uint32());
                    break;
                }
            case 3: {
                    m.score = r.sint32();
                    break;
                }
            case 4: {
                    m.win = r.bool();
                    break;
                }
            case 5: {
                    m.time = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("logId"))
            throw $util.ProtocolError("missing required 'logId'", { instance: m });
        if (!m.hasOwnProperty("enemy"))
            throw $util.ProtocolError("missing required 'enemy'", { instance: m });
        return m;
    };

    pb_gpvplog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_gpvplog";
    };

    return pb_gpvplog;
})();

$root.pb_gpvp_wlog = (function() {

    function pb_gpvp_wlog(p) {
        this.wins = [];
        this.vids = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_gpvp_wlog.prototype.atk = null;
    pb_gpvp_wlog.prototype.def = null;
    pb_gpvp_wlog.prototype.wins = $util.emptyArray;
    pb_gpvp_wlog.prototype.vids = $util.emptyArray;

    pb_gpvp_wlog.create = function create(properties) {
        return new pb_gpvp_wlog(properties);
    };

    pb_gpvp_wlog.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.pb_gpvpteam.encode(m.atk, w.uint32(10).fork()).ldelim();
        $root.pb_gpvpteam.encode(m.def, w.uint32(18).fork()).ldelim();
        if (m.wins != null && m.wins.length) {
            for (var i = 0; i < m.wins.length; ++i)
                w.uint32(24).bool(m.wins[i]);
        }
        if (m.vids != null && m.vids.length) {
            for (var i = 0; i < m.vids.length; ++i)
                w.uint32(32).int32(m.vids[i]);
        }
        return w;
    };

    pb_gpvp_wlog.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_gpvp_wlog();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.atk = $root.pb_gpvpteam.decode(r, r.uint32());
                    break;
                }
            case 2: {
                    m.def = $root.pb_gpvpteam.decode(r, r.uint32());
                    break;
                }
            case 3: {
                    if (!(m.wins && m.wins.length))
                        m.wins = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.wins.push(r.bool());
                    } else
                        m.wins.push(r.bool());
                    break;
                }
            case 4: {
                    if (!(m.vids && m.vids.length))
                        m.vids = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.vids.push(r.int32());
                    } else
                        m.vids.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("atk"))
            throw $util.ProtocolError("missing required 'atk'", { instance: m });
        if (!m.hasOwnProperty("def"))
            throw $util.ProtocolError("missing required 'def'", { instance: m });
        return m;
    };

    pb_gpvp_wlog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_gpvp_wlog";
    };

    return pb_gpvp_wlog;
})();

$root.pb_pet = (function() {

    function pb_pet(p) {
        this.skl = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_pet.prototype.id = 0;
    pb_pet.prototype.lv = 0;
    pb_pet.prototype.star = 0;
    pb_pet.prototype.skl = $util.emptyArray;

    pb_pet.create = function create(properties) {
        return new pb_pet(properties);
    };

    pb_pet.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).int32(m.lv);
        w.uint32(24).int32(m.star);
        if (m.skl != null && m.skl.length) {
            for (var i = 0; i < m.skl.length; ++i)
                w.uint32(32).int32(m.skl[i]);
        }
        return w;
    };

    pb_pet.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_pet();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.lv = r.int32();
                    break;
                }
            case 3: {
                    m.star = r.int32();
                    break;
                }
            case 4: {
                    if (!(m.skl && m.skl.length))
                        m.skl = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.skl.push(r.int32());
                    } else
                        m.skl.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("lv"))
            throw $util.ProtocolError("missing required 'lv'", { instance: m });
        if (!m.hasOwnProperty("star"))
            throw $util.ProtocolError("missing required 'star'", { instance: m });
        return m;
    };

    pb_pet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_pet";
    };

    return pb_pet;
})();

$root.pb_spkunit = (function() {

    function pb_spkunit(p) {
        this.buf = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_spkunit.prototype.base = null;
    pb_spkunit.prototype.buf = $util.emptyArray;

    pb_spkunit.create = function create(properties) {
        return new pb_spkunit(properties);
    };

    pb_spkunit.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.base != null && Object.hasOwnProperty.call(m, "base"))
            $root.pb_unit.encode(m.base, w.uint32(10).fork()).ldelim();
        if (m.buf != null && m.buf.length) {
            for (var i = 0; i < m.buf.length; ++i)
                $root.pb_item.encode(m.buf[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    pb_spkunit.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_spkunit();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.base = $root.pb_unit.decode(r, r.uint32());
                    break;
                }
            case 2: {
                    if (!(m.buf && m.buf.length))
                        m.buf = [];
                    m.buf.push($root.pb_item.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_spkunit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_spkunit";
    };

    return pb_spkunit;
})();

$root.pb_spkmbr = (function() {

    function pb_spkmbr(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_spkmbr.prototype.uid = 0;
    pb_spkmbr.prototype.lv = 0;
    pb_spkmbr.prototype.wave = 0;
    pb_spkmbr.prototype.time = 0;
    pb_spkmbr.prototype.logo = 0;
    pb_spkmbr.prototype.name = "";
    pb_spkmbr.prototype.border = 0;

    pb_spkmbr.create = function create(properties) {
        return new pb_spkmbr(properties);
    };

    pb_spkmbr.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.uid);
        w.uint32(16).int32(m.lv);
        w.uint32(24).int32(m.wave);
        w.uint32(32).int32(m.time);
        w.uint32(40).int32(m.logo);
        w.uint32(50).string(m.name);
        if (m.border != null && Object.hasOwnProperty.call(m, "border"))
            w.uint32(56).int32(m.border);
        return w;
    };

    pb_spkmbr.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_spkmbr();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.uid = r.int32();
                    break;
                }
            case 2: {
                    m.lv = r.int32();
                    break;
                }
            case 3: {
                    m.wave = r.int32();
                    break;
                }
            case 4: {
                    m.time = r.int32();
                    break;
                }
            case 5: {
                    m.logo = r.int32();
                    break;
                }
            case 6: {
                    m.name = r.string();
                    break;
                }
            case 7: {
                    m.border = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uid"))
            throw $util.ProtocolError("missing required 'uid'", { instance: m });
        if (!m.hasOwnProperty("lv"))
            throw $util.ProtocolError("missing required 'lv'", { instance: m });
        if (!m.hasOwnProperty("wave"))
            throw $util.ProtocolError("missing required 'wave'", { instance: m });
        if (!m.hasOwnProperty("time"))
            throw $util.ProtocolError("missing required 'time'", { instance: m });
        if (!m.hasOwnProperty("logo"))
            throw $util.ProtocolError("missing required 'logo'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        return m;
    };

    pb_spkmbr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_spkmbr";
    };

    return pb_spkmbr;
})();

$root.pb_holy = (function() {

    function pb_holy(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_holy.prototype.id = 0;
    pb_holy.prototype.pos = 0;
    pb_holy.prototype.val = 0;

    pb_holy.create = function create(properties) {
        return new pb_holy(properties);
    };

    pb_holy.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).int32(m.pos);
        if (m.val != null && Object.hasOwnProperty.call(m, "val"))
            w.uint32(24).int32(m.val);
        return w;
    };

    pb_holy.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_holy();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.pos = r.int32();
                    break;
                }
            case 3: {
                    m.val = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("pos"))
            throw $util.ProtocolError("missing required 'pos'", { instance: m });
        return m;
    };

    pb_holy.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_holy";
    };

    return pb_holy;
})();

$root.pb_mine = (function() {

    function pb_mine(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_mine.prototype.id = 0;
    pb_mine.prototype.pos = 0;
    pb_mine.prototype.val = 0;

    pb_mine.create = function create(properties) {
        return new pb_mine(properties);
    };

    pb_mine.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).int32(m.pos);
        w.uint32(24).int32(m.val);
        return w;
    };

    pb_mine.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_mine();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.pos = r.int32();
                    break;
                }
            case 3: {
                    m.val = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("pos"))
            throw $util.ProtocolError("missing required 'pos'", { instance: m });
        if (!m.hasOwnProperty("val"))
            throw $util.ProtocolError("missing required 'val'", { instance: m });
        return m;
    };

    pb_mine.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_mine";
    };

    return pb_mine;
})();

$root.pb_land = (function() {

    function pb_land(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_land.prototype.id = 0;
    pb_land.prototype.pos = 0;
    pb_land.prototype.cd = 0;
    pb_land.prototype.cdk = 0;
    pb_land.prototype.dead = false;

    pb_land.create = function create(properties) {
        return new pb_land(properties);
    };

    pb_land.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).int32(m.pos);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(24).int32(m.cd);
        if (m.cdk != null && Object.hasOwnProperty.call(m, "cdk"))
            w.uint32(32).int32(m.cdk);
        if (m.dead != null && Object.hasOwnProperty.call(m, "dead"))
            w.uint32(40).bool(m.dead);
        return w;
    };

    pb_land.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_land();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.pos = r.int32();
                    break;
                }
            case 3: {
                    m.cd = r.int32();
                    break;
                }
            case 4: {
                    m.cdk = r.int32();
                    break;
                }
            case 5: {
                    m.dead = r.bool();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("pos"))
            throw $util.ProtocolError("missing required 'pos'", { instance: m });
        return m;
    };

    pb_land.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_land";
    };

    return pb_land;
})();

$root.pb_vit = (function() {

    function pb_vit(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_vit.prototype.vit = 0;
    pb_vit.prototype.buy = 0;

    pb_vit.create = function create(properties) {
        return new pb_vit(properties);
    };

    pb_vit.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.vit);
        if (m.buy != null && Object.hasOwnProperty.call(m, "buy"))
            w.uint32(16).int32(m.buy);
        return w;
    };

    pb_vit.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_vit();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.vit = r.int32();
                    break;
                }
            case 2: {
                    m.buy = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("vit"))
            throw $util.ProtocolError("missing required 'vit'", { instance: m });
        return m;
    };

    pb_vit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_vit";
    };

    return pb_vit;
})();

$root.pb_ievent = (function() {

    function pb_ievent(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_ievent.prototype.id = 0;
    pb_ievent.prototype.cd = 0;
    pb_ievent.prototype.ext = "";
    pb_ievent.prototype.sid = 0;
    pb_ievent.prototype.reward = null;

    pb_ievent.create = function create(properties) {
        return new pb_ievent(properties);
    };

    pb_ievent.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(16).int32(m.cd);
        if (m.ext != null && Object.hasOwnProperty.call(m, "ext"))
            w.uint32(26).string(m.ext);
        if (m.sid != null && Object.hasOwnProperty.call(m, "sid"))
            w.uint32(32).int32(m.sid);
        if (m.reward != null && Object.hasOwnProperty.call(m, "reward"))
            $root.pb_bag.encode(m.reward, w.uint32(42).fork()).ldelim();
        return w;
    };

    pb_ievent.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_ievent();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.cd = r.int32();
                    break;
                }
            case 3: {
                    m.ext = r.string();
                    break;
                }
            case 4: {
                    m.sid = r.int32();
                    break;
                }
            case 5: {
                    m.reward = $root.pb_bag.decode(r, r.uint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    pb_ievent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_ievent";
    };

    return pb_ievent;
})();

$root.pb_iadt = (function() {

    function pb_iadt(p) {
        this.mevts = [];
        this.pevts = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_iadt.prototype.dist = 0;
    pb_iadt.prototype.mevts = $util.emptyArray;
    pb_iadt.prototype.pevts = $util.emptyArray;
    pb_iadt.prototype.vit = 0;
    pb_iadt.prototype.vitcd = 0;
    pb_iadt.prototype.reward = null;
    pb_iadt.prototype.rt = 0;
    pb_iadt.prototype.num = 0;

    pb_iadt.create = function create(properties) {
        return new pb_iadt(properties);
    };

    pb_iadt.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.dist != null && Object.hasOwnProperty.call(m, "dist"))
            w.uint32(8).int32(m.dist);
        if (m.mevts != null && m.mevts.length) {
            for (var i = 0; i < m.mevts.length; ++i)
                $root.pb_ievent.encode(m.mevts[i], w.uint32(18).fork()).ldelim();
        }
        if (m.pevts != null && m.pevts.length) {
            for (var i = 0; i < m.pevts.length; ++i)
                $root.pb_ievent.encode(m.pevts[i], w.uint32(26).fork()).ldelim();
        }
        if (m.vit != null && Object.hasOwnProperty.call(m, "vit"))
            w.uint32(32).int32(m.vit);
        if (m.vitcd != null && Object.hasOwnProperty.call(m, "vitcd"))
            w.uint32(40).int32(m.vitcd);
        if (m.reward != null && Object.hasOwnProperty.call(m, "reward"))
            $root.pb_bag.encode(m.reward, w.uint32(50).fork()).ldelim();
        if (m.rt != null && Object.hasOwnProperty.call(m, "rt"))
            w.uint32(56).int32(m.rt);
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(64).int32(m.num);
        return w;
    };

    pb_iadt.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_iadt();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.dist = r.int32();
                    break;
                }
            case 2: {
                    if (!(m.mevts && m.mevts.length))
                        m.mevts = [];
                    m.mevts.push($root.pb_ievent.decode(r, r.uint32()));
                    break;
                }
            case 3: {
                    if (!(m.pevts && m.pevts.length))
                        m.pevts = [];
                    m.pevts.push($root.pb_ievent.decode(r, r.uint32()));
                    break;
                }
            case 4: {
                    m.vit = r.int32();
                    break;
                }
            case 5: {
                    m.vitcd = r.int32();
                    break;
                }
            case 6: {
                    m.reward = $root.pb_bag.decode(r, r.uint32());
                    break;
                }
            case 7: {
                    m.rt = r.int32();
                    break;
                }
            case 8: {
                    m.num = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_iadt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_iadt";
    };

    return pb_iadt;
})();

$root.pb_iboat = (function() {

    function pb_iboat(p) {
        this.skls = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_iboat.prototype.name = "";
    pb_iboat.prototype.exp = 0;
    pb_iboat.prototype.arm = 0;
    pb_iboat.prototype.spd = 0;
    pb_iboat.prototype.skls = $util.emptyArray;

    pb_iboat.create = function create(properties) {
        return new pb_iboat(properties);
    };

    pb_iboat.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(10).string(m.name);
        if (m.exp != null && Object.hasOwnProperty.call(m, "exp"))
            w.uint32(16).int32(m.exp);
        if (m.arm != null && Object.hasOwnProperty.call(m, "arm"))
            w.uint32(24).int32(m.arm);
        if (m.spd != null && Object.hasOwnProperty.call(m, "spd"))
            w.uint32(32).int32(m.spd);
        if (m.skls != null && m.skls.length) {
            for (var i = 0; i < m.skls.length; ++i)
                w.uint32(40).int32(m.skls[i]);
        }
        return w;
    };

    pb_iboat.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_iboat();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.name = r.string();
                    break;
                }
            case 2: {
                    m.exp = r.int32();
                    break;
                }
            case 3: {
                    m.arm = r.int32();
                    break;
                }
            case 4: {
                    m.spd = r.int32();
                    break;
                }
            case 5: {
                    if (!(m.skls && m.skls.length))
                        m.skls = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.skls.push(r.int32());
                    } else
                        m.skls.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_iboat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_iboat";
    };

    return pb_iboat;
})();

$root.pb_ipro = (function() {

    function pb_ipro(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_ipro.prototype.id = 0;
    pb_ipro.prototype.num = 0;
    pb_ipro.prototype.cd = 0;

    pb_ipro.create = function create(properties) {
        return new pb_ipro(properties);
    };

    pb_ipro.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(16).int32(m.num);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(24).int32(m.cd);
        return w;
    };

    pb_ipro.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_ipro();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.num = r.int32();
                    break;
                }
            case 3: {
                    m.cd = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_ipro.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_ipro";
    };

    return pb_ipro;
})();

$root.pb_identity = (function() {

    function pb_identity(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_identity.prototype.onlineTime = 0;
    pb_identity.prototype.adult = 0;
    pb_identity.prototype.locale = "";
    pb_identity.prototype.age = 0;
    pb_identity.prototype.mrecharge = 0;

    pb_identity.create = function create(properties) {
        return new pb_identity(properties);
    };

    pb_identity.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.onlineTime != null && Object.hasOwnProperty.call(m, "onlineTime"))
            w.uint32(8).int32(m.onlineTime);
        if (m.adult != null && Object.hasOwnProperty.call(m, "adult"))
            w.uint32(16).int32(m.adult);
        if (m.locale != null && Object.hasOwnProperty.call(m, "locale"))
            w.uint32(26).string(m.locale);
        if (m.age != null && Object.hasOwnProperty.call(m, "age"))
            w.uint32(32).int32(m.age);
        if (m.mrecharge != null && Object.hasOwnProperty.call(m, "mrecharge"))
            w.uint32(40).int32(m.mrecharge);
        return w;
    };

    pb_identity.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_identity();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.onlineTime = r.int32();
                    break;
                }
            case 2: {
                    m.adult = r.int32();
                    break;
                }
            case 3: {
                    m.locale = r.string();
                    break;
                }
            case 4: {
                    m.age = r.int32();
                    break;
                }
            case 5: {
                    m.mrecharge = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_identity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_identity";
    };

    return pb_identity;
})();

$root.pb_sact = (function() {

    function pb_sact(p) {
        this.acts = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_sact.prototype.acts = $util.emptyArray;

    pb_sact.create = function create(properties) {
        return new pb_sact(properties);
    };

    pb_sact.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.acts != null && m.acts.length) {
            for (var i = 0; i < m.acts.length; ++i)
                $root.pb_sact_item.encode(m.acts[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    pb_sact.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_sact();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.acts && m.acts.length))
                        m.acts = [];
                    m.acts.push($root.pb_sact_item.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_sact.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_sact";
    };

    return pb_sact;
})();

$root.pb_ract = (function() {

    function pb_ract(p) {
        this.acts = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_ract.prototype.acts = $util.emptyArray;
    pb_ract.prototype.show = 0;

    pb_ract.create = function create(properties) {
        return new pb_ract(properties);
    };

    pb_ract.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.acts != null && m.acts.length) {
            for (var i = 0; i < m.acts.length; ++i)
                $root.pb_ract_item.encode(m.acts[i], w.uint32(10).fork()).ldelim();
        }
        if (m.show != null && Object.hasOwnProperty.call(m, "show"))
            w.uint32(16).int32(m.show);
        return w;
    };

    pb_ract.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_ract();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.acts && m.acts.length))
                        m.acts = [];
                    m.acts.push($root.pb_ract_item.decode(r, r.uint32()));
                    break;
                }
            case 2: {
                    m.show = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_ract.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_ract";
    };

    return pb_ract;
})();

$root.pb_brave_box = (function() {

    function pb_brave_box(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_brave_box.prototype.id = 0;

    pb_brave_box.create = function create(properties) {
        return new pb_brave_box(properties);
    };

    pb_brave_box.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        return w;
    };

    pb_brave_box.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_brave_box();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    pb_brave_box.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_brave_box";
    };

    return pb_brave_box;
})();

$root.pb_brave_buff = (function() {

    function pb_brave_buff(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_brave_buff.prototype.id = 0;
    pb_brave_buff.prototype.num = 0;

    pb_brave_buff.create = function create(properties) {
        return new pb_brave_buff(properties);
    };

    pb_brave_buff.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).int32(m.num);
        return w;
    };

    pb_brave_buff.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_brave_buff();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.num = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("num"))
            throw $util.ProtocolError("missing required 'num'", { instance: m });
        return m;
    };

    pb_brave_buff.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_brave_buff";
    };

    return pb_brave_buff;
})();

$root.pb_re_sync = (function() {

    function pb_re_sync(p) {
        this.sTasks = [];
        this.hTasks = [];
        this.applys = [];
        this.players = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_re_sync.prototype.role = 0;
    pb_re_sync.prototype.giftId = 0;
    pb_re_sync.prototype.backGift = 0;
    pb_re_sync.prototype.bindTimes = 0;
    pb_re_sync.prototype.helpTimes = 0;
    pb_re_sync.prototype.backCd = 0;
    pb_re_sync.prototype.bind = 0;
    pb_re_sync.prototype.sTasks = $util.emptyArray;
    pb_re_sync.prototype.hTasks = $util.emptyArray;
    pb_re_sync.prototype.cd = 0;
    pb_re_sync.prototype.cd2 = 0;
    pb_re_sync.prototype.applys = $util.emptyArray;
    pb_re_sync.prototype.code = "";
    pb_re_sync.prototype.players = $util.emptyArray;

    pb_re_sync.create = function create(properties) {
        return new pb_re_sync(properties);
    };

    pb_re_sync.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.role != null && Object.hasOwnProperty.call(m, "role"))
            w.uint32(8).int32(m.role);
        if (m.giftId != null && Object.hasOwnProperty.call(m, "giftId"))
            w.uint32(16).int32(m.giftId);
        if (m.backGift != null && Object.hasOwnProperty.call(m, "backGift"))
            w.uint32(24).int32(m.backGift);
        if (m.bindTimes != null && Object.hasOwnProperty.call(m, "bindTimes"))
            w.uint32(32).int32(m.bindTimes);
        if (m.helpTimes != null && Object.hasOwnProperty.call(m, "helpTimes"))
            w.uint32(40).int32(m.helpTimes);
        if (m.backCd != null && Object.hasOwnProperty.call(m, "backCd"))
            w.uint32(48).int32(m.backCd);
        if (m.bind != null && Object.hasOwnProperty.call(m, "bind"))
            w.uint32(56).int32(m.bind);
        if (m.sTasks != null && m.sTasks.length) {
            for (var i = 0; i < m.sTasks.length; ++i)
                $root.pb_re_task.encode(m.sTasks[i], w.uint32(66).fork()).ldelim();
        }
        if (m.hTasks != null && m.hTasks.length) {
            for (var i = 0; i < m.hTasks.length; ++i)
                $root.pb_re_task.encode(m.hTasks[i], w.uint32(74).fork()).ldelim();
        }
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(80).int32(m.cd);
        if (m.cd2 != null && Object.hasOwnProperty.call(m, "cd2"))
            w.uint32(88).int32(m.cd2);
        if (m.applys != null && m.applys.length) {
            for (var i = 0; i < m.applys.length; ++i)
                $root.pb_re_apply.encode(m.applys[i], w.uint32(98).fork()).ldelim();
        }
        if (m.code != null && Object.hasOwnProperty.call(m, "code"))
            w.uint32(106).string(m.code);
        if (m.players != null && m.players.length) {
            for (var i = 0; i < m.players.length; ++i)
                $root.pb_re_bind_player.encode(m.players[i], w.uint32(114).fork()).ldelim();
        }
        return w;
    };

    pb_re_sync.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_re_sync();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.role = r.int32();
                    break;
                }
            case 2: {
                    m.giftId = r.int32();
                    break;
                }
            case 3: {
                    m.backGift = r.int32();
                    break;
                }
            case 4: {
                    m.bindTimes = r.int32();
                    break;
                }
            case 5: {
                    m.helpTimes = r.int32();
                    break;
                }
            case 6: {
                    m.backCd = r.int32();
                    break;
                }
            case 7: {
                    m.bind = r.int32();
                    break;
                }
            case 8: {
                    if (!(m.sTasks && m.sTasks.length))
                        m.sTasks = [];
                    m.sTasks.push($root.pb_re_task.decode(r, r.uint32()));
                    break;
                }
            case 9: {
                    if (!(m.hTasks && m.hTasks.length))
                        m.hTasks = [];
                    m.hTasks.push($root.pb_re_task.decode(r, r.uint32()));
                    break;
                }
            case 10: {
                    m.cd = r.int32();
                    break;
                }
            case 11: {
                    m.cd2 = r.int32();
                    break;
                }
            case 12: {
                    if (!(m.applys && m.applys.length))
                        m.applys = [];
                    m.applys.push($root.pb_re_apply.decode(r, r.uint32()));
                    break;
                }
            case 13: {
                    m.code = r.string();
                    break;
                }
            case 14: {
                    if (!(m.players && m.players.length))
                        m.players = [];
                    m.players.push($root.pb_re_bind_player.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_re_sync.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_re_sync";
    };

    return pb_re_sync;
})();

$root.pb_re_bind_player = (function() {

    function pb_re_bind_player(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_re_bind_player.prototype.logo = 0;
    pb_re_bind_player.prototype.uid = 0;
    pb_re_bind_player.prototype.name = "";
    pb_re_bind_player.prototype.bind = 0;

    pb_re_bind_player.create = function create(properties) {
        return new pb_re_bind_player(properties);
    };

    pb_re_bind_player.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(8).int32(m.logo);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(16).int32(m.uid);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(26).string(m.name);
        if (m.bind != null && Object.hasOwnProperty.call(m, "bind"))
            w.uint32(32).int32(m.bind);
        return w;
    };

    pb_re_bind_player.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_re_bind_player();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.logo = r.int32();
                    break;
                }
            case 2: {
                    m.uid = r.int32();
                    break;
                }
            case 3: {
                    m.name = r.string();
                    break;
                }
            case 4: {
                    m.bind = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_re_bind_player.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_re_bind_player";
    };

    return pb_re_bind_player;
})();

$root.pb_re_apply = (function() {

    function pb_re_apply(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_re_apply.prototype.logo = 0;
    pb_re_apply.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_re_apply.prototype.name = "";
    pb_re_apply.prototype.cd = 0;

    pb_re_apply.create = function create(properties) {
        return new pb_re_apply(properties);
    };

    pb_re_apply.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.logo);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(16).int64(m.uid);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(26).string(m.name);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(32).int32(m.cd);
        return w;
    };

    pb_re_apply.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_re_apply();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.logo = r.int32();
                    break;
                }
            case 2: {
                    m.uid = r.int64();
                    break;
                }
            case 3: {
                    m.name = r.string();
                    break;
                }
            case 4: {
                    m.cd = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("logo"))
            throw $util.ProtocolError("missing required 'logo'", { instance: m });
        return m;
    };

    pb_re_apply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_re_apply";
    };

    return pb_re_apply;
})();

$root.pb_re_task = (function() {

    function pb_re_task(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_re_task.prototype.id = 0;
    pb_re_task.prototype.num1 = 0;
    pb_re_task.prototype.num2 = 0;

    pb_re_task.create = function create(properties) {
        return new pb_re_task(properties);
    };

    pb_re_task.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        if (m.num1 != null && Object.hasOwnProperty.call(m, "num1"))
            w.uint32(16).int32(m.num1);
        if (m.num2 != null && Object.hasOwnProperty.call(m, "num2"))
            w.uint32(24).int32(m.num2);
        return w;
    };

    pb_re_task.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_re_task();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.num1 = r.int32();
                    break;
                }
            case 3: {
                    m.num2 = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    pb_re_task.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_re_task";
    };

    return pb_re_task;
})();

$root.pb_vbuff = (function() {

    function pb_vbuff(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_vbuff.prototype.id = 0;
    pb_vbuff.prototype.type = 0;

    pb_vbuff.create = function create(properties) {
        return new pb_vbuff(properties);
    };

    pb_vbuff.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(16).int32(m.type);
        return w;
    };

    pb_vbuff.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_vbuff();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.type = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_vbuff.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_vbuff";
    };

    return pb_vbuff;
})();

$root.pb_stele = (function() {

    function pb_stele(p) {
        this.sealland = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_stele.prototype.hook = 0;
    pb_stele.prototype.solo = 0;
    pb_stele.prototype.crush = 0;
    pb_stele.prototype.tower = 0;
    pb_stele.prototype.sealland = $util.emptyArray;
    pb_stele.prototype.st = 0;

    pb_stele.create = function create(properties) {
        return new pb_stele(properties);
    };

    pb_stele.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.hook != null && Object.hasOwnProperty.call(m, "hook"))
            w.uint32(8).int32(m.hook);
        if (m.solo != null && Object.hasOwnProperty.call(m, "solo"))
            w.uint32(16).int32(m.solo);
        if (m.crush != null && Object.hasOwnProperty.call(m, "crush"))
            w.uint32(24).int32(m.crush);
        if (m.tower != null && Object.hasOwnProperty.call(m, "tower"))
            w.uint32(32).int32(m.tower);
        if (m.sealland != null && m.sealland.length) {
            for (var i = 0; i < m.sealland.length; ++i)
                w.uint32(40).int32(m.sealland[i]);
        }
        if (m.st != null && Object.hasOwnProperty.call(m, "st"))
            w.uint32(48).int32(m.st);
        return w;
    };

    pb_stele.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_stele();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.hook = r.int32();
                    break;
                }
            case 2: {
                    m.solo = r.int32();
                    break;
                }
            case 3: {
                    m.crush = r.int32();
                    break;
                }
            case 4: {
                    m.tower = r.int32();
                    break;
                }
            case 5: {
                    if (!(m.sealland && m.sealland.length))
                        m.sealland = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.sealland.push(r.int32());
                    } else
                        m.sealland.push(r.int32());
                    break;
                }
            case 6: {
                    m.st = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_stele.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_stele";
    };

    return pb_stele;
})();

$root.pb_midas = (function() {

    function pb_midas(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_midas.prototype.type = 0;
    pb_midas.prototype.cd = 0;
    pb_midas.prototype.index = 0;

    pb_midas.create = function create(properties) {
        return new pb_midas(properties);
    };

    pb_midas.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.type);
        w.uint32(16).int32(m.cd);
        w.uint32(24).int32(m.index);
        return w;
    };

    pb_midas.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_midas();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.type = r.int32();
                    break;
                }
            case 2: {
                    m.cd = r.int32();
                    break;
                }
            case 3: {
                    m.index = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        if (!m.hasOwnProperty("cd"))
            throw $util.ProtocolError("missing required 'cd'", { instance: m });
        if (!m.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: m });
        return m;
    };

    pb_midas.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_midas";
    };

    return pb_midas;
})();

$root.pb_gve = (function() {

    function pb_gve(p) {
        this.record = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_gve.prototype.id = 0;
    pb_gve.prototype.exp = 0;
    pb_gve.prototype.record = $util.emptyArray;
    pb_gve.prototype.fight = 0;

    pb_gve.create = function create(properties) {
        return new pb_gve(properties);
    };

    pb_gve.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.exp != null && Object.hasOwnProperty.call(m, "exp"))
            w.uint32(16).int32(m.exp);
        if (m.record != null && m.record.length) {
            for (var i = 0; i < m.record.length; ++i)
                w.uint32(24).int32(m.record[i]);
        }
        if (m.fight != null && Object.hasOwnProperty.call(m, "fight"))
            w.uint32(32).int32(m.fight);
        return w;
    };

    pb_gve.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_gve();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.exp = r.int32();
                    break;
                }
            case 3: {
                    if (!(m.record && m.record.length))
                        m.record = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.record.push(r.int32());
                    } else
                        m.record.push(r.int32());
                    break;
                }
            case 4: {
                    m.fight = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_gve.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_gve";
    };

    return pb_gve;
})();

$root.pb_gve_rank = (function() {

    function pb_gve_rank(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_gve_rank.prototype.id = 0;
    pb_gve_rank.prototype.name = "";
    pb_gve_rank.prototype.exp = 0;
    pb_gve_rank.prototype.texp = 0;

    pb_gve_rank.create = function create(properties) {
        return new pb_gve_rank(properties);
    };

    pb_gve_rank.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(18).string(m.name);
        if (m.exp != null && Object.hasOwnProperty.call(m, "exp"))
            w.uint32(24).int32(m.exp);
        if (m.texp != null && Object.hasOwnProperty.call(m, "texp"))
            w.uint32(32).int32(m.texp);
        return w;
    };

    pb_gve_rank.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_gve_rank();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.name = r.string();
                    break;
                }
            case 3: {
                    m.exp = r.int32();
                    break;
                }
            case 4: {
                    m.texp = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_gve_rank.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_gve_rank";
    };

    return pb_gve_rank;
})();

$root.pb_act_block = (function() {

    function pb_act_block(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_act_block.prototype.pos = 0;
    pb_act_block.prototype.eventid = 0;

    pb_act_block.create = function create(properties) {
        return new pb_act_block(properties);
    };

    pb_act_block.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.pos != null && Object.hasOwnProperty.call(m, "pos"))
            w.uint32(8).int32(m.pos);
        if (m.eventid != null && Object.hasOwnProperty.call(m, "eventid"))
            w.uint32(16).sint32(m.eventid);
        return w;
    };

    pb_act_block.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_act_block();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.pos = r.int32();
                    break;
                }
            case 2: {
                    m.eventid = r.sint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_act_block.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_act_block";
    };

    return pb_act_block;
})();

$root.pb_act_maze = (function() {

    function pb_act_maze(p) {
        this.events = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_act_maze.prototype.floor = 0;
    pb_act_maze.prototype.events = $util.emptyArray;
    pb_act_maze.prototype.heroid = 0;
    pb_act_maze.prototype.skill = 0;
    pb_act_maze.prototype.skillLv = 0;
    pb_act_maze.prototype.change = 0;
    pb_act_maze.prototype.treasures = 0;
    pb_act_maze.prototype.buff = 0;
    pb_act_maze.prototype.type = 0;
    pb_act_maze.prototype.pos = 0;
    pb_act_maze.prototype.buyNum = 0;
    pb_act_maze.prototype.getFrag = false;

    pb_act_maze.create = function create(properties) {
        return new pb_act_maze(properties);
    };

    pb_act_maze.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.floor != null && Object.hasOwnProperty.call(m, "floor"))
            w.uint32(8).int32(m.floor);
        if (m.events != null && m.events.length) {
            for (var i = 0; i < m.events.length; ++i)
                $root.pb_act_block.encode(m.events[i], w.uint32(18).fork()).ldelim();
        }
        if (m.heroid != null && Object.hasOwnProperty.call(m, "heroid"))
            w.uint32(24).int32(m.heroid);
        if (m.skill != null && Object.hasOwnProperty.call(m, "skill"))
            w.uint32(32).int32(m.skill);
        if (m.skillLv != null && Object.hasOwnProperty.call(m, "skillLv"))
            w.uint32(40).int32(m.skillLv);
        if (m.change != null && Object.hasOwnProperty.call(m, "change"))
            w.uint32(48).int32(m.change);
        if (m.treasures != null && Object.hasOwnProperty.call(m, "treasures"))
            w.uint32(56).int32(m.treasures);
        if (m.buff != null && Object.hasOwnProperty.call(m, "buff"))
            w.uint32(64).int32(m.buff);
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(72).int32(m.type);
        if (m.pos != null && Object.hasOwnProperty.call(m, "pos"))
            w.uint32(80).int32(m.pos);
        if (m.buyNum != null && Object.hasOwnProperty.call(m, "buyNum"))
            w.uint32(88).int32(m.buyNum);
        if (m.getFrag != null && Object.hasOwnProperty.call(m, "getFrag"))
            w.uint32(96).bool(m.getFrag);
        return w;
    };

    pb_act_maze.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_act_maze();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.floor = r.int32();
                    break;
                }
            case 2: {
                    if (!(m.events && m.events.length))
                        m.events = [];
                    m.events.push($root.pb_act_block.decode(r, r.uint32()));
                    break;
                }
            case 3: {
                    m.heroid = r.int32();
                    break;
                }
            case 4: {
                    m.skill = r.int32();
                    break;
                }
            case 5: {
                    m.skillLv = r.int32();
                    break;
                }
            case 6: {
                    m.change = r.int32();
                    break;
                }
            case 7: {
                    m.treasures = r.int32();
                    break;
                }
            case 8: {
                    m.buff = r.int32();
                    break;
                }
            case 9: {
                    m.type = r.int32();
                    break;
                }
            case 10: {
                    m.pos = r.int32();
                    break;
                }
            case 11: {
                    m.buyNum = r.int32();
                    break;
                }
            case 12: {
                    m.getFrag = r.bool();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_act_maze.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_act_maze";
    };

    return pb_act_maze;
})();

$root.pb_ntask = (function() {

    function pb_ntask(p) {
        this.extra = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_ntask.prototype.id = 0;
    pb_ntask.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_ntask.prototype.status = 0;
    pb_ntask.prototype.extra = $util.emptyArray;

    pb_ntask.create = function create(properties) {
        return new pb_ntask(properties);
    };

    pb_ntask.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).int64(m.count);
        w.uint32(24).int32(m.status);
        if (m.extra != null && m.extra.length) {
            for (var i = 0; i < m.extra.length; ++i)
                $root.pb_nextra.encode(m.extra[i], w.uint32(34).fork()).ldelim();
        }
        return w;
    };

    pb_ntask.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_ntask();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.count = r.int64();
                    break;
                }
            case 3: {
                    m.status = r.int32();
                    break;
                }
            case 4: {
                    if (!(m.extra && m.extra.length))
                        m.extra = [];
                    m.extra.push($root.pb_nextra.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("count"))
            throw $util.ProtocolError("missing required 'count'", { instance: m });
        if (!m.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: m });
        return m;
    };

    pb_ntask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_ntask";
    };

    return pb_ntask;
})();

$root.pb_nextra = (function() {

    function pb_nextra(p) {
        this.id = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_nextra.prototype.id = $util.emptyArray;

    pb_nextra.create = function create(properties) {
        return new pb_nextra(properties);
    };

    pb_nextra.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && m.id.length) {
            for (var i = 0; i < m.id.length; ++i)
                w.uint32(8).int32(m.id[i]);
        }
        return w;
    };

    pb_nextra.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_nextra();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.id && m.id.length))
                        m.id = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.id.push(r.int32());
                    } else
                        m.id.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_nextra.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_nextra";
    };

    return pb_nextra;
})();

$root.pb_nt_sync = (function() {

    function pb_nt_sync(p) {
        this.value = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_nt_sync.prototype.type = 0;
    pb_nt_sync.prototype.value = $util.emptyArray;

    pb_nt_sync.create = function create(properties) {
        return new pb_nt_sync(properties);
    };

    pb_nt_sync.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.type);
        if (m.value != null && m.value.length) {
            for (var i = 0; i < m.value.length; ++i)
                w.uint32(16).int64(m.value[i]);
        }
        return w;
    };

    pb_nt_sync.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_nt_sync();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.type = r.sint32();
                    break;
                }
            case 2: {
                    if (!(m.value && m.value.length))
                        m.value = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.value.push(r.int64());
                    } else
                        m.value.push(r.int64());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: m });
        return m;
    };

    pb_nt_sync.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_nt_sync";
    };

    return pb_nt_sync;
})();

$root.pb_room = (function() {

    function pb_room(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_room.prototype.id = 0;
    pb_room.prototype.pos = 0;
    pb_room.prototype.skinid = 0;
    pb_room.prototype.hid = 0;

    pb_room.create = function create(properties) {
        return new pb_room(properties);
    };

    pb_room.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.pos != null && Object.hasOwnProperty.call(m, "pos"))
            w.uint32(16).int32(m.pos);
        if (m.skinid != null && Object.hasOwnProperty.call(m, "skinid"))
            w.uint32(24).int32(m.skinid);
        if (m.hid != null && Object.hasOwnProperty.call(m, "hid"))
            w.uint32(32).int32(m.hid);
        return w;
    };

    pb_room.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_room();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.pos = r.int32();
                    break;
                }
            case 3: {
                    m.skinid = r.int32();
                    break;
                }
            case 4: {
                    m.hid = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_room.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_room";
    };

    return pb_room;
})();

$root.pb_home_land = (function() {

    function pb_home_land(p) {
        this.rooms = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_home_land.prototype.landId = 0;
    pb_home_land.prototype.name = "";
    pb_home_land.prototype.rooms = $util.emptyArray;
    pb_home_land.prototype.owner = 0;

    pb_home_land.create = function create(properties) {
        return new pb_home_land(properties);
    };

    pb_home_land.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.landId != null && Object.hasOwnProperty.call(m, "landId"))
            w.uint32(8).int32(m.landId);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(18).string(m.name);
        if (m.rooms != null && m.rooms.length) {
            for (var i = 0; i < m.rooms.length; ++i)
                $root.pb_room.encode(m.rooms[i], w.uint32(26).fork()).ldelim();
        }
        if (m.owner != null && Object.hasOwnProperty.call(m, "owner"))
            w.uint32(32).int32(m.owner);
        return w;
    };

    pb_home_land.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_home_land();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.landId = r.int32();
                    break;
                }
            case 2: {
                    m.name = r.string();
                    break;
                }
            case 3: {
                    if (!(m.rooms && m.rooms.length))
                        m.rooms = [];
                    m.rooms.push($root.pb_room.decode(r, r.uint32()));
                    break;
                }
            case 4: {
                    m.owner = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_home_land.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_home_land";
    };

    return pb_home_land;
})();

$root.pb_block = (function() {

    function pb_block(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_block.prototype.type = 0;
    pb_block.prototype.from = 0;
    pb_block.prototype.to = 0;

    pb_block.create = function create(properties) {
        return new pb_block(properties);
    };

    pb_block.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(8).int32(m.type);
        if (m.from != null && Object.hasOwnProperty.call(m, "from"))
            w.uint32(16).int32(m.from);
        if (m.to != null && Object.hasOwnProperty.call(m, "to"))
            w.uint32(24).int32(m.to);
        return w;
    };

    pb_block.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_block();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.type = r.int32();
                    break;
                }
            case 2: {
                    m.from = r.int32();
                    break;
                }
            case 3: {
                    m.to = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_block.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_block";
    };

    return pb_block;
})();

$root.pb_living = (function() {

    function pb_living(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_living.prototype.type = 0;
    pb_living.prototype.hid = 0;

    pb_living.create = function create(properties) {
        return new pb_living(properties);
    };

    pb_living.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(8).int32(m.type);
        if (m.hid != null && Object.hasOwnProperty.call(m, "hid"))
            w.uint32(16).int32(m.hid);
        return w;
    };

    pb_living.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_living();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.type = r.int32();
                    break;
                }
            case 2: {
                    m.hid = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_living.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_living";
    };

    return pb_living;
})();

$root.pb_buildings = (function() {

    function pb_buildings(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_buildings.prototype.id = 0;
    pb_buildings.prototype.pos = 0;
    pb_buildings.prototype.skinid = 0;
    pb_buildings.prototype.collectTime = 0;
    pb_buildings.prototype.store = 0;

    pb_buildings.create = function create(properties) {
        return new pb_buildings(properties);
    };

    pb_buildings.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).int32(m.pos);
        w.uint32(24).int32(m.skinid);
        if (m.collectTime != null && Object.hasOwnProperty.call(m, "collectTime"))
            w.uint32(32).int32(m.collectTime);
        if (m.store != null && Object.hasOwnProperty.call(m, "store"))
            w.uint32(40).int32(m.store);
        return w;
    };

    pb_buildings.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_buildings();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.pos = r.int32();
                    break;
                }
            case 3: {
                    m.skinid = r.int32();
                    break;
                }
            case 4: {
                    m.collectTime = r.int32();
                    break;
                }
            case 5: {
                    m.store = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("pos"))
            throw $util.ProtocolError("missing required 'pos'", { instance: m });
        if (!m.hasOwnProperty("skinid"))
            throw $util.ProtocolError("missing required 'skinid'", { instance: m });
        return m;
    };

    pb_buildings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_buildings";
    };

    return pb_buildings;
})();

$root.pb_home_roomer = (function() {

    function pb_home_roomer(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_home_roomer.prototype.roomId = 0;
    pb_home_roomer.prototype.hid = 0;
    pb_home_roomer.prototype.skinid = 0;

    pb_home_roomer.create = function create(properties) {
        return new pb_home_roomer(properties);
    };

    pb_home_roomer.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
            w.uint32(8).int32(m.roomId);
        if (m.hid != null && Object.hasOwnProperty.call(m, "hid"))
            w.uint32(16).int32(m.hid);
        if (m.skinid != null && Object.hasOwnProperty.call(m, "skinid"))
            w.uint32(24).int32(m.skinid);
        return w;
    };

    pb_home_roomer.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_home_roomer();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.roomId = r.int32();
                    break;
                }
            case 2: {
                    m.hid = r.int32();
                    break;
                }
            case 3: {
                    m.skinid = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_home_roomer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_home_roomer";
    };

    return pb_home_roomer;
})();

$root.pb_home_heroes = (function() {

    function pb_home_heroes(p) {
        this.roomers = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_home_heroes.prototype.hid = 0;
    pb_home_heroes.prototype.landId = 0;
    pb_home_heroes.prototype.roomers = $util.emptyArray;

    pb_home_heroes.create = function create(properties) {
        return new pb_home_heroes(properties);
    };

    pb_home_heroes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.hid != null && Object.hasOwnProperty.call(m, "hid"))
            w.uint32(8).int32(m.hid);
        if (m.landId != null && Object.hasOwnProperty.call(m, "landId"))
            w.uint32(16).int32(m.landId);
        if (m.roomers != null && m.roomers.length) {
            for (var i = 0; i < m.roomers.length; ++i)
                $root.pb_home_roomer.encode(m.roomers[i], w.uint32(26).fork()).ldelim();
        }
        return w;
    };

    pb_home_heroes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_home_heroes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.hid = r.int32();
                    break;
                }
            case 2: {
                    m.landId = r.int32();
                    break;
                }
            case 3: {
                    if (!(m.roomers && m.roomers.length))
                        m.roomers = [];
                    m.roomers.push($root.pb_home_roomer.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_home_heroes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_home_heroes";
    };

    return pb_home_heroes;
})();

$root.pb_coll = (function() {

    function pb_coll(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_coll.prototype.type = 0;
    pb_coll.prototype.score = 0;
    pb_coll.prototype.lv = 0;

    pb_coll.create = function create(properties) {
        return new pb_coll(properties);
    };

    pb_coll.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(8).int32(m.type);
        if (m.score != null && Object.hasOwnProperty.call(m, "score"))
            w.uint32(16).int32(m.score);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(24).int32(m.lv);
        return w;
    };

    pb_coll.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_coll();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.type = r.int32();
                    break;
                }
            case 2: {
                    m.score = r.int32();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_coll.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_coll";
    };

    return pb_coll;
})();

$root.pb_stove = (function() {

    function pb_stove(p) {
        this.buy = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_stove.prototype.id = 0;
    pb_stove.prototype.num = 0;
    pb_stove.prototype.cd = 0;
    pb_stove.prototype.buy = $util.emptyArray;

    pb_stove.create = function create(properties) {
        return new pb_stove(properties);
    };

    pb_stove.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(16).int32(m.num);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(24).int32(m.cd);
        if (m.buy != null && m.buy.length) {
            for (var i = 0; i < m.buy.length; ++i)
                $root.pb_stove_buy.encode(m.buy[i], w.uint32(34).fork()).ldelim();
        }
        return w;
    };

    pb_stove.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_stove();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.num = r.int32();
                    break;
                }
            case 3: {
                    m.cd = r.int32();
                    break;
                }
            case 4: {
                    if (!(m.buy && m.buy.length))
                        m.buy = [];
                    m.buy.push($root.pb_stove_buy.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_stove.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_stove";
    };

    return pb_stove;
})();

$root.pb_stove_buy = (function() {

    function pb_stove_buy(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_stove_buy.prototype.id = 0;
    pb_stove_buy.prototype.num = 0;

    pb_stove_buy.create = function create(properties) {
        return new pb_stove_buy(properties);
    };

    pb_stove_buy.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).int32(m.num);
        return w;
    };

    pb_stove_buy.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_stove_buy();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.num = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("num"))
            throw $util.ProtocolError("missing required 'num'", { instance: m });
        return m;
    };

    pb_stove_buy.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_stove_buy";
    };

    return pb_stove_buy;
})();

$root.pb_gvm_stone = (function() {

    function pb_gvm_stone(p) {
        this.num = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_gvm_stone.prototype.bid = 0;
    pb_gvm_stone.prototype.id = 0;
    pb_gvm_stone.prototype.num = $util.emptyArray;
    pb_gvm_stone.prototype.pos = 0;

    pb_gvm_stone.create = function create(properties) {
        return new pb_gvm_stone(properties);
    };

    pb_gvm_stone.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.bid != null && Object.hasOwnProperty.call(m, "bid"))
            w.uint32(8).int32(m.bid);
        w.uint32(16).int32(m.id);
        if (m.num != null && m.num.length) {
            for (var i = 0; i < m.num.length; ++i)
                w.uint32(24).int32(m.num[i]);
        }
        if (m.pos != null && Object.hasOwnProperty.call(m, "pos"))
            w.uint32(32).int32(m.pos);
        return w;
    };

    pb_gvm_stone.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_gvm_stone();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.bid = r.int32();
                    break;
                }
            case 2: {
                    m.id = r.int32();
                    break;
                }
            case 3: {
                    if (!(m.num && m.num.length))
                        m.num = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.num.push(r.int32());
                    } else
                        m.num.push(r.int32());
                    break;
                }
            case 4: {
                    m.pos = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    pb_gvm_stone.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_gvm_stone";
    };

    return pb_gvm_stone;
})();

$root.pb_gvm_map = (function() {

    function pb_gvm_map(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_gvm_map.prototype.id = 0;
    pb_gvm_map.prototype.buffNum = 0;

    pb_gvm_map.create = function create(properties) {
        return new pb_gvm_map(properties);
    };

    pb_gvm_map.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        if (m.buffNum != null && Object.hasOwnProperty.call(m, "buffNum"))
            w.uint32(24).int32(m.buffNum);
        return w;
    };

    pb_gvm_map.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_gvm_map();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 3: {
                    m.buffNum = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    pb_gvm_map.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_gvm_map";
    };

    return pb_gvm_map;
})();

$root.pb_gvm_map_node = (function() {

    function pb_gvm_map_node(p) {
        this.hps = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_gvm_map_node.prototype.id = 0;
    pb_gvm_map_node.prototype.state = 0;
    pb_gvm_map_node.prototype.cfgId = 0;
    pb_gvm_map_node.prototype.hps = $util.emptyArray;

    pb_gvm_map_node.create = function create(properties) {
        return new pb_gvm_map_node(properties);
    };

    pb_gvm_map_node.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        w.uint32(16).int32(m.state);
        if (m.cfgId != null && Object.hasOwnProperty.call(m, "cfgId"))
            w.uint32(24).int32(m.cfgId);
        if (m.hps != null && m.hps.length) {
            for (var i = 0; i < m.hps.length; ++i)
                w.uint32(32).int32(m.hps[i]);
        }
        return w;
    };

    pb_gvm_map_node.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_gvm_map_node();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.state = r.int32();
                    break;
                }
            case 3: {
                    m.cfgId = r.int32();
                    break;
                }
            case 4: {
                    if (!(m.hps && m.hps.length))
                        m.hps = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.hps.push(r.int32());
                    } else
                        m.hps.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        if (!m.hasOwnProperty("state"))
            throw $util.ProtocolError("missing required 'state'", { instance: m });
        return m;
    };

    pb_gvm_map_node.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_gvm_map_node";
    };

    return pb_gvm_map_node;
})();

$root.pb_gvm_rank = (function() {

    function pb_gvm_rank(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_gvm_rank.prototype.gid = 0;
    pb_gvm_rank.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_gvm_rank.prototype.time = 0;
    pb_gvm_rank.prototype.logo = 0;
    pb_gvm_rank.prototype.name = "";
    pb_gvm_rank.prototype.member = 0;
    pb_gvm_rank.prototype.exp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    pb_gvm_rank.create = function create(properties) {
        return new pb_gvm_rank(properties);
    };

    pb_gvm_rank.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gid != null && Object.hasOwnProperty.call(m, "gid"))
            w.uint32(8).int32(m.gid);
        if (m.score != null && Object.hasOwnProperty.call(m, "score"))
            w.uint32(16).int64(m.score);
        if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            w.uint32(32).int32(m.time);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(40).int32(m.logo);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(50).string(m.name);
        if (m.member != null && Object.hasOwnProperty.call(m, "member"))
            w.uint32(64).int32(m.member);
        if (m.exp != null && Object.hasOwnProperty.call(m, "exp"))
            w.uint32(72).int64(m.exp);
        return w;
    };

    pb_gvm_rank.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_gvm_rank();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.gid = r.int32();
                    break;
                }
            case 2: {
                    m.score = r.int64();
                    break;
                }
            case 4: {
                    m.time = r.int32();
                    break;
                }
            case 5: {
                    m.logo = r.int32();
                    break;
                }
            case 6: {
                    m.name = r.string();
                    break;
                }
            case 8: {
                    m.member = r.int32();
                    break;
                }
            case 9: {
                    m.exp = r.int64();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_gvm_rank.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_gvm_rank";
    };

    return pb_gvm_rank;
})();

$root.pb_match = (function() {

    function pb_match(p) {
        this.heroes = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_match.prototype.idx = 0;
    pb_match.prototype.name = "";
    pb_match.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_match.prototype.lv = 0;
    pb_match.prototype.logo = 0;
    pb_match.prototype.lbox = 0;
    pb_match.prototype.win = 0;
    pb_match.prototype.heroes = $util.emptyArray;
    pb_match.prototype.power = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    pb_match.create = function create(properties) {
        return new pb_match(properties);
    };

    pb_match.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).sint32(m.idx);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(18).string(m.name);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(24).int64(m.uid);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(32).int32(m.logo);
        if (m.lbox != null && Object.hasOwnProperty.call(m, "lbox"))
            w.uint32(40).int32(m.lbox);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(48).int32(m.lv);
        if (m.win != null && Object.hasOwnProperty.call(m, "win"))
            w.uint32(56).int32(m.win);
        if (m.heroes != null && m.heroes.length) {
            for (var i = 0; i < m.heroes.length; ++i)
                $root.pb_match_hero.encode(m.heroes[i], w.uint32(66).fork()).ldelim();
        }
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(72).int64(m.power);
        return w;
    };

    pb_match.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_match();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.idx = r.sint32();
                    break;
                }
            case 2: {
                    m.name = r.string();
                    break;
                }
            case 3: {
                    m.uid = r.int64();
                    break;
                }
            case 6: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.logo = r.int32();
                    break;
                }
            case 5: {
                    m.lbox = r.int32();
                    break;
                }
            case 7: {
                    m.win = r.int32();
                    break;
                }
            case 8: {
                    if (!(m.heroes && m.heroes.length))
                        m.heroes = [];
                    m.heroes.push($root.pb_match_hero.decode(r, r.uint32()));
                    break;
                }
            case 9: {
                    m.power = r.int64();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("idx"))
            throw $util.ProtocolError("missing required 'idx'", { instance: m });
        return m;
    };

    pb_match.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_match";
    };

    return pb_match;
})();

$root.pb_match_hero = (function() {

    function pb_match_hero(p) {
        this.equips = [];
        this.skillId = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_match_hero.prototype.pos = 0;
    pb_match_hero.prototype.id = 0;
    pb_match_hero.prototype.lv = 0;
    pb_match_hero.prototype.stl = 0;
    pb_match_hero.prototype.flag = 0;
    pb_match_hero.prototype.equips = $util.emptyArray;
    pb_match_hero.prototype.wake = 0;
    pb_match_hero.prototype.skillId = $util.emptyArray;
    pb_match_hero.prototype.attr = null;
    pb_match_hero.prototype.skin = 0;
    pb_match_hero.prototype.qlv = 0;
    pb_match_hero.prototype.treeFlag = 0;
    pb_match_hero.prototype.core = 0;
    pb_match_hero.prototype.times = 0;
    pb_match_hero.prototype.use = 0;

    pb_match_hero.create = function create(properties) {
        return new pb_match_hero(properties);
    };

    pb_match_hero.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.pos);
        w.uint32(16).int32(m.id);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(24).int32(m.lv);
        if (m.stl != null && Object.hasOwnProperty.call(m, "stl"))
            w.uint32(32).int32(m.stl);
        if (m.flag != null && Object.hasOwnProperty.call(m, "flag"))
            w.uint32(40).int32(m.flag);
        if (m.equips != null && m.equips.length) {
            for (var i = 0; i < m.equips.length; ++i)
                $root.pb_equip.encode(m.equips[i], w.uint32(50).fork()).ldelim();
        }
        if (m.wake != null && Object.hasOwnProperty.call(m, "wake"))
            w.uint32(56).int32(m.wake);
        if (m.skillId != null && m.skillId.length) {
            for (var i = 0; i < m.skillId.length; ++i)
                w.uint32(64).int32(m.skillId[i]);
        }
        if (m.attr != null && Object.hasOwnProperty.call(m, "attr"))
            $root.pb_attr.encode(m.attr, w.uint32(74).fork()).ldelim();
        if (m.skin != null && Object.hasOwnProperty.call(m, "skin"))
            w.uint32(80).int32(m.skin);
        if (m.qlv != null && Object.hasOwnProperty.call(m, "qlv"))
            w.uint32(88).int32(m.qlv);
        if (m.treeFlag != null && Object.hasOwnProperty.call(m, "treeFlag"))
            w.uint32(96).int32(m.treeFlag);
        if (m.core != null && Object.hasOwnProperty.call(m, "core"))
            w.uint32(104).int32(m.core);
        if (m.times != null && Object.hasOwnProperty.call(m, "times"))
            w.uint32(112).int32(m.times);
        if (m.use != null && Object.hasOwnProperty.call(m, "use"))
            w.uint32(120).int32(m.use);
        return w;
    };

    pb_match_hero.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_match_hero();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.pos = r.int32();
                    break;
                }
            case 2: {
                    m.id = r.int32();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.stl = r.int32();
                    break;
                }
            case 5: {
                    m.flag = r.int32();
                    break;
                }
            case 6: {
                    if (!(m.equips && m.equips.length))
                        m.equips = [];
                    m.equips.push($root.pb_equip.decode(r, r.uint32()));
                    break;
                }
            case 7: {
                    m.wake = r.int32();
                    break;
                }
            case 8: {
                    if (!(m.skillId && m.skillId.length))
                        m.skillId = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.skillId.push(r.int32());
                    } else
                        m.skillId.push(r.int32());
                    break;
                }
            case 9: {
                    m.attr = $root.pb_attr.decode(r, r.uint32());
                    break;
                }
            case 10: {
                    m.skin = r.int32();
                    break;
                }
            case 11: {
                    m.qlv = r.int32();
                    break;
                }
            case 12: {
                    m.treeFlag = r.int32();
                    break;
                }
            case 13: {
                    m.core = r.int32();
                    break;
                }
            case 14: {
                    m.times = r.int32();
                    break;
                }
            case 15: {
                    m.use = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("pos"))
            throw $util.ProtocolError("missing required 'pos'", { instance: m });
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    pb_match_hero.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_match_hero";
    };

    return pb_match_hero;
})();

$root.pb_pvp_accounts = (function() {

    function pb_pvp_accounts(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_pvp_accounts.prototype.score = 0;
    pb_pvp_accounts.prototype.win = 0;

    pb_pvp_accounts.create = function create(properties) {
        return new pb_pvp_accounts(properties);
    };

    pb_pvp_accounts.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.score);
        w.uint32(16).int32(m.win);
        return w;
    };

    pb_pvp_accounts.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_pvp_accounts();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.score = r.int32();
                    break;
                }
            case 2: {
                    m.win = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("score"))
            throw $util.ProtocolError("missing required 'score'", { instance: m });
        if (!m.hasOwnProperty("win"))
            throw $util.ProtocolError("missing required 'win'", { instance: m });
        return m;
    };

    pb_pvp_accounts.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_pvp_accounts";
    };

    return pb_pvp_accounts;
})();

$root.pb_attr = (function() {

    function pb_attr(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_attr.prototype.atk = 0;
    pb_attr.prototype.hp = 0;
    pb_attr.prototype.arm = 0;
    pb_attr.prototype.spd = 0;
    pb_attr.prototype.sklP = 0;
    pb_attr.prototype.hit = 0;
    pb_attr.prototype.miss = 0;
    pb_attr.prototype.crit = 0;
    pb_attr.prototype.critTime = 0;
    pb_attr.prototype.brk = 0;
    pb_attr.prototype.free = 0;
    pb_attr.prototype.decDmg = 0;
    pb_attr.prototype.trueAtk = 0;

    pb_attr.create = function create(properties) {
        return new pb_attr(properties);
    };

    pb_attr.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.atk != null && Object.hasOwnProperty.call(m, "atk"))
            w.uint32(8).int32(m.atk);
        if (m.hp != null && Object.hasOwnProperty.call(m, "hp"))
            w.uint32(16).int32(m.hp);
        if (m.arm != null && Object.hasOwnProperty.call(m, "arm"))
            w.uint32(24).int32(m.arm);
        if (m.spd != null && Object.hasOwnProperty.call(m, "spd"))
            w.uint32(32).int32(m.spd);
        if (m.sklP != null && Object.hasOwnProperty.call(m, "sklP"))
            w.uint32(40).int32(m.sklP);
        if (m.hit != null && Object.hasOwnProperty.call(m, "hit"))
            w.uint32(48).int32(m.hit);
        if (m.miss != null && Object.hasOwnProperty.call(m, "miss"))
            w.uint32(56).int32(m.miss);
        if (m.crit != null && Object.hasOwnProperty.call(m, "crit"))
            w.uint32(64).int32(m.crit);
        if (m.critTime != null && Object.hasOwnProperty.call(m, "critTime"))
            w.uint32(72).int32(m.critTime);
        if (m.brk != null && Object.hasOwnProperty.call(m, "brk"))
            w.uint32(80).int32(m.brk);
        if (m.free != null && Object.hasOwnProperty.call(m, "free"))
            w.uint32(88).int32(m.free);
        if (m.decDmg != null && Object.hasOwnProperty.call(m, "decDmg"))
            w.uint32(96).int32(m.decDmg);
        if (m.trueAtk != null && Object.hasOwnProperty.call(m, "trueAtk"))
            w.uint32(104).int32(m.trueAtk);
        return w;
    };

    pb_attr.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_attr();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.atk = r.int32();
                    break;
                }
            case 2: {
                    m.hp = r.int32();
                    break;
                }
            case 3: {
                    m.arm = r.int32();
                    break;
                }
            case 4: {
                    m.spd = r.int32();
                    break;
                }
            case 5: {
                    m.sklP = r.int32();
                    break;
                }
            case 6: {
                    m.hit = r.int32();
                    break;
                }
            case 7: {
                    m.miss = r.int32();
                    break;
                }
            case 8: {
                    m.crit = r.int32();
                    break;
                }
            case 9: {
                    m.critTime = r.int32();
                    break;
                }
            case 10: {
                    m.brk = r.int32();
                    break;
                }
            case 11: {
                    m.free = r.int32();
                    break;
                }
            case 12: {
                    m.decDmg = r.int32();
                    break;
                }
            case 13: {
                    m.trueAtk = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_attr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_attr";
    };

    return pb_attr;
})();

$root.pb_gvm_mbr = (function() {

    function pb_gvm_mbr(p) {
        this.scores = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_gvm_mbr.prototype.name = "";
    pb_gvm_mbr.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_gvm_mbr.prototype.lv = 0;
    pb_gvm_mbr.prototype.logo = 0;
    pb_gvm_mbr.prototype.lbox = 0;
    pb_gvm_mbr.prototype.scores = $util.emptyArray;
    pb_gvm_mbr.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    pb_gvm_mbr.create = function create(properties) {
        return new pb_gvm_mbr(properties);
    };

    pb_gvm_mbr.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(10).string(m.name);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(16).int64(m.uid);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(24).int32(m.lv);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(32).int32(m.logo);
        if (m.lbox != null && Object.hasOwnProperty.call(m, "lbox"))
            w.uint32(40).int32(m.lbox);
        if (m.scores != null && m.scores.length) {
            for (var i = 0; i < m.scores.length; ++i)
                w.uint32(48).int64(m.scores[i]);
        }
        if (m.score != null && Object.hasOwnProperty.call(m, "score"))
            w.uint32(56).int64(m.score);
        return w;
    };

    pb_gvm_mbr.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_gvm_mbr();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.name = r.string();
                    break;
                }
            case 2: {
                    m.uid = r.int64();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.logo = r.int32();
                    break;
                }
            case 5: {
                    m.lbox = r.int32();
                    break;
                }
            case 6: {
                    if (!(m.scores && m.scores.length))
                        m.scores = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.scores.push(r.int64());
                    } else
                        m.scores.push(r.int64());
                    break;
                }
            case 7: {
                    m.score = r.int64();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_gvm_mbr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_gvm_mbr";
    };

    return pb_gvm_mbr;
})();

$root.pb_up_star = (function() {

    function pb_up_star(p) {
        this.hid = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_up_star.prototype.id = 0;
    pb_up_star.prototype.hid = $util.emptyArray;

    pb_up_star.create = function create(properties) {
        return new pb_up_star(properties);
    };

    pb_up_star.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        if (m.hid != null && m.hid.length) {
            for (var i = 0; i < m.hid.length; ++i)
                w.uint32(16).int32(m.hid[i]);
        }
        return w;
    };

    pb_up_star.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_up_star();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    if (!(m.hid && m.hid.length))
                        m.hid = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.hid.push(r.int32());
                    } else
                        m.hid.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    pb_up_star.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_up_star";
    };

    return pb_up_star;
})();

$root.pb_fun = (function() {

    function pb_fun(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_fun.prototype.open = 0;
    pb_fun.prototype.cd = 0;

    pb_fun.create = function create(properties) {
        return new pb_fun(properties);
    };

    pb_fun.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.open);
        w.uint32(16).int32(m.cd);
        return w;
    };

    pb_fun.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_fun();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.open = r.int32();
                    break;
                }
            case 2: {
                    m.cd = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("open"))
            throw $util.ProtocolError("missing required 'open'", { instance: m });
        if (!m.hasOwnProperty("cd"))
            throw $util.ProtocolError("missing required 'cd'", { instance: m });
        return m;
    };

    pb_fun.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_fun";
    };

    return pb_fun;
})();

$root.hland_change_skin = (function() {

    function hland_change_skin(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    hland_change_skin.prototype.skin = 0;
    hland_change_skin.prototype.pos = 0;

    hland_change_skin.create = function create(properties) {
        return new hland_change_skin(properties);
    };

    hland_change_skin.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.skin);
        w.uint32(16).int32(m.pos);
        return w;
    };

    hland_change_skin.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.hland_change_skin();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.skin = r.int32();
                    break;
                }
            case 2: {
                    m.pos = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("skin"))
            throw $util.ProtocolError("missing required 'skin'", { instance: m });
        if (!m.hasOwnProperty("pos"))
            throw $util.ProtocolError("missing required 'pos'", { instance: m });
        return m;
    };

    hland_change_skin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/hland_change_skin";
    };

    return hland_change_skin;
})();

$root.pb_hland_log = (function() {

    function pb_hland_log(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_hland_log.prototype.name = "";
    pb_hland_log.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_hland_log.prototype.lv = 0;
    pb_hland_log.prototype.logo = 0;
    pb_hland_log.prototype.lbox = 0;
    pb_hland_log.prototype.type = 0;
    pb_hland_log.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    pb_hland_log.create = function create(properties) {
        return new pb_hland_log(properties);
    };

    pb_hland_log.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(10).string(m.name);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(16).int64(m.uid);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(24).int32(m.lv);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(32).int32(m.logo);
        if (m.lbox != null && Object.hasOwnProperty.call(m, "lbox"))
            w.uint32(40).int32(m.lbox);
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(48).int32(m.type);
        if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            w.uint32(56).int64(m.time);
        return w;
    };

    pb_hland_log.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_hland_log();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.name = r.string();
                    break;
                }
            case 2: {
                    m.uid = r.int64();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.logo = r.int32();
                    break;
                }
            case 5: {
                    m.lbox = r.int32();
                    break;
                }
            case 6: {
                    m.type = r.int32();
                    break;
                }
            case 7: {
                    m.time = r.int64();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_hland_log.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_hland_log";
    };

    return pb_hland_log;
})();

$root.pb_hmbr = (function() {

    function pb_hmbr(p) {
        this.itemIds = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_hmbr.prototype.name = "";
    pb_hmbr.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_hmbr.prototype.lv = 0;
    pb_hmbr.prototype.logo = 0;
    pb_hmbr.prototype.lbox = 0;
    pb_hmbr.prototype.itemIds = $util.emptyArray;

    pb_hmbr.create = function create(properties) {
        return new pb_hmbr(properties);
    };

    pb_hmbr.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(10).string(m.name);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(16).int64(m.uid);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(24).int32(m.lv);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(32).int32(m.logo);
        if (m.lbox != null && Object.hasOwnProperty.call(m, "lbox"))
            w.uint32(40).int32(m.lbox);
        if (m.itemIds != null && m.itemIds.length) {
            for (var i = 0; i < m.itemIds.length; ++i)
                w.uint32(48).int32(m.itemIds[i]);
        }
        return w;
    };

    pb_hmbr.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_hmbr();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.name = r.string();
                    break;
                }
            case 2: {
                    m.uid = r.int64();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.logo = r.int32();
                    break;
                }
            case 5: {
                    m.lbox = r.int32();
                    break;
                }
            case 6: {
                    if (!(m.itemIds && m.itemIds.length))
                        m.itemIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.itemIds.push(r.int32());
                    } else
                        m.itemIds.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_hmbr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_hmbr";
    };

    return pb_hmbr;
})();

$root.pb_hteam = (function() {

    function pb_hteam(p) {
        this.mbr = [];
        this.invites = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_hteam.prototype.id = "";
    pb_hteam.prototype.leader = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_hteam.prototype.type = 0;
    pb_hteam.prototype.mbr = $util.emptyArray;
    pb_hteam.prototype.cd = 0;
    pb_hteam.prototype.shape = false;
    pb_hteam.prototype.invites = $util.emptyArray;

    pb_hteam.create = function create(properties) {
        return new pb_hteam(properties);
    };

    pb_hteam.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(10).string(m.id);
        if (m.leader != null && Object.hasOwnProperty.call(m, "leader"))
            w.uint32(16).int64(m.leader);
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(24).int32(m.type);
        if (m.mbr != null && m.mbr.length) {
            for (var i = 0; i < m.mbr.length; ++i)
                $root.pb_hmbr.encode(m.mbr[i], w.uint32(34).fork()).ldelim();
        }
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(40).int32(m.cd);
        if (m.shape != null && Object.hasOwnProperty.call(m, "shape"))
            w.uint32(48).bool(m.shape);
        if (m.invites != null && m.invites.length) {
            for (var i = 0; i < m.invites.length; ++i)
                w.uint32(56).int64(m.invites[i]);
        }
        return w;
    };

    pb_hteam.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_hteam();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.string();
                    break;
                }
            case 2: {
                    m.leader = r.int64();
                    break;
                }
            case 3: {
                    m.type = r.int32();
                    break;
                }
            case 4: {
                    if (!(m.mbr && m.mbr.length))
                        m.mbr = [];
                    m.mbr.push($root.pb_hmbr.decode(r, r.uint32()));
                    break;
                }
            case 5: {
                    m.cd = r.int32();
                    break;
                }
            case 6: {
                    m.shape = r.bool();
                    break;
                }
            case 7: {
                    if (!(m.invites && m.invites.length))
                        m.invites = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.invites.push(r.int64());
                    } else
                        m.invites.push(r.int64());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_hteam.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_hteam";
    };

    return pb_hteam;
})();

$root.pb_team_info = (function() {

    function pb_team_info(p) {
        this.heroes = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_team_info.prototype.id = 0;
    pb_team_info.prototype.name = "";
    pb_team_info.prototype.heroes = $util.emptyArray;
    pb_team_info.prototype.petid = 0;
    pb_team_info.prototype.flag = 0;

    pb_team_info.create = function create(properties) {
        return new pb_team_info(properties);
    };

    pb_team_info.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(18).string(m.name);
        if (m.heroes != null && m.heroes.length) {
            for (var i = 0; i < m.heroes.length; ++i)
                $root.pb_team_hero.encode(m.heroes[i], w.uint32(26).fork()).ldelim();
        }
        if (m.petid != null && Object.hasOwnProperty.call(m, "petid"))
            w.uint32(32).int32(m.petid);
        if (m.flag != null && Object.hasOwnProperty.call(m, "flag"))
            w.uint32(40).int32(m.flag);
        return w;
    };

    pb_team_info.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_team_info();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.name = r.string();
                    break;
                }
            case 3: {
                    if (!(m.heroes && m.heroes.length))
                        m.heroes = [];
                    m.heroes.push($root.pb_team_hero.decode(r, r.uint32()));
                    break;
                }
            case 4: {
                    m.petid = r.int32();
                    break;
                }
            case 5: {
                    m.flag = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    pb_team_info.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_team_info";
    };

    return pb_team_info;
})();

$root.pb_team_hero = (function() {

    function pb_team_hero(p) {
        this.equips = [];
        this.skillId = [];
        this.sattrs = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_team_hero.prototype.pos = 0;
    pb_team_hero.prototype.hid = 0;
    pb_team_hero.prototype.equips = $util.emptyArray;
    pb_team_hero.prototype.skillId = $util.emptyArray;
    pb_team_hero.prototype.sattrs = $util.emptyArray;
    pb_team_hero.prototype.flag = 0;

    pb_team_hero.create = function create(properties) {
        return new pb_team_hero(properties);
    };

    pb_team_hero.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.pos);
        w.uint32(16).int32(m.hid);
        if (m.equips != null && m.equips.length) {
            for (var i = 0; i < m.equips.length; ++i)
                $root.pb_equip.encode(m.equips[i], w.uint32(26).fork()).ldelim();
        }
        if (m.skillId != null && m.skillId.length) {
            for (var i = 0; i < m.skillId.length; ++i)
                w.uint32(32).int32(m.skillId[i]);
        }
        if (m.sattrs != null && m.sattrs.length) {
            for (var i = 0; i < m.sattrs.length; ++i)
                $root.pb_sattr.encode(m.sattrs[i], w.uint32(42).fork()).ldelim();
        }
        if (m.flag != null && Object.hasOwnProperty.call(m, "flag"))
            w.uint32(48).int32(m.flag);
        return w;
    };

    pb_team_hero.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_team_hero();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.pos = r.int32();
                    break;
                }
            case 2: {
                    m.hid = r.int32();
                    break;
                }
            case 3: {
                    if (!(m.equips && m.equips.length))
                        m.equips = [];
                    m.equips.push($root.pb_equip.decode(r, r.uint32()));
                    break;
                }
            case 4: {
                    if (!(m.skillId && m.skillId.length))
                        m.skillId = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.skillId.push(r.int32());
                    } else
                        m.skillId.push(r.int32());
                    break;
                }
            case 5: {
                    if (!(m.sattrs && m.sattrs.length))
                        m.sattrs = [];
                    m.sattrs.push($root.pb_sattr.decode(r, r.uint32()));
                    break;
                }
            case 6: {
                    m.flag = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("pos"))
            throw $util.ProtocolError("missing required 'pos'", { instance: m });
        if (!m.hasOwnProperty("hid"))
            throw $util.ProtocolError("missing required 'hid'", { instance: m });
        return m;
    };

    pb_team_hero.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_team_hero";
    };

    return pb_team_hero;
})();

$root.good = (function() {

    function good(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    good.prototype.goodId = 0;
    good.prototype.heroId = 0;
    good.prototype.qlt = null;
    good.prototype.price = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    good.prototype.delPrice = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    good.prototype.state = 0;
    good.prototype.cd = 0;
    good.prototype.rprice = 0;
    good.prototype.seller = null;
    good.prototype.buyer = null;

    good.create = function create(properties) {
        return new good(properties);
    };

    good.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.goodId != null && Object.hasOwnProperty.call(m, "goodId"))
            w.uint32(8).int32(m.goodId);
        if (m.heroId != null && Object.hasOwnProperty.call(m, "heroId"))
            w.uint32(16).int32(m.heroId);
        if (m.qlt != null && Object.hasOwnProperty.call(m, "qlt"))
            $root.pb_hero_qlc.encode(m.qlt, w.uint32(26).fork()).ldelim();
        if (m.price != null && Object.hasOwnProperty.call(m, "price"))
            w.uint32(32).int64(m.price);
        if (m.delPrice != null && Object.hasOwnProperty.call(m, "delPrice"))
            w.uint32(40).int64(m.delPrice);
        if (m.state != null && Object.hasOwnProperty.call(m, "state"))
            w.uint32(48).int32(m.state);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(56).int32(m.cd);
        if (m.rprice != null && Object.hasOwnProperty.call(m, "rprice"))
            w.uint32(64).int32(m.rprice);
        if (m.seller != null && Object.hasOwnProperty.call(m, "seller"))
            $root.pb_give_role.encode(m.seller, w.uint32(74).fork()).ldelim();
        if (m.buyer != null && Object.hasOwnProperty.call(m, "buyer"))
            $root.pb_give_role.encode(m.buyer, w.uint32(82).fork()).ldelim();
        return w;
    };

    good.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.good();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.goodId = r.int32();
                    break;
                }
            case 2: {
                    m.heroId = r.int32();
                    break;
                }
            case 3: {
                    m.qlt = $root.pb_hero_qlc.decode(r, r.uint32());
                    break;
                }
            case 4: {
                    m.price = r.int64();
                    break;
                }
            case 5: {
                    m.delPrice = r.int64();
                    break;
                }
            case 6: {
                    m.state = r.int32();
                    break;
                }
            case 7: {
                    m.cd = r.int32();
                    break;
                }
            case 8: {
                    m.rprice = r.int32();
                    break;
                }
            case 9: {
                    m.seller = $root.pb_give_role.decode(r, r.uint32());
                    break;
                }
            case 10: {
                    m.buyer = $root.pb_give_role.decode(r, r.uint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    good.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/good";
    };

    return good;
})();

$root.mall_log = (function() {

    function mall_log(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    mall_log.prototype.time = 0;
    mall_log.prototype.heroid = 0;
    mall_log.prototype.qlt = null;
    mall_log.prototype.price = 0;
    mall_log.prototype.type = 0;
    mall_log.prototype.status = 0;
    mall_log.prototype.goodid = 0;
    mall_log.prototype.user = null;

    mall_log.create = function create(properties) {
        return new mall_log(properties);
    };

    mall_log.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            w.uint32(8).int32(m.time);
        if (m.heroid != null && Object.hasOwnProperty.call(m, "heroid"))
            w.uint32(16).int32(m.heroid);
        if (m.qlt != null && Object.hasOwnProperty.call(m, "qlt"))
            $root.pb_hero_qlc.encode(m.qlt, w.uint32(26).fork()).ldelim();
        if (m.price != null && Object.hasOwnProperty.call(m, "price"))
            w.uint32(32).int32(m.price);
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(40).int32(m.type);
        if (m.status != null && Object.hasOwnProperty.call(m, "status"))
            w.uint32(48).int32(m.status);
        if (m.goodid != null && Object.hasOwnProperty.call(m, "goodid"))
            w.uint32(56).int32(m.goodid);
        if (m.user != null && Object.hasOwnProperty.call(m, "user"))
            $root.pb_give_role.encode(m.user, w.uint32(66).fork()).ldelim();
        return w;
    };

    mall_log.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.mall_log();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.time = r.int32();
                    break;
                }
            case 2: {
                    m.heroid = r.int32();
                    break;
                }
            case 3: {
                    m.qlt = $root.pb_hero_qlc.decode(r, r.uint32());
                    break;
                }
            case 4: {
                    m.price = r.int32();
                    break;
                }
            case 5: {
                    m.type = r.int32();
                    break;
                }
            case 6: {
                    m.status = r.int32();
                    break;
                }
            case 7: {
                    m.goodid = r.int32();
                    break;
                }
            case 8: {
                    m.user = $root.pb_give_role.decode(r, r.uint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    mall_log.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/mall_log";
    };

    return mall_log;
})();

$root.pb_kv = (function() {

    function pb_kv(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_kv.prototype.k = 0;
    pb_kv.prototype.v = 0;

    pb_kv.create = function create(properties) {
        return new pb_kv(properties);
    };

    pb_kv.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.k != null && Object.hasOwnProperty.call(m, "k"))
            w.uint32(8).int32(m.k);
        if (m.v != null && Object.hasOwnProperty.call(m, "v"))
            w.uint32(16).int32(m.v);
        return w;
    };

    pb_kv.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_kv();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.k = r.int32();
                    break;
                }
            case 2: {
                    m.v = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_kv.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_kv";
    };

    return pb_kv;
})();

$root.pb_kvs = (function() {

    function pb_kvs(p) {
        this.k = [];
        this.v = [];
        this.v2 = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_kvs.prototype.k = $util.emptyArray;
    pb_kvs.prototype.v = $util.emptyArray;
    pb_kvs.prototype.v2 = $util.emptyArray;

    pb_kvs.create = function create(properties) {
        return new pb_kvs(properties);
    };

    pb_kvs.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.k != null && m.k.length) {
            for (var i = 0; i < m.k.length; ++i)
                w.uint32(8).int32(m.k[i]);
        }
        if (m.v != null && m.v.length) {
            for (var i = 0; i < m.v.length; ++i)
                w.uint32(16).int32(m.v[i]);
        }
        if (m.v2 != null && m.v2.length) {
            for (var i = 0; i < m.v2.length; ++i)
                w.uint32(24).int32(m.v2[i]);
        }
        return w;
    };

    pb_kvs.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_kvs();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.k && m.k.length))
                        m.k = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.k.push(r.int32());
                    } else
                        m.k.push(r.int32());
                    break;
                }
            case 2: {
                    if (!(m.v && m.v.length))
                        m.v = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.v.push(r.int32());
                    } else
                        m.v.push(r.int32());
                    break;
                }
            case 3: {
                    if (!(m.v2 && m.v2.length))
                        m.v2 = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.v2.push(r.int32());
                    } else
                        m.v2.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_kvs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_kvs";
    };

    return pb_kvs;
})();

$root.pb_growup = (function() {

    function pb_growup(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_growup.prototype.id = 0;
    pb_growup.prototype.index = 0;
    pb_growup.prototype.claim = 0;

    pb_growup.create = function create(properties) {
        return new pb_growup(properties);
    };

    pb_growup.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.index != null && Object.hasOwnProperty.call(m, "index"))
            w.uint32(16).int32(m.index);
        if (m.claim != null && Object.hasOwnProperty.call(m, "claim"))
            w.uint32(24).int32(m.claim);
        return w;
    };

    pb_growup.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_growup();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.index = r.int32();
                    break;
                }
            case 3: {
                    m.claim = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_growup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_growup";
    };

    return pb_growup;
})();

$root.pb_puzzle = (function() {

    function pb_puzzle(p) {
        this.pos = [];
        this.bag = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_puzzle.prototype.id = 0;
    pb_puzzle.prototype.next = 0;
    pb_puzzle.prototype.cur = 0;
    pb_puzzle.prototype.pos = $util.emptyArray;
    pb_puzzle.prototype.bag = $util.emptyArray;
    pb_puzzle.prototype.num = 0;
    pb_puzzle.prototype.ring = 0;
    pb_puzzle.prototype.siz = 0;

    pb_puzzle.create = function create(properties) {
        return new pb_puzzle(properties);
    };

    pb_puzzle.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.next != null && Object.hasOwnProperty.call(m, "next"))
            w.uint32(16).int32(m.next);
        if (m.cur != null && Object.hasOwnProperty.call(m, "cur"))
            w.uint32(24).int32(m.cur);
        if (m.pos != null && m.pos.length) {
            for (var i = 0; i < m.pos.length; ++i)
                $root.pb_kv.encode(m.pos[i], w.uint32(34).fork()).ldelim();
        }
        if (m.bag != null && m.bag.length) {
            for (var i = 0; i < m.bag.length; ++i)
                w.uint32(40).int32(m.bag[i]);
        }
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(48).int32(m.num);
        if (m.ring != null && Object.hasOwnProperty.call(m, "ring"))
            w.uint32(56).int32(m.ring);
        if (m.siz != null && Object.hasOwnProperty.call(m, "siz"))
            w.uint32(64).int32(m.siz);
        return w;
    };

    pb_puzzle.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_puzzle();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.next = r.int32();
                    break;
                }
            case 3: {
                    m.cur = r.int32();
                    break;
                }
            case 4: {
                    if (!(m.pos && m.pos.length))
                        m.pos = [];
                    m.pos.push($root.pb_kv.decode(r, r.uint32()));
                    break;
                }
            case 5: {
                    if (!(m.bag && m.bag.length))
                        m.bag = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.bag.push(r.int32());
                    } else
                        m.bag.push(r.int32());
                    break;
                }
            case 6: {
                    m.num = r.int32();
                    break;
                }
            case 7: {
                    m.ring = r.int32();
                    break;
                }
            case 8: {
                    m.siz = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_puzzle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_puzzle";
    };

    return pb_puzzle;
})();

$root.pb_give_role = (function() {

    function pb_give_role(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_give_role.prototype.uid64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_give_role.prototype.channel = "";
    pb_give_role.prototype.lv = 0;
    pb_give_role.prototype.lbox = 0;
    pb_give_role.prototype.name = "";
    pb_give_role.prototype.logo = 0;

    pb_give_role.create = function create(properties) {
        return new pb_give_role(properties);
    };

    pb_give_role.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.uid64);
        w.uint32(18).string(m.channel);
        w.uint32(24).int32(m.lv);
        if (m.lbox != null && Object.hasOwnProperty.call(m, "lbox"))
            w.uint32(32).int32(m.lbox);
        w.uint32(42).string(m.name);
        w.uint32(48).int32(m.logo);
        return w;
    };

    pb_give_role.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_give_role();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.uid64 = r.int64();
                    break;
                }
            case 2: {
                    m.channel = r.string();
                    break;
                }
            case 3: {
                    m.lv = r.int32();
                    break;
                }
            case 4: {
                    m.lbox = r.int32();
                    break;
                }
            case 5: {
                    m.name = r.string();
                    break;
                }
            case 6: {
                    m.logo = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uid64"))
            throw $util.ProtocolError("missing required 'uid64'", { instance: m });
        if (!m.hasOwnProperty("channel"))
            throw $util.ProtocolError("missing required 'channel'", { instance: m });
        if (!m.hasOwnProperty("lv"))
            throw $util.ProtocolError("missing required 'lv'", { instance: m });
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("logo"))
            throw $util.ProtocolError("missing required 'logo'", { instance: m });
        return m;
    };

    pb_give_role.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_give_role";
    };

    return pb_give_role;
})();

$root.pb_give_order = (function() {

    function pb_give_order(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_give_order.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_give_order.prototype.type = 0;
    pb_give_order.prototype.num = 0;
    pb_give_order.prototype.status = 0;
    pb_give_order.prototype.role = null;
    pb_give_order.prototype.cd = 0;

    pb_give_order.create = function create(properties) {
        return new pb_give_order(properties);
    };

    pb_give_order.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int64(m.id);
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(16).uint32(m.type);
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(24).int32(m.num);
        if (m.status != null && Object.hasOwnProperty.call(m, "status"))
            w.uint32(32).uint32(m.status);
        if (m.role != null && Object.hasOwnProperty.call(m, "role"))
            $root.pb_give_role.encode(m.role, w.uint32(42).fork()).ldelim();
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(48).int32(m.cd);
        return w;
    };

    pb_give_order.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_give_order();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int64();
                    break;
                }
            case 2: {
                    m.type = r.uint32();
                    break;
                }
            case 3: {
                    m.num = r.int32();
                    break;
                }
            case 4: {
                    m.status = r.uint32();
                    break;
                }
            case 5: {
                    m.role = $root.pb_give_role.decode(r, r.uint32());
                    break;
                }
            case 6: {
                    m.cd = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_give_order.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_give_order";
    };

    return pb_give_order;
})();

$root.pb_give_log = (function() {

    function pb_give_log(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_give_log.prototype.name = "";
    pb_give_log.prototype.num = 0;
    pb_give_log.prototype.tax = 0;
    pb_give_log.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    pb_give_log.create = function create(properties) {
        return new pb_give_log(properties);
    };

    pb_give_log.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(10).string(m.name);
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(16).int32(m.num);
        if (m.tax != null && Object.hasOwnProperty.call(m, "tax"))
            w.uint32(24).int32(m.tax);
        if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            w.uint32(32).int64(m.time);
        return w;
    };

    pb_give_log.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_give_log();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.name = r.string();
                    break;
                }
            case 2: {
                    m.num = r.int32();
                    break;
                }
            case 3: {
                    m.tax = r.int32();
                    break;
                }
            case 4: {
                    m.time = r.int64();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_give_log.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_give_log";
    };

    return pb_give_log;
})();

$root.pb_qlt_pvp_enemy = (function() {

    function pb_qlt_pvp_enemy(p) {
        this.camp = [];
        this.skls = [];
        this.hide = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_qlt_pvp_enemy.prototype.idx = 0;
    pb_qlt_pvp_enemy.prototype.logo = 0;
    pb_qlt_pvp_enemy.prototype.name = "";
    pb_qlt_pvp_enemy.prototype.cluster = "";
    pb_qlt_pvp_enemy.prototype.lv = 0;
    pb_qlt_pvp_enemy.prototype.lbox = 0;
    pb_qlt_pvp_enemy.prototype.camp = $util.emptyArray;
    pb_qlt_pvp_enemy.prototype.skls = $util.emptyArray;
    pb_qlt_pvp_enemy.prototype.hide = $util.emptyArray;
    pb_qlt_pvp_enemy.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_qlt_pvp_enemy.prototype.power = 0;
    pb_qlt_pvp_enemy.prototype.isFight = 0;
    pb_qlt_pvp_enemy.prototype.gname = "";

    pb_qlt_pvp_enemy.create = function create(properties) {
        return new pb_qlt_pvp_enemy(properties);
    };

    pb_qlt_pvp_enemy.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.idx != null && Object.hasOwnProperty.call(m, "idx"))
            w.uint32(8).sint32(m.idx);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(16).int32(m.logo);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(26).string(m.name);
        if (m.cluster != null && Object.hasOwnProperty.call(m, "cluster"))
            w.uint32(34).string(m.cluster);
        if (m.lv != null && Object.hasOwnProperty.call(m, "lv"))
            w.uint32(40).int32(m.lv);
        if (m.lbox != null && Object.hasOwnProperty.call(m, "lbox"))
            w.uint32(48).int32(m.lbox);
        if (m.camp != null && m.camp.length) {
            for (var i = 0; i < m.camp.length; ++i)
                $root.pb_unit.encode(m.camp[i], w.uint32(58).fork()).ldelim();
        }
        if (m.skls != null && m.skls.length) {
            for (var i = 0; i < m.skls.length; ++i)
                w.uint32(64).sint32(m.skls[i]);
        }
        if (m.hide != null && m.hide.length) {
            for (var i = 0; i < m.hide.length; ++i)
                w.uint32(72).sint32(m.hide[i]);
        }
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(80).int64(m.uid);
        if (m.power != null && Object.hasOwnProperty.call(m, "power"))
            w.uint32(88).int32(m.power);
        if (m.isFight != null && Object.hasOwnProperty.call(m, "isFight"))
            w.uint32(96).int32(m.isFight);
        if (m.gname != null && Object.hasOwnProperty.call(m, "gname"))
            w.uint32(106).string(m.gname);
        return w;
    };

    pb_qlt_pvp_enemy.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_qlt_pvp_enemy();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.idx = r.sint32();
                    break;
                }
            case 2: {
                    m.logo = r.int32();
                    break;
                }
            case 3: {
                    m.name = r.string();
                    break;
                }
            case 4: {
                    m.cluster = r.string();
                    break;
                }
            case 5: {
                    m.lv = r.int32();
                    break;
                }
            case 6: {
                    m.lbox = r.int32();
                    break;
                }
            case 7: {
                    if (!(m.camp && m.camp.length))
                        m.camp = [];
                    m.camp.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            case 8: {
                    if (!(m.skls && m.skls.length))
                        m.skls = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.skls.push(r.sint32());
                    } else
                        m.skls.push(r.sint32());
                    break;
                }
            case 9: {
                    if (!(m.hide && m.hide.length))
                        m.hide = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.hide.push(r.sint32());
                    } else
                        m.hide.push(r.sint32());
                    break;
                }
            case 10: {
                    m.uid = r.int64();
                    break;
                }
            case 11: {
                    m.power = r.int32();
                    break;
                }
            case 12: {
                    m.isFight = r.int32();
                    break;
                }
            case 13: {
                    m.gname = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_qlt_pvp_enemy.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_qlt_pvp_enemy";
    };

    return pb_qlt_pvp_enemy;
})();

$root.pb_qloger = (function() {

    function pb_qloger(p) {
        this.aSkls = [];
        this.dSkls = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_qloger.prototype.vid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    pb_qloger.prototype.aMbr = null;
    pb_qloger.prototype.dMbr = null;
    pb_qloger.prototype.time = 0;
    pb_qloger.prototype.win = false;
    pb_qloger.prototype.delta = 0;
    pb_qloger.prototype.aSkls = $util.emptyArray;
    pb_qloger.prototype.dSkls = $util.emptyArray;

    pb_qloger.create = function create(properties) {
        return new pb_qloger(properties);
    };

    pb_qloger.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.vid);
        if (m.aMbr != null && Object.hasOwnProperty.call(m, "aMbr"))
            $root.pb_smbr.encode(m.aMbr, w.uint32(18).fork()).ldelim();
        if (m.dMbr != null && Object.hasOwnProperty.call(m, "dMbr"))
            $root.pb_smbr.encode(m.dMbr, w.uint32(26).fork()).ldelim();
        if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            w.uint32(32).int32(m.time);
        if (m.win != null && Object.hasOwnProperty.call(m, "win"))
            w.uint32(40).bool(m.win);
        if (m.delta != null && Object.hasOwnProperty.call(m, "delta"))
            w.uint32(48).sint32(m.delta);
        if (m.aSkls != null && m.aSkls.length) {
            for (var i = 0; i < m.aSkls.length; ++i)
                w.uint32(56).sint32(m.aSkls[i]);
        }
        if (m.dSkls != null && m.dSkls.length) {
            for (var i = 0; i < m.dSkls.length; ++i)
                w.uint32(64).sint32(m.dSkls[i]);
        }
        return w;
    };

    pb_qloger.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_qloger();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.vid = r.int64();
                    break;
                }
            case 2: {
                    m.aMbr = $root.pb_smbr.decode(r, r.uint32());
                    break;
                }
            case 3: {
                    m.dMbr = $root.pb_smbr.decode(r, r.uint32());
                    break;
                }
            case 4: {
                    m.time = r.int32();
                    break;
                }
            case 5: {
                    m.win = r.bool();
                    break;
                }
            case 6: {
                    m.delta = r.sint32();
                    break;
                }
            case 7: {
                    if (!(m.aSkls && m.aSkls.length))
                        m.aSkls = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.aSkls.push(r.sint32());
                    } else
                        m.aSkls.push(r.sint32());
                    break;
                }
            case 8: {
                    if (!(m.dSkls && m.dSkls.length))
                        m.dSkls = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.dSkls.push(r.sint32());
                    } else
                        m.dSkls.push(r.sint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("vid"))
            throw $util.ProtocolError("missing required 'vid'", { instance: m });
        return m;
    };

    pb_qloger.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_qloger";
    };

    return pb_qloger;
})();

$root.pb_qvideo = (function() {

    function pb_qvideo(p) {
        this.atk = [];
        this.def = [];
        this.frames = [];
        this.hurts = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_qvideo.prototype.atk = $util.emptyArray;
    pb_qvideo.prototype.def = $util.emptyArray;
    pb_qvideo.prototype.frames = $util.emptyArray;
    pb_qvideo.prototype.hurts = $util.emptyArray;
    pb_qvideo.prototype.win = false;

    pb_qvideo.create = function create(properties) {
        return new pb_qvideo(properties);
    };

    pb_qvideo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.atk != null && m.atk.length) {
            for (var i = 0; i < m.atk.length; ++i)
                $root.pb_unit.encode(m.atk[i], w.uint32(10).fork()).ldelim();
        }
        if (m.def != null && m.def.length) {
            for (var i = 0; i < m.def.length; ++i)
                $root.pb_unit.encode(m.def[i], w.uint32(18).fork()).ldelim();
        }
        if (m.frames != null && m.frames.length) {
            for (var i = 0; i < m.frames.length; ++i)
                w.uint32(26).bytes(m.frames[i]);
        }
        if (m.hurts != null && m.hurts.length) {
            for (var i = 0; i < m.hurts.length; ++i)
                $root.pb_hurts.encode(m.hurts[i], w.uint32(34).fork()).ldelim();
        }
        w.uint32(40).bool(m.win);
        return w;
    };

    pb_qvideo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_qvideo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.atk && m.atk.length))
                        m.atk = [];
                    m.atk.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            case 2: {
                    if (!(m.def && m.def.length))
                        m.def = [];
                    m.def.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            case 3: {
                    if (!(m.frames && m.frames.length))
                        m.frames = [];
                    m.frames.push(r.bytes());
                    break;
                }
            case 4: {
                    if (!(m.hurts && m.hurts.length))
                        m.hurts = [];
                    m.hurts.push($root.pb_hurts.decode(r, r.uint32()));
                    break;
                }
            case 5: {
                    m.win = r.bool();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("win"))
            throw $util.ProtocolError("missing required 'win'", { instance: m });
        return m;
    };

    pb_qvideo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_qvideo";
    };

    return pb_qvideo;
})();

$root.pb_qlog = (function() {

    function pb_qlog(p) {
        this.video = [];
        this.aSkls = [];
        this.dSkls = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_qlog.prototype.video = $util.emptyArray;
    pb_qlog.prototype.aMbr = null;
    pb_qlog.prototype.dMbr = null;
    pb_qlog.prototype.time = 0;
    pb_qlog.prototype.win = false;
    pb_qlog.prototype.delta = 0;
    pb_qlog.prototype.aSkls = $util.emptyArray;
    pb_qlog.prototype.dSkls = $util.emptyArray;

    pb_qlog.create = function create(properties) {
        return new pb_qlog(properties);
    };

    pb_qlog.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.video != null && m.video.length) {
            for (var i = 0; i < m.video.length; ++i)
                $root.pb_qvideo.encode(m.video[i], w.uint32(10).fork()).ldelim();
        }
        if (m.aMbr != null && Object.hasOwnProperty.call(m, "aMbr"))
            $root.pb_smbr.encode(m.aMbr, w.uint32(18).fork()).ldelim();
        if (m.dMbr != null && Object.hasOwnProperty.call(m, "dMbr"))
            $root.pb_smbr.encode(m.dMbr, w.uint32(26).fork()).ldelim();
        if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            w.uint32(32).int32(m.time);
        if (m.win != null && Object.hasOwnProperty.call(m, "win"))
            w.uint32(40).bool(m.win);
        if (m.delta != null && Object.hasOwnProperty.call(m, "delta"))
            w.uint32(48).sint32(m.delta);
        if (m.aSkls != null && m.aSkls.length) {
            for (var i = 0; i < m.aSkls.length; ++i)
                w.uint32(56).sint32(m.aSkls[i]);
        }
        if (m.dSkls != null && m.dSkls.length) {
            for (var i = 0; i < m.dSkls.length; ++i)
                w.uint32(64).sint32(m.dSkls[i]);
        }
        return w;
    };

    pb_qlog.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_qlog();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.video && m.video.length))
                        m.video = [];
                    m.video.push($root.pb_qvideo.decode(r, r.uint32()));
                    break;
                }
            case 2: {
                    m.aMbr = $root.pb_smbr.decode(r, r.uint32());
                    break;
                }
            case 3: {
                    m.dMbr = $root.pb_smbr.decode(r, r.uint32());
                    break;
                }
            case 4: {
                    m.time = r.int32();
                    break;
                }
            case 5: {
                    m.win = r.bool();
                    break;
                }
            case 6: {
                    m.delta = r.sint32();
                    break;
                }
            case 7: {
                    if (!(m.aSkls && m.aSkls.length))
                        m.aSkls = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.aSkls.push(r.sint32());
                    } else
                        m.aSkls.push(r.sint32());
                    break;
                }
            case 8: {
                    if (!(m.dSkls && m.dSkls.length))
                        m.dSkls = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.dSkls.push(r.sint32());
                    } else
                        m.dSkls.push(r.sint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    pb_qlog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_qlog";
    };

    return pb_qlog;
})();

$root.power_rank = (function() {

    function power_rank(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    power_rank.prototype.id = 0;
    power_rank.prototype.player = null;
    power_rank.prototype.score = 0;

    power_rank.create = function create(properties) {
        return new power_rank(properties);
    };

    power_rank.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).uint32(m.id);
        if (m.player != null && Object.hasOwnProperty.call(m, "player"))
            $root.pb_give_role.encode(m.player, w.uint32(18).fork()).ldelim();
        if (m.score != null && Object.hasOwnProperty.call(m, "score"))
            w.uint32(24).int32(m.score);
        return w;
    };

    power_rank.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.power_rank();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.uint32();
                    break;
                }
            case 2: {
                    m.player = $root.pb_give_role.decode(r, r.uint32());
                    break;
                }
            case 3: {
                    m.score = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    power_rank.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/power_rank";
    };

    return power_rank;
})();

$root.power_task = (function() {

    function power_task(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    power_task.prototype.id = 0;
    power_task.prototype.type = 0;
    power_task.prototype.cd = 0;
    power_task.prototype.num = 0;
    power_task.prototype.dotId = 0;
    power_task.prototype.flag = 0;

    power_task.create = function create(properties) {
        return new power_task(properties);
    };

    power_task.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).uint32(m.id);
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(16).uint32(m.type);
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(24).int32(m.cd);
        if (m.num != null && Object.hasOwnProperty.call(m, "num"))
            w.uint32(32).int32(m.num);
        if (m.dotId != null && Object.hasOwnProperty.call(m, "dotId"))
            w.uint32(40).uint32(m.dotId);
        if (m.flag != null && Object.hasOwnProperty.call(m, "flag"))
            w.uint32(48).uint32(m.flag);
        return w;
    };

    power_task.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.power_task();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.uint32();
                    break;
                }
            case 2: {
                    m.type = r.uint32();
                    break;
                }
            case 3: {
                    m.cd = r.int32();
                    break;
                }
            case 4: {
                    m.num = r.int32();
                    break;
                }
            case 5: {
                    m.dotId = r.uint32();
                    break;
                }
            case 6: {
                    m.flag = r.uint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    power_task.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/power_task";
    };

    return power_task;
})();

$root.dot_info = (function() {

    function dot_info(p) {
        this.buff = [];
        this.skill = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    dot_info.prototype.id = 0;
    dot_info.prototype.powerId = 0;
    dot_info.prototype.degree = 0;
    dot_info.prototype.max = 0;
    dot_info.prototype.status = 0;
    dot_info.prototype.item = 0;
    dot_info.prototype.buff = $util.emptyArray;
    dot_info.prototype.tmpId = 0;
    dot_info.prototype.skill = $util.emptyArray;
    dot_info.prototype.cd = 0;
    dot_info.prototype.cd2 = 0;
    dot_info.prototype.cd3 = 0;
    dot_info.prototype.cd4 = 0;
    dot_info.prototype.cd5 = 0;

    dot_info.create = function create(properties) {
        return new dot_info(properties);
    };

    dot_info.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).uint32(m.id);
        if (m.powerId != null && Object.hasOwnProperty.call(m, "powerId"))
            w.uint32(16).uint32(m.powerId);
        if (m.degree != null && Object.hasOwnProperty.call(m, "degree"))
            w.uint32(24).int32(m.degree);
        if (m.max != null && Object.hasOwnProperty.call(m, "max"))
            w.uint32(32).int32(m.max);
        if (m.status != null && Object.hasOwnProperty.call(m, "status"))
            w.uint32(40).uint32(m.status);
        if (m.item != null && Object.hasOwnProperty.call(m, "item"))
            w.uint32(48).int32(m.item);
        if (m.buff != null && m.buff.length) {
            for (var i = 0; i < m.buff.length; ++i)
                $root.pb_item.encode(m.buff[i], w.uint32(58).fork()).ldelim();
        }
        if (m.tmpId != null && Object.hasOwnProperty.call(m, "tmpId"))
            w.uint32(64).int32(m.tmpId);
        if (m.skill != null && m.skill.length) {
            for (var i = 0; i < m.skill.length; ++i)
                w.uint32(72).int32(m.skill[i]);
        }
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(80).int32(m.cd);
        if (m.cd2 != null && Object.hasOwnProperty.call(m, "cd2"))
            w.uint32(88).int32(m.cd2);
        if (m.cd3 != null && Object.hasOwnProperty.call(m, "cd3"))
            w.uint32(96).int32(m.cd3);
        if (m.cd4 != null && Object.hasOwnProperty.call(m, "cd4"))
            w.uint32(104).int32(m.cd4);
        if (m.cd5 != null && Object.hasOwnProperty.call(m, "cd5"))
            w.uint32(112).int32(m.cd5);
        return w;
    };

    dot_info.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.dot_info();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.uint32();
                    break;
                }
            case 2: {
                    m.powerId = r.uint32();
                    break;
                }
            case 3: {
                    m.degree = r.int32();
                    break;
                }
            case 4: {
                    m.max = r.int32();
                    break;
                }
            case 5: {
                    m.status = r.uint32();
                    break;
                }
            case 6: {
                    m.item = r.int32();
                    break;
                }
            case 7: {
                    if (!(m.buff && m.buff.length))
                        m.buff = [];
                    m.buff.push($root.pb_item.decode(r, r.uint32()));
                    break;
                }
            case 8: {
                    m.tmpId = r.int32();
                    break;
                }
            case 9: {
                    if (!(m.skill && m.skill.length))
                        m.skill = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.skill.push(r.int32());
                    } else
                        m.skill.push(r.int32());
                    break;
                }
            case 10: {
                    m.cd = r.int32();
                    break;
                }
            case 11: {
                    m.cd2 = r.int32();
                    break;
                }
            case 12: {
                    m.cd3 = r.int32();
                    break;
                }
            case 13: {
                    m.cd4 = r.int32();
                    break;
                }
            case 14: {
                    m.cd5 = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    dot_info.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/dot_info";
    };

    return dot_info;
})();

$root.dot_log = (function() {

    function dot_log(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    dot_log.prototype.type = 0;
    dot_log.prototype.degree = 0;
    dot_log.prototype.time = "";
    dot_log.prototype.id = 0;
    dot_log.prototype.add = 0;

    dot_log.create = function create(properties) {
        return new dot_log(properties);
    };

    dot_log.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(8).uint32(m.type);
        if (m.degree != null && Object.hasOwnProperty.call(m, "degree"))
            w.uint32(16).int32(m.degree);
        if (m.time != null && Object.hasOwnProperty.call(m, "time"))
            w.uint32(26).string(m.time);
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(32).int32(m.id);
        if (m.add != null && Object.hasOwnProperty.call(m, "add"))
            w.uint32(40).int32(m.add);
        return w;
    };

    dot_log.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.dot_log();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.type = r.uint32();
                    break;
                }
            case 2: {
                    m.degree = r.int32();
                    break;
                }
            case 3: {
                    m.time = r.string();
                    break;
                }
            case 4: {
                    m.id = r.int32();
                    break;
                }
            case 5: {
                    m.add = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    dot_log.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/dot_log";
    };

    return dot_log;
})();

$root.power_monster = (function() {

    function power_monster(p) {
        this.camp = [];
        this.buff = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    power_monster.prototype.id = 0;
    power_monster.prototype.camp = $util.emptyArray;
    power_monster.prototype.buff = $util.emptyArray;

    power_monster.create = function create(properties) {
        return new power_monster(properties);
    };

    power_monster.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        if (m.camp != null && m.camp.length) {
            for (var i = 0; i < m.camp.length; ++i)
                $root.pb_unit.encode(m.camp[i], w.uint32(18).fork()).ldelim();
        }
        if (m.buff != null && m.buff.length) {
            for (var i = 0; i < m.buff.length; ++i)
                w.uint32(24).int32(m.buff[i]);
        }
        return w;
    };

    power_monster.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.power_monster();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    if (!(m.camp && m.camp.length))
                        m.camp = [];
                    m.camp.push($root.pb_unit.decode(r, r.uint32()));
                    break;
                }
            case 3: {
                    if (!(m.buff && m.buff.length))
                        m.buff = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.buff.push(r.int32());
                    } else
                        m.buff.push(r.int32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    power_monster.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/power_monster";
    };

    return power_monster;
})();

$root.power_skill = (function() {

    function power_skill(p) {
        this.skill = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    power_skill.prototype.id = 0;
    power_skill.prototype.name = "";
    power_skill.prototype.skill = $util.emptyArray;
    power_skill.prototype.cd = 0;

    power_skill.create = function create(properties) {
        return new power_skill(properties);
    };

    power_skill.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.id);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(18).string(m.name);
        if (m.skill != null && m.skill.length) {
            for (var i = 0; i < m.skill.length; ++i)
                w.uint32(24).int32(m.skill[i]);
        }
        if (m.cd != null && Object.hasOwnProperty.call(m, "cd"))
            w.uint32(32).int32(m.cd);
        return w;
    };

    power_skill.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.power_skill();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.name = r.string();
                    break;
                }
            case 3: {
                    if (!(m.skill && m.skill.length))
                        m.skill = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.skill.push(r.int32());
                    } else
                        m.skill.push(r.int32());
                    break;
                }
            case 4: {
                    m.cd = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: m });
        return m;
    };

    power_skill.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/power_skill";
    };

    return power_skill;
})();

$root.power_manager = (function() {

    function power_manager(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    power_manager.prototype.udk = "";
    power_manager.prototype.cluster = "";
    power_manager.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    power_manager.create = function create(properties) {
        return new power_manager(properties);
    };

    power_manager.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.udk != null && Object.hasOwnProperty.call(m, "udk"))
            w.uint32(10).string(m.udk);
        if (m.cluster != null && Object.hasOwnProperty.call(m, "cluster"))
            w.uint32(18).string(m.cluster);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(24).int64(m.uid);
        return w;
    };

    power_manager.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.power_manager();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.udk = r.string();
                    break;
                }
            case 2: {
                    m.cluster = r.string();
                    break;
                }
            case 3: {
                    m.uid = r.int64();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    power_manager.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/power_manager";
    };

    return power_manager;
})();

module.exports = $root;
