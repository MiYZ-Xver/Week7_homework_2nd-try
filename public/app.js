// console.log("hello from app.js");

window.addEventListener('load',()=>{
    document.getElementById('button-expense').addEventListener('click',()=>{
        let numExpense = document.getElementById('number-expense').value;
        console.log(numExpense);

        //creating obj
        let obj = {"number":numExpense};
        //stringify the object
        let jsonData = JSON.stringify(obj);

        //fetch to route numExpense
        fetch('/numExpense',{
            method:'POST',
            headers:{
                "Content-type":"application/json"
            },
            body:jsonData
        })
        .then(response => response.json())
        .then(data => {console.log(data)})

        //1. make a fetch request of type "POST" so that we can send the (numExpense) info to the server


    })

    document.getElementById('get-tracker').addEventListener('click',()=>{

        //get info on all the coffees we've had
        fetch('/costExpense')
        .then(resp=>resp.json())
        .then(data =>{
            console.log(data.data);
            document.getElementById('expense-info').innerHTML = '';
            for(let i=0;i<data.data.length;i++){
                let string = data.data[i].date+":" +data.data[i].expense +"$";
                let elt = document.createElement('p');
                elt.innerHTML= string;
                document.getElementById('expense-info').appendChild(elt);
            }
        })
    })


})
