const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/TestHost', { useNewUrlParser: true }, (err, client) => {
    if (err) throw err
    console.log('CONNECT')
})


