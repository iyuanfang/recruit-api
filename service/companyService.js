
const Company=require('../model/company'); // 导入company.js



exports.getCompany=function(query){
    var company=Company.findOne(query).exec();
    console.log('get company:'+company[0]); 
    return company;
}

exports.saveCompany=function(company){
    console.log("save company:"+JSON.stringify(company));
    return new Company(company).save();
}

exports.getCompanys=function(query){
    //return Company.find(query).exec();  
    return Company.find(query);    // 加不加.exec()效果都一样；
}


/*
exports.deleteCompany=function(companyId){
    console.log("delete company id:"+companyId);
    return Company.remove({companyId:companyId});
}
*/