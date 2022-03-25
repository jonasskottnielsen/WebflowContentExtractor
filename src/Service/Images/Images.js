import fs from 'fs';
import fetch from 'node-fetch';
import Webflow from "../Webflow/Webflow.js";

const Images = {
	async storeImagesFromWebflow(){
		const res = await Webflow.getPostsFromWebflow();
		//console.log(res.data.items);
		const items = res.data.items;
		let imageUrlsArray = [];
		console.log(items.length);
		for (let i = 0; i < items.length; i++) {	
			const element = items[i];
			//console.log(element.slug);	
		}
	},

	async fetchImages(imageUrls){
	},

	async download(url, filename) {
		const response = await fetch(url);
		const buffer = await response.buffer();
		fs.writeFile(`./src/assets/images/${filename}.jpg`, buffer, () => 
		  console.log('finished downloading!'));
		  return 'done';
	  }
}

export default Images