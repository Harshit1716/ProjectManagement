import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import {COLORS, ICONS, SIZES} from '../resources';
const HeaderComponent = () => {
  return (
    <View
      style={{
        paddingTop: Platform.OS == 'ios' ? '13%' : '5%',
        paddingBottom: '5%',
        // height: '20%',
        width: '100%',
        paddingHorizontal: '2%',
        backgroundColor: COLORS.lightGray1,
        shadowColor: COLORS.lightGray,
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.6,
        shadowRadius: 3,
        borderColor: COLORS.lightGray,
        elevation: 4,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Image
              style={{
                height: 60,
                width: 60,
                borderRadius: 80,
                marginRight: 5,
              }}
              source={ICONS.PROFILE_ICON}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: COLORS.primary,
                fontWeight: '700',
                fontSize: SIZES.h3,
              }}>
              HI SALVIS
            </Text>
            <Text
              style={{color: COLORS.primary, fontSize: SIZES.h4, marginTop: 5}}>
              Working{'(on a tight schedule)'}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image
            style={{
              height: 40,
              width: 40,
              borderRadius: 80,
            }}
            source={ICONS.NOTIFICATION_ICON}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    backgroundColor: '#ccc',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitial: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    marginLeft: 10,
  },
  notificationContainer: {
    backgroundColor: '#ccc',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationCount: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HeaderComponent;
