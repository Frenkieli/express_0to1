var express = require('express');
var router = express.Router();

let scsslink = "<link rel='stylesheet' href='/css/style.css' />"; //宣告統一用的css位置

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,css:scsslink});
});

module.exports = router;
