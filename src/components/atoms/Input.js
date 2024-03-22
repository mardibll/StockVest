import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Feather} from '../../assets/Icons';

export default function Input({secure, type, placholder, styleshed}) {
  const [Private, setIsPrivate] = useState(true); // Renamed state variable

  return (
    <View style={[styles.container, styleshed]}>
      <TextInput
        style={[styles.input, {width: secure ? '90%' : '100%'}]}
        placeholderTextColor="#A2A0A8"
        placeholder={placholder}
        keyboardType={type}
        secureTextEntry={secure ? Private : false}
      />

      {secure && (
        <Feather
          name={Private ? 'eye-off' : 'eye'}
          style={{fontSize: 20, color: 'gray'}}
          onPress={() => setIsPrivate(!Private)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  input: {
    width: '90%',
    fontSize: 16,
    paddingHorizontal: 20,
  },
});
