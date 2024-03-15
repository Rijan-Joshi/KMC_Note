import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Importing the screens
import HomeScreen from "../screens/HomeScreen";
import CourseScreen from "../screens/CourseScreen";
import FavoriteScreens from "../screens/FavoriteScreens";
import PurchasedCourse from "../screens/PurchasedCourse";
import { BlurView } from "expo-blur";
import { Icon } from "../../utils/customIcons.js";

//Importing the constants
import { BORDER_RADIUS, COLORS, SIZES } from "../../constants/index";

const Tab = createBottomTabNavigator();

const TabNavigators = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabNavigatorStyle,
        tabBarBackground: () => (
          <BlurView style={styles.blurview} intensity={40} tint="dark" />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="home"
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
              size={SIZES.size_24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Course"
        component={CourseScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="books"
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
              size={SIZES.size_24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreens}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="heart"
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
              size={SIZES.size_24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PurchasedCourse"
        component={PurchasedCourse}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="bell"
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
              size={SIZES.size_24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabNavigatorStyle: {
    height: 80,
    position: "absolute",
    elevation: 0,
    borderTopColor: "transparent",
    borderTopWidth: 0,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderRadius: BORDER_RADIUS.radius_8,
  },
  blurview: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default TabNavigators;
