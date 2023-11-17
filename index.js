const express = require('express')
const app = express()
const port = 5000;
const questions = require('./questions')


app.get('/', (req, res) => {
    res.json(questions);
})


app.listen(port, () => {
    console.log(`Question-Generator listening on port ${port} : http://localhost:${port}`)

})
