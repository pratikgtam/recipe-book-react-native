import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import RecipeList from './RecipeList';
import {getAllRecipes} from '../services/recipe_services';
import {Recipe} from '../models/repice_model';

const RecipesScreen = ({navigation}: any) => {
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);

  React.useEffect(() => {
    getAllRecipes()
      .then(recipes => {
        setRecipes(recipes);
      })
      .catch(error => {
        console.error('Error fetching recipes: ', error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <RecipeList recipes={recipes} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default RecipesScreen;
