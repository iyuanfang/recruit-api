const Apply=require('../model/apply');
const mongoose=require('mongoose');

exports.getApply=function(query){
    return Apply.findOne(query).populate('resume').populate({
        path:'position',
        populate:{
            path:'company'
        }
    });
}

exports.getApplys=function(query){
    return Apply.find(query).populate('resume').populate({
        path:'position',
        populate:{
            path:'company'
        }
    });
}

exports.deleteApply=function(ApplyId){
    console.log("delete apply id:"+applyId);
    return Apply.remove({_id:applyId});
}

exports.saveApply=function(apply){
    var resume=new mongoose.Types.ObjectId(apply.resume);
    apply.resume=resume;
    var position=new mongoose.Types.ObjectId(apply.position);
    apply.position=position;
    console.log("save apply:"+JSON.stringify(apply));
    return new Apply(apply).save();
}

exports.updateApply=function(apply){
    console.log("update apply:"+JSON.stringify(apply));
    return Apply.where({_id:apply._id}).update(apply);
}