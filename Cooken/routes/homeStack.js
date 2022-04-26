import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/homePage';
import Login from '../screens/login';
import Profile from '../screens/profile';
import Register from '../screens/register';
import Results from '../screens/result';
import RecipeDetails from '../screens/recipeDetails';


const screens = {
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Home:{
    screen: Home
  },
  Profile: {
    screen: Profile
  },
  Results: {
    screen: Results
  },
  RecipeDetails: {
    screen: RecipeDetails
  }

}
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: false,
  }
})

export default createAppContainer(HomeStack)