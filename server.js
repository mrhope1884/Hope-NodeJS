const express = require('express')
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('check ABC')
})

app.get('/HopeIT', (req, res) => {
    res.send('<h1>Hope IT<h1>')
})

app.listen(port, () =>{
    console.log('server đang chạy')
})