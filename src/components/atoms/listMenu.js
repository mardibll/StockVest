import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Entypo} from '../../assets/Icons';

const ListMenu = ({data,onpress}) => {
  const {icon, title} = data;
  return (
    <TouchableOpacity style={styles.container} onPress={onpress}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
        {icon}
        <Text style={{fontSize: 18}}>{title}</Text>
      </View>
      <Entypo name="chevron-right" style={{fontSize: 20}} />
    </TouchableOpacity>
  );
};

export default ListMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 13,
    borderBottomWidth: 2,
    borderColor: '#f4f4f4',
  },
});
