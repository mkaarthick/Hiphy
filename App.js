import React from 'react';
import {View, StyleSheet} from 'react-native';
import GifList from './src/GifList';

const App = () => {
  return (
    <View style={styles.container}>
      <GifList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default App;
