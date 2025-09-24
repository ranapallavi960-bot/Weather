import React from 'react';
import { Text, View ,Image} from 'react-native';
import styles from './styles';
import Animated, { FadeIn } from 'react-native-reanimated';

function SplashScreen() {
  return (
    <View style={styles.container}>
      <Animated.Image
       style={styles.splashImage}
         entering={FadeIn.duration(500)}
        source={require('../../assets/images/splashicon.png')}/>
   
    </View>
  );
}

export default SplashScreen;