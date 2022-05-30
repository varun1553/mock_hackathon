const exp=require('express')
const mc=require('mongodb').MongoClient;
const app=exp();
app.use(exp.json())

const path=require('path')
app.use(exp.static(path.join(__dirname,'./build')))

const dburl="mongodb+srv://Varun:Varun@cluster0.klf74.mongodb.net/?retryWrites=true&w=majority"
let collectionObj;
//let articlecollectionObj;

mc.connect(dburl,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(client=>{
    collectionObj=client.db("hackathon").collection("usercollection");
    //articlecollectionObj=client.db("hackathon").collection("articlecollection");
    app.set("collectionObj",collectionObj);
    //app.set("articlecollectionObj",articlecollectionObj)
    console.log("DB connection succesful ");
})
.catch(err=>console.log("Err in db connection",err));


const userapp=require("./api/userapi")
app.use("/userapp",userapp);
//const articleapi=require("./api/articleapi")
//app.use("/articleapi",articleapi);


app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./build/index.html'));
})

app.use((req,res,next)=>{
    res.send({message:`path ${req.url} is invalid`});
});



app.listen(4000,()=>{
    console.log("server listening on port 4000")
});