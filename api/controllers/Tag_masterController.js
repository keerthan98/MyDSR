/**
 * Tag_masterController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    getAllData:function (req,res){

        Tag_master.find().then((result)=>{

            return res.ok(result)
        }).catch((err)=>{
            console.log(err)
            return res.serverError(err)
        })
    }
};