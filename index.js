const express = require('express')
const app = express()
const port = 5000;
const question = require('./question')


app.get('/', (req, res) => {
    res.json(question);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port} : http://localhost:${port}`)

})
