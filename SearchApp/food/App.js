import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import RestaurentDetailsScreen from './src/screens/RestaurantDetailsScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';

const navigator = createStackNavigator({

  Search: SearchScreen,
  RestaurantDetails: RestaurantDetailsScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);