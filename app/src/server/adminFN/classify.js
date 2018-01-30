let queryApi = require("../base/http.js");
let http = require('http');
module.exports = function(req, res) {
    queryApi("/mobile/Category/categorySon", req.query, 'GET').then(data => {
        console.log(data)
        res.end(JSON.stringify(data))
    });
}