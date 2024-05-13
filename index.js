const express = require('express')
const { getInstanace, writeRedis, readRedis, writeHRedis, readHRedis, removeRedis } = require('./utils/redis')
const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => res.send('Hello Redis!'))
app.post('/write', writeRedis);
app.get('/read/:key', readRedis);
app.post('/write-h/:key', writeHRedis);
app.get('/read-h/:key', readHRedis);
app.post('/del/:key', removeRedis);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
    getInstanace();
})