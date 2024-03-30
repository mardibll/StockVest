import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Buttons from '../../components/atoms/Buttons';
import {useNavigation} from '@react-navigation/native';
import Headers from '../../components/atoms/headers';
import {logo} from '../../assets/Images';
const Splash = () => {
  const navigation = useNavigation();
  const getStart = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Headers back={false} />
      <View style={{paddingTop: 50}}>
        <View style={{height: 300, width: '100%', paddingBottom: 20}}>
          <Image
            source={logo}
            alt="error"
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <Text style={[styles.text, {paddingHorizontal: 20, letterSpacing: 2}]}>
          Easy Stock Investment For Beginners
        </Text>
        <Text
          style={{fontSize: 14, textAlign: 'center', paddingHorizontal: 50}}>
          Screening feature to filter stocks to maximize profits
        </Text>
        <Buttons
          title={"Let's Get Started"}
          onPress={getStart}
          style_btn={{margin: 20, marginTop: 50}}
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
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
