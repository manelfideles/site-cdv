import {
  useState,
  useEffect,
  useCallback
} from 'react';

import api from 'networking';

export const useFetch = ({ query }) => {

  const [data, setData] = useState(undefined);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(() => {
    setLoading(true);
    api
      .getPosts(query)
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [query])

  useEffect(() => fetchData(), [fetchData]);

  return {
    data,
    loading,
    error
  }
}
