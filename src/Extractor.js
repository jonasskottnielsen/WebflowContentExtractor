import DataFlow from "./Controller/DataFlow.js";
import Database from "./Service/Database/Database.js";
import Helpers from "./Service/Helpers/Helpers.js";
import Images from "./Service/Images/Images.js";
import Webflow from "./Service/Webflow/Webflow.js";


/**
 * TODO:
 * 1. fetch data from webflow
 * 2. loop through items 
 * 3. create posts 
 *      3.1 swap url 
 *      3.2 download image
 *      3.3 upload image to wordpress 
 * 
 *  let text = "Mr Blue has a blue house and a blue car";
 *	let result = text.replace(/blue/g, "red");
 */
const Extractor = {
	async init() {
		DataFlow.flowHandler();
		//const posts = await Webflow.getPostsFromWebflow();
		//console.log(posts);
		/* for (let p = 0; p < posts.length; p++) {
			const element = posts[p];
			await Database.insertPost(element);
		} */
		//Images.download('https://uploads-ssl.webflow.com/6048b8893419d7170ea17764/6233113b8de06ec4fb80bbb6_Sirups%20udefra%20(2).jpg', 'pic');

	}
}

Extractor.init();