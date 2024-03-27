import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardItem from '../../components/atoms/CardItem';
import Headers from '../../components/atoms/headers';
import Card_Protofolio from '../../components/atoms/Card_Protofolio';
import {unilever} from '../../assets/Images';

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
    <View style={styles.container}>
      <Headers back={false} styled={{paddingVertical: 15, elevation: 4}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text>Portofolio</Text>
          <Text>Rp13.400.543</Text>
          <View>
            <View>
              <Text>Profit/Loss</Text>
              <Text>-98.000</Text>
            </View>
            <View>
              <Text>Capital Gain</Text>
              <Text>-12,3%</Text>
            </View>
            <View>
              <Text>Open</Text>
              <Text>Rp97.000</Text>
            </View>
          </View>
        </View>
        {investment.map((item, index) => (  
          <Card_Protofolio key={index} data={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Protofolio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding:20
  },
});

const investment = [
  {buy: 1.9792, lot: 16, logo: unilever, code: 'UNI', name: 'Unilever'},
  {buy: 1.6372, lot: 26, logo: unilever, code: 'UNL', name: 'Unilever'},
  {buy: 1.7363, lot: 36, logo: unilever, code: 'UNA', name: 'Unilever'},
  {buy: 1.3932, lot: 56, logo: unilever, code: 'UND', name: 'Unilever'},
  {buy: 1.3727, lot: 66, logo: unilever, code: 'UNC', name: 'Unilever'},
  {buy: 1.3273, lot: 36, logo: unilever, code: 'UNR', name: 'Unilever'},
  {buy: 1.7233, lot: 26, logo: unilever, code: 'UNF', name: 'Unilever'},
  {buy: 1.8217, lot: 46, logo: unilever, code: 'UNV', name: 'Unilever'},
];
