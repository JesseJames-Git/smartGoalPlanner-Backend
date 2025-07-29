const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults()

const PORT = process.env.PORT || 3000

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use('/api', router)

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
})
