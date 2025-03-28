const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Hello, Welcome to the Backend !!!")
})



app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
