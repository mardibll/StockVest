import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {MaterialIcons} from '../../assets/Icons';
import Buttons from '../../components/atoms/Buttons';
import Input from '../../components/atoms/Input';
import {useNavigation} from '@react-navigation/native';

const Validasi = () => {
  const [nextStep, setnextStep] = useState(false);
  const navigation = useNavigation();
  const renderPhone = () => {
    return (
      <View>
        <Text style={[styles.text, {fontSize: 22, marginBottom: 20}]}>
          Phone Number
        </Text>
        <Input placholder={'Ex. 082 897 869'} styleshed={{marginTop: 15}} />
        <Buttons
          style_btn={{marginVertical: 25}}
          title={'Validate'}
          onPress={() => setnextStep(!nextStep)}
        />
      </View>
    );
  };

  const renderValidatePhone = () => {
    const verivy = () => {
      navigation.navigate('PagesSucces');
    };
    return (
      <View>
        <Text style={[styles.text, {fontSize: 22}]}>Validate Phone Number</Text>
        <Text style={{textAlign: 'center'}}>
          We have sent an OTP to your phone number
        </Text>
        <Buttons
          style_btn={{marginVertical: 25}}
          title={'Verify'}
          onPress={verivy}
        />
        <Text style={{textAlign: 'center'}}>Code not received?</Text>

        <Text style={{textAlign: 'center', color: 'red', marginTop: 15}}>
          <Text> Resend</Text> <Text style={{color: 'gray'}}>or</Text>{' '}
          <Text>Cahnge Number</Text>
        </Text>
      </View>
    );
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
      {nextStep ? renderValidatePhone() : renderPhone()}
    </View>
  );
};

export default Validasi;

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
