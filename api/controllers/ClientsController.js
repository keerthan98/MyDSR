/**
 * ClientsController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    clients_list: function(req,res){        
        Clients.find().exec(function(err,results){
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