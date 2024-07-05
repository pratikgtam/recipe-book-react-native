import React from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

interface CustomListItemProps {
  title: string;

  imageSource: ImageSourcePropType;
  onPress: () => void;
}

const CustomListItem: React.FC<CustomListItemProps> = ({
  title,
  imageSource,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={imageSource} style={styles.image} />

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 20,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 25,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
});

export default CustomListItem;
