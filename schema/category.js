const mongoose=require('mongoose')


const CatModel=new mongoose.Schema({
    name:{type:String},
    pic:{type:String},
    status:{type:String,default:"unblock"}
})

module.exports=mongoose.model('categories',CatModel)