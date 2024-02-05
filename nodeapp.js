const express = require('express')
const app = express()
const people = [
    {
      FirstName: "James",
      Address: "123 Main St",
      PhoneNumber: "998-755-655"
    },
    {
      FirstName: "Anand",
      Address: "25 Koramangala",
      PhoneNumber: "555-987-6543"
    },
    {
      FirstName: "Hari",
      Address: "36 Indira Nagar",
      PhoneNumber: "990-123-456"
    }
  ]
app.get('/',(req,res)=>{
    try{
        const query = req.query 
        if(query){
            people.filter(query)
        }
        res.status(200)

    }catch(err){
        console.log(err.message)
    }
    

})

app.all('*',(req,res)=>{
    res.send(404).send("page not found")
})


app.listen('8000',()=>{
    console.log("sever connected!!")
})
