// Import the Express framework
const express = require('express')

// Create an Express application
const app = express()

// Set the port number for the server
const port = 4000
const path=require('path')
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Define a route for the root URL (http://localhost:4000/)
app.get('/', (req, res) => {
    res.send('Welcome to Data Rep') // Send a response with a welcome message
})

// Define a route for the '/whatever' URL (http://localhost:4000/whatever)
app.get('/whatever', (req, res) => {
    res.send('Goodbye') // Send a response with a goodbye message
})

// Define a dynamic route with a parameter named 'name'
app.get('/Hello/:name', (req, res) => {
    console.log(req.params.name); // Log the 'name' parameter to the console
    res.send("Hello " + req.params.name) // Send a response with a personalized greeting
})

// Define a route for '/api/books' URL (http://localhost:4000/api/books)
app.get('/api/books', (req, res) => {
    const data = {
        "books": [
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
    // Send a JSON response with book data and a message
    res.status(200).json({
        myBooks: data,
        "message": "Hello from the server"
    })
})

app.get('/webPage', (req, res) => {
    res.sendFile(__dirname+'/index.html');
})

app.get('/name', (req, res) => {
    res.send("Hello "+req.query.fname+ " "+req.query.sName)
})

app.post('/name', (req, res)=>{
    res.send("Hello "+req.query.fname+" "+req.query.sName)
})

// Define a route for the '/Ted' URL (http://localhost:4000/Ted)
app.get('/Ted', (req, res) => {
    res.send("Hello Ted") // Send a response with a greeting to Ted
})


// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) // Log a message when the server starts
})