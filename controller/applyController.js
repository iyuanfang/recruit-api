const router=require('koa-router')();
const applyService=require('../service/applyService');

//查询申请职位by applyid
router.get('/apply/:id',async(ctx)=>{
    var id=ctx.params.id;
    console.log('query apply id:'+id);
    var apply=await applyService.getApply({_id:id});
    apply=apply!=null?apply:{};
    console.log('apply:'+JSON.stringify(apply));
    ctx.body=apply;
})

//查询用户及职位的申请
router.get('/apply/:resumeId/:positionId',async(ctx)=>{
    var resumeId=ctx.params.resumeId;
    var positionId=ctx.params.positionId;
    var apply=await applyService.getApply({resume:resumeId,position:positionId});
    apply=(apply!=null)?apply:{};
    console.log('get apply:'+JSON.stringify(apply));
    ctx.body=apply;
})

//查询简历的申请列表
router.get('/resumeApplys/:resumeId',async(ctx)=>{
    var resumeId=ctx.params.resumeId;
    applys=await applyService.getApplys({resume:resumeId});
    ctx.body=applys;
    console.log('Process applys');
})

//查询职位的申请列表
router.get('/positionApplys/:positionId',async(ctx)=>{
    var positionId=ctx.params.positionId;
    applys=await applyService.getApplys({position:positionId});
    ctx.body=applys;
    console.log('Process applys');
})

//删除申请职位
router.delete('/apply/:id',async(ctx)=>{
    var id=ctx.params.id;
    await applyService.deleteApply(id);
    ctx.body='del apply id:'+id;
    console.log('Delete apply,id=' +id);
})

//更新申请职位
router.patch('/apply',async(ctx)=>{    
    var applyJson=ctx.request.body;    
    //update apply
    try{
        const apply=await applyService.updateApply(applyJson);
        ctx.body='更新成功';
        console.log('Update apply,id='+apply);    
    }catch(err){
        ctx.body='更新失败';
        console.log('更新失败,err:'+err);
    }  
})

//保存申请职位
router.put('/apply',async(ctx)=>{
    var applyJson=ctx.request.body;    
    //save apply
    try{
        console.log('applyJson='+JSON.stringify(applyJson));
        const apply=await applyService.saveApply(applyJson);
        ctx.body='创建申请职位成功';
        console.log('Insert apply,  id='+apply);
    }catch(err){
        ctx.body='申请职位失败';
        console.log('申请职位失败,err:'+err);
    }    
})

module.exports=router.routes();