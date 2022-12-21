import Database from "../Database/Database.js";

import { BASE_URL, WEBFLOW_MEDIA_URL, WORDPRESS_UPLOAD_URL } from '../../Config/index.js';

const PostInserter = {
	async postInserter(posts) {
		let previousMaxId = await Database.getNextId();
		previousMaxId++;
		for (let i = 0; i < posts.length; i++) {
			//console.log('previusMaxId',previousMaxId)
			const currentPost = posts[i];
			console.log(currentPost);
			// work with content
			// create post
			const createdPost = await Database.insertPost({
				author: 1,
				date: currentPost.date || '2021-03-01 12:56:54',
				date_gmt: currentPost.date_gmt || '2021-03-01 12:56:54',
				content: currentPost.content,
				title: currentPost.title,
				excerpt: currentPost.summary || '',
				status: 'publish',
				comment_status: 'closed',
				ping_status: 'open',
				name: currentPost.name,
				guid: `${currentPost.guid}${previousMaxId}`,
				type: currentPost.type,
				comment_count: 0,
			}); 
			if (currentPost.featuredImage) {
				let tempName = currentPost.featuredImage.replace(`${WORDPRESS_UPLOAD_URL}`, '');
				let tempNameFinal = tempName.split('.');
				let picture = tempNameFinal[0].replace(/(%20)/g, 'a');
				picture = picture.replace(/(%CC%)/g,'')
				// find picture
				const pictureId = await Database.getImage(currentPost.name.replace(/(%20)/g, ''));
				//console.log('fetched picture', pictureId);
				if (pictureId.length > 0){
					const postMeta = await Database.insertPostMeta({postid: previousMaxId, metakey: '_thumbnail_id', metavalue: pictureId[0].ID});
					console.log('Feature image inserted for', previousMaxId);
				} else {
					console.log('No picture for post', currentPost.title);
				}
			}
			previousMaxId++;
			console.log('-----------------this is post number ', i);
		}


	},
}

export default PostInserter

// 804
/* 1
2022-04-27 07:59:18
2022-04-27 05:59:18
alan
inherit
open
closed
alan
2022-04-27 07:59:18
2022-04-27 05:59:18
0
http://localhost:8080/wp-content/uploads/2022/04/a...
0
attachment
image/jpeg
0 */