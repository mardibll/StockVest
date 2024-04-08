import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Headers from '../../components/atoms/headers';
import Card_Protofolio from '../../components/atoms/Card_Protofolio';
import { unilever } from '../../assets/Images';
import LinearGradient from 'react-native-linear-gradient';
const Protofolio = () => {
  return (
    <View style={styles.container}>
      <Headers back={false} styled={{ paddingVertical: 15, elevation: 2 }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          useAngle={true}
          angle={140}
          angleCenter={{ x: 0.5, y: 0.5 }}
          locations={[0.5, 0.1]}
          colors={['#8168fb', '#fdb320']}
          style={styles.card}
        >

          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.textbolt, { fontSize: 20, fontWeight: '600' }]}>
              Portofolio
            </Text>
            <Text style={[styles.textbolt, { fontSize: 24 }]}>Rp13.400.543</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{ alignItems: 'flex-start' }}>
              <Text style={[styles.textbolt, { fontWeight: '400' }]}>
                Profit/Loss
              </Text>
              <Text style={styles.textbolt}>-98.000</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={[styles.textbolt, { fontWeight: '400' }]}>
                Capital Gain
              </Text>
              <Text style={styles.textbolt}>-12,3%</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={[styles.textbolt, { fontWeight: '400' }]}>Open</Text>
              <Text style={styles.textbolt}>Rp97.000</Text>
            </View>
          </View>

        </LinearGradient>

        <View style={{ marginTop: 20, marginLeft: 20 }}>
          <Text style={[styles.textbolt, { fontSize: 22, color: "black" }]}>StockVest</Text>
        </View>
        {investment.map((item, index) => (
          <Card_Protofolio key={index} data={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Protofolio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // padding:20
  },
  textbolt: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 14,
  },
  card: {
    padding: 20,
    margin: 20,
    gap: 20,
    elevation: 15,
    borderRadius: 10,
  },

});

const investment = [
  { buy: 1.9792, lot: 16, logo: unilever, code: 'UNI', name: 'Unilever' },
  { buy: 1.6372, lot: 26, logo: unilever, code: 'UNL', name: 'Unilever' },
  { buy: 1.7363, lot: 36, logo: unilever, code: 'UNA', name: 'Unilever' },
  { buy: 1.3932, lot: 56, logo: unilever, code: 'UND', name: 'Unilever' },
  { buy: 1.3727, lot: 66, logo: unilever, code: 'UNC', name: 'Unilever' },
  { buy: 1.3273, lot: 36, logo: unilever, code: 'UNR', name: 'Unilever' },
  { buy: 1.7233, lot: 26, logo: unilever, code: 'UNF', name: 'Unilever' },
  { buy: 1.8217, lot: 46, logo: unilever, code: 'UNV', name: 'Unilever' },
];
