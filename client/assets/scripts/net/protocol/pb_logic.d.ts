
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
	
	export interface Ipb_test {
	    name: string;
	    logo?: (number|null);
	}
	
	export class pb_test implements Ipb_test {
	    constructor(p?: Ipb_test);
	    public name: string;
	    public logo: number;
	    public static create(properties?: Ipb_test): pb_test;
	    public static encode(m: Ipb_test, w?: $protobuf.Writer): $protobuf.Writer;
	    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pb_test;
	    public static getTypeUrl(typeUrlPrefix?: string): string;
	}
	
}

export default Proto;
