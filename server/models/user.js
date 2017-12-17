var mongoose= require('mongoose');

var User= mongoose.model('user',{
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
});

module.exports={User};
