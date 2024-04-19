import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Dropdown from "../../components/Dropdown";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import colors from "../../constants/colors";

const banks = [
  {
    title: "Rysgal Bank",
    icon: <MaterialCommunityIcons name="bank" size={24} color="black" />,
  },
  {
    title: "Senagat Bank",
    icon: <MaterialCommunityIcons name="bank" size={24} color="black" />,
  },
  {
    title: "Garagum Bank",
    icon: <MaterialCommunityIcons name="bank" size={24} color="black" />,
  },
];

export default function AddCard() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Kartyňyzyň belgisi</Text>
        <TextInput placeholder="0000 0000 0000 0000" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Kartyňyzyň CVC belgisi</Text>
        <TextInput placeholder="***" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Kartyňyzyň eýesi</Text>
        <TextInput placeholder="AMAN AMANOW" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Kartyňyzyň degişli banky</Text>
        <Dropdown list={banks} />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("CreditCards")}
        style={styles.nextBtn}
      >
        <Text style={styles.nextBtnText}>Karty goş</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
  inputContainer: {
    marginVertical: 10,
    gap: 6,
  },
  label: {
    fontSize: 18,
    fontFamily: "RobotoBold",
    color: colors.blueOp,
  },
  input: {
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 6,
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
