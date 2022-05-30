const exp=require("express")
const userapp=exp.Router();
const expressAsyncHandler=require('express-async-handler')
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken')
require('dotenv').config()
userapp.use(exp.json())

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
// userapp.get('/test',verifyToken,expressAsyncHandler(async(request,response)=>{
//     response.send({message:'this is from private route'})
//  }))

module.exports=userapp;