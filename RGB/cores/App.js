import { View, Text } from 'react-native'
import { styles } from './styles'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.area1}>
        <Text style={styles.texto}>RED</Text>
      </View>
      <View style={styles.area2}>
        <Text style={styles.texto}>GREEN</Text>
      </View>
      <View style={styles.area3}>
        <Text style={styles.texto}>BLUE</Text>
      </View>
    </View>
  )
}
