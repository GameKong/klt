var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var fs = require('fs');
var excel = require('exceljs');
/**
 * Excel转Json数据
 * @param {*} src           读取的excel文件目录
 * @param {*} dst           导出的json文件目录
 * @param {*} name          excel文件名
 * @param {*} isClient      是否为客户端数据
 */
function excel2Json(src, dst, name, isClient) {
    return __awaiter(this, void 0, void 0, function () {
        var r, names, keys, types, types_client, servers, clients, primary, primary_index, workbook, worksheet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    r = {};
                    names = [];
                    keys = [];
                    types = [];
                    types_client = {};
                    servers = [];
                    clients = [];
                    primary = [];
                    primary_index = [];
                    workbook = new excel.Workbook();
                    // 读取excel
                    return [4 /*yield*/, workbook.xlsx.readFile(src)];
                case 1:
                    // 读取excel
                    _a.sent();
                    worksheet = workbook.getWorksheet(1);
                    worksheet.eachRow(function (row, rowNumber) {
                        var data = {};
                        row.eachCell(function (cell, colNumber) {
                            var value = cell.value;
                            if (rowNumber === 1) { // 字段中文名
                                names.push(value);
                                if (value.indexOf("【KEY】") > -1)
                                    primary_index.push(colNumber);
                            }
                            else if (rowNumber === 2) { // 字段英文名
                                keys.push(value);
                                if (primary_index.indexOf(colNumber) > -1)
                                    primary.push(value);
                            }
                            else if (rowNumber === 3) { // 通用字段数据类型
                                types.push(value);
                            }
                            else if (isClient == false && rowNumber === 4) { // 是否输出服务器字段数据
                                servers.push(value);
                            }
                            else if (isClient == true && rowNumber === 5) { // 客户端数据类型 
                                clients.push(value);
                            }
                            else {
                                var index = colNumber - 1;
                                var type = types[index];
                                var server = servers[index];
                                var client = clients[index];
                                var isWrite = isClient && client === "client" || isClient == false && server === "server";
                                if (isWrite) {
                                    var key = keys[index];
                                    switch (type) {
                                        case "int":
                                            data[key] = parseInt(value);
                                            types_client[key] = {
                                                en: "number",
                                                zh: names[index]
                                            };
                                            break;
                                        case "float":
                                            data[key] = parseFloat(value);
                                            types_client[key] = {
                                                en: "number",
                                                zh: names[index]
                                            };
                                            break;
                                        case "string":
                                            data[key] = value;
                                            types_client[key] = {
                                                en: "string",
                                                zh: names[index]
                                            };
                                            break;
                                        case "any":
                                            data[key] = JSON.parse(value);
                                            types_client[key] = {
                                                en: "any",
                                                zh: names[index]
                                            };
                                            break;
                                    }
                                }
                            }
                        });
                        // 生成数据（多主键）
                        if (rowNumber > 5) {
                            var temp = null;
                            for (var i = 0; i < primary.length; i++) {
                                var k = primary[i];
                                var id = data[k];
                                delete data[k]; // 主键数据删除
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
                    if (!(r["undefined"] == null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, fs.writeFileSync(dst, JSON.stringify(r))];
                case 2:
                    _a.sent();
                    console.log(isClient ? "客户端数据" : "服务器数据", "生成成功", dst);
                    return [3 /*break*/, 4];
                case 3:
                    console.log(isClient ? "客户端数据" : "服务器数据", "无数据", dst);
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function main() {
    var inputExcelPath = "".concat(__dirname, "/excel/");
    var outServerJsonPath = "".concat(__dirname, "/../server_tsrpc/src/config/");
    var outClientJsonPath = "".concat(__dirname, "/../client/assets/bundles/config/");
    var files = fs.readdirSync(inputExcelPath);
    var datas = [
        {
            path: outServerJsonPath,
            isClient: false
        },
        {
            path: outClientJsonPath,
            isClient: true
        }
    ];
    datas.forEach(function (data) {
        fs.rm(data.path, { recursive: true }, function () {
            fs.mkdir(data.path, function () {
                files.forEach(function (f) {
                    var name = f.substring(0, f.indexOf("."));
                    var ext = f.toString().substring(f.lastIndexOf(".") + 1);
                    if (ext == "xlsx") {
                        excel2Json(inputExcelPath + f, data.path + name + ".json", name, data.isClient);
                    }
                });
            });
        });
    });
}
main();
