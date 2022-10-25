const firebase = require('express');
const app = firebase();
const port = process.env.PORT || 5002;

const cors = require('cors');
app.use(cors());

const courses = require('./data/courses.json');
const courseDetails = require('./data/courseDetails.json');

app.get('/', (req, res) =>{
    res.send('testing the server')
});

app.get('/courses/', (req, res) => {
    res.send(courses)
});

app.get('/course-details/:id', (req, res) =>{
    const id = req.params.id;
    const selectedCourse = courseDetails.find(detail => detail.id === id);
    res.send(selectedCourse);
})









app.listen(port, () =>{
    console.log('running the server')
})