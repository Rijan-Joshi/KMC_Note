import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Importing the screen
import DetailsScreen from "../screens/DetailsScreen";
import PaymentScreen from "../screens/PaymentScreen";
import TabNavigators from "./TabNavigators";

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="TabNavigators"
          component={TabNavigators}
          options={{
            animationEnabled: true,
            animationTypeForReplace: "push",
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            animationEnabled: true,
            animationTypeForReplace: "pop",
          }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            animationEnabled: true,
            animationTypeForReplace: "pop",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreenNavigator;
