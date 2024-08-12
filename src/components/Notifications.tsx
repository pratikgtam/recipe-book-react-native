import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getNotificationsFromFirestore } from "../services/notifications_service";
import { DocumentData } from "firebase/firestore";
import { Notification } from "../models/notification_model";


const NotificationScreen: React.FC = () => {

  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await getNotificationsFromFirestore();
      console.log(data);
      
      setNotifications(data);
    };

    fetchNotifications();
  }, []);

  

  const renderNotificationItem = ({ item }: { item: Notification }) => {
    return (
      <View style={styles.notificationContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.description}</Text>
        <Text style={styles.time}>{item.createdAt}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotificationItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  listContent: {
    flexGrow: 1,
  },
  notificationContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: "#888",
  },
});

export default NotificationScreen;
