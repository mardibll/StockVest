import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CardItem from '../../components/atoms/CardItem';
import {index_ITMG} from '../../db/Itmg';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {IHSG} from '../../assets/Images';
import Headers from '../../components/atoms/headers';
import Inputs from '../../components/atoms/Inputs';
import Input from '../../components/atoms/Input';
const Home = () => {
  const [isMenu, setisMenu] = useState('Trending');
  useEffect(() => {
    index_ITMG();
  }, []);
  return (
    <View style={styles.container}>
      <Headers back={false}/>
     <ScrollView showsVerticalScrollIndicator={false}>
     <View style={{padding: 20}}>
        <Input placholder={'Search'} />
      </View>
      <View style={{width: '100%', backgroundColor: 'red', height: 250}}>
        <Image source={IHSG} alt="error" style={styles.image} />
      </View>
      <View style={{padding: 20, gap: 10, marginTop: 15}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {menu.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.btn_menu,
                {
                  backgroundColor: isMenu === item.title ? 'black' : '#f3f3f3',
                  elevation: isMenu === item.title ? 10 : 2,
                },
              ]}
              onPress={() => setisMenu(item.title)}>
              <Text style={{color: isMenu === item.title ? 'white' : 'black'}}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View>
          {dataArray.map((data, index) => (
            <CardItem key={index} data={data} styled={styles.card} />
          ))}
        </View>
      </View>
     </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  btn_menu: {
    padding: 5,
    paddingHorizontal: 9,
    borderRadius: 15,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  input: {
    // backgroundColor:"",
    borderWidth: 1,
    margin: 20,
  },
});

const menu = [
  {title: 'Trending'},
  {title: 'Top Guiner'},
  {title: 'Top Loser'},
  {title: 'Most Active'},
];

const dataArray = [
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 50000,
    lots: 3,
    status: 'Match',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 5000,
    lots: 3,
    status: 'Open',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 5000,
    lots: 3,
    status: 'Withdrawal',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 50000,
    lots: 3,
    status: 'Match',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 5000,
    lots: 3,
    status: 'Open',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 5000,
    lots: 3,
    status: 'Withdrawal',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 50000,
    lots: 3,
    status: 'Match',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 5000,
    lots: 3,
    status: 'Open',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 5000,
    lots: 3,
    status: 'Withdrawal',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 50000,
    lots: 3,
    status: 'Match',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 5000,
    lots: 3,
    status: 'Open',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 5000,
    lots: 3,
    status: 'Withdrawal',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 50000,
    lots: 3,
    status: 'Match',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 5000,
    lots: 3,
    status: 'Open',
  },
  {
    title: 'BLTA',
    name: 'unilever 1',
    price: 5000,
    lots: 3,
    status: 'Withdrawal',
  },
];
