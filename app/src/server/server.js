let express = require('express');
let app = express()
let bodyParser = require('body-parser');
let queryApi = require('./base/http.js');
let jsonwebtoken = require('jsonwebtoken'); // 令牌
let fs = require('fs');
app.use(bodyParser.json())

app.all('*', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
})

// http://localhost:3000/mall/index/getGoodsChannel
// 请求首页中的下拉列表的数据
let uploadList = require('./adminFN/uploadList.js')
app.post("/mall/index/getGoodsChannel", uploadList);

// 商品详情页
let shoppingList = require('./adminFN/shoppingList.js')
app.post("/mall/Shipping/getPostageByGoodsId", shoppingList);

// 推荐商品的数据
let recommend = require('./adminFN/recommendList.js')
app.post("/mall/goods/recommendgoods", recommend);

// 商铺信息的接口
let shopStore = require('./adminFN/shopStore.js')
app.post("/circle/Circle/getServiceNum", shopStore);

// 登录的接口
let login = require('./adminFN/login.js')
app.post('/admin/login', login)

// 注册的接口
let register = require('./adminFN/register.js')
app.post('/admin/register', register)

// 添加购物车
let addList = require('./adminFn/addShopList.js');
app.post("/admin/shpoList", addList);

// 获取购物车中的商品
app.get('/admin/GetShoppingList',function(req, res) {
    res.writeHead(200, {"Content-Type": "application/json:charset=utf-8"});
    let file = fs.readFileSync('./PeopleList/ShopList.json',{encoding:'utf-8'});
    res.end(JSON.stringify({code:1,data:file}));
})

// 分类里面的数据
let classifyFn = require("./adminFn/classifyFn.js");
app.post('/admin/classify', classifyFn);

// 设置地址
let address = require('./adminFn/address.js');
app.post("/admin/user/addReceivingAddress", address);

// 返回用户的地址
app.get("/admin/user/address", function(req, res) {
    res.writeHead(200, {"Content-Type": "application/json:charset=utf-8"});
    let fileList = JSON.parse(fs.readFileSync('./PeopleList/PeopleAddress.json', {encoding:'utf-8'}));
    res.end(JSON.stringify({code:1,data:fileList}))
});

// 修改用户地址的接口
app.post("/admin/user/setReceivingAddress", function(req, res) {
    res.writeHead(200, {"Content-Type": "application/json:charset=utf-8"});
    let file = req.body;
    let fileList = JSON.parse(fs.readFileSync('./PeopleList/PeopleAddress.json', {encoding:'utf-8'}));
    fileList.splice(req.body.index, 1, req.body.data);
    fs.writeFileSync("./PeopleList/PeopleAddress.json",JSON.stringify(fileList));
    res.end(JSON.stringify({code:1,msg:'修改成功'}))
});

// 设置默认地址的接口
app.post('/admin/user/setdefaultAddress', function(req, res) {
    res.writeHead(200, {"Content-Type": "application/json:charset=utf-8"});
    let file = req.body;
    let fileList = JSON.parse(fs.readFileSync('./PeopleList/PeopleAddress.json', {encoding:'utf-8'}));
    fileList.forEach((item, index) => {
        if(index == req.body.index) {
            item.select = true;
        } else {
            item.select = false;
        }
    })
    fs.writeFileSync("./PeopleList/PeopleAddress.json",JSON.stringify(fileList));
    res.end(JSON.stringify({code:1, msg:'设置成功'}))
})

app.listen(3000, function() {
    console.log('已经开始监听3000')
})
