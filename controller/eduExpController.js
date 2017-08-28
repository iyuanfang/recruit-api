const router=require('koa-router')();
const eduExpService=require('../service/eduExpService');

//查询单人教育经历
router.get('/eduExp/:id',async(ctx)=>{
    var id=ctx.params.id; // parseInt强制类型转换
    
    try{
        var eduExp=await eduExpService.getEduExps({_id:id}); // 使用getEduExps()方法，因为单人可以有多个教育经历
        ctx.body=eduExp;
        console.log('query resume,  '+eduExp);
    }catch(err){
        ctx.body='failed';
        console.log('查询教育经历失败,err:'+err);
    }
    console.log('Process query eduExp');

});

//查询教育经历列表
router.get('/eduExps',async(ctx)=>{
    var query=ctx.request.query;
    
    try{
        const eduExps=await eduExpService.getEduExps({});
        ctx.body=eduExp;
        console.log('query resume,  '+eduExp);
    }catch(err){
        ctx.body='failed';
        console.log('查询教育经历失败,err:'+err);
    }
    console.log('Process query eduExps ');
})

//删除单人教育经历
router.delete('/eduExp/:id',async(ctx)=>{
    var id=parseInt(ctx.params.id);
    await eduExpService.deleteEduExp(id);
    ctx.body='del resumeId:'+id;
    console.log('Delete resume,   id=' +id);
})

//更新教育经历
router.patch('/eduExp',async(ctx)=>{    
    var eduExpJson=ctx.request.body;        
    //update eduExp
    try{
        const eduExp=await eduExpService.updateEduExp(eduExpJson);
        ctx.body=eduExp;
        console.log('update eduExp,  '+eduExp);
    }catch(err){
        ctx.body='failed';
        console.log('更新教育经历失败,err:'+err);
    }  
    console.log('Update eduExp,   '+eduExp);
})

////创建教育经历
router.put('/eduExp',async(ctx)=>{
    var eduExpJson=ctx.request.body;    
    
    try{
        const eduExp=await eduExpService.saveEduExp(eduExpJson);
        ctx.body='ok';
        console.log('Insert eduExp,  '+eduExp);
    }catch(err){
        ctx.body='failed';
        console.log('创建教育经历失败,err:'+err);
    }    
})

module.exports=router.routes();

