import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';

const app = express();


app.use(bodyParser.json());
// app.get('/hello',(req,res) => res.send("Hello..!"));
// app.get('/hello/:name',(req,res) => res.send(`Hello ${req.params.name} !!`));
// app.post('/hello',(req,res) => res.send(`Hello ${req.body.name}`));

app.get('/api/articles/', async (req,res) => {

    try{

        //const articlename = req.params.name;
        // const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser : true }, {useUnifiedTopology: true });
        // client.connect();
        // // const db = client.db('my-blog');
    
        // // const articleinfo = await db.collection('articles').find({});
    
        // // res.send(200).json({
        // //     name : "test"
        // // });
    
        // client.close;

        var MongoClient = require('mongodb').MongoClient;

        // Connect to the db
        MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
            
            db.collection('Persons', function (err, collection) {
                
                collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
                collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
                collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
                
                
        
                db.collection('articles').count(function (err, count) {
                    if (err) throw err;
                    
                    console.log('Total Rows: ' + count);
                });
            });
                        
        });

        res.send(200);

    }catch(error){
        res.send(500).json(error);
    }
   

});

app.post('/api/articles/upvote/:name',(req,res) => {

    const articlename = req.params.name;

    articleinfo[articlename].upvotes += 1;

    res.status(200).send(`${articlename} now has ${articleinfo[articlename].upvotes} !!`);
}
);

app.post('/api/articles/:name/add-comment',(req,res) => {

    const articlename = req.params.name;
    const { username, text } = req.body;

    articleinfo[articlename].comments.push({ username, text });
    res.status(200).send(articleinfo[articlename]);


});

app.listen(8000, () => console.log('app listnen on 8000'));
