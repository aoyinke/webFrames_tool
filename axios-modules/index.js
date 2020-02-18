const axios = require('axios')



//1.第一种封装方法,传入处理的方法
export function request(config, success, failure) {

    const instance = axios.create({
        baseURL: '',
        timeout: 10000
    })

    instance(config).then((res) => {
        success(res)
    }).catch(err => {
        failure(err)
    })
}

//2.把success,failure方法都放在config里面然后调用
export function request(config) {

    const instance = axios.create({
        baseURL: '',
        timeout: 10000
    })

    instance(config).then((res) => {
        config.success(res)
    }).catch(err => {
        config.failure(err)
    })
}

//3.封装promise方法
export function request(config) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: '',
            timeout: 10000
        })

        instance(config).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

//4.利用axios本身返回的promise对象
export function request(congif) {
    const instance = axios.create({
        baseURL: '',
        timeout: 10000
    })

    return instance(config) //其本身就是一个promise对象
}