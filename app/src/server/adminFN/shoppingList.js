let queryApi = require("../base/http.js");
module.exports = function (req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json:charset=utf-8"
    });
    queryApi("/mall/Shipping/getPostageByGoodsId?", req.body, "POST").then(data => {
        res.end(JSON.stringify(data));
    });
}