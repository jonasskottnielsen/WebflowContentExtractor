import Helpers from "./Helpers.js";
import { WORDPRESS_UPLOAD_URL } from '../../Config/index.js';

const PostConverter = {
	async webflowPostToWordpressPost(posts) {
		let wordpressPosts = [];
		const webflowPosts = posts.data.items;
		for (let i = 0; i < webflowPosts.length; i++) {
			const element = webflowPosts[i];
			let name = element.name;

			// extract imageUrls and add them as meta data to work with later
			let imagedata = [];
			const urls = await Helpers.extractUrlsFromString(element.content);
			console.log(urls);
			//

			wordpressPosts.push({
				author: 1,
				date: element['custom-date'],
				date_gmt: element['custom-date'],
				content: element.content,
				title: element.name,
				excerpt: element.summary,
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