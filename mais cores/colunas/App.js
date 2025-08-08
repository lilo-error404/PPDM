import { View } from 'react-native'
import { styles } from './styles'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <View style={styles.area1}></View>
        <View style={styles.area2}></View>
      </View>

      <View style={styles.linha}>
        <View style={styles.area3}></View>
        <View style={styles.area4}></View>
      </View>

      <View style={styles.linha}>
        <View style={styles.area5}></View>
        <View style={styles.area6}></View>
      </View>
    </View>
  )
}