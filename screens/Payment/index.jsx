import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreditCards from "./CreditCards";
import AddCard from "./AddCard";

import colors from "../../constants/colors";

const Stack = createNativeStackNavigator();

export default function Payment() {
  return (
    <Stack.Navigator initialRouteName="CreditCards">
      <Stack.Screen
        options={{
          headerTitle: "Bank kartlaryňyz",
          headerStyle: {
            backgroundColor: colors.mainBlue,
          },
          headerTitleStyle: {
            color: colors.white,
          },
          headerTintColor: colors.white,
        }}
        name="CreditCards"
        component={CreditCards}
      />
      <Stack.Screen
        options={{
          headerTitle: "Bank kartyny goşmak",
          headerStyle: {
            backgroundColor: colors.mainBlue,
          },
          headerTitleStyle: {
            color: colors.white,
          },
          headerTintColor: colors.white,
        }}
        name="AddCard"
        component={AddCard}
      />
    </Stack.Navigator>
  );
}
