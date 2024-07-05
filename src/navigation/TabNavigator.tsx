import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import RecipesScreen from '../components/RecipeScreen';
import ProfileScreen from '../components/ProfileScreen';

import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Welcome"
      tabBar={props => <BottomTabBar {...props} />}
      // screenOptions={({route}) => ({
      //   tabBarIcon: ({focused, color, size}) => {
      //     let iconName;

      //     if (route.name === 'Welcome') {
      //       iconName = focused ? 'home' : 'home-outline';
      //     } else if (route.name === 'Profile') {
      //       iconName = focused ? 'account' : 'account-outline';
      //     }

      //     return <Icon name="home" size={size} color={color} />;
      //   },
      // })}
    >
      <Tab.Screen
        name="Welcome"
        component={RecipesScreen}
        options={{
          tabBarLabel: 'Recipes',
          tabBarIcon: () => <Icon name="home" type="ionicon" size={24} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <Icon name="person" type="ionicon" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
