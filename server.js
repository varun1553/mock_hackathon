const exp=require('express')
const mc=require('mongodb').MongoClient;
const app=exp();
app.use(exp.json())
require('dotenv').config()
const path=require('path')
app.use(exp.static(path.join(__dirname,'./build')))

const dburl=process.env.DATABASE_CONNECTION_URL
let collectionObj;
let itemcollectionObj;

mc.connect(dburl,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(client=>{
    collectionObj=client.db("hackathon").collection("usercollection");
    itemcollectionObj=client.db("hackathon").collection("itemcollection");
    app.set("collectionObj",collectionObj);
    app.set("itemcollectionObj",itemcollectionObj)
    console.log("DB connection succesful ");
})
.catch(err=>console.log("Err in db connection",err));


const userapp=require("./apis/userapi")
app.use("/userapp",userapp);
const itemapi=require("./apis/itemapi")
app.use("/itemapi",itemapi);


app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./build/index.html'));
})

app.use((req,res,next)=>{
    res.send({message:`path ${req.url} is invalid`});
});


const port=process.env.PORT
app.listen(port,()=>{
    console.log("server listening on port 4000")
});