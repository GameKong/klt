import path from "path";
import { createTs } from "./JsonToTs";
import { config } from "./main";

const fs = require('fs')
import xlsx from "xlsx"

/**
 * Excel转Json数据
 * @param {*} src           读取的excel文件目录
 * @param {*} dst           导出的json文件目录
 * @param {*} name          excel文件名
 * @param {*} isClient      是否为客户端数据
 */
async function convert(src: string, dst: string, name: string, isClient: boolean) {
    let r: any = {};
    let names: any = {};          // 文名字段名
    let keys: any[] = [];           // 字段名
    let types: any = {};          // 通用字段数据类型
    let types_client: any = {};     // 客户端数据类型
    let servers: any = {};       // 是否输出服务器字段数据
    let clients: any = {};        // 是否输出客户端字段数据
    let primary: string[] = [];     // 多主键配置

    const workbook = xlsx.readFile(src);
    const rows: any[] = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]); // 获取第一个worksheet

    // 第一行是key
    for (let key of Object.keys(rows[0])) {
        if (key.indexOf("*") == 0) {
            primary.push(key);
        }

        keys.push(key)
    }

    rows.forEach((row: any, rowNumber) => {
        let data: any = {};
        for (let key of keys) {
            const value = row[key];
            if (rowNumber === 0) {                              // 第二行 字段中文名
                names[key] = value;
            }
            else if (rowNumber === 1) {                         // 第三行 通用字段数据类型
                types[key] = value;
            }
            else if (isClient == false && rowNumber === 2) {    // 第四行 是否输出服务器字段数据
                servers[key] = value;
            }
            else if (isClient == true && rowNumber === 3) {     // 第五行 客户端数据类型 
                clients[key] = value;
            }
            else if (rowNumber > 3) {
                let type = types[key];
                let server = servers[key];
                let client = clients[key];
                let isWrite = isClient && client === "client" || isClient == false && server === "server";
                if (isWrite) {
                    switch (type) {
                        case "int":
                            data[key] = parseInt(value);
                            types_client[key] = {
                                en: "number",
                                zh: names[key]
                            };
                            break;
                        case "float":
                            data[key] = parseFloat(value);
                            types_client[key] = {
                                en: "number",
                                zh: names[key]
                            };
                            break;
                        case "string":
                            data[key] = value;
                            types_client[key] = {
                                en: "string",
                                zh: names[key]
                            };
                            break;
                        case "any":
                            data[key] = JSON.parse(value);
                            types_client[key] = {
                                en: "any",
                                zh: names[key]
                            };
                            break;
                    }
                }
            }
        };

        // 生成数据（多主键）
        if (rowNumber > 3) {
            let temp: any = null;
            for (var i = 0; i < primary.length; i++) {
                let k = primary[i];
                let id = data[k];
                delete data[k];           // 主键数据删除

                if (primary.length == 1) {
                    r[id] = data;
                }
                else {
                    if (i == primary.length - 1) {
                        temp[id] = data;
                    }
                    else if (i == 0) {
                        if (r[id] == undefined) {
                            r[id] = {};
                        }
                        temp = r[id];
                    }
                    else {
                        temp[id] = {};
                        temp = temp[id];
                    }
                }
            }
        }
    });

    // 写入流
    await fs.writeFileSync(dst, JSON.stringify(r, null, "\t")); // json

    // 生成客户端脚本
    // if (isClient) createTs(name, types_client, r, primary);
    console.log(isClient ? "客户端数据" : "服务器数据", "生成成功", dst);
}

export function run() {
    var inputExcelPath = config.PathExcel;
    var outJsonPath = config.PathJson;
    const files = fs.readdirSync(inputExcelPath);
    files.forEach((f: any) => {
        let name = f.substring(0, f.indexOf("."));
        let ext = f.toString().substring(f.lastIndexOf(".") + 1);
        if (ext == "xlsx") {
            // convert(inputExcelPath + f, inputExcelPath + "server\\" + name + ".json", name, false);        // 服务器数据
            convert(inputExcelPath + f, outJsonPath + name + ".json", name, true);                         // 客户端数据
        }
    });
}