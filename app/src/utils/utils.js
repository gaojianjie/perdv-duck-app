import _ from "lodash";
function setLocalstorageArr(name, item) {
    let lg = localStorage;
    let str = lg.getItem(name);
    if(str == null) {
        console.log(1)
        lg.setItem(name, JSON.stringify([item]));
    } else {
        let arr = JSON.parse(str);
        arr.unshift(item);
        arr = _.uniq(arr);
        lg.setItem(name, JSON.stringify(arr))
    }
}

function getItem(name) {
    let lg = localStorage;
    let arr = JSON.parse(lg.getItem(name));
    if(arr !== null) {
        return arr;
    } else {
        return [];
    }
}

function cleanItem(name) {
    let lg = localStorage;
    lg.removeItem(name);
}

function getCookie(key) {
    let cookie = document.cookie
    let file = ''
    // 将数据进行拆分
    cookie.split(';').forEach(function (item, index) {
        if (item.split('=')[0] == key) {
            file = item.split('=')[1]
            console.log(item.split('=')[1])
        }
    })
    return file
}

function setCookie(key, value) {
    document.cookie = key +'='+ value
} 

export { setLocalstorageArr,getItem,cleanItem,getCookie,setCookie}