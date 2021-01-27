const express = require('express')
const config = require("./config")
const log4js = require("log4js")

log4js.configure(config.logging.options)
let version = require("./package.json").version
let logger = log4js.getLogger(`[HOOKS ${version}]`)
logger.level = config.logging.loglevel
global.logger = logger

logger.debug(`PORT :: ${process.env.PORT || 8080}`)

let app = express()

app.use(express.json())
app.use((_req, _res, _next) => {
	logger.info(`${_req.method} ${_req.path}`)
	if (["POST", "PUT"].indexOf(_req.method) != -1) logger.info(`${JSON.stringify(_req.data)}`)
	_next()
})

let dsRouter = require("./router.ds")

app.use("/ds/hook/", dsRouter)

app.listen(config.server.port, () => {
	logger.info(`Server started on port ${config.server.port}`)
})