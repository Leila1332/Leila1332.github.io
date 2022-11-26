import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.input2}>
        Hello world! First React Native App This is a paragragh explaining what
        this app is all about. As you can see there are already many components
        including text, images and buttons.
      </Text>
      <StatusBar style="auto" />
      <Text>What would you like to get out of this course?</Text>
      <TextInput style={styles.input} multiline={true} />
      <Text>An emoji describing how you are feeling about the course:</Text>
      <TextInput style={styles.input} />
      <Button title="Submit" onPress={() => Alert.alert("Bra Kurs")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "White",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  input2: { backgroundColor: "blue" },
});
