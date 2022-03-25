import axios from 'axios';

const Webflow = {
    async getPostsFromWebflow() {
        const url = "https://api.webflow.com/collections/6048b8893419d77bfba17761/items";
        const header = await this.getRequestHeaders();
        let res;
        try {
            res = await axios.get(url, header);	 
        } catch (error) {
            console.log(error);
        }
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
