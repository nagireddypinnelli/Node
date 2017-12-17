const express=require('express');
var bodyParser=require('body-parser');

var {mongoose}= require('./db/mongoose');

var {User}=require('./models/user');
var {Todo}=require('./models/todo');


var app=express();
app.use(bodyParser.json())


app.get('/',function(req,res){
  res.send(`This is from server ${Date.now()}` );
})

app.post('/todo',function(req,res){
console.log(req.body);
  var todo= new Todo({
    text:req.body.text,
  });
  todo.save().then(function(docs){res.status(200).send(docs)},
  function(err){res.status(400).send(err)});
  //res.send('hello user this is post request');

});




var port= process.env.PORT || 3000;
app.listen(port,console.log(`server running @ ${port}`));



// var user= new User({
//   name:'nagireddy',
//   email:'nagireddypi@gmail.com'
// });
//
// user.save()
// .then(
//   function(res)
//   {
//     console.log(JSON.stringify(res,undefined,2));
//   },
//   function(err)
//   {
//     console.log('something went wrong');
//   }
// );
