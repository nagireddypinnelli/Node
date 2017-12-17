//const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/users',function(error,db){
  if(error){
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('connecto to Mongodb server');

    //deleteMany
  // db.collection('users').deleteMany({
  //   'name' : 'Reddy',
  //   }).then(function(result){
  //     console.log(result.result);
  //     },function(err){
  //       console.log('something wen wrong pls check ',err);
  //     })
  //

    //deleteOne
    // db.collection('users').deleteOne({
    //   'name' : 'Reddy',
    //   }).then(function(result){
    //     console.log(result.result);
    //     },function(err){
    //       console.log('something wen wrong pls check ',err);
    //     })

    //FindOneAndDelete
    db.collection('users').findOneAndDelete({
      'name' : 'userName',
      }).then(function(result){
        console.log(result);
        },function(err){
          console.log('something wen wrong pls check ',err);
        })


      db.close();
})
