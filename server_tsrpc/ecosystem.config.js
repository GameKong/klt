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
			}
		},
		// 匹配服务器 - 0号
		{
			name: "match-0",
			script: "./dist/serverMatchEntry.js",
			env_production: {
				"NODE_ENV": "production",
				"PORT": "4000"
			},
			env_develop: {
				"NODE_ENV": "develop",
				"AREA_NUMBER": 0
			}
		},
		// 房间服务器 - 0号
		{
			name: "room-0",
			script: "./dist/serverRoomEntry.js",
			env_production: {
				"NODE_ENV": "production",
				"PORT": "4001",
				"MATCH_AREA_NUMBER": "43.142.65.105:4000"
			},
			env_develop: {
				"NODE_ENV": "develop",
				"AREA_NUMBER": 0,	// 房间服区号
				"MATCH_AREA_NUMBER": 0 // 要连接的匹配服区号
			}
		},
		// 匹配服务器 - 1号
		{
			name: "match-1",
			script: "./dist/serverMatchEntry.js",
			env_production: {
				"NODE_ENV": "production",
				"PORT": "5000"
			},
			env_develop: {
				"NODE_ENV": "develop",
				"AREA_NUMBER": 1
			}
		},
		// 房间服务器 - 1号
		{
			name: "room-1",
			script: "./dist/serverRoomEntry.js",
			env_production: {
				"NODE_ENV": "production",
				"PORT": "5001",
				"MATCH_AREA_NUMBER": "43.142.65.105:5000"
			},
			env_develop: {
				"NODE_ENV": "develop",
				"AREA_NUMBER": 1,
				"MATCH_AREA_NUMBER": 0 // 要连接的匹配服区号
			}
		}
	]
};
