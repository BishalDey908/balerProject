const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://tanushree:9051116134@cluster0.f95lcfl.mongodb.net/test?retryWrites=true&w=majority")
.then(()=> {
    console.log('DB connected')
})
.catch(()=>{
    console.log('Db connetion failed')
})

/*const LoginSchema = new mongoose.Schema({
   email:{
    type: String,
    required: true,
   },
   password:{
    type:Number,
    required:true
   }
})
const collection = mongoose.model('collection', LoginSchema)
module.exports = collection*/

const SignupSchema = new mongoose.Schema({
    user:{
        type:String
    },
    email:{
     type: String,
     required: true,
    },
    password:{
     type:Number,
     required:true
    }
 })
 const collection = new mongoose.model('collection', SignupSchema)
module.exports = collection

//const RegisterModel = mongoose.model('usersauths', LoginSchema);
//module.exports = LoginSchema;