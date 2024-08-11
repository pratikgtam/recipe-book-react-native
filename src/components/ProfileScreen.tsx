import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomListItem from "./list_tile";
import { useUser } from "../usercontext";

const ProfileScreen = ({ navigation }: any) => {
  const { user, signOut } = useUser();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/profile.png")}
          style={styles.profileImage}
        />
        <Text style={styles.username}>{user?.name}</Text>
      </View>

      <CustomListItem
        title="My Profile"
        imageSource={require("../../assets/profile.png")}
        onPress={() => navigation.navigate("My Profile")}
      />

      <CustomListItem
        title="Notifications"
        imageSource={require("../../assets/notification.png")}
        onPress={() => navigation.navigate("Notifications")}
      />

      <CustomListItem
        title="Contact us"
        imageSource={require("../../assets/question.png")}
        onPress={() => navigation.navigate("Contact")}
      />

      <CustomListItem
        title="Logout"
        imageSource={require("../../assets/logout.png")}
        onPress={()=>{
          signOut();


          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          })
        }
      }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    marginBottom: 30,
    alignSelf: "stretch",
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },

  username: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },
  row: {
    marginBottom: 20,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "flex-start",
  },
  sectionTitle: {
    marginLeft: 20,
    fontSize: 20,
    alignSelf: "stretch",
  },

  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});

export default ProfileScreen;
