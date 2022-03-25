import Logger from './Logger.js';
const LoggerTypes = {
	async logSqlError(data) {
		Logger.error(`Query ${data.queryName} with the errno ${data.error.errno} - and code ${data.error.code} - and message ${data.error.sqlMessage}`)
	},

	async logTracepartsAPIError(data) {
		Logger.error(`Api call ${data.apiCall} - response: ${data.error.response.data.codeError} -  ${data.error.response.data.messageError}`);
	},

	/**
	 * 
	 * @param {Object} data Object containing "place" of origin and an "info" message 
	 */
	async logUsage(data) {
		Logger.info(`Place: ${data.place} - Info: ${data.info}`);
	},

	async logCronRuns(message) { 
		Logger.info(`${message}`);
	},

	async logApiError(data){
		Logger.error(`Place: ${data.place} - ${data.message}`);
	},

	/**
	 * 
	 * @param {Obejct} data
	 * @param {String} place
	 * @param {String} error 
	 */
	async logError(data){
		Logger.error(`Place: ${data.place} - ${data.error}`);
	}

}

export default LoggerTypes
