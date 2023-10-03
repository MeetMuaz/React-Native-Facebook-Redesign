
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AppNavigation from './screen/AppNavigation';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <AppNavigation />
    </View>
  )
}

