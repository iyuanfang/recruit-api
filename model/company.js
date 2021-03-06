const mongoose=require('../common/mongoose');

const Schema=mongoose.Schema;

const companySchema= new Schema({
    name:{type: String,unique:true},
    city:String,
    area:String,
    address:String,
    numEmployee:String,
    numRecruitPos:String,     // 该公司有多少在招岗位
    profession:String,        // 所在行业
    brief:String,
});

    // model()的第三个参数才是真正创建的表名；
const company=mongoose.model('company',companySchema,'company'); 
                                                
module.exports=company; //导出model；