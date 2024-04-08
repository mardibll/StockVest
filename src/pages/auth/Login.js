import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Input from '../../components/atoms/Input';
import { MaterialIcons } from '../../assets/Icons';
import Buttons from '../../components/atoms/Buttons';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();
  const login = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    Alert.alert("Halo")
    navigation.navigate('Tab_Nav');
  };
  const regist = () => {
    navigation.navigate('Regist');
  };
  const forgot = () => {
    navigation.navigate('Recovery');
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
      <Text style={[styles.text, { fontSize: 22, marginBottom: 20 }]}>Login</Text>
      <View style={{ gap: 20, paddingVertical: 15 }}>
        <Input placholder={'Email'} value={email}
          onChangeText={setEmail} />
        <Input secure={true} placholder={'Password'} value={password}
          onChangeText={setPassword} />
      </View>
      <Text
        style={[styles.text, { fontSize: 16, color: 'red', textAlign: 'right' }]}
        onPress={forgot}>
        Forgot Passwor?
      </Text>
      <Buttons
        style_btn={{ marginVertical: 25 }}
        title={'Login'}
        onPress={login}
      />
      <Text style={{ textAlign: 'center', fontSize: 15 }}>
        Don't have an account?
      </Text>
      <Buttons
        style_btn={{ marginTop: 10 }}
        none={true}
        title={'Registration'}
        onPress={regist}
      />
    </View>
  );
};

export default Login;

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
