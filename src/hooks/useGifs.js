import React, {useState, useEffect, useCallback} from 'react';

const URL = 'https://g.tenor.com/v1/trending?key=32FFS8Z2962Q';
export const useGif = () => {
  const [next, setNext] = useState(null);
  const [gifs, setGifs] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);

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
