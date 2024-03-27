import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Headers from '../../components/atoms/headers';
import {
  Entypo,
  EvilIcons,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from '../../assets/Icons';
import ListMenu from '../../components/atoms/listMenu';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Headers back={false} styled={styles.header} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content_top}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={{
                uri: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp',
              }}
              style={styles.image}
              alt="error"
            />
            <Text style={styles.textbold}>Lery Jhon'nes</Text>
            <Text style={{color: 'green', fontSize: 12}}>Lihat profile</Text>
          </View>
          <View style={styles.balance}>
            <View style={{alignItems: 'center'}}>
              <Text style={[styles.textbold, {color: 'gray'}]}>
                Trading Balance
              </Text>
              <Text style={styles.textbold}>Rp 19,873</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={[styles.textbold, {color: 'gray'}]}>Eqity</Text>
              <Text style={styles.textbold}>Rp 25,023</Text>
            </View>
          </View>
          <View style={styles.content_menu}>
            {menu.map((item, index) => (
              <TouchableOpacity key={index} style={{alignItems: 'center'}}>
                <MaterialCommunityIcons name={item.icon} style={styles.icon} />
                <Text style={{color: 'black'}}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.content_list}>
          <View style={{paddingLeft: 20, paddingRight: 5}}>
            {listmenu.map((item, index) => (
              <ListMenu key={index} data={item} />
            ))}
          </View>
        </View>
        <View style={styles.content_bottom}>
          <TouchableOpacity style={styles.log_out}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
              <Entypo name="log-out" style={{fontSize: 20, color: 'red'}} />
              <Text style={{fontSize: 18, color: 'red', fontWeight: '600'}}>
                Log Out
              </Text>
            </View>
            <Entypo name="chevron-right" style={{fontSize: 20, color: 'red'}} />
          </TouchableOpacity>
          <Text
            style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
            StockVest Sekuritas Digital
          </Text>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
            <Image
              source={{
                uri: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/07/24/Twitter-lama-3543351973.png',
              }}
              alt="error"
              style={styles.logo_img}
            />
            <Image
              source={{
                uri: 'https://img.freepik.com/premium-vector/instagram-vector-social-media-icon-instagram-logo-illustration_153454-589.jpg?size=626&ext=jpg',
              }}
              alt="error"
              style={styles.logo_img}
            />
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2021/06/15/12/28/tiktok-6338429_960_720.png',
              }}
              alt="error"
              style={styles.logo_img}
            />
          </View>
          <View>
            <Text style={{textAlign: 'center'}}>Version : 2.20.0 (10795)</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 20,
    elevation: 3,
    paddingBottom: 10,
    marginBottom: 1,
  },
  content_top: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 20,
    paddingTop: 30,
    elevation: 2,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
    resizeMode: 'center',
  },
  balance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.4,
    borderColor: '#c8ecec',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  content_menu: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  content_list: {
    backgroundColor: 'white',
    marginTop: 5,
    elevation: 5,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  content_bottom: {
    backgroundColor: 'white',
    marginTop: 5,
    gap: 20,
    padding: 5,
    paddingBottom: 40,
    paddingTop: 8,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 5,
  },
  log_out: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 10,
  },
  icon: {
    fontSize: 23,
    padding: 0,
    color: '#e8f44c',
  },
  textbold: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logo_img: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
});

const menu = [
  {
    title: 'Deposit',
    icon: 'archive-arrow-up-outline',
  },
  {
    title: 'Withdrawl',
    icon: 'archive-arrow-down-outline',
  },
  {
    title: 'History',
    icon: 'history',
  },
];

const listmenu = [
  {
    icon: <Feather name="user" style={{fontSize: 20}} />,
    title: 'Akun',
  },
  {
    icon: <Feather name="lock" style={{fontSize: 20}} />,
    title: 'Security',
  },
  {
    icon: <EvilIcons name="question" style={{fontSize: 20}} />,
    title: 'FAQs',
  },
  {
    icon: <MaterialIcons name="support" style={{fontSize: 20}} />,
    title: 'Live Support',
  },
  {
    icon: <Feather name="globe" style={{fontSize: 20}} />,
    title: 'Bahasa',
  },
  {
    icon: <MaterialIcons name="dark-mode" style={{fontSize: 20}} />,
    title: 'Mode Gelap',
  },
  {
    icon: <Feather name="user-plus" style={{fontSize: 20}} />,
    title: 'Temukan Teman',
  },
  {
    icon: <MaterialIcons name="notifications-none" style={{fontSize: 20}} />,
    title: 'Notifikasi',
  },
  {
    icon: <Feather name="star" style={{fontSize: 20}} />,
    title: 'Beri Stockvest Rating',
  },
];
