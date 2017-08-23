const EduExp=require('../model/eduExp');

exports.getEduExp=function(query){
    var eduExp=EduExp.findOne(query);
    console.log('get resume id:'+eduExp.resumeId);
    return eduExp;
}

exports.getEduExps=function(query){
    return EduExp.find(query);
}

exports.deleteEduExp=function(resumeId){
    console.log("delete resume id:"+resumeId);
    return EduExp.remove({resumeId:resumeId});
}

exports.saveEduExp=function(eduExp){
    console.log("save eduExp:"+JSON.stringify(eduExp));
    try{
        var eduExp=new EduExp(eduExp).save();
        return eduExp;
    }catch(err){
        console.log('err:'+err);
        return null;
    }
}

exports.updateEduExp=function(eduExp){
    console.log("update eduExp:"+JSON.stringify(eduExp));
    return EduExp.where({resumeId:eduExp.resumeId}).update(eduExp);
}
