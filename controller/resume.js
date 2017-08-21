const router=require('koa-router')();
const resumeService=require('../service/resumeService');

//查询单个简历
router.get('/resume/:id',async(ctx)=>{
    var id=parseInt(ctx.params.id);
    console.log('query resume id:'+id);
    var resume=await resumeService.getResume({resumeId:id});
    ctx.body=resume;
    console.log('Process resume');

});

//查询简历列表
router.get('/resumes',async(ctx)=>{
    var query=ctx.request.query;
    resumes=await resumeService.getResumes({});
    ctx.body=resumes;
    console.log('Process resumes');
})

//删除简历
router.delete('/resume/:id',async(ctx)=>{
    var id=parseInt(ctx.params.id);
    await resumeService.deleteResume(id);
    ctx.body='del resume id:'+id;
    console.log('Delete resume,id=' +id);
})

//更新简历
router.patch('/resume',async(ctx)=>{    
    var resumeJson=ctx.request.body;    
    //update resume
    const resume=await resumeService.updateResume(resumeJson);
    ctx.body='更新成功';
    console.log('Update resume,id='+resume.resumeId+',degree='+resume.degree+',phone='+resume.phone);
})

////创建简历
router.put('/resume',async(ctx)=>{
    var resumeJson=ctx.request.body;    
    //save resume
    const resume=await resumeService.saveResume(resumeJson);
    if(resume!=null){
        ctx.body='创建简历成功';
        console.log('Insert resume,id='+resume.resumeId+',degree='+resume.degree+',phone='+resume.phone);
    }else{
        ctx.body='注册失败，可能原因：简历名重复';
        console.log('注册失败');
    }    
})

module.exports=router.routes();

