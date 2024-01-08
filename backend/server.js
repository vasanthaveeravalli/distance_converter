const express = require("express")
const app = express();
const cors= require("cors")
const mongoose = require('mongoose');
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello from server")
}
)
const DB = async ()=>{
    await mongoose.connect('mongodb+srv://Vasantha:vasantha@cluster0.f506xyl.mongodb.net/?retryWrites=true&w=majority').then(()=>{console.log("connected to database...")}
    ).catch(
        (err)=>{console.log("An error occured while connecting to database..",err)}
    )
}
DB();


app.listen(8050,()=>{console.log("Server is running...")})
