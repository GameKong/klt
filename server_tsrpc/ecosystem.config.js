module.exports = {
	apps: [
		// 网关服务器
		{
			name: "gate",
			script: "./dist/serverGateEntry.js",
			env_production: {
				"NODE_ENV": "production",
				"PORT": "2000"
			},
			env_develop: {
				"NODE_ENV": "develop",
				"PORT": "2000",
				"PORT_MATCH1": "4000",
				"PORT_MATCH2": "5000",
			}
		},
		// 匹配服务器 - 1号
		{
			name: "match-1",
			script: "./dist/serverMatchEntry.js",
			env_production: {
				"NODE_ENV": "production",
				"PORT": "4000"
			},
			env_develop: {
				"NODE_ENV": "develop",
				"PORT": "4000"
			}
		},
		// 房间服务器 - 1号
		{
			name: "room-1",
			script: "./dist/serverRoomEntry.js",
			env_production: {
				"NODE_ENV": "production",
				"PORT": "4001",
				"SERVER_URL_ROOM": "43.142.65.105",
				"SERVER_URL_MATCH": "43.142.65.105:4000"
			},
			env_develop: {
				"NODE_ENV": "develop",
				"PORT": "4001",
				"SERVER_URL_ROOM": "127.0.0.1",
				"SERVER_URL_MATCH": "127.0.0.1:4000"
			}
		},
		// 匹配服务器 - 2号
		{
			name: "match-2",
			script: "./dist/serverMatchEntry.js",
			env_production: {
				"NODE_ENV": "production",
				"PORT": "5000"
			},
			env_develop: {
				"NODE_ENV": "develop",
				"PORT": "5000"
			}
		},
		// 房间服务器 - 2号
		{
			name: "room-2",
			script: "./dist/serverRoomEntry.js",
			env_production: {
				"NODE_ENV": "production",
				"PORT": "5001",
				"SERVER_URL_ROOM": "43.142.65.105",
				"SERVER_URL_MATCH": "43.142.65.105:5000"
			},
			env_develop: {
				"NODE_ENV": "develop",
				"PORT": "5001",
				"SERVER_URL_ROOM": "127.0.0.1",
				"SERVER_URL_MATCH": "127.0.0.1:5000"
			}
		}
	]
};
