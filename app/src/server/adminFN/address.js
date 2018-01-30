let fs = require('fs')
module.exports = function(req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json:charset=utf-8"
    });
    let file = req.body;
    let fileList = JSON.parse(fs.readFileSync('./PeopleList/PeopleAddress.json', {encoding:'utf-8'}))
    if(fileList.length !== 0) {
        if (req.body.select) {
            fileList.forEach((item, index) => {
                item.select = false;
            });
        }
    }
    fileList.push(req.body);
    fs.writeFileSync("./PeopleList/PeopleAddress.json", JSON.stringify(fileList));
    res.end(JSON.stringify({code:1, msg:'添加成功'}));
}