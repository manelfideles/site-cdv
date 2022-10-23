import dynamic from 'next/dynamic';

const FeedTemplate = dynamic(() => import('components/FeedTemplate'))

export default function Research() {
	return (
		<FeedTemplate
			pageTitle='Research'
			pageSize={15}
			term='projects'
		/>
	)
}
