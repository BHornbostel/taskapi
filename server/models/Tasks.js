mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TaskAPI')
var Schema = mongoose.schema;
var TaskSchema = new mongoose.Schema({
 title: {type:String},
 description: {type:String,default: ""},
 completed: {type:Boolean,default: false},
}, {timestamps:true});
module.exports= mongoose.model('Task',TaskSchema);