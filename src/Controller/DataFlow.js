import Database from "../Service/Database/Database.js";
import PostConverter from "../Service/Helpers/PostConverter.js";
import Webflow from "../Service/Webflow/Webflow.js"

const DataFlow = {
	async flowHandler() {
		const webflowPosts = await Webflow.getPostsFromWebflow();
		//console.log(webflowPosts.data.items);

		// create WP posts and download images
		const posts = await PostConverter.webflowPostToWordpressPost(webflowPosts);
		//console.log(posts);
		/* if (posts){
			for (let i = 0; i < posts.length; i++) {
				const currentPost = posts[i];
				const insertPost = await Database.insertPost(currentPost);
				const insertId = insertPost.insertId;
				console.log(insertId);
			}
		} */


	}
}

export default DataFlow
