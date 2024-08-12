import React from "react";
import {
  View,
  Text,
  StyleSheet,
  
} from "react-native";

const ContactUsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      <Text style={styles.contact}>Email: contact@example.com</Text>

      <Text style={styles.contact}>Phone: +1 (234) 567-890</Text>

      <Text style={styles.note}>
        Our support team is available 24/7 to assist you.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  contact: {
    fontSize: 18,
    marginBottom: 10,
    textDecorationLine: "underline",
    color: "blue",
  },
  note: {
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },
});

export default ContactUsScreen;
