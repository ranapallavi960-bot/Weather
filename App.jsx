import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import  SplashScreen  from './src/screens/Splash';
import { useDispatch, useSelector } from 'react-redux';
import {setIsSplash} from './src/store/slices/weatherSlice'
import HomeScreen from './src/screens/Home'
const App = () => {
  const state = useSelector(state => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      dispatch(setIsSplash(false));
      console.log('This is timeout function');
    }, 2000);

    return () => {
      clearTimeout(myTimeout);
    };
  }, []);

  if (state.isSplash) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.containerContent}>
        
       
      </View> */}
      <HomeScreen/>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
