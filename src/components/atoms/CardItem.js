import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {unilever} from '../../assets/Images'; // assuming this import is correct

export default function CardItem({data, styled, isporto = false}) {
  const {title, price, lots, status, name} = data;
  const initialPrice = 12000; // Assuming initial price is 12000

  // Calculate the percentage change
  const percentageChange = ((price - initialPrice) / initialPrice) * 100;
  return (
    <TouchableOpacity style={[styles.btn, styled]}>
      <View style={styles.title}>
        <Image source={unilever} style={styles.image} />
        <View>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>{title}</Text>
          {isporto ? (
            <Text style={styles.text}>Rp{price}</Text>
          ) : (
            <Text>{name}</Text>
          )}
        </View>
      </View>
      {isporto && (
        <View style={{alignItems: 'center', width: '40%'}}>
          <Text style={styles.text}>{lots} Lot</Text>
          <Text style={styles.text}>Rp{price * lots}</Text>
        </View>
      )}
      <View style={{width: '20%', alignItems: 'flex-end'}}>
        {isporto ? (
          <Text
            style={[
              styles.text,
              {
                color: status === 'Match' ? 'green' : 'red',
                fontWeight: status ? '600' : 'normal',
              },
            ]}>
            {status}
          </Text>
        ) : (
          <>
            <Text>Rp{price}</Text>
            <Text>({percentageChange.toFixed(2)}%)</Text>
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
    width: '35%',
  },
});
