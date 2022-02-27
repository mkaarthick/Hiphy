import React from 'react';
import {View} from 'react-native';
import {useFetch} from '../hooks/useFetch';
import {useGif} from '../hooks/useGifs';
import GifList from '../GifList';

export const DetailSearchScreen = ({route}) => {
  const {query} = route.params;
  return <GifList query={query} />;
};
