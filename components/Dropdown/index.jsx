import { View, Text, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

import { Entypo } from "@expo/vector-icons";

import colors from "../../constants/colors";

const routes = [
  {
    title: "Aşgabat",
    icon: <Entypo name="location-pin" size={24} color="black" />,
  },
  {
    title: "Mary",
    icon: <Entypo name="location-pin" size={24} color="black" />,
  },
  {
    title: "Lebap",
    icon: <Entypo name="location-pin" size={24} color="black" />,
  },
  {
    title: "Daşoguz",
    icon: <Entypo name="location-pin" size={24} color="black" />,
  },
  {
    title: "Balkan",
    icon: <Entypo name="location-pin" size={24} color="black" />,
  },
];

export default function Dropdown() {
  return (
    <SelectDropdown
      data={routes}
      renderButton={(selectedItem, isOpened) => {
        return (
          <View style={styles.dropdownButtonStyle}>
            {selectedItem && selectedItem.icon}
            <Text style={styles.dropdownButtonTxtStyle}>
              {(selectedItem && selectedItem.title) || "Ugruňyzy saýlaň"}
            </Text>
          </View>
        );
      }}
      renderItem={(item, index, isSelected) => {
        return (
          <View
            style={{
              ...styles.dropdownItemStyle,
              ...(isSelected && { backgroundColor: "#D2D9DF" }),
            }}
          >
            {item.icon}
            <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
}

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 10,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    color: colors.gray,
    fontFamily: "Roboto",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
