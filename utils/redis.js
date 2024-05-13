const { createClient } = require('redis');

const client = createClient();

async function getInstanace() {
    client.on('error', err => console.log('Redis Client Error', err));
    client.connect().then(() => console.log("Redis Connected"));
}


async function writeRedis(req, res) {
    const query = req.query;
    Object.keys(query).map(async (q) => {
        await client.set(q, query[q])
    });
    res.send("++ Key value stored in Redis")
}

async function readRedis(req, res) {
    const param = req.params;
    let data = await client.get(param["key"])
    res.json(data);
}

async function writeHRedis(req,res){
    const data = req.body;
    const param = req.params;

    await client.hSet(param["key"], data);
 
    res.send("++ Key value stored in Redis")
}

async function readHRedis(req,res){
    const param = req.params;
    const data = await client.hGetAll(param["key"]) 
    res.json(data)
}

async function removeRedis(req,res){
    const param = req.params;
    const data = await client.del(param["key"]) 
    res.json(data)
}



module.exports = {
    getInstanace,
    writeRedis,
    readRedis,
    writeHRedis,
    readHRedis,
    removeRedis
}