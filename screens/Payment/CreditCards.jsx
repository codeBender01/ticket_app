import React from "react";
import { useNavigation } from "@react-navigation/native";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { FontAwesome, AntDesign } from "@expo/vector-icons";

import colors from "../../constants/colors";

export default function CreditCards() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={[styles.creditCardBtn]}>
          <FontAwesome name="credit-card" size={24} color={colors.black} />
          <Text style={[styles.creditCardBtnText]}>Halk Bank</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.creditCardBtn]}>
          <FontAwesome name="credit-card" size={24} color={colors.black} />
          <Text style={[styles.creditCardBtnText]}>Rysgal Bank</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AddCard");
        }}
        style={styles.addBtn}
      >
        <AntDesign name="plus" size={32} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  cardContainer: {
    gap: 10,
    marginTop: 15,
  },

  creditCardBtn: {
    borderWidth: 2,
    flexDirection: "row",
    padding: 8,
    gap: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  creditCardBtnText: {
    fontSize: 18,
    fontFamily: "RobotoReg",
    color: colors.black,
  },

  addBtn: {
    alignSelf: "flex-end",
    backgroundColor: colors.mainBlue,
    padding: 12,
    borderRadius: 50,
    marginBottom: 10,
  },
});
