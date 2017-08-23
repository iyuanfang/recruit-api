const WorkExp=require('../model/workExp');

exports.getWorkExp=function(query){
    var workExp=WorkExp.findOne(query);
    console.log('get resume id:'+workExp.resumeId);
    return workExp;
}

exports.getWorkExps=function(query){
    return WorkExp.find(query);
}

exports.deleteWorkExp=function(resumeId){
    console.log("delete resume id:"+resumeId);
    return WorkExp.remove({resumeId:resumeId});
}

exports.saveWorkExp=function(workExp){
    console.log("save workExp:"+JSON.stringify(workExp));
    try{
        var workExp=new WorkExp(workExp).save();
        return workExp;
    }catch(err){
        console.log('err:'+err);
        return null;
    }
}

exports.updateWorkExp=function(workExp){
    console.log("update workExp:"+JSON.stringify(workExp));
    return WorkExp.where({resumeId:workExp.resumeId}).update(workExp);
}
