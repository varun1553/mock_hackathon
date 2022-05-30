const exp=require("express")
const userapp=exp.Router();
const expressAsyncHandler=require('express-async-handler')
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken')
require('dotenv').config()
userapp.use(exp.json())
var cloudinary=require('cloudinary').v2
const {CloudinaryStorage} = require('multer-storage-cloudinary')
const multer=require('multer')
//configure cloudinary
cloudinary.config({
   cloud_name:process.env.CLOUD_NAME,
   api_key:process.env.API_KEY,
   api_secret:process.env.API_SECRET,
   secure:true,

})
//configure cloudinary storage
const cloudinaryStorge = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:async(req,file)=>{
       return {
          folder: "U&I",
          public_id: file.fieldname+'-'+Date.now(),
       }
    },
    
    })
//configure multer
    var upload= multer({storage:cloudinaryStorge});
userapp.post("/create-user",expressAsyncHandler(async(request,response)=>{
    let usercollectionobj=request.app.get("collectionObj");
    let newuser=request.body;
    console.log("newuser is ",newuser);
    let userofDB= await usercollectionobj.findOne({
        name:newuser.name,
    });
    if(userofDB!==null){
        response.send({
            message:"user with name already exists",
        })
    }
    else{
        let hashedpassword=await bcryptjs.hash(newuser.password,6);
        newuser.password=hashedpassword;
        await usercollectionobj.insertOne(newuser);
        response.send({message:"new user created"})
    }
}))

userapp.post(
    '/login',
    expressAsyncHandler(async(req,res)=>{
        let usercollectionobj=req.app.get("collectionObj");
        let userCredentials=req.body;
        let userlogin=await usercollectionobj.findOne({
            name:userCredentials.name,
        })
        if(userlogin!==null){
            let status=await bcryptjs.compare(userCredentials.password,userlogin.password);
            if(status==false){
                res.send({message:"Invalid password"});
            }
            else{
                let token=jwt.sign({name:userlogin.name},process.env.SECRET_KEY,{expiresIn:60});
                res.send({message:"success",payload:token,userObj:userlogin});
            }
        }
        else{
            res.send({message:"invalid user"});
        }

}))


userapp.delete('/remove-user/:name',expressAsyncHandler(async(req,res)=>{
    //get usercollectionobject
    let userCollectionObj=req.app.get("collectionObj")
    //get params from request
    let Uname=request.params.name
    await userCollectionObj.deleteOne({username:Uname})
    //send response
    res.send({message:'user deleted'})
 }))
 
// userapp.get('/test',verifyToken,expressAsyncHandler(async(request,response)=>{
//     response.send({message:'this is from private route'})
//  }))

module.exports=userapp;