/**
 * AuthorizationController
 *
 * @description :: Server-side logic for managing Authorizations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//var bcrypt=require('bcryptjs');
var _=require('lodash')
module.exports = {
	login:function(req,res){
        var params=req.allParams();
        var obj={};
        if(_.has(params,'email')){
            obj.email=params.email;
        }
        if(_.has(params,'username')){
            obj.username=params.username;
        }
        if(_.has(params,'ph_no')){
            obj.ph_no=params.ph_no;
        }
       /*  var password=params('password');
        var username=params('username');
        var ph_no=params('ph_no'); */
        /* if (!parmas.email || !params.password ||!params.username||!params.ph_no) {
            ResponseService.json(401, res, "Email or username or ph_no and password required")
        } */
        Users.findOne(obj)
        .then(function(user){
            console.log("user",user)
            console.log("hitting1")
            if(!user){
            return res.json({status:401, res: "Invalid email, User Name or Phone No"})
            }
           /*  bcrypt.compare(params.password,user.pass).then(function(valid){
                if(!valid){
                    return res.json(401, res, "Invalid password")
                }else{
                    var response_data={user:user,token:JwtService.issue({id: user_id})
                }
                return res.json(200, res, "Successfully signed in", responseData)
                }
            }).catch(function(err){
                return res.json(403, res, "Forbidden")
            }).catch(function(err){
                return res.json(403, res, "Forbidden")
            // }) */
            if(user.pass==params.pass){
                console.log("hitting3");
                Users.update(obj,{last_login:params.last_login}).then((userUpdated)=>{
                    
                    return res.json({status:200, res: "Successfully signed in", result:user})
                }).catch((err)=>{
                    return res.serverError(err)
                })
            }
            else{
                return res.json({status:404, res: "Invalid password"})
              }
        }).catch((err)=>{
            return res.serverError(err)
        })
    }
};
