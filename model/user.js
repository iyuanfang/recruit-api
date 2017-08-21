const mongoose=require('../common/mongoose');

const Schema=mongoose.Schema;

const userSchema=new Schema({
    userId:{type: Number, index: {unique: true}},
    name:{type: String, index: {unique: true}},
    height:Number,
    password:String
});

//第三个参数才是指定创建的表名
const User=mongoose.model('user',userSchema,'user');

module.exports=User;