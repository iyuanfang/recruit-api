const Resume=require('../model/resume');

exports.getResume=function(query){
    var resume=Resume.findOne(query);
    console.log('get resume id:'+resume.resumeId);
    return resume;
}

exports.getResumes=function(query){
    return Resume.find(query);
}

exports.deleteResume=function(ResumeId){
    console.log("delete resume id:"+resumeId);
    return Resume.remove({resumeId:resumeId});
}

exports.saveResume=function(resume){
    console.log("save resume:"+JSON.stringify(resume));
    try{
        var resume=new Resume(resume).save();
        return resume;
    }catch(err){
        console.log('err:'+err);
        return null;
    }
}

exports.updateResume=function(resume){
    console.log("update resume:"+JSON.stringify(resume));
    return Resume.where({resumeId:resume.resumeId}).update(resume);
}
