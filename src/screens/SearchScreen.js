import React, {useCallback, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SearchInput} from '../components/search/SearchInput';
import {TrendingSearch} from '../components/search/TrendingSearch';
import {SearchItems} from '../components/search/SearchItems';

export const SearchScreen = () => {
  const [userData, setUserData] = useState([]);
  const [searchText, setSearchText] = useState('');

  console.log('user', userData, searchText);
  const handleSearchInput = useCallback(({data, text}) => {
    setUserData(data);
    setSearchText(text);
  }, []);

  const getView = () => {
    if (searchText.length > 0) {
      if (userData?.results?.length > 0) {
        return <SearchItems data={userData.results} />;
      } else {
        return <Text style={styles.error}>No Gif found</Text>;
      }
    } else {
      return <TrendingSearch />;
    }
  };
  return (
    <View style={styles.container}>
      <SearchInput results={handleSearchInput} />
      {getView()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: '#0F111B',
  },
  error: {
    color: 'white',
    alignSelf: 'center',
  },
});
