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

import {doPasswordReset,} from '../services/authentication';


const ForgotPassword: React.FC = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  
  const [loading, setLoading] = useState<boolean>(false);
  

  const onSubmit = () => {
    if (!email.trim()) {
      Alert.alert('Please enter your email address');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Please enter a valid email address');
      return;
    }

    // Check if input email and password match any entry in the list
    setLoading(true);
    doPasswordReset(email)
      .then((res) => {
        console.log(res);
        Alert.alert('Email sent successfully to reset password');
        navigation.replace('Login');
      })
      .catch(error => {
        console.error('Error logging in:', error);
        Alert.alert('Something went wrong. Please try again later.');
      });
    setLoading(false);
  };

  

  

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#A9A9A9'}
          placeholder="Email Address"
          onChangeText={text => setEmail(text)}
          value={email}
        />
      </View>
      
      <TouchableOpacity onPress={onSubmit} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>
          {loading ? 'Loading...' : 'Submit'}
        </Text>
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
    
    marginTop: 32,
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

export default ForgotPassword;
