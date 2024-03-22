import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Buttons from '../../components/atoms/Buttons';
import {MaterialIcons} from '../../assets/Icons';
import {useNavigation} from '@react-navigation/native';
const Splash = () => {
  const navigation = useNavigation();
  const getStart = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <MaterialIcons
          name="candlestick-chart"
          style={{fontSize: 25, color: 'black'}}
        />
        <Text style={[styles.text, {fontSize: 20}]}>Stockvest</Text>
        <View style={styles.animasi}></View>
      </View>
      <Text style={[styles.text, {paddingHorizontal: 40}]}>
        Easy Stock Investment For Beginners
      </Text>
      <Text style={{fontSize: 14, textAlign: 'center', paddingHorizontal: 60}}>
        Screening feature to filter stocks to maximize profits
      </Text>
      <Buttons title={"Let's Get Started"} onPress={getStart} />

      {/* <Buttons /> */}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    flexDirection: 'row',
    zIndex: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 28,
    textAlign: 'center',
    zIndex: 9999,
  },
  animasi: {
    backgroundColor: '#e8f44c',
    height: 25,
    width: 20,
    borderRadius: 100,
    position: 'absolute',
    right: 125,
    paddingLeft: 25,
  },
});
