const express = require('express')
const app = express()
app.use(express.json())
const PORT = process.env.PORT ?? 8080
app.get('/', (req, res) => {
  res.status(200).json('message')
})
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
