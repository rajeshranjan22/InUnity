import React from 'react'
import HomeScreen from './src/Components/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import ProfileScreen from './src/Components/ProfileScreen'
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"

export default function App(){
  const TabNav = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <TabNav.Navigator
      screenOptions={{
        tabBarActiveTintColor:"#0163d2",
        tabBarInactiveTintColor:"gray",
        tabBarLabelStyle:{
          fontSize:12,
          paddingBottom:1,
          fontWeight:500,
        }
      }}
      >
        <TabNav.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarIcon:({focused}) =>(
            <Ionicons name="home" size={28} color={focused?"#0163d2":"gray"}/>
          )
        }}
        />
        <TabNav.Screen name="Profile" component={ProfileScreen} 
        options={{
          tabBarIcon:({focused}) =>(
            <AntDesign name="setting" size={28} color={focused?"#0163d2":"gray"}/>
          )
        }}
        />

      </TabNav.Navigator>

    </NavigationContainer>
  )
}