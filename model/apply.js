const mongoose=require('../common/mongoose');

const Schema=mongoose.Schema;

const applySchema=new Schema({
    applyId:{type: Number, unique: true},
    resumeId:{type: Number},
    positionId:{type:Number},
    applyTime:{
        type:Date,
        default:Date.now
    }

});

//第三个参数才是指定创建的表名
const Apply=mongoose.model('apply',resumeSchema,'apply');

module.exports=Apply;

