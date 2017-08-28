const router=require('koa-router')();
const resumeService=require('../service/resumeService');
const eduExpService=require('../service/eduExpService');
const workExpService=require('../service/workExpService');

//查询单个简历
router.get('/resume/:id',async(ctx)=>{
    var id=ctx.params.id;
    // console.log('query resume id:'+id);

    var json={resume:'',eduExps:[],workExps:[]};  // 

    try{
        var resume=await resumeService.getResume({_id:id});// resume是json对象
        var eduExps=await eduExpService.getEduExps({resume:id}); //单人（一个id）可有多份简历 getEduExps ； 
        var workExps=await workExpService.getWorkExps({resume:id});
    
        json.resume=resume;
        json.eduExps=eduExps;
        json.workExps=workExps;  // 将上述三个对象转成json对象

        ctx.body=json;
    }catch(err){
        ctx.body='failed';
        console.log('查询单个简历失败,err:'+err);
    }

    console.log('Process resume');

});



//查询简历列表
router.get('/resumes',async(ctx)=>{
    var query=ctx.request.query;
    
    try{
        const resumes=await resumeService.getResumes({});
        ctx.body=resumes;
    }catch(err){
        ctx.body='failed';
        console.log('查询简历失败,err:'+err);
    }
    console.log('Process resumes');
})

//删除简历
router.delete('/resume/:id',async(ctx)=>{
    var id=parseInt(ctx.params.id);
    
    try{
        const resume=await resumeService.deleteResume(id);
        ctx.body='ok';
    }catch(err){
        ctx.body='failed';
        console.log('删除简历失败,err:'+err);
    }
 
    console.log('Delete resume  ' +id);
})

//更新简历
router.patch('/resume',async(ctx)=>{    
    var resumeJson=ctx.request.body;    
    //update resume
    try{
        const resume=await resumeService.updateResume(resumeJson);
        ctx.body=resume;
    }catch(err){
        ctx.body='failed';
    }
    console.log('Update resume  '+resume);
})

////创建简历
router.put('/resume',async(ctx)=>{
    var resumeJson=ctx.request.body;    
    try{
        const resume=await resumeService.saveResume(resumeJson);
        ctx.body='ok';
        console.log('Insert resume,  id='+resume);
    }catch(err){
        ctx.body='failed';
        console.log('创建简历失败,err:'+err);
    }    
})

module.exports=router.routes();

