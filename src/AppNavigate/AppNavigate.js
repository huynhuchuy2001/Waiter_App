import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionic from "react-native-vector-icons/Ionicons";
import Login from "../component/Login/Singin";
import Register from "../component/Login/SingUp";
import Loading from "../component/Loading/Loading";
import Home from "../component/Home/Home";
import Comment from '../component/Comment/Comment';
import Search from '../component/Search/Search';
import SearchDetails from '../component/Search/SearchDetails';
import SearchHistorys from '../component/Search/SearchHistory';
import SearchResult from '../component/Search/SearchResult';
import Activitys from '../component/Activity/Activity';
import Discover from '../component/Activity/Discover';
import Message from '../component/Message/Message';
import RequestMessage from '../component/Message/MessageRequest/RequestMessage';
import HiddenRequest from '../component/Message/MessageRequest/HiddenRequest';
import SearchMessage from '../component/Message/SearchMessage';
import NewMessage from '../component/Message/NewMessage';
import Calls from '../component/Message/Call';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function AppNavigate(){
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={"Login"} screenOptions = {{headerShown : false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Waiter" component={TabPage} options = {{headerShown : false}}/>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Comment" component={Comment} />
            <Stack.Screen name="SearchDetails" component={SearchDetails} />
            <Stack.Screen name="SearchHistorys" component={SearchHistorys} />
            <Stack.Screen name="SearchResults" component={SearchResult} />
            <Stack.Screen name="Discovers" component={Discover} />
            <Stack.Screen name="Messages" component={Message} />
            <Stack.Screen name="RequestMessages" component={RequestMessage} />
            <Stack.Screen name="HiddenRequest" component={HiddenRequest} />
            <Stack.Screen name="SearchMessage" component={SearchMessage} />
            <Stack.Screen name="NewMessage" component={NewMessage} />
            <Stack.Screen name="Calls" component={Calls} />
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
          backgroundColor : "black",
        },
        tabBarActiveTintColor : 'rgb(189, 147, 249)',
        tabBarInactiveTintColor : 'rgb(255, 255, 255)',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <Ionic name="home-outline" color = {color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Tìm Kiếm",
          tabBarIcon: ({ color, size }) => (
            <Ionic name="search" color = {color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Shortcut"
        component={Home}
        options={{
          tabBarLabel: "Shortcut",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="video-box" color = {color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activitys}
        options={{
          tabBarLabel: "Activity",
          tabBarIcon: ({ color, size }) => (
            <Ionic name="heart-outline" color = {color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profiles"
        component={Home}
        options={{
          tabBarLabel: "Tài khoản",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle-outline" color = {color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}