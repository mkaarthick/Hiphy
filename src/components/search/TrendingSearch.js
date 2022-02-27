import React from 'react';
import {useFetch} from '../../hooks/useFetch';
import {SearchItems} from './SearchItems';

export const TrendingSearch = () => {
  const {data} = useFetch('trending_terms');
  if (data) {
    return <SearchItems data={data.results} trending />;
  }
  return null;
};
