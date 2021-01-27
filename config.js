const os = require("os")

module.exports = {
	"hostname": os.hostname(),
	"server": {
		"port": process.env.PORT || 8080
	},
	"logging": {
		"loglevel": process.env.LOG_LEVEL || "info",
		"options": {
			"appenders": {
				"out": {
					"type": 'stdout',
					"layout": { type: 'basic' }
				}
			},
			"categories": {
				"default": {
					"appenders": ['out'],
					"level": 'error'
				}
			}
		}
	}
}