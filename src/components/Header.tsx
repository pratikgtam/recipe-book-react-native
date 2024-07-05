import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PageHeader = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Header displayed here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    paddingTop: 30,
  },
  textStyle: {
    color: "#fff",
    textAlign: "center",
  },
});

export default PageHeader;
