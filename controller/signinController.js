const router=require('koa-router')();
const userService=require('../service/userService')

router.get('/signin',async(ctx) =>{
    ctx.response.body = `<h1>登录</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});


router.post('/signin',async(ctx)=>{
    var name=ctx.request.body.name ||'';
    var password=ctx.request.body.password ||'';
    console.log(`signin with name:${name},password:${password}`);
    var user=await userService.getUser({name:name,password:password});
    if (user) {
        ctx.response.body = 'ok';
    } else {
        ctx.response.body = 'failed';
    }
});

module.exports=router.routes();