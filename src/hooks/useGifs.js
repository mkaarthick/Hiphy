import {useState, useEffect, useCallback} from 'react';
import {API_KEY, BASE_URL} from '../Utils';

export const useGif = ({path, query}) => {
  const [next, setNext] = useState(null);
  const [gifs, setGifs] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);
  let URL = `${BASE_URL}/${path}?key=${API_KEY}`;
  if (query) {
    URL = `${BASE_URL}/${path}?q=${query}&key=${API_KEY}`;
  }

  const fetchMore = useCallback(() => setShouldFetch(true), []);
  useEffect(() => {
    if (!shouldFetch) {
      return;
    }
    const makeApiCall = async () => {
      const response = await fetch(next ? `${URL}&pos=${next}` : `${URL}`);
      const gifData = await response.json();
      setShouldFetch(false);
      const hasNext = gifData?.next;
      if (Array.isArray(gifData.results) && gifData?.results.length > 0) {
        setGifs(oldData => [...oldData, ...gifData.results]);
        setNext(hasNext);
      }
    };
    makeApiCall();
  }, [next, shouldFetch]);
  return {gifs, fetchMore};
};
