import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {MaterialIcons} from '../../assets/Icons';
import Input from '../../components/atoms/Input';
import Buttons from '../../components/atoms/Buttons';
import {icsucces} from '../../assets/Images';
import {useNavigation} from '@react-navigation/native';
const Recovery = () => {
  const [isresend, setresend] = useState(false);
  const navigation = useNavigation();
  const renderResend = () => {
    const resend = () => {
      navigation.navigate('Login');
    };
    const Width = Dimensions.get('window').width;
    const Height = Dimensions.get('window').height;
    return (
      <View style={[styles.container_resend, {width: Width, height: Height}]}>
        <View style={styles.content_resend}>
          <View style={{alignItems: 'center'}}>
            <Image source={icsucces} />
          </View>
          <Text style={[styles.text, {paddingVertical: 7}]}>Verivy Email</Text>
          <Text style={{textAlign: 'center', paddingHorizontal: 50}}>
            An Email has been send your email address{' '}
            <Text style={{color: 'black', fontWeight: '500'}}>
              admin@gmail.com.
            </Text>{' '}
            Please click on that link to verify your email address
          </Text>
          <Buttons
            title={'Resend'}
            style_btn={{marginTop: 25}}
            onPress={resend}
          />
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={[styles.container, {opacity: isresend ? 0.3 : 100}]}>
        <View style={styles.title}>
          <MaterialIcons
            name="candlestick-chart"
            style={{fontSize: 25, color: 'black'}}
          />
          <Text style={[styles.text, {fontSize: 25}]}>Stockvest</Text>
          <View style={styles.animasi}></View>
        </View>
        <Text style={[styles.text, {fontSize: 22}]}>Forgot Password</Text>
        <Text style={{textAlign: 'center', paddingHorizontal: 20}}>
          Enter your registered email below to receive password rest
          instruction.
        </Text>
        <View style={{gap: 20, marginTop: 30}}>
          <Input placholder={'Email'} />
          <Buttons title={'Send'} onPress={() => setresend(!isresend)} />
        </View>
      </View>
      {isresend && renderResend()}
    </>
  );
};

export default Recovery;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 25,
    position: 'relative',
    flex: 1,
  },
  container_resend: {
    position: 'absolute',
    justifyContent: 'flex-end',
    zIndex: 99999,
  },
  content_resend: {
    backgroundColor: 'white',
    height: 430,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    elevation: 8,
    padding: 20,
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
