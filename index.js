require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('Hi Shaik')
})

app.get("/login", (req, res) => {
    res.send('<h1> Master the Backend project </h1>')
})

app.get("/signup", (req, res)=>{
    res.send("sign up here")
})

app.get("/youtube", (req, res)=>{
    res.send("chai aur code")
} )

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

