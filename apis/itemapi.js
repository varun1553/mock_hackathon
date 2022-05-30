
const exp=require("express")
const itemapp=exp.Router();
const expressAsyncHandler=require('express-async-handler')
<<<<<<< HEAD
var cloudinary=require('cloudinary').v2
const {CloudinaryStorage} = require('multer-storage-cloudinary')
const multer=require('multer')
=======
// var cloudinary=require('cloudinary').v2
// const {CloudinaryStorage} = require('multer-storage-cloudinary')
// const multer=require('multer')
>>>>>>> 6167ec2f63901302ed9cbec8e2697a1c0eb444c0
// //configure cloudinary
// cloudinary.config({
//    cloud_name:process.env.CLOUD_NAME,
//    api_key:process.env.API_KEY,
//    api_secret:process.env.API_SECRET,
//    secure:true,
<<<<<<< HEAD

// })
// //configure cloudinary storage
// const cloudinaryStorge = new CloudinaryStorage({
//     cloudinary:cloudinary,
//     params:async(req,file)=>{
//        return {
//           folder: "U&I",
//           public_id: file.fieldname+'-'+Date.now(),
//        }
//     },
    
//     })
// //configure multer
//     var upload= multer({storage:cloudinaryStorge});
=======
>>>>>>> 6167ec2f63901302ed9cbec8e2697a1c0eb444c0

// })
// //configure cloudinary storage
// const cloudinaryStorge = new CloudinaryStorage({
//     cloudinary:cloudinary,
//     params:async(req,file)=>{
//        return {
//           folder: "U&I",
//           public_id: file.fieldname+'-'+Date.now(),
//        }
//     },
    
//     })

// //configure multer
//     var upload= multer({storage:cloudinaryStorge});
itemapp.post('/additem' ,expressAsyncHandler(async(request,response)=>{
    console.log(request.file.path)
    let itemcollectionObj=request.app.get("itemcollectionObj");
    let itemObj=request.body;
    //let itemObj=JSON.parse(request.body.usersData)
    //itemObj.profileImg=request.file.path
     //add profilepic to userObj
     itemcollectionObj.insertOne(itemObj);
    response.send({
        message:"Item added successfully",
    })
}))



itemapp.get('/getitems',expressAsyncHandler(async(request,response)=>{
    let itemcollectionObj=request.app.get("itemcollectionObj");
    let data=await itemcollectionObj.find().toArray();

    response.send(data);
    })
)


module.exports=itemapp;