import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "./Login";
import { DashboardScreen } from "./Dashboard";
import { EditForm } from "./EditForm";
import { ViewPost } from "./ViewPost";
import { Card } from "./Card";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Login" component={LoginScreen} />
    <Screen name="Dashboard" component={DashboardScreen} />
    <Screen name="EditForm" component={EditForm} />
    <Screen name="ViewPost" component={ViewPost} />
    <Screen name="Card" component={Card} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
