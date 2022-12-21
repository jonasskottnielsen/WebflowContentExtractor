import extract from 'extract-urls';

const Helpers = {
	async extractUrlsFromString(string){
		let urlArray = null;
		urlArray = extract(string);
		return urlArray
	},

	async figureReplacer(content, newUrl, oldUrl, id){
		
		let replamentString = `<!-- wp:image {"id":${id},"sizeSlug":"large","linkDestination":"none"} -->
		<figure class="wp-block-image size-large"><img src="http://localhost:8080/wp-content/uploads/2022/03/62431ebb03cf3f4dae6040ab_241734234_5130028927023530_2374676211216057893_n-1024x652.jpg" alt="" class="wp-image-133"/></figure>
		<!-- /wp:image -->`;
		const newContent = content.replace(replamentString, newString);
		return newContent;
	},
}

export default Helpers