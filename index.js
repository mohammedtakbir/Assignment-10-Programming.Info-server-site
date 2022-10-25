const firebase = require('express');
const app = firebase();
const port = process.env.PORT || 5002;

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) =>{
    res.send('testing the server')
});




app.listen(port, () =>{
    console.log('running the server')
})