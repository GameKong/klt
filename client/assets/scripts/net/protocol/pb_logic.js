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

$root.pb_test = (function() {

    function pb_test(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    pb_test.prototype.name = "";
    pb_test.prototype.logo = 0;

    pb_test.create = function create(properties) {
        return new pb_test(properties);
    };

    pb_test.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.name);
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(16).int32(m.logo);
        return w;
    };

    pb_test.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.pb_test();
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
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        return m;
    };

    pb_test.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/pb_test";
    };

    return pb_test;
})();

module.exports = $root;
