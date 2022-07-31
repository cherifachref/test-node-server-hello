const express = require('express')
const app = express()

require('dotenv').config()

app.get('/',(req,res)=>{
    res.send('Hello Achref')
})

const PORT = process.env.PORT || 5000

app.listen(PORT,(err=>err
    ?console.error(err)
    :console.log(`server running on port ${PORT}`)
    ))

