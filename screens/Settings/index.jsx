import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainPanel from "./MainPanel";
import TicketHistory from "./TicketHistory";

import colors from "../../constants/colors";

const Stack = createNativeStackNavigator();

export default function Settings() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="MainPanel"
        component={MainPanel}
      />
      <Stack.Screen
        options={{
          headerTitle: "Alnan biletler",
          headerStyle: {
            backgroundColor: colors.mainBlue,
          },
          headerTitleStyle: {
            color: colors.white,
          },
          headerTintColor: colors.white,
        }}
        name="TicketHistory"
        component={TicketHistory}
      />
    </Stack.Navigator>
  );
}
