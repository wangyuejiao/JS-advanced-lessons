var express = require('express');
var router = express.Router();
var list=require('../public/data.json')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.post('/index',function(req,res,next){
  console.log(req.body.username)
  console.log(list.chapterList);
  // console.log(list.users[0].username);
  if(req.body.username==list.users[0].username&&req.body.pwd==list.users[0].password){
    res.render('list',{chapterList:list.chapterList});
  }
  else{
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    res.end("账号或密码错误");
  }
})

module.exports = router;
