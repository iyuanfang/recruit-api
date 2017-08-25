const router=require('koa-router')();
const applyService=require('../service/applyService');

//查询申请职位
router.get('/apply/:id',async(ctx)=>{
    var id=ctx.params.id;
    console.log('query apply id:'+id);
    var apply=await applyService.getApply({_id:id});
    if(apply!=null){
        ctx.body=apply;
    }else{
        ctx.body='没有申请过职位'
    }    
})

//查询申请职位列表
router.get('/applys',async(ctx)=>{
    applys=await applyService.getApplys({});
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
    const apply=await applyService.updateApply(applyJson);
    ctx.body='更新成功';
    console.log('Update apply,id='+apply);
})

//保存申请职位
router.put('/apply',async(ctx)=>{
    var applyJson=ctx.request.body;    
    //save apply
    const apply=await applyService.saveApply(applyJson);
    if(apply!=null){
        ctx.body='创建申请职位成功';
        console.log('Insert apply,  id='+apply);
    }else{
        ctx.body='申请职位失败';
        console.log('申请职位失败');
    }    
})

module.exports=router.routes();