import dynamic from 'next/dynamic';

const FeedTemplate = dynamic(() => import('components/FeedTemplate'))

export default function News() {
	return (
		<FeedTemplate
			pageTitle='News'
			pageSize={20}
			term='news'
		/>
	)
}
