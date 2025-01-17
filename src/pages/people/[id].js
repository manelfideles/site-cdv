import dynamic from 'next/dynamic';

const GalleryItem = dynamic(() => import('components/GalleryItem'));
const Spinner = dynamic(() => import('components/Spinner'));

import { useFetch } from 'hooks/useFetch';
import { useQueryParam } from 'hooks/useQueryParam';

import { getBestImageSize } from 'utils';

import styles from 'styles/page-styles/Author.module.scss';

const mockContacts = ['Email', 'ORCID', 'Twitter', 'Linkedin'];
const mockProjects = [...Array(4)].map((_, i) => (
	<GalleryItem
		key={i}
		title={`Project ${i + 1}`}
		link='/projects'
		thumbnail='/assets/images/polka-dots-2.jpg' />
))

export default function Author() {
	const id = useQueryParam('id');
	const { data, loading } = useFetch({
		method: 'getUsers',
		query: `/${id}?_fields=title,author_meta,_links&_embed`
	})

	const renderAuthor = () => {
		const name = data?.title.rendered;
		const bio = data
			?.author_meta
			?.author_bio[0]
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
						<p dangerouslySetInnerHTML={{ __html: bio }}></p>
					</div>
					<div>
						<h4>Contacts</h4>
						{mockContacts.map((contact, idx) => (
							<p key={idx}>
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
