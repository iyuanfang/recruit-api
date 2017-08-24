const Position=require('../model/apply');

exports.getApplys=function(query){
    return Apply.find(query).exec();
}
