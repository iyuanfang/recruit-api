const EduExp=require('../model/eduExp');
const mongoose=require('mongoose');   //  

exports.getEduExp=function(query){
    var eduExp=EduExp.findOne(query).populate('resume');  // position表去引用resume表
    console.log('get resume id:'+eduExp.resumeId);
    return eduExp;
}

exports.getEduExps=function(query){
    return EduExp.find(query).populate('resume');
}

exports.deleteEduExp=function(resumeId){
    console.log("delete resume id:"+resumeId);
    return EduExp.remove({_id:resumeId});
}

exports.saveEduExp=function(eduExp){
    var resume=new mongoose.Types.ObjectId(eduExp.resume);
    eduExp.resume=resume;
    console.log("save eduExp:"+JSON.stringify(eduExp));
    try{
        var eduExp=new EduExp(eduExp).save();
        return eduExp;
    }catch(err){
        console.log('saveEduExp err:'+err);
        return null;
    }
}


exports.updateEduExp=function(eduExp){
    console.log("update eduExp:"+JSON.stringify(eduExp));
    return EduExp.where({_id:eduExp._id}).update(eduExp);
}
