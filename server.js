const express = require('express')
const cors = require("cors")

// start app
const app = express()

app.use(express.json())
app.use(cors())

const routerUser = require('./routes/user')

app.use('/user', routerUser)

app.listen(4000,'0.0.0.0',()=>{
     console.log('Server is listening on port 4000')
 })

