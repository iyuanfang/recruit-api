/**
 * create by yuanfang on 17/8/10
 */
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/test', {
  useMongoClient: true
});

mongoose.Promise=global.Promise;

module.exports=mongoose;