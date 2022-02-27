import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import {API_KEY} from '../../Utils';

export const SearchInput = ({results}) => {
  const debounce = (callback, delay) => {
    let timer;
    return function (args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        callback(args);
      }, delay);
    };
  };

  const handleChangeText = debounce(async text => {
    const response = await fetch(
      `https://g.tenor.com/v1/search_suggestions?q=${text}&key=${API_KEY}`,
    );
    const jsonData = await response.json();
    results(jsonData);
  }, 1000);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/icons/search.png')}
        style={styles.imageStyle}
      />
      <TextInput
        style={styles.input}
        onChangeText={handleChangeText}
        placeholder="Search HIPHY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    height: 40,
    margin: 12,
    padding: 10,
  },
  imageStyle: {
    width: 22,
    height: 22,
  },
  input: {
    flex: 1,
    paddingHorizontal: 6,
  },
});
