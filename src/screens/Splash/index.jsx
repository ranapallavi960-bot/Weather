import React from 'react';
import { Text, View ,Image} from 'react-native';
import styles from './styles';

function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.splashImage} source={require('../../assets/images/splashicon.png')}/>
   
    </View>
  );
}

export default SplashScreen;