const express = require("express")
const mongoose = require("mongoose")
const RouteToDo = require("./route/toDoRoute")
require("dotenv/config")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
res.send("home")
})

app.use("/api/toDo",RouteToDo)

app.listen(process.env.PORT)

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = res.default
        console.log(res.STATES.connected);
        
    } catch (error) {
        console.log(error.message);
    }
}

db()