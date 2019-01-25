/**
 * Tag_detailsController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    getDATA:function(req,res){
    Tag_details.update({keycode:'Residential Address'},{keycode:'Alternative Address'}).exec(function(err,res){
        if(err)
            return console.log('updated all users')
            else{                   
                 return res.ok({status:1,msg:"Update done succesfully",result:res})
                }
    })
  }
};