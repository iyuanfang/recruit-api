const mongoose=require('../common/mongoose');

const Schema=mongoose.Schema;

const resumeSchema=new Schema({
    resumeId:{type: Number, unique: true},
    degree:{type:Number}, //0初中，1高中，2大专，3本科，4研究生，5博士
    userId:{type:Number},
    phone:String,
    sex:{type:Number} //0男，1女
});

//第三个参数才是指定创建的表名
const Resume=mongoose.model('resume',resumeSchema,'resume');

module.exports=Resume;