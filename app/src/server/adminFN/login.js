let fs = require('fs')
let jsonwebtoken = require("jsonwebtoken");
module.exports = function(req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json:charset=utf-8"
    });
    let file = req.body;
    let tokens = jsonwebtoken.sign(file, "myself", { expiresIn: 60 * 3 });
    let peoplefile = JSON.parse(fs.readFileSync('./PeopleList/LoginList.json',{encoding:'utf-8'}))
    console.log('请求')
    peoplefile.forEach( (item, index) => {
        if(item.username == file.username) {
            if(item.password == file.password) {
                res.end(JSON.stringify({code:0, msg:'登录成功',token:tokens}));
            } else {
                res.end(JSON.stringify({code:1, msg:'密码错误'}));
            }
        }
    })
    res.end(JSON.stringify({code:3, msg:'此用户不存在'}))
}