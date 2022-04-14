import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Login from "../component/Login/Singin";
import Register from "../component/Login/SingUp";
import Loading from "../component/Loading/Loading";
import Home from "../component/Home/Home";
import Comment from '../component/Comment/Comment';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function AppNavigate(){
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={"Login"}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Waiter" component={TabPage}/>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Comment" component={Comment} />
          </Stack.Navigator>
        </NavigationContainer>
    );
};
export function TabPage() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor : "#1F2739",
        },
        tabBarActiveTintColor : 'rgb(255, 255, 255)',
        tabBarInactiveTintColor : 'rgb(189, 147, 249)',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color = "rgb(248, 248, 242)" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarLabel: "Tìm Kiếm",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-search" color = "rgb(248, 248, 242)" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Shortcut"
        component={Home}
        options={{
          tabBarLabel: "Shortcut",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="audio-video" color = "rgb(248, 248, 242)" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Status"
        component={Home}
        options={{
          tabBarLabel: "Status",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color = "rgb(248, 248, 242)" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profiles"
        component={Home}
        options={{
          tabBarLabel: "Tài khoản",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color = "rgb(248, 248, 242)" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}