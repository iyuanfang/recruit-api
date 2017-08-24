const mongoose=require('../common/mongoose');

const Schema=mongoose.Schema;

const workExpSchema=new Schema({
    resumeId:{type: Number},
    company:{type:String},
    position:{type:String},
    beginTime:{type:String},
    endingTime:{type:String},
    description:{type:String},

});

//第三个参数才是指定创建的表名
const WorkExp=mongoose.model('workExp',workExpSchema,'workExp');

module.exports=WorkExp;