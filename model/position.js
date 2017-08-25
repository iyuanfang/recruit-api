const mongoose=require('../common/mongoose');

const Schema=mongoose.Schema;
const PositionSchema=Schema({
    company: {type:Schema.Types.ObjectId, ref:'company'},             //公司Id
    name: {type:String},                  //职位名称
    minSalary:{type:Number},                 //最低薪资
    maxSalary:{type:Number},                 //最高薪资    
    salaryType:{type:Number},             //薪资类型 0日，1月
    degree:{type:Number},                 //学历 0初中，1高中，2大专，3本科，4研究生，5博士
    recruitNum:{type:Number},             //招聘人数
    address:{type:String},                //工作地址
    workCycle:{type:Number},              //工作周期
    workTime:{type:Number},               //工作时长
    jobDescription:{type:String},         //职位描述
    profession:{type:String},             //所在行业
    createDate:{type:String},             //创建时间
});
const Position=mongoose.model('position',PositionSchema,'position');
module.exports=Position;