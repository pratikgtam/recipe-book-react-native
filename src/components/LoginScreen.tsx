import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {doSignInWithEmailAndPassword} from '../services/authentication';
import { useUser } from '../usercontext';

const Login: React.FC = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { signIn } = useUser();

  const handleLogin = () => {
    if (!email.trim()) {
      Alert.alert('Please enter your email address');
      return;
    }
    if (!password.trim()) {
      Alert.alert('Please enter your password');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Please enter a valid email address');
      return;
    }

    // Check if input email and password match any entry in the list
    setLoading(true);
    doSignInWithEmailAndPassword(email, password)
      .then((res) => {
console.log(res);
        signIn({name: res?.displayName, email: res?.email});
        console.log('User logged in successfully');
        navigation.replace('Home');
      })
      .catch(error => {
        console.error('Error logging in:', error);
        Alert.alert('Invalid email or password');
      });
    setLoading(false);
  };

  const handleForgotPassword = () => {};

  const handleSignUp = () => {
    navigation.replace('Signup');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Login</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#A9A9A9'}
          placeholder="Email Address"
          onChangeText={text => setEmail(text)}
          value={email}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={'#A9A9A9'}
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>
          {loading ? 'Loading...' : 'Login'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpLink}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,

    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 132,
    width: '100%',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginTop: 16,
  },
  forgotPassword: {
    color: '#007AFF',
  },
  signUpLink: {
    color: '#007AFF',
    marginTop: 16,
    textAlign: 'center',
  },
});

export default Login;
