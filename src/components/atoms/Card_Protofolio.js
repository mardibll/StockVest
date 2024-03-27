import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {unilever} from '../../assets/Images';

const Card_Protofolio = ({data}) => {
  const {buy, code, logo, lot, name} = data;
  //   const saat_Ini = 12000;
  //   const percentageChange = ((price - open) / open) * 100;
  //   const roundedPercentageChange = parseInt(percentageChange.toFixed(0)); // Mengambil bilangan bulat
  //   console.log(roundedPercentageChange);
  //   const sign = roundedPercentageChange >= 0 ? '+' : '-';
  //   let textColor;
  // if (roundedPercentageChange > 0) {
  //     textColor = 'green'; // Warna hijau untuk persentase perubahan positif
  // } else if (roundedPercentageChange < 0) {
  //     textColor = 'red'; // Warna merah untuk persentase perubahan negatif
  // } else {
  //     textColor = 'black'; // Warna hitam jika persentase perubahan sama dengan nol
  // }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
          <Image source={logo} alt="error" style={styles.image} />
          <View>
            <Text style={[styles.text_bold, {fontSize: 16}]}>{code}</Text>
            <Text>{name}</Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={[styles.text_bold, {fontSize: 16}]}>Price</Text>
          <Text>563</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'black', fontSize: 11}}>Investment</Text>
          <Text style={styles.text_bold}>Rp{buy}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'black', fontSize: 11}}>Profit/Loss</Text>
          <Text style={styles.text_bold}>- Rp129.533 (-7,50%)</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'black', fontSize: 11}}>Allocate</Text>
          <Text style={styles.text_bold}>{lot} Lot (25,30%)</Text>
        </View>
      </View>
    </View>
  );
};

export default Card_Protofolio;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 3,
    elevation: 3,
    borderColor: '#c8ecec',
    paddingVertical: 20,
    gap: 10,
    paddingHorizontal: 20,
  },
  text_bold: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 100,
  },
});
