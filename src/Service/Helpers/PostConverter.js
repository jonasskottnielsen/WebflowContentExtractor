import Helpers from "./Helpers.js";
import { WEBFLOW_MEDIA_URL, WORDPRESS_UPLOAD_URL } from '../../Config/index.js';
import Images from "../Images/Images.js";

const PostConverter = {
	async webflowPostToWordpressPost(posts) {
		let wordpressPosts = [];
		const webflowPosts = posts.data.items;
		
		for (let i = 0; i < 1/* webflowPosts.length */; i++) {
			const element = webflowPosts[i];
			let name = element.name;
			let imagedata = [];
			const urls = await Helpers.extractUrlsFromString(element.content);
			
			// download images from the main content of the webflow article.
			if (urls) {
				for (let p = 0; p < urls.length; p++) {
					const urlString = urls[p];
					
					if (urlString.includes('https://uploads-ssl.webflow.com')) {
						const filename = urlString.split("/");
						const path = await Images.downloadImage(urlString, filename[4]);
						imagedata.push({ imageUrl: urlString, path: filename[4] });
					}
				}
			} else {
				console.log('content contains no urls');
			}
			// replace all instances of url to webflow and change them to the new WP media url.
			let content = element.content

			wordpressPosts.push({
				author: 1,
				date: element['custom-date'],
				date_gmt: element['custom-date'],
				content: content.replace(WEBFLOW_MEDIA_URL, WORDPRESS_UPLOAD_URL),
				title: element.name,
				excerpt: element.summary || '',
				status: 'publish',
				comment_status: 'closed',
				ping_status: 'open',
				name: name.toLowerCase(),
				guid: 'https://otown.dk/',
				type: 'post',
				comment_count: 0,
				imagedata: imagedata
			});
		}
		return wordpressPosts;
	}
}

export default PostConverter