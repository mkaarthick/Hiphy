import {useState, useEffect} from 'react';
import {BASE_URL, API_KEY} from '../Utils';
export const useFetch = path => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${path}?key=${API_KEY}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (e) {
        console.error(e);
      }
      // setData(jsonData);
      // setLoading(false);
    };
    apiCall();
  }, [path]);

  return {data, loading, error};
};
