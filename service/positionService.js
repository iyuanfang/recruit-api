const Position=require('../model/position');
const mongoose=require('mongoose');

exports.getPosition=function(query){
    return Position.findOne(query).populate('company');
}

exports.getPositions=function(query){
    return Position.find(query).populate('company');
}

exports.getHomePostions=function(query){
    return Position.find(query).exec();
}

exports.deletePosition=function(positionId){
    console.log("delete position id:"+positionId);
    return Position.remove({_id:positionId});
}

exports.savePosition=function(position){
    var company=new mongoose.Types.ObjectId(position.company);
    position.company=company;
    console.log("save position:"+JSON.stringify(position));
    return new Position(position).save();
}

exports.updatePosition=function(position){
    console.log("update position:"+JSON.stringify(position));
    return Position.where({_id:position.positionId}).update(position);
}