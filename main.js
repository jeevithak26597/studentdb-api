'use strict'
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const studentsList=[
    {
        id:1,
        name:'jeevi',
        age:21,
        dept:'IT'
    },
    {
        id:2,
        name:'hetty',
        age:22,
        dept:'EEE'
    },
    {
        id:3,
        name:'keerthu',
        age:20,
        dept:'MCT'
    }
]



app.get('/api/student',(req, res)=> {
   res.json(studentsList);
    });

    
app.post('/api/student',(req,res)=>{
    const newstudent={
        name:req.body.name,
        age:req.body.age,
        dept:req.body.dept,
        id:studentsList.length+1
    };
    studentsList.push(newstudent);
    res.status(201);
    res.json(newstudent.id);
})

app.delete('/api/student/:id', (req, res) => {
    console.log(req);
    const idToBeDeleted = parseInt(req.params.id);
    const studentToBeDeleted = studentsList.findIndex(student => student.id === idToBeDeleted);
    studentsList.splice(studentToBeDeleted, 1);
    res.json(idToBeDeleted);
});
app.listen(5000);