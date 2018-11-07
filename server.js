// 服务器主模块
var server = require("./start");
var router = require("./router");
server.start(router.route);