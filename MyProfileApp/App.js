// I created a profile card screen with my photo, name, course and bio. 05/18/2026
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <Image
        source={require('./assets/profile.jpg')}
        style={styles.photo}
      />
      <Text style={styles.name}>Kayela</Text>
      <Text style={styles.course}>BS Multimedia Arts - CS126</Text>
      <Text style={styles.bio}>A student who loves art and expressing herself through it!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFE4E8',
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  course: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});