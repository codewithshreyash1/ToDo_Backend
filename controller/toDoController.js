const ToDo = require("../model/toDo")

exports.getTodo = async (req, res) => {
    try {
        const data = await ToDo.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.postToDo = async (req, res) => {
    try {
        const data = await ToDo.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.putToDo = async (req, res) => {
    try {
        const data = await ToDo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.deleteToDo = async (req, res) => {
    try {
        const data = await ToDo.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}