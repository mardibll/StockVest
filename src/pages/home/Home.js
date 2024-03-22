import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CardItem from '../../components/atoms/CardItem';

const Home = () => {
  const [isMenu, setisMenu] = useState('Trending');
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {menu.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.btn_menu,
              {
                backgroundColor: isMenu === item.title ? 'black' : '#f3f3f3',
                elevation: isMenu === item.title ? 10 : 2,
              },
            ]}
            onPress={() => setisMenu(item.title)}>
            <Text style={{color: isMenu === item.title ? 'white' : 'black'}}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        {dataArray.map((data, index) => (
          <CardItem key={index} data={data} styled={styles.card} />
        ))}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  btn_menu: {
    padding: 5,
    paddingHorizontal: 9,
    borderRadius: 15,
  },
});

const menu = [
  {title: 'Trending'},
  {title: 'Top Guiner'},
  {title: 'Top Loser'},
  {title: 'Most Active'},
];

const dataArray = [
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 50000,
    lots: 3,
    status: 'Match',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 5000,
    lots: 3,
    status: 'Open',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 5000,
    lots: 3,
    status: 'Withdrawal',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 50000,
    lots: 3,
    status: 'Match',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 5000,
    lots: 3,
    status: 'Open',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 5000,
    lots: 3,
    status: 'Withdrawal',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 50000,
    lots: 3,
    status: 'Match',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 5000,
    lots: 3,
    status: 'Open',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 5000,
    lots: 3,
    status: 'Withdrawal',
  },
];
