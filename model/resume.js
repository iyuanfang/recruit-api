const mongoose=require('../common/mongoose');

const Schema=mongoose.Schema;

const resumeSchema=new Schema({
    user: {type:Schema.Types.ObjectId, ref:'user',unique:true}, 
    name:{type:String},
    sex:{type:Number}, //0男，1女
    // sex:{type:String},
    birthday:{type:String},
    phone:{type:String},
});

//第三个参数才是指定创建的表名
const Resume=mongoose.model('resume',resumeSchema,'resume');

module.exports=Resume;