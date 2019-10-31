# learnexpress
練習express

開啟專案準備

express -v ejs -c sass

就會用express

開啟view模板"ejs"和sass當作css

然後進場是從app.js進場

在裡面找到"sassMiddleware"調成使用scss

就會自動生成css了
<!-- app.js中的檔案 -->
```js
// 選擇預處理器
  app.use(sassMiddleware({
    src: path.join(__dirname, 'scss'), //原始檔案路徑
    dest: path.join(__dirname, 'public/css'),
    prefix: '/stylesheets', //修正引用時的前贅詞
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true,
    debug: true, //是否要在debug顯示
  }));
// 
```

鐵人賽開始

整理

router.get中有兩個參數，第一個是子路徑名稱用單引號字串包起來，第二個是一個方法裡面面有三個參數分別為 req(request)接收資料、res(respond)回傳資料以及next。

#### HTTP 請求方法有八個

參照這一篇

https://ithelp.ithome.com.tw/articles/10191925

不要使用 i++ 和 i-- 之類的方式，可能有未知bug

#### forof方法和forEach方法可以取出容器內的值，forof在去熟悉看看

```js
  let arr =[1,2,3,4];
  for(let i of arr){
    console.log(i);
  }
  //1,2,3,4
```

### 展開運算福和其餘運算福和解構賦值

參照

https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/rest_spread.html

#### 其餘運算符

特別注意: 其餘參數在傳入參數定義中，必定是位於最後一位，並且在參數中只能有一個其餘參數。

```js
  // Array.filter() 過濾陣列元素
  const filter = (...args) => args.filter(el => el === 2);
  console.log(filter(1, 2, 3));
```

#### Classes類似創立一個物件藍圖？

參照

https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes

#### VScode的ESLint組件

可以看到目前不符合ESLint的代碼

參照

https://ithelp.ithome.com.tw/articles/10193060　有檔案可以做練習看效果

目前用到的命令

npm install eslint babel-eslint --save-dev

npm install eslint-config-airbnb-base eslint-plugin-import eslint --save-dev 
 <!-- 使用airbnb的規範 -->

npm install eslint-config-airbnb-base eslint-plugin-import eslint --save-dev

後建立　.eslintrc

#### webpack和babel

yarn add -D webpack webpack-node-externals

yarn add -D babel-preset-env babel-plugin-transform-object-rest-spread babel-core babel-loader

後建立 .webpack.config.js
(目前core跟loader有版本對應問題要解決降版就好)

#### nodemon

npm install nodemon -g  

npm install --save-dev nodemon 

#### Editor Config統一編輯設定（如縮牌之類的）

VScode搜尋Editor Config後就可以讀取檔案.editorconfig

參照

https://ithelp.ithome.com.tw/articles/10193754

#### 使用Express建立路由

yarn add express

目前檔案都在src中使用

#### 中介軟體(middleware)

解析器 body-parser

body-parser 是一個 HTTP 請求解析的中介軟體，使用這個插件可以解析 JSON、Raw、text、XML、URL-encoded 格式的請求，你可以在 Postman 上看到這些格式，僅設妳今天 POST 東西到 body 時，後端必須要靠 body-parser 來解析你的資料。

yarn add body-parser

跨來源資源共享 cors

yarn add cors

可以自動同意所以跨網域的讀取權限，不然要一個一個同意

連線存取紀錄 morgan

可以記錄HTTP request logger

#### 介紹SQL和noSQL

noSQL
https://www.ithome.com.tw/news/92507

使用mySQL

#### postman

下載後練習看看

#### 建立欄位

照這個格式

https://ithelp.ithome.com.tw/articles/10195097

#### dotenv建立環境參數（放帳號密碼等等）

yarn add dotenv

#### joi管理跟伺服器之間的驗證

yarn add joi

之後去修改src/config/config.js的東西

#### 開始連接mySQL伺服器

yarn add mysql

https://ithelp.ithome.com.tw/articles/10195493

#### 實作api呼叫

day24~27

資料新增修改刪除的練習

#### joi

yarn add joi

#### express-validation

yarn add express-validation

express-validation 是 express.js 的其中一個 middleware ，搭配 joi 使用可以再進入路由前先跑去 middleware 做 joi 的驗證若資料無誤就能進去主路由繼續完成工作。

#### bcrypt 密碼送到資料庫前的加密

yarn add bcrypt

參照

https://ithelp.ithome.com.tw/articles/10196477

#### 實作登入

利用bcrypt來進行加密傳送與回傳，後台存的密碼也是加密過的

參考這個跑一次

express

先這個
https://ithelp.ithome.com.tw/articles/10191816

https://ithelp.ithome.com.tw/articles/10157288


https://ithelp.ithome.com.tw/users/20110371/ironman/1616

套件（自動更新）

https://developer.mozilla.org/zh-TW/docs/Learn/Server-side/Express_Nodejs/skeleton_website