const express = require("express");
const mongoose = require("mongoose")
const app = express()
const cors = require ("cors")
const bodyparser = require("body-parser")
const userModel = require("./usermodel")

app.use(cors())
app.use(bodyparser.json())

app.post("/reg", (req, res) => {
  const { user, email, password } = req.body;
  console.log(req.body)
     userModel.create({ username:user, email, password })
        .then(() => {
          // token(username)
          console.log("all ok")
          res.json("reg success")
        })
        .catch((err) => {
          console.error(err);
        });
    })
    


app.listen("3000",()=>{
  console.log('Server is running on port 3000')
})

mongoose.connect("mongodb+srv://tanushree:9051116134@cluster0.f95lcfl.mongodb.net/userauth?retryWrites=true&w=majority")
.then(()=>{
    console.log('DB Connected Successfuly')
})
.catch((err)=> console.log(err))