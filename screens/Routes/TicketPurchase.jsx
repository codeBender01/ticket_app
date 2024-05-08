import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import colors from "../../constants/colors";

export default function TicketPurchase() {
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        <MaterialCommunityIcons
          name="bag-suitcase"
          size={72}
          color={colors.mainBlue}
        />
      </View>
      <Text style={styles.pText}>
        Petegiňiz alyndy! PDF görnüşde ýükläň alyp ya-da ekranyň yüzüni surata
        alyp QR-kody ýatda saklap bilersiňiz.
      </Text>
      <TouchableOpacity style={styles.downloadBtn}>
        <AntDesign name="download" size={24} color={colors.white} />
        <Text style={styles.downloadBtnText}>Ýükläp al (PDF)</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.pText}>QR kod:</Text>
        <View style={{ width: "100%" }}></View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigate.navigate("ChooseRoute");
        }}
        style={styles.nextBtn}
      >
        <Text style={styles.nextBtnText}>Baş sahypa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
  pText: {
    color: colors.blueOp,
    fontSize: 16,
    fontFamily: "RobotoBold",
    marginVertical: 15,
  },
  downloadBtn: {
    backgroundColor: colors.blueOp,
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  downloadBtnText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "RobotoBold",
  },
  nextBtn: {
    backgroundColor: colors.mainBlue,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  nextBtnText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "RobotoBold",
    textAlign: "center",
  },
});
