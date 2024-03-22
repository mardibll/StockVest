import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MaterialIcons} from '../../assets/Icons';
import Buttons from '../../components/atoms/Buttons';
import {icsucces} from '../../assets/Images';
import {useNavigation} from '@react-navigation/native';

const PagesSucces = () => {
  const navigation = useNavigation();
  const login = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <MaterialIcons
          name="candlestick-chart"
          style={{fontSize: 25, color: 'black'}}
        />
        <Text style={[styles.text, {fontSize: 25}]}>Stockvest</Text>
        <View style={styles.animasi}></View>
      </View>
      <View style={{alignItems: 'center', paddingVertical: 20}}>
        <Image source={icsucces} />
      </View>
      <Text style={[styles.text, {fontSize: 26, marginBottom: 7}]}>
        Registration Succesfull
      </Text>
      <Text style={{textAlign: 'center', paddingHorizontal: 30}}>
        Your account has been created, let's start investing in stocks and own
        your favorite caompany by opening a stock account
      </Text>
      <View style={{gap: 20, marginTop: 45}}>
        <Buttons title={'Create Brokerage Account'} />
        <Buttons
          style_btn={{marginTop: 10}}
          none={true}
          title={'Login'}
          onPress={login}
        />
      </View>
    </View>
  );
};

export default PagesSucces;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 25,
    flex: 1,
  },
  title: {
    flexDirection: 'row',
    zIndex: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 40,
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
    textAlign: 'center',
  },
});
