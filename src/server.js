const express = require('express')
require('dotenv').config();

console.log(">>> check env: ", process.env);

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('check ABC')
})

app.get('/HopeIT', (req, res) => {
    // res.send('<h1>Hope IT<h1>')
    res.render('sample.ejs')
})

app.listen(port, hostname, () =>{
    console.log('server đang chạy')
})