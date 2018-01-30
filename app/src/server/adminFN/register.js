let fs = require('fs')
module.exports = function(req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json:charset=utf-8"
    });
    let file = req.body;
    let OFF = true;
    let fileList = JSON.parse(fs.readFileSync('./PeopleList/LoginList.json',{encoding:'utf-8'}));
    fileList.forEach((item, index) => {
        if(item.username == file.username) {
            res.end(JSON.stringify({code:1, msg:'此用户名已注册'}))
            fileList = false;
        }
    })
    if(!OFF) return;
    fileList.push(req.body);
    fs.writeFileSync('./PeopleList/LoginList.json', JSON.stringify(fileList))
    res.end(JSON.stringify({code:0, msg:'注册成功'}))
}