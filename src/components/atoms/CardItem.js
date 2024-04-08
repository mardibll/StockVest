import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {unilever} from '../../assets/Images'; // assuming this import is correct

export default function CardItem({data, styled, isporto = false, onPress}) {
  const {title, price, lots, status, name} = data;
  const open = 12000;
  const percentageChange = ((price - open) / open) * 100;
  const roundedPercentageChange = parseInt(percentageChange.toFixed(0)); // Mengambil bilangan bulat
  const sign = roundedPercentageChange >= 0 ? '+' : '-';
  let textColor;
if (roundedPercentageChange > 0) {
    textColor = 'green'; // Warna hijau untuk persentase perubahan positif
} else if (roundedPercentageChange < 0) {
    textColor = 'red'; // Warna merah untuk persentase perubahan negatif
} else {
    textColor = 'black'; // Warna hitam jika persentase perubahan sama dengan nol
}
  return (
    <TouchableOpacity style={[styles.btn, styled]} onPress={onPress}>
      <View style={styles.title}>
        <Image source={unilever} style={styles.image} />
        <View>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>{title}</Text>
          {isporto ? (
            <Text style={styles.text}>{price / 100}</Text>
          ) : (
            <Text>{name}</Text>
          )}
        </View>
      </View>
      {isporto && (
        <View style={{alignItems: 'center'}}>
          <Text style={styles.text}>{lots} Lot</Text>
          <Text style={styles.text}>{price * lots}</Text>
        </View>
      )}
      <View style={{alignItems: 'flex-end'}}>
        {isporto ? (
          <Text
            style={[
              styles.text,
              {
                color: status === 'Match' ? 'green' : 'red',
                fontWeight: status ? '600' : 'normal',
                width: 90,
                textAlign: 'right',
              },
            ]}>
            {status}
          </Text>
        ) : (
          <>
            <Text style={{color:"black"}}>{price / 100}</Text>
            <Text style={{ color: textColor }}>{sign}{Math.abs(roundedPercentageChange)} ({percentageChange.toFixed(2)}%)</Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  image: {
    height: 35,
    width: 35,
    borderRadius: 100,
  },
  text: {
    color: 'black',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '30%',
  },
});
