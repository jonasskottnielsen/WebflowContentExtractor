import Helpers from "../Service/Helpers/Helpers.js";
import PostConverter from "../Service/Helpers/PostConverter.js";
import PostInserter from "../Service/Helpers/PostInserter.js";
import Images from "../Service/Images/Images.js";
import Webflow from "../Service/Webflow/Webflow.js"

const DataFlow = {
	async flowHandler() {


		const webflowPosts = await Webflow.getPostsFromWebflow();
		
		//await Images.fetchFeaturedImages(webflowPosts);
		//await Images.fetchImages(webflowPosts);
		// create WP posts and download images
		const posts = await PostConverter.webflowPostToWordpressPost(webflowPosts);
		const inserted = await PostInserter.postInserter(posts);
	}
}

export default DataFlow
