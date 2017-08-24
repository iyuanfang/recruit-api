const router=require('koa-router')();
const eduExpService=require('../service/eduExpService');

//查询单人教育经历
router.get('/eduExp/:id',async(ctx)=>{
    var id=parseInt(ctx.params.id); // parseInt强制类型转换
    console.log('query resumeId:'+id);
    var eduExp=await eduExpService.getEduExps({resumeId:id}); // 使用getEduExps()方法，因为单人可以有多个教育经历
    ctx.body=eduExp;
    console.log('Process eduExp');

});

//查询教育经历列表
router.get('/eduExps',async(ctx)=>{
    var query=ctx.request.query;
    eduExps=await eduExpService.getEduExps({});
    ctx.body=eduExps;
    console.log('Process eduExps');
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
    const eduExp=await eduExpService.updateEduExp(eduExpJson);
    ctx.body='更新成功';
    console.log('Update eduExp,   resumeId='+eduExp.resumeId+',school='+eduExp.school+',major='+eduExp.major
    +',degree='+eduExp.degree+',beginTime='+eduExp.beginTime+',graduateTime='+eduExp.graduateTime+',achievement='+eduExp.achievement);
})

////创建教育经历
router.put('/eduExp',async(ctx)=>{
    var eduExpJson=ctx.request.body;    
    //save eduExp
    const eduExp=await eduExpService.saveEduExp(eduExpJson);
    if(eduExp!=null){
        ctx.body='创建教育经历成功';
        console.log('Insert eduExp,   resumeId='+eduExp.resumeId+',school='+eduExp.school+',major='+eduExp.major
            +',degree='+eduExp.degree+',beginTime='+eduExp.beginTime+',graduateTime='+eduExp.graduateTime+',achievement='+eduExp.achievement);
    }else{
        ctx.body='创建失败，可能原因：教育经历名重复';
        console.log('创建失败');
    }    
})

module.exports=router.routes();

