const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

app.use(cors())
app.use(express.json())


app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)", [description]);

        res.json(newTodo)
    } catch (err) {
        console.log(err)
    }
})


app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows)
    } catch (err) {
        console.log(err)
    }
})

app.get('/todo/:id', async (req, res) => {
    try {
        const { id } = req.params
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])

        res.json(todo.rows)
    } catch (err) {
        console.log(err)

    }


    app.put('/todo/:id', async (req, res) => {
        try {
            const { id } = req.params
            const { description } = req.body
            const updatedTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])

            res.json("updated")
        } catch (err) {
            console.log(err)
        }
    })
})


app.listen(5000, () => console.log('server started on port 5000'))
