const mongoose=require('../common/mongoose');

const Schema=mongoose.Schema;

const applySchema=new Schema({
    resume: {type:Schema.Types.ObjectId, ref:'resume'}, 
    position: {type:Schema.Types.ObjectId, ref:'position'}, 
    applyTime:{type:Date,default:Date.now}   
});

//第三个参数才是指定创建的表名
const Apply=mongoose.model('apply',applySchema,'apply');

module.exports=Apply;
