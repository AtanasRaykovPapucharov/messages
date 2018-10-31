'use strict'

/*
 * Environment mode parameters
 *
 */

const constants = require('../private.json')

module.exports = {
	development: {
		db: constants.mongodbConnection || 'mongodb://localhost:27017/db-messages',
		port: 3333
	},
	production: {
		db: constants.mongodbConnection,
		port: process.env.PORT
	}
}
