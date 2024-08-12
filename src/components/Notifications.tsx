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

  // const notifications: Notification[] = [
  //   {
  //     id: "1",
  //     title: "New Recipe Added",
  //     content: 'Check out our latest recipe: "Delicious Pasta Carbonara"',
  //     time: "10:00 AM",
  //   },
  //   {
  //     id: "2",
  //     title: "Recipe Update",
  //     content: 'We have updated the recipe: "Homemade Pizza". Check it out!',
  //     time: "11:30 AM",
  //   },
  //   {
  //     id: "3",
  //     title: "Cooking Tip",
  //     content: "Learn how to properly chop onions with our latest cooking tip.",
  //     time: "12:45 PM",
  //   },
  //   {
  //     id: "4",
  //     title: "Special Offer",
  //     content:
  //       'Get 20% off on all ingredients for our featured recipe: "Mango Smoothie".',
  //     time: "2:00 PM",
  //   },
  //   {
  //     id: "5",
  //     title: "Weekly Meal Plan",
  //     content: "Get our curated weekly meal plan for healthy eating.",
  //     time: "3:15 PM",
  //   },
  //   {
  //     id: "6",
  //     title: "Recipe of the Day",
  //     content: 'Today\'s featured recipe: "Grilled Chicken Salad".',
  //     time: "4:30 PM",
  //   },
  //   {
  //     id: "7",
  //     title: "Nutritional Information",
  //     content:
  //       "Learn about the nutritional benefits of adding kale to your diet.",
  //     time: "5:45 PM",
  //   },
  //   {
  //     id: "8",
  //     title: "Seasonal Recipes",
  //     content: "Discover our collection of seasonal recipes for spring.",
  //     time: "6:30 PM",
  //   },
  //   {
  //     id: "9",
  //     title: "Cooking Workshop",
  //     content: 'Join us for a live cooking workshop on "Healthy Meal Prep".',
  //     time: "7:45 PM",
  //   },
  //   {
  //     id: "10",
  //     title: "Recipe Contest",
  //     content: "Enter our recipe contest for a chance to win a gift card.",
  //     time: "9:00 PM",
  //   },
  // ];

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
