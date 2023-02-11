const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const mongoose=require("mongoose");


const app=express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/todolistDB", {
  usenewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('connected', () => {
  console.log('mongodb is connected');
});

app.get("/Contact")


app.listen("3000", function(req,res){
    console.log("Your Server has started on port 3000");
});



