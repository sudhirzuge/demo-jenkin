const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('My App Version 1.0')

})

app.listen(3000,'0.0.0.0', (req,res) => {
  console.log(`server started on port 3000`)
})