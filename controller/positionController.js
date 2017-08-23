const router=require('koa-router')();
const positionService=require('../service/positionService');

//查询单个职位
router.get('/position/:id',async(ctx)=>{
    var id=parseInt(ctx.params.id);
    console.log('query position id:'+id);
    var position=await positionService.getPosition({positionId:id});
    ctx.body=position;
    console.log('Process position');

});
//查询公司职位
router.get('/positions/:id',async(ctx)=>{
    var id=parseInt(ctx.params.id);
    console.log('query company id:'+id);
    var positions=await positionService.getPositions({companyId:id});
    ctx.body=positions;
    console.log('Process positions');
});
//查询职位列表
router.get('/positions',async(ctx)=>{
    positions=await positionService.getPositions({});
    ctx.body=positions;
    console.log('Process positions');
})
//查询首页职位列表
router.get('/positions',async(ctx)=>{
    positions=await positionService.getHomePostions({});
    ctx.body=positions;
    console.log('Process homepositions');
})
//删除职位
router.delete('/position/:id',async(ctx)=>{
    var id=parseInt(ctx.params.id);
    await positionService.deletePosition(id);
    ctx.body='del position id:'+id;
    console.log('Delete position,id=' +id);
})

//更新职位
router.patch('/position',async(ctx)=>{    
    var positionJson=ctx.request.body;    
    //update position
    const position=await positionService.updatePosition(positionJson);
    ctx.body='更新成功';
    console.log('Insert position,id='+position.positionId+'name='+position.name+',salary='+position.salary+',salaryType='+position.salaryType+',degree='+position.degree+',recruitNum='+position.recruitNum+',address='+position.address+',workCycle='+position.workCycle+',jobDescription='+position.jobDescription+',profession='+position.profession);
})

//创建职位
router.put('/position',async(ctx)=>{
    var positionJson=ctx.request.body;
    //save position
    const position=await positionService.savePosition(positionJson);
    if(position!=null){
        ctx.body='注册成功';
        console.log('Insert position,id='+position.positionId+'name='+position.name+',salary='+position.salary+',salaryType='+position.salaryType+',degree='+position.degree+',recruitNum='+position.recruitNum+',address='+position.address+',workCycle='+position.workCycle+',workTime='+position.workTime+',jobDescription='+position.jobDescription+',profession='+position.profession);
    }else{
        ctx.body='注册失败，可能原因：用户名重复';
        console.log('注册失败');
    }
})
    

module.exports=router.routes();