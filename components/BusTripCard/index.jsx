import React from "react";

import { useNavigation } from "@react-navigation/native";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { FontAwesome5, Entypo, FontAwesome6 } from "@expo/vector-icons";

import colors from "../../constants/colors";

export default function BusTripCard({ dTime, aTime }) {
  const navigation = useNavigation();

  return (
    <View style={styles.busTicketContainer}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <FontAwesome5 name="bus" size={24} color="#111" />
          <Text style={styles.headerText}>T5-128</Text>
        </View>
        <Text style={styles.headerText}>20 apr.</Text>
      </View>

      <View style={styles.timeContainer}>
        <View
          style={{
            alignItems: "center",
            gap: 5,
          }}
        >
          <Text style={styles.timeText}>{dTime}</Text>
          <Text>Ashgabat</Text>
        </View>
        <View style={styles.duration}>
          <Text style={styles.durationText}>8 sag.</Text>
          <View style={styles.dots}>
            <Entypo name="circle" size={18} color="black" />
            <Text>------</Text>
            <FontAwesome6 name="circle-dot" size={18} color="black" />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            gap: 5,
          }}
        >
          <Text style={styles.timeText}>{aTime}</Text>
          <Text>Lebap</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buyBtn}
        onPress={() => {
          navigation.navigate("TicketRegistry");
        }}
      >
        <Text style={styles.buyBtnText}>Bilet al</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  busTicketContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 10,
  },
  header: {
    backgroundColor: colors.lightGray,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    color: "#111111",
    fontSize: 18,
    fontFamily: "RobotoBold",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    alignItems: "center",
  },
  duration: {
    alignItems: "center",
    gap: 5,
  },
  dots: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  timeText: {
    color: "#111",
    fontSize: 24,
    fontFamily: "RobotoBold",
  },
  durationText: {
    fontSize: 16,
    color: colors.gray,
    fontFamily: "RobotoThin",
  },
  divider: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderStyle: "dashed",
    marginBottom: 10,
  },
  buyBtn: {
    backgroundColor: colors.mainBlue,
    borderRadius: 5,
    width: "30%",
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 8,
  },
  buyBtnText: {
    color: colors.white,
    textAlign: "center",
    fontFamily: "RobotoBold",
    fontSize: 14,
  },
});
