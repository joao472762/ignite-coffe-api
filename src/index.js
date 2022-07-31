const cors = require('cors')
const  express = require('express')


const coffeList = require('../src/data')

const app = express()
app.use(cors())
app.use(express.json())

app.route('/api').get((req, res) => {
    res.send(JSON.stringify(coffeList))
})

app.listen(3000,()=>{
    console.log('hi i running in http://localhost:3000/api')
})