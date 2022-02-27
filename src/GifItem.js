import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

const windowWidth = Dimensions.get('window').width;
const GifItem = ({url}) => {
  return (
    <FastImage
      style={styles.imageStyle}
      source={{
        uri: url,
      }}
    />
  );
};
const styles = StyleSheet.create({
  imageStyle: {
    width: windowWidth / 2,
    height: windowWidth / 2,
    marginVertical: 2,
    borderRadius: 10,
  },
});
export default GifItem;
