import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Headers from '../../components/atoms/headers';
import CardItem from '../../components/atoms/CardItem';

const Watchlist = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contant_title}>
        <Headers back={false} />
        <Text style={[styles.text, {paddingVertical: 10}]}>Watchlist</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <View style={styles.contant_card}>
          {dataArray.map((data, index) => (
            <CardItem key={index} data={data} styled={styles.card} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Watchlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contant_title: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 30,
    elevation: 2,
  },
  contant_card: {
    marginTop: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 3,
    paddingHorizontal: 20,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  },
  card: {
    borderBottomWidth: 0.3,
    borderColor: '#c8ecec',
    paddingVertical: 12,
  },
});

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
