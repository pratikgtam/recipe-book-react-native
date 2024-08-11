import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  doCreateUserWithEmailAndPassword,
  saveUserToFirestore,
} from '../services/authentication';
import { useUser } from '../usercontext';

const Signup = ({navigation}: any) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { signIn } = useUser();

  const handleSignUp = async () => {
    if (!name.trim()) {
      Alert.alert('Please enter your name');
      return;
    }
    if (!email.trim()) {
      Alert.alert('Please enter your email address');
      return;
    }
    if (!password.trim()) {
      Alert.alert('Please enter your password');
      return;
    }
    if (!age.trim()) {
      Alert.alert('Please enter your age');
      return;
    }
    if (!address.trim()) {
      Alert.alert('Please enter your address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Password must be at least 6 characters long');
      return;
    }

    if (isNaN(parseInt(age))) {
      Alert.alert('Please enter a valid age');
      return;
    }

    // console.log("Sign Up button pressed");

    // Call the Firebase authentication function here
    setLoading(true);
    await doCreateUserWithEmailAndPassword(email, password)
      .then(cred => {
        saveUserToFirestore(cred.user.uid, name, email, address, age);
        signIn({name: name, email: email});

        navigation.replace('Home');
      })
      .catch(error => {
        Alert.alert(error.message);
      });
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor={'#A9A9A9'}
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor={'#A9A9A9'}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'#A9A9A9'}
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor={'#A9A9A9'}
        onChangeText={text => setAge(text)}
        value={age}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        placeholderTextColor={'#A9A9A9'}
        onChangeText={text => setAddress(text)}
        value={address}
      />
      <TouchableOpacity onPress={handleSignUp} style={styles.signupButton}>
        <Text style={styles.signupButtonText}>
          {loading ? 'Loading...' : 'Sign Up'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLink}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,

    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    marginBottom: 16,
  },
  signupButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 32,
    width: '100%',
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    color: '#007AFF',
    marginTop: 16,
    textAlign: 'center',
  },
});

export default Signup;
