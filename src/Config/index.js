
import dotenv from 'dotenv';

dotenv.config();

const config = {
	PRODUCTION: JSON.parse(process.env.PRODUCTION),
	ROOT_PATH: process.cwd(),

	DB_HOST: process.env.DB_HOST,
	DB_USERNAME: process.env.DB_USERNAME,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_PORT: parseInt(process.env.DB_PORT),
	DB_NAME: process.env.DB_NAME,
}

export const {
	PRODUCTION,
	ROOT_PATH,

	DB_HOST,
	DB_USERNAME,
	DB_PASSWORD,
	DB_PORT,
	DB_NAME,
	
} = config;
