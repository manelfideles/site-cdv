import { useFetch } from 'hooks/useFetch';
import { SyncLoader } from 'react-spinners';

import GalleryItem from 'components/GalleryItem';

import styles from 'styles/People.module.scss';

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
    query: '?page=1&per_page=100'
  });

  const getRandomElement = (arr) => {
    const randomIndex = Math.floor(
      Math.random() * arr.length
    )
    return arr[randomIndex];
  }

  const renderStaffList = () => {
    return (
      <div>
        {data.map(user => (
          <GalleryItem
            key={user?.id}
            title={user?.name}
            link={user?.link}
            thumbnail={user?.avatar_urls['96']}
            subtitle={getRandomElement(mockRoles)}
            term='user'
          />
        ))}
      </div>
    )
  }

  const renderContent = () => {
    return loading
      ? <SyncLoader color='#666666' />
      : <><div>
        <h2>Current Members</h2>
        {renderStaffList()}
      </div>
        <div>
          <h2>Former Members</h2>
          {renderStaffList()}
        </div></>
  }

  return (
    <main className={styles.staffListWrapper}>
      {renderContent()}
    </main>
  )
}
