const mongoose=require('../common/mongoose');

const Schema=mongoose.Schema;

const resumeSchema=new Schema({
    resumeId:{type: Number},
    name:{type:String},
    sex:{type:Number}, //0男，1女
    birthday:{type:String},
    phone:String,
   
});

//第三个参数才是指定创建的表名
const Resume=mongoose.model('resume',resumeSchema,'resume');

module.exports=Resume;