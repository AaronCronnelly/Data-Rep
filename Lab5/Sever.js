const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/whatever',(req, res)=> { //('/whatever',(req, res) what ever is in the '' is being used for following behind the localhost/
    res.send('GoodBye')
})

app.get('/DataRep', (req, res)=>{
    res.send("Welcome to Data-Rep")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})