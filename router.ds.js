const express = require("express")
const router = express.Router()

let logger = global.logger

router.post("/prehook1", (_req, _res) => {
	logger.info(_req.body)
	_res.end()
})

router.post("/posthook1", (_req, _res) => {
	logger.info(_req.body)
	_res.end()
})

module.exports = router