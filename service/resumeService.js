const Resume=require('../model/resume');
const mongoose=require('mongoose');

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
    var user=new mongoose.Types.ObjectId(resume.user);
    resume.user=user;
    return new Resume(resume).save();
}

exports.updateResume=function(resume){
    console.log("update resume:"+JSON.stringify(resume));
    return Resume.where({resumeId:resume.resumeId}).update(resume);
}
