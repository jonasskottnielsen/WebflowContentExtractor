import fs from 'fs';
import fetch from 'node-fetch';
import ftp from 'basic-ftp';

const Images = {
	async downloadImage(url, filename) {
		const response = await fetch(url);
		const buffer = await response.buffer();
		fs.writeFile(`./src/assets/images/${filename}.jpg`, buffer, () => 
		  console.log('finished downloading!'));
		  return 'done';
	  },

	  async uploadImage(filename){
		
	  }
}

export default Images