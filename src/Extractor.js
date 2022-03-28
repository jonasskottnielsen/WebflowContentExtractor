import DataFlow from "./Controller/DataFlow.js";

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

	}
}

Extractor.init();