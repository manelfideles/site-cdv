import dynamic from 'next/dynamic';

const GalleryItem = dynamic(() => import('components/GalleryItem'));
const Spinner = dynamic(() => import('components/Spinner'));

import { useFetch } from 'hooks/useFetch';
import { getBestImageSize } from 'utils';

import styles from 'styles/page-styles/People.module.scss';

const mockRoles = [
  'Scientific Director',
  'Art Director',
  'PhD',
  'PhD Student',
  'MSc',
  'Senior Designer'
]

export default function People() {
  const {
    data,
    loading
  } = useFetch({
    method: 'getUsers',
    query: '?_embed&per_page=100'
  });

  const getRandomElement = (arr) => {
    const randomIndex = Math.floor(
      Math.random() * arr.length
    )
    return arr[randomIndex];
  }

  const renderStaffList = (start, stop) => {
    return (
      <div>
        {/*
          TODO - remove slice quando todos os users
          tiverem o author_status
        */}
        {data.slice(start, stop).map(user => {
          if (user?._embedded?.['wp:featuredmedia']) {
            const imageSizes = user
              ?._embedded
              ?.['wp:featuredmedia']?.[0]
              .media_details.sizes;

            return <GalleryItem
              key={user?.id}
              title={user?.title.rendered}
              link={`/people/${user?.id}`}
              thumbnail={getBestImageSize(imageSizes, 150, 50)}
              subtitle={getRandomElement(mockRoles)}
              term='user'
              id={user?.id}
            />
          }
          return null;
        })}
      </div>
    )
  }

  const renderContent = () => {
    return loading
      ? <Spinner />
      : <><div>
        <h2>Current Members</h2>
        {renderStaffList(0, 20)}
      </div>
        <div>
          <h2>Former Members</h2>
          {renderStaffList(22, 100)}
        </div></>
  }

  return (
    <main className={styles.staffListWrapper}>
      {renderContent()}
    </main>
  )
}