import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '../../assets/Icons';
import Input from '../../components/atoms/Input';
import Buttons from '../../components/atoms/Buttons';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
const Regist = () => {
  const [alerts, setAlerts] = useState({ alertEmail: false, alertPassword: false, alertVerify: false });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verify, setVerify] = useState('');

  const navigation = useNavigation();

  const regist = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@.$!%*?&])[A-Za-z\d@.$!%*?&]{8,}/;
    setAlerts({
      alertEmail: false,
      alertPassword: false,
      alertVerify: false
    });
    if (!regexEmail.test(email)) {
      setAlerts(prevAlerts => ({
        ...prevAlerts,
        alertEmail: true
      }));
    } else if (!regexPassword.test(password)) {
      setAlerts(prevAlerts => ({
        ...prevAlerts,
        alertPassword: true
      }));
    } else if (verify !== password) {
      setAlerts(prevAlerts => ({
        ...prevAlerts,
        alertVerify: true
      }));
    } else {
      setEmail("")
      setPassword("")
      setVerify("")
      navigation.navigate('Validasi');
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <MaterialIcons
          name="candlestick-chart"
          style={{ fontSize: 25, color: 'black' }}
        />
        <Text style={[styles.text, { fontSize: 25 }]}>Stockvest</Text>
        <View style={styles.animasi}></View>
      </View>
      <Text style={[styles.text, { fontSize: 22, marginBottom: 20 }]}>
        Sign Up
      </Text>
      <View style={{ paddingVertical: 15, gap: 20 }}>
        <View style={{ height: 60 }}>
          <Input placholder={'Email'} onChangeText={setEmail} value={email} />
          {alerts.alertEmail && <Text>Email Invalid *</Text>}
        </View>
        <View style={{ height: 60 }}>
          <Input secure={true} placholder={'Password'} onChangeText={setPassword} value={password} />
          {alerts.alertPassword && <Text>Password Invalid *</Text>}
        </View>
        <View style={{ height: 60 }}>
          <Input secure={true} placholder={'Confirm Password'} onChangeText={setVerify} value={verify} />
          {alerts.alertVerify && <Text>Passwords do not match *</Text>}
        </View>
      </View>

      <Buttons
        style_btn={{ marginVertical: 10 }}
        title={'Registrations'}
        onPress={regist}
      />

      <Buttons
        style_btn={{ marginTop: 20 }}
        none={true}
        title={'With Google'}
        image={true}
      />
      <Text style={{ textAlign: 'center', fontSize: 15, paddingTop: 40 }}>
        Already have an account?
      </Text>
      <Buttons
        style_btn={{ marginTop: 10 }}
        none={true}
        title={'Login'}
        // onPress={login}
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
