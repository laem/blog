import Comment from '@/components/BlueskyComment'
import { AppBskyFeedDefs, BskyAgent } from '@atproto/api'
import { styled } from 'next-yak'
const agent = new BskyAgent({ service: 'https://public.api.bsky.app' })

export default async function BlueskyComments({ uri }) {
	const part = uri.split('app.bsky.feed.post/')[1]
	const url = `https://bsky.app/profile/cartesapp.bsky.social/post/${part}`

	if (!uri) return null
	const response = await agent.getPostThread({ uri })

	const { data } = response
	const thread = data.thread
	console.log('SALUT', data)

	if (!AppBskyFeedDefs.isThreadViewPost(data.thread)) {
		return <p className="text-center">Could not find thread</p>
	}

	const noReplies = !thread.replies || thread.replies.length === 0

	return (
		<Wrapper>
			<h2>Commentaires</h2>
			<p>
				Commentez <a href={url}>cet article</a> sur Bluesky, vos commentaires
				apparaitront ici :)
			</p>
			{noReplies ? null : (
				<ol>
					{thread.replies.map((data) => {
						return <Comment key={data.post.uri} data={data} />
					})}
				</ol>
			)}
		</Wrapper>
	)
}

const Wrapper = styled.section`
	max-width: 700px;
	margin: 0 auto 2rem auto;
	ol {
		list-style-type: none;
	}
`
