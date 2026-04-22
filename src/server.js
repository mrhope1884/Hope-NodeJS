const express = require('express')
const app = express();
const port = 8080;

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('check ABC')
})

app.get('/HopeIT', (req, res) => {
    // res.send('<h1>Hope IT<h1>')
    res.render('sample.ejs')
})

app.listen(port, () =>{
    console.log('server đang chạy')
})