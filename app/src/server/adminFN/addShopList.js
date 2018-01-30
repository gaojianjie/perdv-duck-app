let fs = require('fs');
module.exports = function(req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json:charset=utf-8"
    });
    let file = req.body;
    fs.writeFileSync('./PeopleList/ShopList.json', JSON.stringify(req.body.data))
    res.end('1')
}