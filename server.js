var express = require('express');
var bodyParser = require('body-parser');

const app = express();
const mongoose = require('mongoose');
const Student = require('./models/student');


mongoose.connect(
    'mongodb+srv://vmvaibhav:vmvaibhav@todo-kycnl.mongodb.net/demoapp?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    (err) => {
        console.log(err);
    }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req,res)=>{
    res.send("Get");
    Student.find((err, data)=>{
        if (err) res.send(err);
        else res.json(data);
    })
});

app.post('/', (req,res)=>{
    req.send("Post");
})



app.listen(8080, ()=>{
    console.log("Server listening to port 8080");
})