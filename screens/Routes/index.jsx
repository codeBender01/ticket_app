import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChooseRoute from "./ChooseRoute";
import Schedule from "./Schedule";
import TicketRegistry from "./TicketRegistry";

import colors from "../../constants/colors";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="ChooseRoute">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={ChooseRoute}
        name="ChooseRoute"
      />
      <Stack.Screen
        options={{
          headerTitle: "Ugurlaryň tertibi",
          headerStyle: {
            backgroundColor: colors.mainBlue,
          },
          headerTitleStyle: {
            color: colors.white,
          },
          headerTintColor: colors.white,
        }}
        component={Schedule}
        name="Schedule"
      />
      <Stack.Screen
        options={{
          headerTitle: "Satyn alyjy maglumaty",
          headerStyle: {
            backgroundColor: colors.mainBlue,
          },
          headerTitleStyle: {
            color: colors.white,
          },
          headerTintColor: colors.white,
        }}
        component={TicketRegistry}
        name="TicketRegistry"
      />
    </Stack.Navigator>
  );
}
