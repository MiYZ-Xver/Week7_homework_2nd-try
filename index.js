


//LOWDB TUTORIALS
//upper text: DB -0-install and load lowdb
//below how to innitialize lowdb
// let express = require('express');
//require vs import
// ==
import express from 'express'
import {Low} from'lowdb'
import {JSONFile} from 'lowdb/node'

let app = express();



//DB -1-connect to the DB(database)
const defaultData = {expenseTrackerData:[]};
const adapter = new JSONFile('db.json');
const db = new Low(adapter, defaultData);




//to parse JSON
app.use(express.json());

let coffeeTracker = [];

// app.get('/',(req,res)=>{
//     res.send('this is the main page');
// })

//2. add a route on server, that is Listening for a post request.
app.post('/numExpense',(req,res)=>{
    console.log(req.body);
    let currentDate = Date();
    let obj = {
        date:currentDate,
        expense:req.body.number
    }

    // coffeeTracker.push(obj);
    // console.log(coffeeTracker);
    //SAVE these to Low DB
    //DB -2-add value to the DB
    db.data.expenseTrackerData.push(obj)
    db.write()
        .then(()=>{
          res.json({task:"success"})
    })
})



//add route to get all coffee track information
app.get('/costExpense',(req,res)=>{
    // let obj = {data:coffeeTracker};
    //no longer using the obj above because we are reading from our server nowww
    //DB -3-fetch from the DB
    db.read()
    .then(()=>{
        let obj = {data:db.data.expenseTrackerData}
        res.json(obj);
    })
    
})



app.use('/',express.static('public'));
app.listen(5501,()=>{
    console.log('listening at localhost:5501');
})

let port = process.env.PORT || 3000;
app.listen(port, () => {
console.log('listening at ', port);
});

process.env.API-KEY
process.env.MONGODB-URL

