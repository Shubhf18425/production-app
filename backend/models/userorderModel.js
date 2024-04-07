import mongoose from "mongoose"

const UserorderSchema = new mongoose.Schema({
 nameofuser : {
    type : String ,
    required : true 
 },
 orderdescription : {
    type : String,
    required : true
 },
 orderquantity : {
    type : String,
    required : true
 },
 timeexpected : {
    type : Number ,
    default : 10
 },

    
},{timestamps:true})
const Userorder = mongoose.model("Userorder" , UserorderSchema)
export default Userorder 











// import mongoose from "mongoose"

// const Schema = mongoose.Schema

// const userorderSchema = new Schema({
//   nameofuser: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: Number,
//     required: true
//   },
//   quantity: {
//     type: Number,
//     required: true
//   }
// }, { timestamps: true })

// module.exports = mongoose.model('Userorder', userorderSchema)
