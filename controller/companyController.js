const router=require('koa-router')();
const companyService=require('../service/companyService');     // ./ 当前目录   ,   ../ 父级目录 ,  / 根目录


//查询单个公司
router.get('/company/:id',async(ctx)=>{
    var id= ctx.params.id;   //  parseInt()改为int型Id;
   
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        console.log( 'Yes, its a valid ObjectId');
    }
    console.log('query position id:'+id);
    var company=await companyService.getCompany({_id:id}); 
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
    console.log('Process companyS');
})



module.exports=router.routes();