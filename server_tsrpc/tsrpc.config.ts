import { CodeTemplate, TsrpcConfig } from 'tsrpc-cli';

const tsrpcConf: TsrpcConfig = {
    // Generate ServiceProto
    proto: [
        {
            ptlDir: 'src/shared/protocols/gate',                          // 协议目录
            output: 'src/shared/protocols/ServiceProtoGate.ts',           // 生成的ServiceProto的路径
            apiDir: 'src/servers/gate/api',                               // API 目录
            docDir: 'docs/gate',                                         // API 文档目录
            ptlTemplate: CodeTemplate.getExtendedPtl(),
            // msgTemplate: CodeTemplate.getExtendedMsg(),
        },
        {
            ptlDir: 'src/shared/protocols/match',                         // 协议目录
            output: 'src/shared/protocols/ServiceProtoMatch.ts',          // 生成的ServiceProto的路径
            apiDir: 'src/servers/match/api',                              // API 目录
            docDir: 'docs/match',                                        // API 文档目录
            // ptlTemplate: CodeTemplate.getExtendedPtl(),
            // msgTemplate: CodeTemplate.getExtendedMsg(),
        },
        {
            ptlDir: 'src/shared/protocols/room',                          // 协议目录
            output: 'src/shared/protocols/ServiceProtoRoom.ts',           // 生成的ServiceProto的路径
            apiDir: 'src/servers/room/api',                               // API 目录
            docDir: 'docs/room',                                         // API 文档目录
            ptlTemplate: CodeTemplate.getExtendedPtl(),
            // msgTemplate: CodeTemplate.getExtendedMsg(),
        },
    ],
    // Sync shared code
    sync: [
        {
            from: 'src/shared',
            to: '../client/assets/scripts/shared',
            type: 'copy',     // Change this to 'copy' if your environment not support symlink
            readonly:false
        }
    ],
    // Dev server
    dev: {
        autoProto: true,        // Auto regenerate proto
        autoSync: true,         // Auto sync when file changed
        autoApi: true,          // Auto create API when ServiceProto updated
        watch: 'src',           // Restart dev server when these files changed
        entry: 'src/index.ts',  // Dev server command: node -r ts-node/register {entry}
    },
    // Build config
    build: {
        autoProto: true,        // Auto generate proto before build
        autoSync: true,         // Auto sync before build
        autoApi: true,          // Auto generate API before build
        outDir: 'dist',         // Clean this dir before build
    }
}
export default tsrpcConf;