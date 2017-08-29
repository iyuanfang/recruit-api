const WorkExp=require('../model/workExp');

exports.getWorkExp=function(query){
    var workExp=WorkExp.findOne(query);  // findone()函数
    console.log('get resume id:'+workExp.resumeId);
    return workExp;
}

exports.getWorkExps=function(query){    //使用的find()函数
    return WorkExp.find(query);
}

exports.deleteWorkExp=function(workExpId){
    console.log("delete workExp id:"+workExpId);
    return WorkExp.remove({_id:workExpId});
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
