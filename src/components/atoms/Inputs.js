import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Feather} from '../../assets/Icons';

const Inputs = () => {
  return (
    <View style={styles.container}>
      <Feather name="search" />
      <TextInput style={{backgroundColor: 'navy', width: '100%'}} />
    </View>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems:"center"
  },
});
