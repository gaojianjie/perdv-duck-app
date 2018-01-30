let fs = require('fs');
module.exports = function(req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json:charset=utf-8"
    });
    let file =req.body;
    let fileJson = JSON.parse(fs.readFileSync('./classifyList/classifyList.json',{encoding:'utf-8'}));
    res.end(JSON.stringify({code:1, data:fileJson[file.id]}))
}