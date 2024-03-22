import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardItem from '../../components/atoms/CardItem';

const Protofolio = () => {
  const dataArray = [
    {
      title: 'BLTA',
      price: 50000,
      lots: 3,
      status: 'Match',
    },
    {
      title: 'BLTA',
      price: 5000,
      lots: 3,
      status: 'Open',
    },
    {
      title: 'BLTA',
      price: 5000,
      lots: 3,
      status: 'Withdrawal',
    },
  ];
  return (
    <View style={{}}>
      {dataArray.map((data, index) => (
        <CardItem key={index} data={data} />
      ))}
    </View>
  );
};

export default Protofolio;

const styles = StyleSheet.create({});
