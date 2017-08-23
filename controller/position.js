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
    
//职位表单
router.get('/position',async(ctx) =>{
    ctx.response.body = `<h1>Position</h1>
        <form action="/position/save" method="post">
            <input type="hidden" name="positionrId" value="1">
            <input type="hidden" name="companyId" value="1">
            <p>职位名称: <input name="name" placeholder="请输入"></p>
            <p>职位薪资: <input name="salary"></p>

            <p>薪资类型: <select name="salaryType">
            <option value=0>日薪</option>
            <option value=1>月薪</option>
            </select></p>
            
            <p>学历要求: <select name="degree">
            <option value=0>初中</option>
            <option value=1>高中</option>
            <option value=2>大专</option>
            <option value=3>本科</option>
            <option value=4>研究生</option>
            <option value=5>博士</option>
            </select></p>

            <p>招聘人数: <input name="recruitNum"></p>
            <p>工作地址: <input name="address"></p>
            <p>工作周期: <select name="workCycle">
            <option value=1>1</option>
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option>
            <option value=6>6</option>
            <option value=7>7</option>
            </select>天/周</p>
            <p>工作时长: <select name="workCycle">
            <option value=1>1</option>
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option>
            <option value=6>6</option>
            <option value=7>7</option>
            </select>个月</p>
            <p>职位描述: <input name="jobDescription"></p>
            <p>行业：<input name="profession"></p>
            <p><input type="submit" value="发布职位"></p>
        </form>`;
});

router.get('/',async(ctx)=>{
    ctx.body='index';

});

module.exports=router.routes();