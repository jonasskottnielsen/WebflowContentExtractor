import PostConverter from "../Service/Helpers/PostConverter.js";
import Webflow from "../Service/Webflow/Webflow.js"

const DataFlow = {
	async flowHandler() {
		const webflowPosts = await Webflow.getPostsFromWebflow();
		//console.log(webflowPosts.data.items);

		const posts = await PostConverter.webflowPostToWordpressPost(webflowPosts);
		//console.log(posts);
	}
}

export default DataFlow