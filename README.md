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

    * async/await 结合异步请求的使用
    - 要点 
    ```javascript
    const user_login = async(userInfo) => { // const { username, password } = userInfo
        userLoading.value = true
        return new Promise((resolve, reject) => {
        $http.get('/login').then(() => {
            currentUser.token = TokenKey
            setToken(TokenKey)
            resolve()
        }).catch((err) => {
            userLoading.value = false
            reject(err)
        })
        })
    }
    ```
    - 关于循环发起异步请求（一个请求响应结束后发起另一个）的测试
    ```javascript
    // 这是FOR AWAIT OF 的用法 ，并不满足要求
        function getTime(seconds){
            return new Promise(resolve=>{
                setTimeout(() => {
                    resolve(seconds)
                }, seconds);
            })
        }

        async function test(){
            let arr = [getTime(2000),getTime(300),getTime(1000)]
            for await (let x of arr){
                console.log(x); // 2000  300 1000 按顺序的
            }
         }

        test()

        //Promise 对象被reject，for await...of就会报错，要用try...catch捕捉。
        async function () {
            try {
                for await (const x of createRejectingIterable()) {
                console.log(x);
                }
            } catch (e) {
                console.error(e);
            }
        }

    ```
    - for循环中使用async/await（满足要求）
    ```javascript
        async aboutAsyncAwait() {
            const docs = [1, 2, 3, 4, 5, 6, 7]

            for (const number of docs) {
                await new Promise((solve, reject) => {
                setTimeout(() => {
                    console.log(number, '???')
                    solve(number)
                }, 2000 * Math.random())
                })
            }
        }
    ```
