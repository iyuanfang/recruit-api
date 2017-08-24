const router=require('koa-router')();
const workExpService=require('../service/workExpService');

//查询单个实习经历
router.get('/workExp/:id',async(ctx)=>{
    var id=parseInt(ctx.params.id);
    console.log('query resumeId:'+id);
    var workExp=await workExpService.getWorkExps({resumeId:id}); // 使用getWorkExps()方法
    ctx.body=workExp;
    console.log('Process workExp');

});

//查询实习经历列表
router.get('/workExps',async(ctx)=>{
    var query=ctx.request.query;
    workExps=await workExpService.getWorkExps({});
    ctx.body=workExps;
    console.log('Process workExps');
})

//删除实习经历
router.delete('/workExp/:id',async(ctx)=>{
    var id=parseInt(ctx.params.id);
    await workExpService.deleteWorkExp(id);
    ctx.body='del resumeId:'+id;
    console.log('Delete resume,   id=' +id);
})

//更新实习经历
router.patch('/workExp',async(ctx)=>{    
    var workExpJson=ctx.request.body;    
    //update workExp
    const workExp=await workExpService.updateWorkExp(workExpJson);
    ctx.body='更新成功';
    console.log('Update workExp,   id='+workExp.resumeId+',degree='+workExp.degree+',phone='+workExp.phone);
})

////创建实习经历
router.put('/workExp',async(ctx)=>{
    var workExpJson=ctx.request.body;    
    //save workExp
    const workExp=await workExpService.saveWorkExp(workExpJson);
    if(workExp!=null){
        ctx.body='创建实习经历成功';
        console.log('Insert workExp,   resumeId='+workExp.resumeId+',school='+workExp.company+',major='+workExp.position
        +',degree='+workExp.beginTime+',beginTime='+workExp.endingTime+',graduateTime='+workExp.description);
    }else{
        ctx.body='注册失败，可能原因：实习经历名重复';
        console.log('注册失败');
    }    
})

module.exports=router.routes();

