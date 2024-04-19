import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import colors from "../../constants/colors";

export default function MainPanel() {
  return (
    <View style={styles.container}>
      <View style={styles.profilePic}>
        <AntDesign name="user" size={128} color={colors.gray} />
      </View>
      <Text style={styles.username}>Aman Amanow</Text>

      <View
        style={{
          borderColor: colors.lightGray,
          borderRadius: 10,
          borderWidth: 1,
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={[
            styles.settingTab,
            {
              borderBottomWidth: 1,
              borderColor: colors.lightGray,
            },
          ]}
        >
          <View>
            <FontAwesome name="info" size={24} color="black" />
          </View>
          <Text
            style={[
              styles.settingTabText,
              {
                marginLeft: 24,
              },
            ]}
          >
            Meniň maglumatlarym
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingTab}>
          <View>
            <MaterialCommunityIcons
              name="ticket-account"
              size={24}
              color="black"
            />
          </View>
          <Text
            style={[
              styles.settingTabText,
              {
                marginLeft: 10,
              },
            ]}
          >
            Meniň maglumatlarym
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
  profilePic: {
    marginTop: 50,
    alignSelf: "center",
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 100,
    padding: 16,
  },
  username: {
    alignSelf: "center",
    fontSize: 32,
    fontFamily: "Kalam",
    color: colors.black,
  },
  settingTab: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 12,
  },
  settingTabText: {
    color: colors.black,
    fontSize: 18,
    fontFamily: "RobotoReg",
  },
});
