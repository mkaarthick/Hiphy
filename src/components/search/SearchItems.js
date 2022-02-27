import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const SearchItems = ({data, trending}) => {
  const navigation = useNavigation();
  const Header = () => (
    <Text style={styles.header}>{trending ? 'Trending Searches' : ''}</Text>
  );
  const renderItem = ({item}) => {
    const onPress = () =>
      navigation.navigate('DetailSearch', {
        query: item,
      });

    return (
      <Pressable style={styles.container} onPress={onPress}>
        <Image
          source={
            trending
              ? require('../../../assets/icons/trend.png')
              : require('../../../assets/icons/search.png')
          }
          style={styles.trendIconStyle}
        />
        <Text style={styles.itemText}>{item}</Text>
      </Pressable>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={Header}
      keyExtractor={item => item}
      showsVerticalScrollIndicator={false}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  header: {
    fontWeight: '500',
    fontSize: 18,
    paddingBottom: 12,
  },
  itemText: {
    fontSize: 16,
    paddingHorizontal: 6,
  },
  trendIconStyle: {
    width: 32,
    height: 32,
  },
});
