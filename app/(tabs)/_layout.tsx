import {Tabs} from "expo-router";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function RootLayout() {

  return <Tabs
  screenOptions={{
    tabBarActiveTintColor: 'blue',
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerShadowVisible: false,
    tabBarStyle: {
      backgroundColor: '#fff',
    },
  }}
  >
    <Tabs.Screen name="index" options={{
      title: 'Home',
      
      tabBarIcon: ({focused, color})=> <Ionicons name={focused? 'home': 'home-outline'} style={{color: 'lightGray' }} color={color} size={20} />
    }} />
    <Tabs.Screen name="about" options={{
      title: 'About',
      tabBarIcon: ({focused, color})=> <Ionicons name={focused? "information-circle": 'information-circle-outline'} style={{color: 'lightGray'}} color={color} size={20} />
    }} />
    <Tabs.Screen name="contact" options={{
      title: 'Contact us',
      tabBarIcon: ({focused, color})=> <MaterialCommunityIcons name={focused? "contacts": 'contacts-outline'} style={{color: 'lightGray'}} color={color} size={19} />
    }} />
  </Tabs>
};
