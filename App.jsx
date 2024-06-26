import React from 'react'
import Ionic from "react-native-vector-icons/Ionicons"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/components/screens/Home'
import Search from './src/components/screens/Search'
import Reels from './src/components/screens/Reels'
import Activiry from './src/components/screens/Activiry'
import Profile from './src/components/screens/Profile'
import Status from './src/components/sreenComponents/Status'


export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const bottomTabsScreen = () => {
    return(
      <Tab.Navigator 
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBaShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50
          },

          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if(route.name === "Home"){
              iconName = focused ? 'home' : 'home-outline';
              size = focused ? size + 8 : size + 2;
            }else if(route.name === "Search"){
              iconName = focused ? 'search' : 'search-outline'
            }
            else if(route.name === "Reels"){
              iconName = focused ? 'add-circle' : 'add-circle-outline'
            }
            else if(route.name === "Activity"){
              iconName = focused ? 'image' : 'image-outline'
            }
            else if(route.name === "Profile"){
              iconName = focused ? 'person-circle' : 'person-circle-outline'
            }
            return <Ionic name={iconName} size={size} color={"black"} />
          }
        })}>
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Search' component={Search} />
          <Tab.Screen name='Reels' component={Reels} />
          <Tab.Screen name='Activity' component={Activiry} />
          <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Bottom' component={bottomTabsScreen} />
        <Stack.Screen name='Status' component={Status} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}