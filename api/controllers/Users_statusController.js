/**
 * Users_statusController
 *
 * @description :: Server-side logic for managing users_statuses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	users_status:function(req,res){
        var statusCount=[];
        Users.count({status:1}).exec(function(err,found){
            if(err) {
                console.log("error occured");
                return res.serverError(err);
            }
             if(!found){
                return res.ok({status:-1, msg:"No such Users"})
            }
            else{
                statusCount.push({key:"activeUser",count:found});
                Users.count({status:2}).exec(function(err,found){
                    if(err) {
                        console.log("error occured");
                        return res.serverError(err);
                    }
                     if(!found){
                        return res.ok({status:-1, msg:"No such USers"})
                    }
                    else{
                        statusCount.push({key:"inActiveUser",count:found});
                        Users.count({status:3}).exec(function(err,found){
                            if(err) {
                                console.log("error occured");
                                return res.serverError(err);
                            }
                             if(!found){
                                return res.ok({status:-1, msg:"No such USers"})
                            }
                            else{
                                statusCount.push({key:"permanentDeactiveUser",count:found});
                                return res.ok({status:1, result:statusCount})
                            }
                        })
                    }
                })
            }
        })
        
    }
};

