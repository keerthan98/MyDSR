/**
 * Users_listController
 *
 * @description :: Server-side logic for managing users_lists
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    users_list: function(req,res){        
        Users.find().exec(function(err,results){
         if(err) {
             console.log("error occured");
             return res.serverError(err);
         }
         if(!results){
             return res.ok({status:-1, msg:"Not Found"})
         }
             return res.ok({status:1, msg:"Found", result:results})
        })
    }
};

