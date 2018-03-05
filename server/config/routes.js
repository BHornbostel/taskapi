mongoose = require("mongoose"),
bodyParse = require('body-parser'),
path = require('path'),
task = require('../controllers/task.js');
module.exports = function(app){
app.get("/",(req,res)=>{
    res.render('index');
});
app.get("/Tasks", task.list);
app.get("/Tasks/new",(req, res) =>{
    res.render('new');
});
app.get("/Tasks/:id",(req,res)=>{
var id = req.param.id;
console.log('id'+id);
task.showOne(req,res,id);
});
app.post("/Tasks", (req,res)=>{
    task.create(req,res);
}),
app.put("/Tasks/:id", (req, res) => {
    console.log("made to update") ;
    var id = req.param.id;
    task.change(req,res,id);
    res.redirect('/Tasks');
});
app.delete("/Tasks/:id", (req, res) => { 
    console.log("made to delete") ;
    var id = req.param.id;
    task.delete(req,res,id);
    res.redirect('/Tasks');
});
}