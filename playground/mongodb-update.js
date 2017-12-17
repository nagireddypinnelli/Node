//const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/users',function(error,db){
  if(error){
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('connecto to Mongodb server');

//updateding
    db.collection('users').findOneAndDelete({
      'name' : 'testUser',
      }).then(function(result){
        console.log(JSON.stringify(result));
        },function(err){
          console.log('something wen wrong pls check ',err);
        });




      db.close();
})
