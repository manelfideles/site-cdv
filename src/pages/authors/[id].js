import { useFetch } from 'hooks/useFetch';
import { useRouter } from 'next/router';

import GalleryItem from 'components/GalleryItem';
import Spinner from 'components/Spinner';

import styles from 'styles/Author.module.scss';
import getBestImageSize from 'utils';

const mockContacts = ['Email', 'ORCID', 'Twitter', 'Linkedin'];
const mockProjects = [
	<GalleryItem
		key={1}
		title='Project 1'
		link=''
		thumbnail='/assets/images/placeholder.jpg'
	/>,
	<GalleryItem
		key={2}
		title='Project 2'
		link=''
		thumbnail='/assets/images/placeholder.jpg'
	/>,
	<GalleryItem
		key={3}
		title='Project 3'
		link=''
		thumbnail='/assets/images/placeholder.jpg'
	/>,
	<GalleryItem
		key={4}
		title='Project 4'
		link=''
		thumbnail='/assets/images/placeholder.jpg'
	/>,
]

export default function Author() {
	const router = useRouter();
	const { id } = router.query;
	const { data, loading } = useFetch({
		method: 'getUsers',
		query: `/${id}?_fields=title,author_meta,_links&_embed`
	})

	const renderAuthor = () => {
		const name = data?.title.rendered;
		const bio = data
			.author_meta
			.author_bio[0]
		const imageSizes = data
			?._embedded
			?.['wp:featuredmedia']?.[0]
			.media_details.sizes;

		return <>
			<div className={styles.authorInfoWrapper}>
				<div>
					<img
						src={getBestImageSize(imageSizes, 200, 75)}
						alt={`${name} profile picture`}
					/>
					<h2>{name}</h2>
				</div>
				<div className={styles.authorInfo}>
					<div>
						<h4>Biography</h4>
						<p>{bio}</p>
					</div>
					<div>
						<h4>Contacts</h4>
						{mockContacts.map(contact => (
							<p>
								<span style={{ textDecoration: 'underline' }}>
									{contact}
								</span>: {name.toLowerCase().replaceAll(' ', '-')}
							</p>
						))
						}
					</div>
				</div>
			</div>
			<div className={styles.relatedProjects}>
				<h3>Related Projects</h3>
				<div>
					{mockProjects.map(proj => proj)}
				</div>
			</div>
		</>
	}

	const renderContent = () => {
		return loading
			? <Spinner />
			: renderAuthor()
	}

	return (
		<main className={styles.authorWrapper}>
			{renderContent()}
		</main>
	)
}
