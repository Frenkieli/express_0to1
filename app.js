var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
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
app.use(express.static(path.join(__dirname, 'public')));

// 全域變數之類的
app.use(function (req, res, next) {
  res.locals.arr = ['子直接腦袋，數量簡單會員，情感抱著會不會零售檔案生命法人企業您現在感動，理論多麼放在提示訊息思路方式功能由此威望本類市場，主營鏡頭如此不能下載，藝術聲音為止從而領先職責，出席。',
    '本身此處商業仍然工程強調收藏本頁，遠遠相當合適冠軍先進教育進口谷歌但我姑娘維修男'];
  res.locals.arrz = {
    arr: '子直接腦袋，數量簡單會員，情感抱著會不會零售檔案生命法人企業您現在感動，理論多麼放在提示訊息思路方式功能由此威望本類市場，藝術聲音為止從而領先職責，出席。',
    arrz: '主營鏡頭如此不能下載，本身此處商業仍然工程強調收藏本頁，遠遠相當合適冠軍先進教育進口谷歌但我姑娘維修男'
  };
  next();
});

// 頁面選用
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.arrtest = '我這裡有很多字';
  // console.log(res,'res',req,'req')
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
