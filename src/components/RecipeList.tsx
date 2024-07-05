import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Recipe } from "../models/repice_model";

interface Props {
  recipes: Recipe[];
}

const RecipeList: React.FC<Props> = ({ recipes, navigation }: any) => {
  const renderRecipeItem = ({ item }: { item: Recipe }) => {
    return (
      <View style={styles.recipeContainer}>
        <Image
          source={{
            uri:
              item.imageUrl ??
              "https://firebasestorage.googleapis.com/v0/b/mdev-recipe-book.appspot.com/o/onboard3.png?alt=media&token=eef49acb-aa0c-45be-8505-2826521d8afe",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.time}>{`${item.timeToPrepare} mins`}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={recipes}
      numColumns={1}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderRecipeItem}
    />
  );
};

const styles = StyleSheet.create({
  recipeContainer: {
    flex: 1,
    marginTop: 20,
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});

export default RecipeList;
