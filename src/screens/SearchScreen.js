import React, {useCallback, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SearchInput} from '../components/search/SearchInput';
import {TrendingSearch} from '../components/search/TrendingSearch';
import {SearchItems} from '../components/search/SearchItems';

export const SearchScreen = () => {
  const [userData, setUserData] = useState([]);
  console.log('user', userData);
  const handleSearchInput = useCallback(items => setUserData(items), []);
  return (
    <View style={styles.container}>
      <SearchInput results={handleSearchInput} />
      {userData?.results?.length > 0 ? (
        <SearchItems data={userData.results} />
      ) : (
        <TrendingSearch />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});
