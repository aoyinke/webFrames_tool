//调用方法
import { request } from '../index'

//1.传入处理方法

request({
        url: '/home/mutidata'
    },
    (res) => {
        console.log(res)
    }, (err) => {
        console.log(err)
    })


//2.传入一个config
request({
    baseCofing: {

    },
    success: function(res) {

    },
    failure: function(err) {

    }
})

//3/4.返回一个promise对象
request({
    url: '/home/mutidata'
}).then(res => {

}).catch(err => {

})