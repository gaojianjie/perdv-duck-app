let queryApi = require("../base/http.js");
module.exports = function() {
    res.writeHead(200, {
        "Content-Type": "application/json:charset=utf-8"
    });
    queryApi("/mall/goods/recommendgoods", req.body, "POST").then(data => {
        res.end(JSON.stringify(data));
    });
}