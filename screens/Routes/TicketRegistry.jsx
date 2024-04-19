import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Fontisto, FontAwesome5, FontAwesome } from "@expo/vector-icons";

import colors from "../../constants/colors";

export default function TicketRegistry() {
  const [selectedCardId, setSelectedCardId] = useState(null);

  const navigation = useNavigation();

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <Pressable
          style={{
            flex: 1,
          }}
          onPress={() => Keyboard.dismiss()}
        >
          <View style={styles.icon}>
            <Fontisto name="bus-ticket" size={64} color={colors.mainBlue} />
            <View style={styles.routeInfo}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <FontAwesome5 name="bus" size={24} color="#111" />
                <Text>T5-128</Text>
              </View>
              <View
                style={{
                  alignItems: "flex-end",
                }}
              >
                <Text>08:00 - 16:00</Text>
                <Text>20 apr.</Text>
              </View>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Adyňyz*</Text>
            <TextInput placeholder="Aman" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Familiýaňyz*</Text>
            <TextInput placeholder="Amanow" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Pasport belgiňiz*</Text>
            <TextInput placeholder="II-AG 111111" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Elektron poçtaňyz</Text>
            <TextInput placeholder="amanow@gmail.com" style={styles.input} />
            <Text style={styles.noteText}>Hökmany däl!</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Karty saýlaň</Text>
            <TouchableOpacity
              onPress={() => setSelectedCardId(0)}
              style={[
                styles.creditCardBtn,
                {
                  borderColor:
                    selectedCardId === 0 ? colors.blueOp : colors.black,
                },
              ]}
            >
              <FontAwesome
                name="credit-card"
                size={24}
                color={selectedCardId === 0 ? colors.blueOp : colors.black}
              />
              <Text
                style={[
                  styles.creditCardBtnText,
                  {
                    color: selectedCardId === 0 ? colors.blueOp : colors.black,
                  },
                ]}
              >
                Halk Bank
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedCardId(1)}
              style={[
                styles.creditCardBtn,
                {
                  borderColor:
                    selectedCardId === 1 ? colors.blueOp : colors.black,
                },
              ]}
            >
              <FontAwesome
                name="credit-card"
                size={24}
                color={selectedCardId === 1 ? colors.blueOp : colors.black}
              />
              <Text
                style={[
                  styles.creditCardBtnText,
                  {
                    color: selectedCardId === 1 ? colors.blueOp : colors.black,
                  },
                ]}
              >
                Rysgal Bank
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("TicketPurchase")}
            style={styles.nextBtn}
          >
            <Text style={styles.nextBtnText}>Dowam et</Text>
          </TouchableOpacity>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  routeInfo: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    marginTop: 10,
    borderColor: colors.black,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
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
  noteText: {
    color: colors.gray,
    fontSize: 12,
    fontFamily: "RobotoReg",
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
