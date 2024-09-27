const {getTodo,postToDo,putToDo,deleteToDo} = require("../controller/toDoController")

const route = require("express").Router()

route.get("/",getTodo)
route.post("/",postToDo)
route.put("/:id",putToDo)
route.delete("/:id",deleteToDo)

module.exports = route