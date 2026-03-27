// server ko create krna 
const express = require("express")


const app = express()


const notes = [

]
// post mehtod 

app.post('/notes', (req,res)=>{
      console.log(req.body)
})




module.exports = app






/*


const notes = [
NOTE = {
      title : " my first note",
      description : " this is my first note"

}
NOTE = {
      title : " my first note",
      description : " this is my first note"

}
      NOTE = {
      title : " my first note",
      description : " this is my first note"

}
      NOTE = {
      title : " my first note",
      description : " this is my first note"

}
      
]



*/