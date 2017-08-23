const Position=require('../model/position');

exports.getPosition=function(query){
    var position=Position.findOne(query);
    console.log('get position:'+position);
    return position;
}

exports.getPositions=function(query){
    return Position.find(query).exec();
}

exports.getHomePostions=function(query){
    return Position.find(query).exec();
}

exports.deletePosition=function(positionId){
    console.log("delete position id:"+positionId);
    return Position.remove({positionId:positionId});
}

exports.savePosition=function(position){
    console.log("save position:"+JSON.stringify(position));
    try{
        var position=new Position(position).save();
        return position;
    }catch(err){
        console.log('err:'+err);
        return null;
    }
}

exports.updatePosition=function(position){
    console.log("update position:"+JSON.stringify(position));
    return Position.where({positionId:position.positionId}).update(position);
}