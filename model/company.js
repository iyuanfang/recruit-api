const mongoose=require('../common/mongoose');

const Schema=mongoose.Schema;

const companySchema= new Schema({   
    // companyId:{type:String,index:{unique:true}},
    // name:{type:String,index:{unique:true}},
    
    companyId:Number,
    cityId:Number,
    address:String,
    city:String,
    area:String,
    numEmployee:Number,
    industry:String,
    brief:String,

});

    // model()的第三个参数才是真正创建的表名；
const company=mongoose.model('company',companySchema,'company'); 
                                                
module.exports=company; //导出model；