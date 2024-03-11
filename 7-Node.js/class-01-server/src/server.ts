import express from "express";

const app = express()
const port = 3000

app.listen(3000, () =>{
    console.log(`Server is running on PORT: http://localhost:${port}/`)
})

app.route("/").get((request, response) => {
    response.send({className: "Class 01 Server"} )
})
 
