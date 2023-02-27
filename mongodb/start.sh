DIR="$(pwd)"
CONFIG_PATH=${DIR}/mongod.conf
mongod --fork --config ${CONFIG_PATH} 