//const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/users',function(error,db){
  if(error){
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('connecto to Mongodb server');



  // db.collection('userList').insertOne({
  //   text:'something to do',
  //   completed:false
  // },function(err,result){
  //   if(err){
  //     return console.log('something went wrong pls check ' , err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });


  //insert new doc into users (name, age, location)
      db.collection('users').insertOne({
          //_id: Math.floor(10*Math.random()),
          name:'userName',
          age:32,
          location:'bangalore'
      },function(err,res){
        if(err){
          return console.log(`something went wrong ${err}`);
        }
        console.log(JSON.stringify(res.ops[0]._id,undefined,2));
      });


  //closing db connection
    db.close();
})
