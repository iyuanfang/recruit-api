const router=require('koa-router')();
const userService=require('../service/userService');

//查询单个用户
router.get('/user/:id',async(ctx)=>{
    var id=ctx.params.id;
    console.log('query user id:'+id);
    var user=await userService.getUser({_id:id});
    if(user!=null){
        ctx.body=user;
    }else{
        ctx.body='未查询到相应用户'
    }    
})

//查询用户列表
router.get('/users',async(ctx)=>{
    // var query=ctx.request.query;
    // var namePattern=new RegExp("^.*"+query.name+".*$");
    // users=await userService.getUsers({name:namePattern});

    users=await userService.getUsers({});
    ctx.body=users;
    console.log('Process users');
})

//删除用户
router.delete('/user/:id',async(ctx)=>{
    var id=ctx.params.id;
    await userService.deleteUser(id);
    ctx.body='del user id:'+id;
    console.log('Delete user,id=' +id);
})

//更新用户
router.patch('/user',async(ctx)=>{    
    var userJson=ctx.request.body;    
    //update user
    const user=await userService.updateUser(userJson);
    ctx.body='更新成功';
    console.log('Update user,id='+user.userId+'name='+user.name+',password='+user.password);
})

////创建用户
router.put('/user',async(ctx)=>{
    var userJson=ctx.request.body;    
    //save user
    try{
        const user=await userService.saveUser(userJson);
        ctx.body='ok';
        console.log('Insert user,id='+user.userId+'name='+user.name+',password='+user.password);
    }catch(err){
        ctx.body='注册失败，可能原因：用户名重复';
        console.log('注册失败，err：'+err);
    }    
})

module.exports=router.routes();

