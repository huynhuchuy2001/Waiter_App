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
import ChatMessage from '../component/Message/ChatMessage';
import Profile from '../component/Account/Profile';
import EditProfile from '../component/Account/EditProfile/EditProfile';
import EditName from '../component/Account/EditProfile/EditName';
import EditUserName from '../component/Account/EditProfile/EditUserName';
import EditPronouns from '../component/Account/EditProfile/EditPronouns';
import EditBio from '../component/Account/EditProfile/EditBio';
import EditInformations from '../component/Account/InformationSetting/Infomation';
import EditEmail from '../component/Account/InformationSetting/EditEmail';
import EditPhoneNumber from '../component/Account/InformationSetting/EditPhoneNumber';
import RequestFollows from '../component/Activity/RequestFollow';
import RequestFollowDetails from '../component/Activity/RequestFollowDetail';
import Follower from '../component/Activity/Follower';
import VideoShorts from '../component/VideoShort/VideoShort';
import Audios from '../component/VideoShort/Audio';
import LoginActivity from '../component/Activity/LoginActivity';
import EditPassword from '../component/Account/EditProfile/EditPassword';
import MessageControl from '../component/Message/MessageRequest/MessageControl';
import FollowerOnWaiter from '../component/Message/MessageRequest/FollowerOnWaiter';
import PeopleFacebook from '../component/Message/MessageRequest/PeopleOnFacebook';
import OrthersOnWaiter from '../component/Message/MessageRequest/OrtherOnWaiter';
import AddGroups from '../component/Message/MessageRequest/AddGroup';
import HidenWord from '../component/Message/MessageRequest/HidenWord';
import ManageList from '../component/Message/MessageRequest/ManageList';
import Follow from '../component/Setting/ActionSetting/Follow';
import Setting from '../component/Setting/Setting';
import Notifications from '../component/Setting/ActionSetting/Notifications';
import Privacy from '../component/Setting/ActionSetting/Privacy';
import Security from '../component/Setting/ActionSetting/Security';
import Ads from '../component/Setting/ActionSetting/Ads';
import Account from '../component/Setting/ActionSetting/Account';
import Saved from '../component/Setting/ActionSetting/Account/Saved';
import Theme from '../component/Setting/theme/Theme';
import CloseFriend from '../component/Setting/ActionSetting/Account/CloseFriend';
import AccountStatus from '../component/Setting/ActionSetting/Account/AccountStatus';
import Captions from '../component/Setting/ActionSetting/Account/Captions';
import BrowserSettings from '../component/Setting/ActionSetting/Account/Browser';
import SensitiveContent from '../component/Setting/ActionSetting/Account/SensitiveContent';
import Syncing from '../component/Setting/ActionSetting/Account/ContactSyncing';
import Sharing from '../component/Setting/ActionSetting/Account/Sharing';
import Cellular from '../component/Setting/ActionSetting/Account/Cellular';
import OriginalPost from '../component/Setting/ActionSetting/Account/OriginalPost';
import RequestVerification from '../component/Setting/ActionSetting/Account/RequestVerification';
import ReviewActivity from '../component/Setting/ActionSetting/Account/ReviewActivity';
import BrandContent from '../component/Setting/ActionSetting/Account/BrandContent';
import Limits from '../component/Setting/ActionSetting/privacy/Limits';
import Helps from '../component/Setting/ActionSetting/Help';
import PrivacySecurity from '../component/Setting/ActionSetting/help/PrivacySecurity';
import SupportRequest from '../component/Setting/ActionSetting/help/SupportRequest';
import Reports from '../component/Setting/ActionSetting/help/Reports';
import Violations from '../component/Setting/ActionSetting/help/Violations';
import Abouts from '../component/Setting/ActionSetting/About';
import ArchiveStory from '../component/archive/StoriesAchive';
import YourActivity from '../component/Account/activity/YourActivity';
import PhotoAndVideo from '../component/Account/activity/PhotoAndVideo';
import Interactions from '../component/Account/activity/Interactions';
import AccountHistory from '../component/Account/activity/History';
import YourQrCode from '../component/Account/qrcode/YourQrCode';
import ScanQrCode from '../component/Account/qrcode/ScanQRCode';
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
            <Stack.Screen name="MessageControl" component={MessageControl} />
            <Stack.Screen name="FollowerOnWaiter" component={FollowerOnWaiter} />
            <Stack.Screen name="PeopleFacebook" component={PeopleFacebook} />
            <Stack.Screen name="OrthersOnWaiter" component={OrthersOnWaiter} />
            <Stack.Screen name="AddGroups" component={AddGroups} />
            <Stack.Screen name="HidenWord" component={HidenWord} />
            <Stack.Screen name="ManageList" component={ManageList} />
            <Stack.Screen name="Calls" component={Calls} />
            <Stack.Screen name="ChatMessage" component={ChatMessage} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="EditName" component={EditName} />
            <Stack.Screen name="EditUserName" component={EditUserName} />
            <Stack.Screen name="EditPronouns" component={EditPronouns} />
            <Stack.Screen name="EditBio" component={EditBio} />
            <Stack.Screen name="EditInformations" component={EditInformations} />
            <Stack.Screen name="EditEmail" component={EditEmail} />
            <Stack.Screen name="EditPhoneNumber" component={EditPhoneNumber} />
            <Stack.Screen name="RequestFollows" component={RequestFollows} />
            <Stack.Screen name="RequestFollowDetails" component={RequestFollowDetails} />
            <Stack.Screen name="Follower" component={Follower} />
            <Stack.Screen name="Audio" component={Audios} />
            <Stack.Screen name="LoginActivity" component={LoginActivity} />
            <Stack.Screen name="EditPassword" component={EditPassword} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="Follow" component={Follow} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Privacy" component={Privacy} />
            <Stack.Screen name="Security" component={Security} />
            <Stack.Screen name="Ads" component={Ads} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Saved" component={Saved} />
            <Stack.Screen name="Theme" component={Theme} />
            <Stack.Screen name="CloseFriend" component={CloseFriend} />
            <Stack.Screen name="AccountStatus" component={AccountStatus} />
            <Stack.Screen name="Captions" component={Captions} />
            <Stack.Screen name="BrowserSettings" component={BrowserSettings} />
            <Stack.Screen name="SensitiveContent" component={SensitiveContent} />
            <Stack.Screen name="Syncing" component={Syncing} />
            <Stack.Screen name="Sharing" component={Sharing} />
            <Stack.Screen name="Cellular" component={Cellular} />
            <Stack.Screen name="OriginalPost" component={OriginalPost} />
            <Stack.Screen name="RequestVerification" component={RequestVerification} />
            <Stack.Screen name="ReviewActivity" component={ReviewActivity} />
            <Stack.Screen name="BrandContent" component={BrandContent} />
            <Stack.Screen name="Limits" component={Limits} />
            <Stack.Screen name="Helps" component={Helps} />
            <Stack.Screen name="PrivacySecurity" component={PrivacySecurity} />
            <Stack.Screen name="SupportRequest" component={SupportRequest} />
            <Stack.Screen name="Reports" component={Reports} />
            <Stack.Screen name="Violations" component={Violations} />
            <Stack.Screen name="Abouts" component={Abouts} />
            <Stack.Screen name="ArchiveStory" component={ArchiveStory} />
            <Stack.Screen name="YourActivity" component={YourActivity} />
            <Stack.Screen name="PhotoAndVideo" component={PhotoAndVideo} />
            <Stack.Screen name="Interactions" component={Interactions} />
            <Stack.Screen name ="AccountHistory" component={AccountHistory}/>
            <Stack.Screen name ="YourQrCode" component={YourQrCode}/>
            <Stack.Screen name ="ScanQrCode" component={ScanQrCode}/>
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
          tabBarLabel: "Trang ch???",
          tabBarIcon: ({ color, size }) => (
            <Ionic name="home-outline" color = {color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "T??m Ki???m",
          tabBarIcon: ({ color, size }) => (
            <Ionic name="search" color = {color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Shortcut"
        component={VideoShorts}
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
        component={Profile}
        options={{
          tabBarLabel: "T??i kho???n",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle-outline" color = {color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}