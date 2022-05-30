
const exp=require("express")
const itemapp=exp.Router();
const expressAsyncHandler=require('express-async-handler')

itemapp.post('/additem',expressAsyncHandler(async(request,response)=>{
    let itemcollectionObj=request.app.get("itemcollectionObj");
    let newitem=request.body;
    itemcollectionObj.insertOne(newitem);
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