const register = require('./models/register');
const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const port = 5000;

mongoose.connect("mongodb://localhost:27017/userapp").then(() => {
    console.log("MongoDB Connect");
}).catch((err)=>{console.log(err);});

app.get("/",(req,res)=>{
    res.json({data:"hello kevin"});
});

app.post('/api/register', async (req,res) => {
    const userdata = req.body;

    const findData = await register.findOne({
        username:userdata.username,
    });

    if(!findData){
        register.create(userdata);
        return res.json({data:"Registration Successfully"});
    }else{
        return res.json({data:`${userdata.username} Alredy Exists`});
    }
});

app.post('/api/login',async (req,res) => {
    
    const uname = req.body.username;
    const pass = req.body.password;

    const user = await register.findOne({username : uname, password:pass});

    if(user) {
        return res.json({data : "Login Succesfully!!"});
    }
    return res.json({data:"Wrong Credentials"});
});

app.post('/api/searchuser', async (req,res) => {
    const user = await register.findOne({username:req.body.username});

    if(user){
        return res.json({data:user});
    }
    return res.json({data:`${req.body.username} Not Found`});
});

app.delete('/api/deleteuser', async (req,res) => {

    const uname = req.body.username;
    const udata = await register.findOne({username:uname});
    if(udata){
        const data = await register.findOneAndDelete(
            {username:uname}
        );
        if(data){
            return res.json({data:`${uname} Deleted Successfully`});
         }
         else{
             return res.json({data:"Not Deleted"});
         }
    } else{
        return res.json({data:`${uname} Doesn't match`});
    }
    
});

app.listen(port, () => {console.log(`App Running on ${port}`);});