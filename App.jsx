import { StatusBar } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import Routes from './src/routes'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Routes />
      <StatusBar style="auto" />
    </View>
  )
}
