import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, ICONS, SHADOW, SIZES} from '../resources';
import {HomeHeader, MainView} from '../components';

const Home = () => {
  const Heading = (title: string) => (
    <>
      <Text style={{...FONTS.h2, color: COLORS.gray, marginBottom: 10}}>
        {title}
      </Text>
    </>
  );
  const subHeading = (title: string) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text style={{...FONTS.h3, color: COLORS.gray}}>{title}</Text>
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{...FONTS.h3, color: COLORS.primary, marginTop: '1%'}}>
          View All
        </Text>
      </TouchableOpacity>
    </View>
  );
  const TaskSection = () => {
    return (
      <View style={{marginTop: 20}}>
        {Heading('TASKS')}
        {subHeading('Todays Task')}
        <View style={{marginVertical: 10}}>
          {/* <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={({item, index}: any) => {
              return (
                <View
                  style={{
                    borderWidth: 1,
                    padding: '5%',
                    width: '45%',
                    borderRadius: 10,
                    ...SHADOW,
                    backgroundColor: COLORS.primaryLigth,
                  }}>
                  <Text style={{color: COLORS.primary, ...FONTS.h4}}>
                    TASK NAME
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{...FONTS.body4, color: COLORS.white}}>
                    TASK description is that this task needs to be in the time
                    limit
                  </Text>
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.lightGray,
                      marginTop: 10,
                    }}>
                    Due Date: 15 May
                  </Text>
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.lightGray,
                      marginTop: 10,
                    }}>
                    Project : THINK APP
                  </Text>
                </View>
              );
            }}></FlatList> */}
        </View>
      </View>
    );
  };
  return (
    <MainView>
      <View style={styles.container}>
        <HomeHeader />
        <ScrollView
          style={{height: SIZES.height, width: '100%', padding: '5%'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={ICONS.CHAT_ICON}
              style={{
                height: 25,
                width: 25,
                marginRight: 10,
                tintColor: COLORS.primary,
              }}
              resizeMode="contain"
            />
            <Text style={{...FONTS.h2, color: COLORS.primary}}>Today : </Text>
            <Text style={{...FONTS.body2, color: COLORS.primary}}>12 May </Text>
          </View>
          {TaskSection()}
        </ScrollView>
      </View>
    </MainView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
