import { useCallback } from "react";

import { View, Text, StyleSheet, Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Routes from "./screens/Routes";

import { useFonts } from "expo-font";

import { FontAwesome5 } from "@expo/vector-icons";

import * as SplashScreen from "expo-splash-screen";

import colors from "./constants/colors";

const Tabs = createBottomTabNavigator();

export default function Main() {
  const [fontsLoaded, fontError] = useFonts({
    RobotoReg: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoThin: require("./assets/fonts/Roboto-Light.ttf"),
    Kalam: require("./assets/fonts/Kalam-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Tabs.Navigator
          initialRouteName="Routes"
          screenOptions={{
            headerShown: false,

            tabBarStyle: {
              alignItems: "center",
              paddingBottom: Platform.OS === "ios" ? 20 : 10,
              height: Platform.OS === "ios" ? 70 : 60,
              backgroundColor: colors.white,
              borderTopWidth: 0,
              elevation: 0,
            },
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: colors.tabBarItemActive,
            tabBarInactiveTintColor: colors.white,
          }}
        >
          <Tabs.Screen
            component={Routes}
            name="Routes"
            options={() => ({
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="route" size={24} color={color} />
              ),
              tabBarLabel: "Ugurlar",
            })}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
