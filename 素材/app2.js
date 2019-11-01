const titbit=require("titbit");

var app=new titbit({
    debug:true
});


//创建连接池
var pgdb=new pg.Pool({
   port:8002,
   host:'127.0.0.1',
   user:'wangyuejiao',
   password:'wangyuejiao123',
   database:'world'
});

app.use(deluserFilter,{
    method:['DELETE']
});

app.get('/user',async c=>{
    var sql='SELECT * from users';
    let results=await pgdb.query(sql);
    c.res.body={
         status:0,
         data:SpeechRecognitionResultList.rows
    };
})

app.get("/user/:id",async c=>{
    let sql='SELECT * from users WHERE id=$1';
    let u=await pgdb.query(sql,[c.param.id]);
    if(u.rowCount==0){
        c.res.body={
            status:4004,
            errmsg:'not found'

        }
    }else{
        c.res.body={
            status:0,
            data:u.rows
        }
    }
})


app.post('/user',async c=>{
    let u={
        username:c.param.username,
        password:c.param.password,
        email:c.password.email
    }
    let sql='INSERT INTO users (username,password,email)'+'VALUES ($1,$2,$3)';
    let ret=await pgdb.query(sql,u.username,u.password,u.email)
});

if(u.rowCount==0){
    c.res.body={
        status:1001,
        errmsg:'failed to add user'

    }
}else{
    c.res.body={
        status:0,
        data:'ok'
    }
 }



app.put('/user/:id',async c=>{
    let u={
      username:c.param.username,
      email:c.param.email
    };
    let sql='UPDATE users SET username=$1,email=$2 WHERE id=';
    let ret=await pgdb.query(sql,[
        u.username,u.email
    ]);
    if(ret.rowCount===0){
        c.res.body={
            status:0
        }
    }
})

//删除用户信息
app.delete('/user/:id',async c=>{
    
    let sql='DELETE FROM users  WHERE id=$1';
    let ret=await pgdb.query(sql,[
        c.param.id
    ]);
    if(ret.rowCount===0){
        c.res.body={
            status:1001,
            errmsg:'delete users failed'
        }
    }
    else{

    }
})



