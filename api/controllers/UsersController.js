/**
 * UsersController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
/* const crypto=require('crypto'),
function generateID(callback) {
let uID=crypto.randombytes(2).toString('hex');
let current_year=new Date().getFullYear();
let uID=uID+"/"+current_year;
} */
    
module.exports = {


    createuser:function(req,res){
        var params=req.allParams();
        console.log("hitting1")
        Users.findOne({username: params.username}).exec(function(err,results){
            if(err) {
                console.log("error occured");
                return res.serverError(err);
            }
            if(!results){
                console.log("create")
                Users.create(params).exec(function(err,userCreated){
                    if(err) {
                        console.log("error occured");
                        return res.serverError(err);
                    }
                    return res.ok({status:1,msg:"User Created Successfully",result:userCreated})
                })
            }else{
                return res.ok({status:-1,msg:"Data Already Exists", result:results})
            }
        })
    }
    /*  Users.findOne({user_id: uID}).exec(function(err, newid) {
            if(err) {
              //catch Error
            } else {
              if(newid) {
                // nope... uID exist
                return generateID(callback);
              } else {
                return callback(uID)
              }
            }
          }); */
        
          /* Users.findOne({user_id: uID}).then(function generateID(uID) {
            Users.create({ user_id: uID }).exec(function (err, item) {
              if (err) {
                console.log.error(err);
                return res.serverError({errCode:404 , message: 'User id already exits'});
              } else {
                console.log('id created:', item.user_id);
                return res.created();
              }
          
            });
          }); */
    //     Users.find({username: params.username}).exec(function(err,results){
    //         if(err) 
    //         { 
    //            // return res.serverError(err);
    //             console.log("error occured");
    //         }
    //         if(req.method=="POST"&&req.param("User",null)!=null) 
    // {
    //     console.log("hitting2")


    //     var insert = "INSERT INTO users VALUES("+req.params.username+",'"+req.params.password+"','"+req.params.city+"','"+req.params.dob+"','"+req.params.email+"','"+req.params.ph_no+"')";
    //     console.log("hitting3")

    //     Users.query(insert,function(err,record){
    //     if(err)
    //     {
    //         console.log("Error");
    //     }
    //     else
    //     {

    //         console.log(record);

    //     }

    //     }); 
    // }   

    //         })
/*       Users.findOne({username:params.username}).then((user)=>{
            console.log("user",user)
            return res.ok(user)
        }) */
    //  Users.create(params).then( function (user){
    //      console.log("user",user)
    //      if(!user){ 
    //          return res.ok({status:-1,msg:"Failed"})
    //      }
         
    //     return res.ok({status:1,msg:"Successful",result:user});
    //  }).catch(function(err){
    //      return res.serverError(err)
    //  })
 /*    generateID(function (uID) {
        Users.create({ user_id: uID }).exec(function (err, item) {
          if (err) {
            console.log.error(err);
            return res.serverError({errCode: 001, message: '<Your custom message>'});
          } else {
            console.log('id created:', item.user_id);
            return res.created();
          }
      
        });
      }); */
};
