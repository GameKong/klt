const fs = require('fs');
const ps = require('path');

const { stringify } = require('querystring');
const file = ps.join(__dirname, '../tmp/', 'pb_logic.d.ts');
let original = fs.readFileSync(file, { encoding: 'utf8' });
original = original.replace(/\n/g, "\n\t");

fs.writeFileSync(file, `
import $protobuf from "protobufjs/minimal.js";
import {Long} from "protobufjs/minimal.js";

declare namespace Proto {
    ${original}
}

export default Proto;
`);