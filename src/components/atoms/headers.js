import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from '../../assets/Icons';

const Headers = ({
  star,
  alarm,
  title,
  back = 'chevron-left',
  logo = true,
  styled,
}) => {
  const [follow, setfollow] = useState(false);
  return (
    <View style={[styles.container, styled]}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
        {back && <MaterialIcons name={back} style={styles.icon} />}

        {title && <Text style={styles.text}>{title}</Text>}
      </View>
      {logo && (
        <View style={styles.title}>
          <MaterialIcons name="candlestick-chart" style={styles.icon} />
          <Text style={[styles.text, {fontSize: 25}]}>Stockvest</Text>
          <View style={styles.animasi}></View>
        </View>
      )}
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
        {alarm && <Ionicons name={'alarm-outline'} style={styles.icon} />}
        {star && (
          <FontAwesome name={follow ? 'star' : 'star-o'} style={styles.icon} />
        )}
      </View>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  animasi: {
    backgroundColor: '#e8f44c',
    height: 25,
    width: 20,
    borderRadius: 100,
    position: 'absolute',
    right: 0,
    paddingLeft: 25,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    zIndex: 9999,
    textAlign: 'center',
  },
  icon: {
    color: 'black',
    fontSize: 25,
  },
});
