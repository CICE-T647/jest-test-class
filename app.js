const express = require("express")
const app = express()
const PORT = 3000

const axios = require("axios")

const users = require("./routes/users")({ axios })

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get("/", users.get)
app.post("/", users.post)
app.put("/", users.put)
app.delete("/", users.delete)


app.listen(PORT, ()=> console.log("server listening on port ", PORT))


module.exports = app