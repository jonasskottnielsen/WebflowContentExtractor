import fs from 'fs';
import fetch from 'node-fetch';
import ftp from 'basic-ftp';
import Helpers from '../Helpers/Helpers.js';
import LoggerTypes from '../Helpers/LoggerTypes.js';

const Images = {
    async fetchImages(posts) {
        const webflowPosts = posts;
        for (let i = 0; i < webflowPosts.length; i++) {
			console.log('post num',i);
            const urls = await Helpers.extractUrlsFromString(webflowPosts[i].content);
            // download images from the main content of the webflow article.
            if (urls) {
                for (let p = 0; p < urls.length; p++) {
                    const urlString = urls[p];

                    if (urlString.includes('https://uploads-ssl.webflow.com')) {
                        const filename = urlString.split("/");
                        const path = await Images.downloadImage(urlString, filename[4]);
                    }
                }
            } else {
                console.log('content contains no urls');
            }
        }
    },

	async fetchFeaturedImages(posts) {
        const webflowPosts = posts;
        for (let i = 0; i < webflowPosts.length; i++) {
			try {
				if ( typeof webflowPosts[i]['main-image'].url === 'undefined'){
					console.log('was undefined', i)
				} else {
					console.log(i, 'was not undefined')
					const path = await Images.downloadImage(webflowPosts[i]['main-image'].url, `${webflowPosts[i].slug}.jpg`);
				}
			} catch (error) {
				console.log(error);
				LoggerTypes.logError({place: 'you know where', error: error});
			}
         
        }
    },


    async downloadImage(url, filename) {
        const response = await fetch(url);
        const buffer = await response.buffer();
		filename = filename.replace(/(%C3%)/g,'a');
		filename = filename.replace(/(%CC%)/g,'');
        fs.writeFile(`./src/assets/images/${filename.replace(/(%20)/g, '')}`, buffer, () =>
            console.log('finished downloading!'));
        return 'done';
    },

}

export default Images