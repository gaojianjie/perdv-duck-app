import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        shoppingList:[],
        checkAll:false,
        totalPrice:0,
        address_list:[]
    },
    mutations:{
        addshoppingList (state, data) {
            let bg = true;
            state.shoppingList.forEach(function(item, index) {
                if(data.id == item.id) {
                    state.shoppingList[index].count ++;
                    bg = false;
                }
            })
            if(bg) {
                state.shoppingList.push(data);
            }
        },
        checkall (state) {
            state.checkAll = !state.checkAll;
            state.shoppingList.forEach(function(item) {
                item.checkBoolen = state.checkAll;
            });
            console.log(state.checkAll);
        },
        addCount(state, data) {
            state.shoppingList.forEach(function(item) {
                if(item.id == data.id) {
                    item.count ++;
                }
            });
        },
        subtract(state,data) {
            state.shoppingList.forEach(function(item,index) {
                if(item.id == data.id) {
                    if(item.count < 1) {
                        state.shoppingList.splice(index,1);
                        return;
                    }
                    item.count --;
                }
            });
        },
        // 计算总的价格
        totalPrice(state) {
            let num = 0;
            state.shoppingList.forEach(function(item, index) {
                if(item.checkBoolen) {
                    num += item.count * item.price;
                }
            }); 
            console.log(num)
            state.totalPrice = num.toFixed(2);
        },
        input_toggle(state,data) {
            state.shoppingList.forEach(function(item, index) {
                if (item.id == data.id) {
                    item.checkBoolen = !item.checkBoolen;
                }
            })
        },
        // 判断是否全选
        ischeckAll(state) {
            let num = 0;
            state.shoppingList.forEach(function(item, index) {
                if(item.checkBoolen) {
                    num++;
                }
            }); 
            if(num ==  state.shoppingList.length) {
                state.checkAll = true;
            } else {
                state.checkAll = false;
            }
        },
        set_shoppingList(state,data) {
            state.shoppingList = data.data;
        },
        getaddress(state, data) {
            state.address_list = data;
        }
    }
})

export {store}