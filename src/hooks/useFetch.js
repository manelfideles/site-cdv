import useSWR from 'swr';

import api from 'networking';

export const useFetch = ({ method, query }) => {
  const fetcher = query => api[method](query || '').then(res => res.data);
  const { data, error } = useSWR(query, fetcher);

  return {
    data,
    error,
    loading: !error && !data
  }
}
