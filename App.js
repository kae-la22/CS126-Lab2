// I updated the profile card with name input, greeting, and counter. 05/18/2026
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';

// --- WEEK 3 LAB ASSIGNMENT (Placed safely outside the component) ---
// 1. Changing the main name [cite: 85]
const myName = "Alex"; 

// 2. Creating a modified greeting message [cite: 87]
const greet = (name) => {
  return `Yo, ${name}! Welcome to the app!`;
};

// 3. Adding at least 2 more classmates (making 5 total) [cite: 86]
const classmates = ["Ana", "Ben", "Carlo", "David", "Elena"];

// 4. Using console.log to print the outcome [cite: 95]
console.log(classmates.map(name => greet(name)));
// ------------------------------------------------------------------

export default function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  const greeting = name === '' ? 'Please enter your name!' : `Hello, ${name}!`;
  const message = count > 0
    ? `${name || 'You'}, you tapped ${count} times!`
    : 'Tap the + button to start!';

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Image
        source={require('./assets/profile.jpg')}
        style={styles.photo}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={setName}
        value={name}
      />

      <Text style={styles.greeting}>{greeting}</Text>
      <Text style={styles.message}>{message}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setCount(0)}>
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFE4E8',
    padding: 20,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    width: 280,
    marginBottom: 16,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  greeting: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    color: '#333',
    marginBottom: 24,
  },
  buttonContainer: {
    width: 280,
    backgroundColor: '#F4A0B0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  button: {
    padding: 16,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E8899A',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});