import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DashboardScreen } from "./Dashboard";
import { EditForm } from "./EditForm";
import { ViewPost } from "./ViewPost";
import { Card } from "./Card";
import InstaLogin from "./InstaLogin";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="InstaLogin" component={InstaLogin} />
    <Screen name="Dashboard" component={DashboardScreen} />
    <Screen name="Card" component={Card} />
    <Screen name="EditForm" component={EditForm} />
    <Screen name="ViewPost" component={ViewPost} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
