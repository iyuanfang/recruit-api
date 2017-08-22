const router=require('koa-router')();
const companyService=require('../service/companyService');     // ./ 当前目录   ,   ../ 父级目录 ,  / 根目录


//查询单个公司
router.get('/company/:id',async(ctx)=>{
    var id= parseInt(ctx.params.id);  // 改为int型Id;
    //var id= ctx.params.id; 
    var company=await companyService.getCompany({companyId:id}); 
    ctx.body=company;
    console.log('Process company');

});

//查询用户公司
router.get( '/companys',async(ctx)=>{
    companys=await companyService.getCompanys({}); 
    ctx.body=companys;
    console.log('Process companys');
}  )



module.exports=router.routes();