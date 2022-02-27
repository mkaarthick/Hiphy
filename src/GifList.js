import React from 'react';
import {FlatList} from 'react-native';

import {useGif} from './hooks/useGifs';
import GifItem from './GifItem';

const GifList = ({query}) => {
  const {gifs, fetchMore} = useGif(
    query ? {path: 'search', query: query} : {path: 'trending'},
  );

  const renderItem = ({item}) => {
    const {media} = item;
    const gif = media[0].tinygif.url;
    return <GifItem url={gif} />;
  };
  return (
    <FlatList
      data={gifs}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={(item, index) => index}
      onEndReachedThreshold={0.8}
      onEndReached={fetchMore}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default GifList;
