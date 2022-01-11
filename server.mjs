import express from 'express'
import morgan from 'morgan'
import bp from 'body-parser'

const app = express()

const db =[];

app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())
app.use(morgan('dev'))

//making routes
app.get("/todo",(req,res)=>{
    res.json(db);
})
app.post("/todo",(req,res)=>{
    const newTodo={
        id:Date.now(),
        todo:req.body.text
    }
    db.push(newTodo);
    res.json(newTodo)
})

//listening on 8000
app.listen(8000,()=>{
    console.log("server running on http://localhost:8000/");
})