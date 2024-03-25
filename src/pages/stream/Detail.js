import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Buttons from '../../components/atoms/Buttons';
import {unilever} from '../../assets/Images';

const Detail = ({data,amend}) => {
  const {lots, price, status, Open, title} = data;
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'white',
        height: 380,
        elevation: 5,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      }}>
      <View style={{paddingHorizontal: 20, paddingTop: 15}}>
        <View>
          <Text style={[styles.text_bold, {fontSize: 20}]}>Order Detail</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
            paddingVertical: 15,
          }}>
          <Image
            source={unilever}
            style={{borderRadius: 100, height: 45, width: 45}}
          />
          <View>
            <Text style={styles.text_bold}>{title}</Text>
            <Text style={{fontSize: 12}}>Pt. Unilever</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 15,
            backgroundColor: '#f3f3f3',
            borderRadius: 10,
          }}>
          <View style={{gap: 10}}>
            <Text style={styles.text}>Order Time</Text>
            <Text style={styles.text}>Status</Text>
            <Text style={styles.text}>Lot</Text>
            <Text style={styles.text}>Price</Text>
            <Text style={[styles.text, {color: 'red', fontSize: 14}]}>
              Investment
            </Text>
          </View>
          <View style={{alignItems: 'flex-end', gap: 10}}>
            <Text style={styles.text}>01 Mar 2021, 10:00:01</Text>
            <Text style={styles.text}>{status}</Text>
            <Text style={styles.text}>{lots}</Text>
            <Text style={styles.text}>{price / 100}</Text>
            <Text style={[styles.text, {color: 'red', fontSize: 14}]}>
              Rp{price * lots}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 20,
          }}>
          <Buttons
            title={'Cancel Order'}
            style_btn={[styles.btn]}
            color_text={'white'}
            color_btn={'red'}
          />
          <Buttons title={'Amend'} style_btn={styles.btn} onPress={amend} />
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  btn: {
    width: '47%',
    backgroundColor: 'red',
    height: 45,
    borderWidth: 0,
  },
  text_bold: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
  },
  text: {
    fontSize: 12,
    color: 'black',
  },
});
