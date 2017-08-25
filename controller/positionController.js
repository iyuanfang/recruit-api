const router=require('koa-router')();
const positionService=require('../service/positionService');

//查询单个职位
router.get('/position/:id',async(ctx)=>{
    var id=ctx.params.id;
    console.log('query position id:'+id);
    var position=await positionService.getPosition({_id:id});
    ctx.body=position;
    console.log('Process position');

});

//查询公司职位
router.get('/companyPositions/:id',async(ctx)=>{
    var id=ctx.params.id;
    console.log('query positions by company id:'+id);
    var positions=await positionService.getPositions({company:id});
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
    var id=ctx.params.id;
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
    console.log('Insert position,id:'+position);
})

//创建职位
router.put('/position',async(ctx)=>{
    var positionJson=ctx.request.body;
    //save position
    try{
        const position=await positionService.savePosition(positionJson);
        ctx.body='创建职位成功';
        console.log('Insert position:'+position);
    }catch(err){
        ctx.body='创建职位失败';
        console.log('创建职位失败,err:'+err);
    }
})
    
module.exports=router.routes();