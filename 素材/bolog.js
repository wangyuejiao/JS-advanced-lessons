//引入模块
const http=require("http");
const fs=require("fs");
const url=require("url");
const path=require("path");
const querystring=require("querystring");

//定义博客中的数据
var chapterList = [
  {
      "chapterId": 1,
      "chapterName": "hello ,这是后台取到的数据",
      "imgPath": "images/1442457564979540.jpeg",
      "chapterDes": "注定，有些路，只能一个人走；有些事，",
      "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
      "publishTimer": "2019-08-19",
      "author": "admin",
      "views": 1022
  },
  {
      "chapterId": 2,
      "chapterName": "那些不是事",
      "imgPath": "images/1442201163344838-lp.jpg",
      "chapterDes": "人生，原本就该这样。再大的事，无非是个经历而己。明天的太阳照样升起，就像罗俊杰个人博客​的时候水来土掩，兵来将挡。任何事情都会成为过去，只要有好的心态，就可以面对人生的.",
      "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
      "publishTimer": "2019-08-19",
      "author": "admin",
      "views": 102
  },
  {
      "chapterId": 3,
      "chapterName": "只想，留住心中的那份静美",
      "imgPath": "images/1442642178239101-lp.jpg",
      "chapterDes": "在这个鸟语花香的季节,踏着早晨罗俊杰个人博客的一缕光芒在小路间走着,呼吸着这自然的清晰空气，只想，衣袂飘飘，信步于绿荫小道，或俯首听花开，或低眉赏花香，盈脉脉春意，于眼波中...",
      "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
      "publishTimer": "2019-08-19",
      "author": "admin",
      "views": 202
  },
  {
      "chapterId": 4,
      "chapterName": "所以才会美",
      "imgPath": "images/1442539025939884-lp.jpg",
      "chapterDes": "人，越简单就会越快乐;水，掺杂东西越少才会显得清澈靓丽。大自然越安静,才会体现它的本质。人生就是这样，倘若有运，不用祈求，因为祈求也是无用。倘若无运，无需悲伤，因为悲...",
      "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
      "publishTimer": "2019-08-19",
      "author": "admin",
      "views": 102
  }
]

//事件监听
http.createServer(function(req,res){
  //url发出请求，把请求接收过来
  var urlObj=url.parse(req.url);
  //只需要知道请求的名字即可
  var pathName=urlObj.pathname;
  //console.log(pathName);
  var imgArray=pathName.split("/");
  // console.log(imgArray);

  var imgArray1=imgArray.pop();
  // console.log(imgArray1);
  // console.log(pathName);发出请求的有html，css，js，image都需要根据名字读取

  
  //判断资源路径的网址形式
  if(pathName=='/list'){
      showList(res);
  }
  else if(pathName=='/list/abc'){
      showContext(res);
  }
  else if(pathName.indexOf("css")>=0){
      showCss(res,imgArray1);
  }
  else if(pathName.indexOf("js")>=0){
      showJs(res);
  }
  else if(pathName.indexOf("images")>=0){
    if(pathName.indexOf("img")>=0){
       showImage(res,imgArray1);
    }
    else{
      showImages(res,imgArray1);
    }
  }
  else if(pathName=='/detail'){
      showContextChapter(res,req);
  }
  else if(pathName=='/getDetail'){
    showData(res);
  }
  else if(pathName=='/login'){
    showLogin(res);
  }
  else if(pathName.indexOf("login_bg.jpg")>=0){
    showLoginimg(res);
  }
  else if(pathName=='/listmanager'){
    showListManager(res);
  }
  else if(pathName=='/addChapter'){
    showAddChapter(res);
    
  }
  else if(pathName=='/add'&&req.method=="POST"){
    add(req,res);
  }
  //当点击登录时，接收请求，让他和后台存的密码和账户进行比对
  else if(pathName.indexOf("listmanager")>=0){
    postLogin(req,res);
  }


}).listen(8083);
console.log("Server is listening 8083");


//当pathname前缀是/list时，执行showList函数
function showList(res){
    //先得到页面路径
    var listPath=path.join(__dirname,"/chapterList.html");
     //读取文件
     var listContent=fs.readFileSync(listPath);
     //响应到客户端
     res.writeHead(200,{'Content-Type':"text/html;charest=utf-8"});
      //把页面响应到客户端
     res.end(listContent);
}

//读取css文件
function showCss(res,imgArray1){
   //先得到页面路径
   var cssPath=path.join(__dirname,"/css/"+imgArray1);
   //读取文件
   var cssContent=fs.readFileSync(cssPath);
   //响应到客户端
   res.writeHead(200,{'Content-Type':"text/css;charest=utf-8"});
    //把页面响应到客户端
   res.end(cssContent);
}

//读取js文件
function showJs(res){
   //获取资源路径,__dirname指的是素材这个当前目录，需要先进入js文件夹，才可以找到文件
   var jsPath=path.join(__dirname,"/js/baiduTemplate.js");
   //读取页面内容
   var jsContent=fs.readFileSync(jsPath);
   //以何种形式响应在客户端
   res.writeHead(200,{'Content-Type':'text/JavaScript'})
   //把页面响应到客户端
   res.end(jsContent);
}

//读取图片
function showImages(res,imgArray1){
  //获取资源路径  
   var imgPath=path.join(__dirname,"/images/"+imgArray1);
   //console.log(imgPath);
   var imgContent=fs.readFileSync(imgPath);
   //响应不同的东西，类型不一样，可以去查
   res.writeHead(200,{"Content-Type":"image/png"});
   res.writeHead(200,{"Content-Type":"image/jpg"});
   res.writeHead(200,{"Content-Type":"image/jpeg"});
   res.end(imgContent);
  }

  //读取images/img里面的图片
  function showImage(res,imgArray1){
    //获取资源路径  
   var imgPath=path.join(__dirname,"/images/img/"+imgArray1);
   //console.log(imgPath);
   var imgContent=fs.readFileSync(imgPath);
   //响应不同的东西，类型不一样，可以去查
   res.writeHead(200,{"Content-Type":"image/png"});
   res.writeHead(200,{"Content-Type":"image/jpg"});
   res.writeHead(200,{"Content-Type":"image/jpeg"});
   res.end(imgContent);
  }


  //读取服务端的变量,传送给html里
  function showContext(res){
    var chapterList1 = JSON.stringify(chapterList);
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end(chapterList1);
  }

  function showData(res){
    console.log("78");
      var data=[];
      data[0]=chapterList[id-1];
      var dataStr=JSON.stringify(data);
      res.writeHead(200,{'Content-Type':'text/plain'});
      res.write(dataStr);
      res.end();
  }


   var id=0;
  //读取chapter.html页面，响应到客户端
  function showContextChapter(res,req){
    var urlObj=url.parse(req.url,true);
    id=urlObj.query.chapterId.slice(0,1);
    console.log(id);
    //获取资源路径
    var contextChapter=path.join(__dirname,'chapter.html');
    //读取html文件
    var contextChapteContent=fs.readFileSync(contextChapter);
   //以何种形式响应在客户端
   res.writeHead(200,{'Content-Type':'text/html'})
   //把页面响应到客户端
   res.end(contextChapteContent);
}

//读取login页面
function showLogin(res){
  //获取资源路径
  var contextLogin=path.join(__dirname,'/login.html');
  //读取html文件
  var contextLoginContent=fs.readFileSync(contextLogin);
 //以何种形式响应在客户端
 res.writeHead(200,{'Content-Type':'text/html'})
 //把页面响应到客户端
 res.end(contextLoginContent);
}

//读取login里面的图片
function showLoginimg(res){
    var img=path.join(__dirname,"/login_bg.jpg");
    var imgContent1=fs.readFileSync(img);
    res.writeHead(200,{'Content-Type':"image/jpg"});
    res.end(imgContent1);
}

//读取list.html里面的内容，响应到客户端
function showListManager(res){
  //获取资源路径
  var listmanager=path.join(__dirname,'/list.html');
  //读取html文件
  var listmanagerContent=fs.readFileSync(listmanager);
 //以何种形式响应在客户端
 res.writeHead(200,{'Content-Type':'text/html'})
 //把页面响应到客户端
 res.end(listmanagerContent);
}

//读取adddChapter.html里面的内容，响应到客户端
function showAddChapter(res){
   //获取资源路径
   var addChapterPath=path.join(__dirname,"/addChapter.html");
   //读取文件内容
   var addChapterContent=fs.readFileSync(addChapterPath);
   //以何种形式响应到客户端
   res.writeHead(200,{'Content-Type':"text/html"});
   //把页面响应到客户端
   res.end(addChapterContent);
  }


  //进行密码账户核实，然后跳转到添加列表页面
 function postLogin(req,res){
   var userList = [
    {username: "admin", pwd: "admin"}
  ]
   //post路径直接接收，不用找路径,用req.on接收
   var formData='';
   req.on('data',function(chunk){
      formData+=chunk;
      //console.log(formData);
   })
   req.on("end",function(){
       //转换成对象的结构
       var formObj=querystring.parse(formData);
      // console.log(userList[0].username);
      // console.log(userList[0].pwd)
      console.log(formObj);
      if(formObj.username==userList[0].username&&formObj.pwd==userList[0].pwd){
            http.get("http://localhost:8083/addChapter",showListManager(res))}
})
}


//进行添加列表
function add(req,res){
  //post路径直接接收，不用找路径,用req.on接收
  var formData='';
  req.on('data',function(chunk){
     formData+=chunk;
     //console.log(formData);
  })
  req.on("end",function(){
      //转换成对象的结构
      var formObj=querystring.parse(formData);
      var addContext= {
            "chapterId": 5,
            "chapterName": formObj.title,
            "imgPath": "images/1442457564979540.jpeg",
            "chapterDes": "注定，有些路，只能一个人走；有些事，",
            "chapterContent":formObj.content,
            "publishTimer": "2019-08-19",
            "author": "admin",
            "views": 1022
        }
        chapterList.push(addContext);
        //console.log(chapterList);
  }
)
}
