const router=require('koa-router')();
const companyService=require('../service/companyService');     // ./ 当前目录   ,   ../ 父级目录 ,  / 根目录


//查询单个公司
router.get('/company/:id',async(ctx)=>{
    var id= parseInt(ctx.params.id);  // 改为int型Id;
    //var id= ctx.params.id; 
    var company=await companyService.getCompany({companyId:id}); 
    ctx.response.body=company;
    console.log('Process company');

});

//创建公司
router.put('/company',async(ctx)=>{
    var companyJson=ctx.request.body;
    try{
        const company=await companyService.saveCompany(companyJson);
        console.log('Insert Company sucess='+company);
        ctx.body='创建公司成功';
    }catch(err){
        ctx.body="创建公司失败";
        console.log('Insert Company failed,err:'+err);
    }
})

//查询用户公司
router.get( '/companys',async(ctx)=>{
    companys=await companyService.getCompanys({}); 
    ctx.response.body=companys;
    console.log('Process companys');
})



module.exports=router.routes();