import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MaterialIcons} from '../../assets/Icons';
import Input from '../../components/atoms/Input';
import Buttons from '../../components/atoms/Buttons';
import {useNavigation} from '@react-navigation/native';
const Regist = () => {
  const navigation = useNavigation();
  const regist = () => {
    navigation.navigate('Validasi');
  };
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
      <Text style={[styles.text, {fontSize: 22, marginBottom: 20}]}>
        Sign Up
      </Text>
      <View style={{paddingVertical: 15, gap: 20}}>
        <Input placholder={'Email'} />
        <View>
          <Input placholder={'Password'} />
          <Text style={{fontSize: 13}}>
            Maximum of 6 characters with numbers
          </Text>
        </View>
        <View>
          <Input secure={true} placholder={'Confirm Password'} />
          <Text style={{fontSize: 13}}>Passwords do not match</Text>
        </View>
      </View>

      <Buttons
        style_btn={{marginVertical: 10}}
        title={'Registration'}
        onPress={regist}
      />

      <Buttons
        style_btn={{marginTop: 10}}
        none={true}
        title={'With Google'}
        image={true}
      />
      <Text style={{textAlign: 'center', fontSize: 15, paddingTop: 40}}>
        Already have an account?
      </Text>
      <Buttons
        style_btn={{marginTop: 10}}
        none={true}
        title={'Login'}
        onPress={login}
      />
    </View>
  );
};

export default Regist;

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
