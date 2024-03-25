import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {icgoogle} from '../../assets/Images';

const Buttons = ({style_btn, color_btn, title, image, onPress,color_text}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,
        style_btn,
        {backgroundColor: color_btn ? color_btn : '#e8f44c'},
      ]}>
      {image && <Image source={icgoogle} style={styles.image} />}
      <Text style={[{color:color_text?color_text: 'black', fontSize: 18, fontWeight: '500'}]}>
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
