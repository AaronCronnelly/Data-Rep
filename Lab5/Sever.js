const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Welcomme to Data Rep')
})

app.get('/whatever',(req, res)=> { //('/whatever',(req, res) what ever is in the '' is being used for following behind the localhost/
    res.send('GoodBye')
})


app.get('/Hello/:name', (req, res)=>{
    console.log(req.params.name);
    res.send("Hello "+req.params.name)
})

app.get('/api/books', (req, res)=>{
    const data={
        "books":[
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ]
        }
    res.status(200).json({
        myBooks:data,
        "message":"Hello from the server"
    });
})


app.get('/Ted', (req, res)=>{
    res.send("Hello Ted")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})