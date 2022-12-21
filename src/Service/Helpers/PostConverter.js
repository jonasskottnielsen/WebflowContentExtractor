import Helpers from "./Helpers.js";
import { WEBFLOW_MEDIA_URL, WORDPRESS_UPLOAD_URL, BASE_URL } from '../../Config/index.js';
import Images from "../Images/Images.js";

const PostConverter = {
	async webflowPostToWordpressPost(posts) {
		let wordpressPosts = [];
		const webflowPosts = posts;
		console.log('webflow posts converter', webflowPosts);
		for (let i = 0; i < webflowPosts.length; i++) {

			const element = webflowPosts[i];
			console.log(element);
			for (let p = 0; p < 15; p++) {
				let tempContent = element.content
				let tempModyfied = tempContent.replace('<figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:5184px" data-rt-type="image" data-rt-align="fullwidth" data-rt-max-width="5184px"><div><img src="https://uploads-ssl.webflow.com/', `<!-- wp:image --><figure class="wp-block-image size-large"><img src="${WORDPRESS_UPLOAD_URL}`);
				let tempModyfied2 = tempModyfied.replace(' loading="lazy" width="auto" height="auto"></div>',' alt=""/></figure><!-- /wp:image -->');
				let tempModyfied3 = tempModyfied2.replace(/(<figcaption).+?\<\/figcaption>/g, '');
				element.content = tempModyfied3;
			}
			let fimageurl = '';
			try {
				if ( typeof webflowPosts[i]['main-image'].url === 'undefined'){
					console.log('was undefined', i)
				} else {
					console.log(i, 'was not undefined')
					fimageurl = element['main-image'].url.replace(`${WEBFLOW_MEDIA_URL}/`, `${WORDPRESS_UPLOAD_URL}`)
				}
			} catch (error) {
				console.log(error);
			}
			wordpressPosts.push({
				author: 1,
				date: element['custom-date'],
				date_gmt: element['custom-date'],
				content: element.content,
				title: element.name,
				excerpt: element.summary || '',
				status: 'publish',
				comment_status: 'closed',
				ping_status: 'open',
				name: element.slug,
				guid: `${BASE_URL}`,
				type: 'artikel',
				comment_count: 0,
				featuredImage: fimageurl
			});
		}
		return wordpressPosts;
	}
}

export default PostConverter
