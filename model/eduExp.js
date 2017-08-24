const mongoose=require('../common/mongoose');

const Schema=mongoose.Schema;

const eduExpSchema=new Schema({
    resumeId:{type: Number},
    school:{type:String},
    major:{type:String},
    degree:{type:String},     // 3大专 4本科 5硕士 6博士
    beginTime:{type:String},
    graduateTime:{type:String},
    achievement:{type:String},

});

//第三个参数才是指定创建的表名
const EduExp=mongoose.model('eduExp',eduExpSchema,'eduExp');

module.exports=EduExp;