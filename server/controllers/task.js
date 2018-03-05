Task = require('../models/Tasks.js');
mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TaskAPI');
module.exports.list = function(req,res){
    Task.find(function(err,Tasks){
        if (err){
            console.log(err);
        }else{
        return res.json(Tasks)};
    });
};
module.exports.showOne = function(req,res,id){
    Task.find({'_id': req.params.id},function(err,one){
        if (err){
            console.log(err);
        }else{
        console.log(one);
       return res.json(one)};
    });
};
module.exports.create = function(body,res){
    console.log(body.body);
 let Taskinstance = new Task(body.body);
 Taskinstance.save(function(err){
 });
 res.redirect('/Tasks');
};
module.exports.delete = function(req,res,id){
    Task.remove({_id: id},function(err){
});
};
module.exports.change = function(req,res,id){
    Task.find({_id:id},function(err,tasku){
        tasku.completed = true;
        tasku.save(function(err){
        });
    });
};