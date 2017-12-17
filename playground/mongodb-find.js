//const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/users',function(error,db){
  if(error){
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('connecto to Mongodb server');

  db.collection('users').find({age:32 }).toArray().then(function(docs){
    console.log(JSON.stringify(docs,undefined,2));
  },function(err){
    console.log('something went wrong',err);
  })

  db.collection('users').find().count().then(function(count){
    console.log(` total no of records availble ${count}`);
  },function(err){
    console.log('something went wrong',err);
  })



      db.close();
})
