import mysql from 'mysql';
import util from 'util';

import Logger from '../Helpers/LoggerTypes.js';
import { DB_HOST, DB_USERNAME, DB_NAME, DB_PASSWORD } from '../../Config/index.js';
import LoggerTypes from '../Helpers/LoggerTypes.js';

const pool = mysql.createPool({
	connectionLimit: 10,
	host: DB_HOST,
	user: DB_USERNAME,
	password: DB_PASSWORD,
	database: DB_NAME
});

const runQuery = util.promisify(pool.query).bind(pool);

const Database = {
	/**
	 * 
	 * @param {Object} post
	 * @param {String} author 
	 * @param {date}   date
	 * @param {date}   date_gmt
	 * @param {String} content The content of the post
	 * @param {String} title The title of the post
	 * @param {String} excerpt The summary of the post 
	 * @param {String} status 
	 * @param {String} comment_status
	 * @param {String} ping_status
	 * @param {String} name
	 * @param {String} guid 
	 * @param {String} type
	 * @param {String} comment_count
	 * @returns 
	 */
	async insertPost(post){
		let result = null;
		try {
			result = await runQuery(`INSERT INTO wp1_posts(
														post_author, 
														post_date, 
														post_date_gmt, 
														post_content, 
														post_title, 
														post_excerpt, 
														post_status, 
														comment_status, 
														ping_status, 
														post_name, 
														guid, 
														post_type, 
														comment_count
													) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`, 
													[
														post.author,
														post.date,
														post.date_gmt,
														post.content,
														post.title, 
														post.excerpt,
														post.status,
														post.comment_status,
														post.ping_status,
														post.name,
														post.guid,
														post.type,
														post.comment_count
													]
									);
		} catch (error) {
			Logger.logSqlError({ queryName: 'insertPost', error: error });
		}
		console.log(result);
		return result;
	},
	
	async insertThumbnail(){
		let result = null;
		try {
			result = await runQuery(`INSERT INTO wp1_posts(
														post_author, 
														post_date, 
														post_date_gmt, 
														post_content, 
														post_title, 
														post_excerpt, 
														post_status, 
														comment_status, 
														ping_status, 
														post_name, 
														post_parent,
														guid, 
														post_type, 
														comment_count
													) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`, 
													[
														post.author,
														post.date,
														post.date_gmt,
														post.content,
														post.title, // navnet p?? billedet
														post.excerpt, // blank
														post.status, // inherit
														post.comment_status, // open
														post.ping_status, // closed
														post.name, // navnet p?? billedet
														post.parent, // tilh??rende post id
														post.guid, // path the billedet
														post.type, // attachment
														post.mime_type, // image/png
														post.comment_count //0
													]
									);
		} catch (error) {
			Logger.logSqlError({ queryName: 'insertThumbnail', error: error });
		}
		console.log(result);
		return result;
	},

	async insertImage(){
		let result = null;
		try {
			result = await runQuery('INSERT INTO wp1_postmeta(post_id, meta_key, meta_value) VALUES(?,?,?)', [data.postid, data.metakey, data.metavalue]);
		} catch (error) {
			Logger.logSqlError({queryName: 'insertImage', error: error})
		}
		return result;
	},

}

export default Database
