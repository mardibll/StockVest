import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CardItem from '../../components/atoms/CardItem';
import {MaterialIcons} from '../../assets/Icons';
import Card_Modal from '../../components/atoms/Card_Modal';
import Detail from './Detail';

const Stream = () => {
  const [onMenu, setonMenu] = useState('Today');
  const [detail, setdetail] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          elevation: 6,
          paddingBottom: 10,
        }}>
        <View style={styles.title}>
          <MaterialIcons
            name="candlestick-chart"
            style={{fontSize: 25, color: 'black'}}
          />
          <Text style={[styles.text, {fontSize: 25}]}>Stockvest</Text>
          <View style={styles.animasi} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 23,
          }}>
          {menu.map((item, index) => (
            <TouchableOpacity
              onPress={() => setonMenu(item.title)}
              key={index}
              style={[
                styles.btn,
                {
                  backgroundColor: item.title === onMenu ? 'black' : '#f3f3f3',
                  elevation: item.title === onMenu ? 10 : 2,
                },
              ]}>
              <Text style={{color: item.title === onMenu ? 'white' : 'black'}}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.text}>Transaction Today</Text>
      </View>

      <ScrollView style={{}} showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: 'white',
            marginTop: 4,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            elevation: 3,
            paddingHorizontal: 20,
          }}>
          {dataArray.map((data, index) => (
            <CardItem
              onPress={() => setdetail(data)}
              key={index}
              data={data}
              styled={styles.card}
              isporto={true}
            />
          ))}
        </View>
      </ScrollView>
      {detail && <Detail data={detail} amend={() => setdetail(!detail)} />}
    </View>
  );
};

export default Stream;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    position: 'relative',
    flex: 1,
  },
  card: {
    borderBottomWidth: 0.3,
    borderColor: '#c8ecec',
    paddingVertical: 12,
  },
  title: {
    flexDirection: 'row',
    zIndex: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    // marginBottom: 40,
  },
  animasi: {
    backgroundColor: '#e8f44c',
    height: 25,
    width: 20,
    borderRadius: 100,
    position: 'absolute',
    right: 110,
    paddingLeft: 25,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    zIndex: 9999,
  },
  btn: {padding: 5, paddingHorizontal: 20, borderRadius: 10},
});

const menu = [
  {title: 'Today'},
  {title: 'Week'},
  {title: 'Month'},
  {title: 'Year'},
];

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
  {
    title: 'BLTA',
    price: 5000,
    lots: 3,
    status: 'Withdrawal',
  },
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
  {
    title: 'BLTA',
    price: 5000,
    lots: 3,
    status: 'Withdrawal',
  },
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
  {
    title: 'BLTA',
    price: 5000,
    lots: 3,
    status: 'Open',
  },
];
