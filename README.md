# vue3-permissions-template

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### ssh -T git@github.com 


* views 下文件夹和组件，用大写字母开头和驼峰形式命名。

* axios 取消请求实现目标
    - 路由切换时取消当前页面未完成的http请求
    - 标记不需要取消的请求
    - 标记指定接口的loading状态
    ```java
        service.interceptors.request.use(function (config) {
            config.cancelToken = new axios.CancelToken(cancel => {
                window._axiosPromiseArr.push({ cancel })
            })
            return config
        })
    ```
    
    ```java
        window._axiosPromiseArr = []
        router.beforeEach((to, from, next) => {
        window._axiosPromiseArr.forEach((ele, index) => {
            ele.cancel()
            delete window._axiosPromiseArr[index]
        })
        next()
        })
    ```
