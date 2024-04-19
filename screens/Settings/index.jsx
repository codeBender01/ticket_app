import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainPanel from "./MainPanel";

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
    </Stack.Navigator>
  );
}
