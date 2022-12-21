import axios from 'axios';

const Webflow = {
    async getPostsFromWebflow() {
		const controlArray = []
        const baseurl = "https://api.webflow.com/collections/6048b8893419d77bfba17761/items?offset=";
        const header = await this.getRequestHeaders();
        let res = [];
        for (let i = 0; i < 459; i+= 100) {
			try {
				const result = await axios.get(`${baseurl}${i}`, header);
				//console.log(result);
				res = [...res, ...result.data.items]	 
			} catch (error) {
				console.log(error);
			}
		}
		console.log(res.length);
		return res;
    },

    async getRequestHeaders() {
        return {
            headers: {
                'accept-version': '1.0.0',
                'Authorization': 'Bearer 957214e4fd7f26b64d2276a2d586179cc13d8eb817ccea0a3e6f74bccba87e7b'
            }
        };
    },


}

export default Webflow
