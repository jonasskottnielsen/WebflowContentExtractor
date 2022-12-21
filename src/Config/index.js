
import dotenv from 'dotenv';

dotenv.config();

const config = {
	PRODUCTION: JSON.parse(process.env.PRODUCTION),
	ROOT_PATH: process.cwd(),
	
	BASE_URL: process.env.BASE_URL,
	WORDPRESS_UPLOAD_URL: process.env.WORDPRESS_UPLOAD_URL,
	WEBFLOW_MEDIA_URL: process.env.WEBFLOW_MEDIA_URL,

	DB_HOST: process.env.DB_HOST,
	DB_USERNAME: process.env.DB_USERNAME,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_PORT: parseInt(process.env.DB_PORT),
	DB_NAME: process.env.DB_NAME,
	DB_PREFIX: process.env.DB_PREFIX,
}

export const {
	PRODUCTION,
	ROOT_PATH,

	BASE_URL,
	WORDPRESS_UPLOAD_URL,
	WEBFLOW_MEDIA_URL,
	DB_HOST,
	DB_USERNAME,
	DB_PASSWORD,
	DB_PORT,
	DB_NAME,
	DB_PREFIX,
} = config;
