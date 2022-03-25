import mysql from 'mysql';
import util from 'util';

import { DB_HOST, DB_USERNAME, DB_NAME, DB_PASSWORD } from '../../Config/index.js';

const pool = mysql.createPool({
	connectionLimit: 10,
	host: DB_HOST,
	user: DB_USERNAME,
	password: DB_PASSWORD,
	database: DB_NAME
});

const runQuery = util.promisify(pool.query).bind(pool);

const Database = {
	async insertTechnologies(data) {
		let result = null;
		try {
			result = await runQuery(`INSERT INTO technologies(title, path) VALUES(?,?) ON DUPLICATE KEY UPDATE title=VALUES(title)`, [data.title, data.path]);
		} catch (error) {
			Logger.logSqlError({ queryName: 'insertTechnologies', error: error });
		}
		return result;
	},
}

export default Database