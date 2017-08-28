const router=require('koa-router')();
const workExpService=require('../service/workExpService');

//查询单个实习经历
router.get('/workExp/:id',async(ctx)=>{
    var id=ctx.params.id;
    console.log('query workExp:'+id);
    
    try{
        var workExp=await workExpService.getWorkExps({_id:id}); // 使用getWorkExps()方法        
        ctx.body=workExp;
        console.log('query workExp,  '+workExp);
    }catch(err){
        ctx.body='failed';
        console.log('查询实习经历失败,err:'+err);
    }
    console.log('Process workExp');

});

//查询实习经历列表
router.get('/workExps',async(ctx)=>{
    var query=ctx.request.query;
    
    try{
        var workExps=await workExpService.getWorkExps({});      
        ctx.body=workExp;
        console.log('query workExps,  '+workExps);
    }catch(err){
        ctx.body='failed';
        console.log('查询实习经历失败,err:'+err);
    }
    console.log('Process workExps');
})

//删除实习经历
router.delete('/workExp/:id',async(ctx)=>{
    var id=ctx.params.id;
    await workExpService.deleteWorkExp(id);
    ctx.body='del resumeId:'+id;
    console.log('Delete resume,   id=' +id);
})

//更新实习经历
router.patch('/workExp',async(ctx)=>{    
    var workExpJson=ctx.request.body;    
    //update workExp
   
    try{
        const workExp=await workExpService.updateWorkExp(workExpJson);        
        ctx.body=workExp;
        console.log('query workExps,  '+workExp);
    }catch(err){
        ctx.body='failed';
        console.log('查询实习经历失败,err:'+err);
    }
    console.log('Update workExp,   '+workExp);
})

////创建实习经历
router.put('/workExp',async(ctx)=>{
    var workExpJson=ctx.request.body;    
    //save workExp
   
    try{
        const workExp=await workExpService.saveWorkExp(workExpJson);    
        ctx.body='ok';
        console.log('create workExp,  '+workExp);
    }catch(err){
        ctx.body='failed';
        console.log('创建实习经历失败,err:'+err);
    }   
})

module.exports=router.routes();

