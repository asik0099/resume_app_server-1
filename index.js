// import json-server
const jsonServer=require('json-server')

// create server for resumeBuilder
const resumeServer = jsonServer.create()

// connect with db
const router = jsonServer.router('db.json')

// use middleware json
const middleware = jsonServer.defaults()

// assign the port
const PORT = process.env.PORT || 3000

//midddleWare conver the data to JSON...
resumeServer.use(middleware)

// define client request to db.json
resumeServer.use(router)

// start server

resumeServer.listen(PORT, () => {
  console.log(`Resume-Builder Server started running at PORT: ${PORT} and waiting for client requests...`)
})
