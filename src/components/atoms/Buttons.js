import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {icgoogle} from '../../assets/Images';

const Buttons = ({style_btn, none, title, image, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,
        style_btn,
        {backgroundColor: none ? 'white' : '#e8f44c'},
      ]}>
      {image && <Image source={icgoogle} style={styles.image} />}
      <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderWidth: 1,
    borderColor: '#e8f44c',
    borderRadius: 15,
    flexDirection: 'row',
    gap: 10,
  },
  image: {
    height: 20,
    width: 20,
  },
});
