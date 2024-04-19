import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Dropdown from "../../components/Dropdown";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { FontAwesome5, FontAwesome6, AntDesign } from "@expo/vector-icons";

import colors from "../../constants/colors";

export default function ChooseRoute() {
  const [passengerCount, setPassengerCount] = useState(1);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.blueBackgroundSection}>
        <View style={styles.logoConatiner}>
          <FontAwesome5 name="bus" size={64} color={colors.white} />
          <Text style={styles.logoText}>Awtobus</Text>
        </View>
      </View>
      <View style={styles.chooseRoute}>
        <Text style={styles.chooseRouteText}>Ugur saýlaň</Text>
      </View>

      <View style={styles.inputsContainer}>
        <View>
          <FontAwesome6
            name="map-location-dot"
            size={24}
            color={colors.mainBlue}
          />
        </View>
        <View
          style={{
            flex: 1,
            gap: 10,
          }}
        >
          <View>
            <Text style={styles.inputLabel}>Nireden?</Text>
            <Dropdown />
          </View>
          <View>
            <Text style={styles.inputLabel}>Nirä?</Text>
            <Dropdown />
          </View>
        </View>
      </View>
      <View style={styles.passengers}>
        <Text style={styles.passengersText}>Ýolagçy sany:</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            gap: 14,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={[
              styles.pButton,
              {
                borderColor:
                  passengerCount === 1 ? colors.lightGray : colors.blueOp,
              },
            ]}
            disabled={passengerCount === 1}
            onPress={() => {
              if (passengerCount === 1) {
                return;
              }
              setPassengerCount((prevState) => prevState - 1);
            }}
          >
            <AntDesign
              name="minus"
              size={22}
              color={passengerCount === 1 ? colors.lightGray : colors.blueOp}
            />
          </TouchableOpacity>
          <Text>{passengerCount}</Text>
          <TouchableOpacity
            style={[
              styles.pButton,
              {
                borderColor: colors.blueOp,
              },
            ]}
            onPress={() => {
              setPassengerCount((prevState) => prevState + 1);
            }}
          >
            <AntDesign name="plus" size={22} color={colors.blueOp} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Schedule");
        }}
        style={styles.continueBtn}
      >
        <Text
          style={{
            color: colors.white,
            textAlign: "center",
            fontSize: 18,
            fontFamily: "RobotoBold",
          }}
        >
          Dowam etmek
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  blueBackgroundSection: {
    height: "50%",
    width: "100%",
    backgroundColor: colors.mainBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  logoConatiner: {
    alignItems: "center",
    gap: 5,
  },
  logoText: {
    fontSize: 36,
    fontFamily: "Kalam",
    color: colors.white,
  },
  chooseRoute: {
    fontSize: 20,
    fontFamily: "Roboto",
    textAlign: "center",
    backgroundColor: colors.blueOp,
    padding: 5,
    color: colors.white,
  },
  chooseRouteText: {
    fontSize: 20,
    fontFamily: "Roboto",
    textAlign: "center",
    color: colors.white,
  },
  inputsContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 10,
    marginTop: 10,
  },
  inputLabel: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: colors.black,
    marginBottom: 5,
  },
  passengers: {
    padding: 10,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  passengersText: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
  pButton: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 50,
  },
  continueBtn: {
    backgroundColor: colors.mainBlue,
    width: "80%",
    alignSelf: "center",
    paddingVertical: 12,
    borderRadius: 10,
  },
});
