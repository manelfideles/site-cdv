import FeedTemplate from 'components/FeedTemplate';

export default function News() {
	return (
		<FeedTemplate
			pageTitle='News'
			pageSize={20}
			term='news'
		/>
	)
}
