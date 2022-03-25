import extract from 'extract-urls';

const Helpers = {
	async extractUrlsFromString(string){
		let urlArray = null;
		urlArray = extract(string);
		return urlArray
	}
}

export default Helpers