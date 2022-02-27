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
    const data = await response.json();
    results({data, text});
  }, 500);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/icons/search.png')}
        style={styles.imageStyle}
      />
      <TextInput
        style={styles.input}
        placeholder="Search HIPHY"
        placeholderTextColor={'grey'}
        onChangeText={handleChangeText}
        autoCorrect={false}
        autoCapitalize={'none'}
        autoComplete={'off'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 12,
    height: 45,
    margin: 12,
    padding: 10,
  },
  imageStyle: {
    width: 22,
    height: 22,
  },
  input: {
    color: 'black',
    height: 45,
    paddingHorizontal: 12,
    flex: 1,
  },
});
