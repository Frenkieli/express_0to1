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

參考這個跑一次

express

先這個
https://ithelp.ithome.com.tw/articles/10191816

https://ithelp.ithome.com.tw/articles/10157288


https://ithelp.ithome.com.tw/users/20110371/ironman/1616

套件（自動更新）

https://developer.mozilla.org/zh-TW/docs/Learn/Server-side/Express_Nodejs/skeleton_website