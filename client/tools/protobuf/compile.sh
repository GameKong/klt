#创建临时文件夹
tmp_dir="tmp"
mkdir -p ${tmp_dir}

#使用npm脚本命令转换.proto文件为js和ts文件到tmp文件夹
npm run build-proto

# 拷贝js和ts到项目
target_dir="../../assets/scripts/net/protocol"
cp ${tmp_dir}/*.js ${target_dir}
cp ${tmp_dir}/*.d.ts ${target_dir}

# 拷贝js和ts到服务器项目
server_dir="../../wss/src/protocol"
cp ${tmp_dir}/*.js ${server_dir}
cp ${tmp_dir}/*.d.ts ${server_dir}

#移除临时文件夹
rm -r ${tmp_dir}

echo "compile protocol success!"