const User=require('../model/user');

exports.getUser=function(query){
    var user=User.findOne(query);
    console.log('get user:'+user[0]);
    return user;
}

exports.getUsers=function(query){
    return User.find(query);
}

exports.deleteUser=function(userId){
    console.log("delete user id:"+userId);
    return User.remove({userId:userId});
}

exports.saveUser=function(user){
    console.log("save user:"+JSON.stringify(user));
    try{
        var user=new User(user).save();
        return user;
    }catch(err){
        console.log('err:'+err);
        return null;
    }
    // var user=new User(user).save(function(err){
    //     if(err){
    //         console.log('err:'+err);
    //         return null;
    //     }
    // });
    // return user;
}

exports.updateUser=function(user){
    console.log("update user:"+JSON.stringify(user));
    return User.where({userId:user.userId}).update(user);
}
