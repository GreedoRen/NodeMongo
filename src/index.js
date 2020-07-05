const MongoClient = require('mongodb').MongoClient


MongoClient.connect('mongodb://localhost:27017/TestHost', { useNewUrlParser: true }, (err, client) => {
    if (err) throw err
    console.log('Connect to MongoDB server!')

    const db = client.db('TestHost')

    db.collection('TestCollection').insertOne({
        name: 'Gee',
        age: 25,
        location: 'Texas'
    }, (err, res) => {
        if (err) throw err

        console.log(JSON.stringify(res.ops, undefined, 2))
    })

    client.close()

    console.log(db)
})






