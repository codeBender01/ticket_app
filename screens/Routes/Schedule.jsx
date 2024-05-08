import { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import BusTripCard from "../../components/BusTripCard";

import DateTimePicker from "@react-native-community/datetimepicker";

import colors from "../../constants/colors";

const trips = [
  {
    id: 1,
    timeOfDeparture: "08:00",
    timeOfArrival: "16:00",
  },
  {
    id: 2,
    timeOfDeparture: "10:00",
    timeOfArrival: "18:00",
  },
  {
    id: 3,
    timeOfDeparture: "12:00",
    timeOfArrival: "20:00",
  },
];

export default function Schedule() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setOpen(false);
    setDate(currentDate);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setOpen(true)} style={styles.dateBtn}>
          <Text style={styles.dateBtnText}>Senäni saýlaň...</Text>
        </TouchableOpacity>
        {open && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            onChange={onChange}
            display="spinner"
            minimumDate={new Date(2024, 3, 10)}
            positiveButton={{ label: "Saýla" }}
            negativeButton={{ label: "Yza" }}
          />
        )}

        <View
          style={{
            gap: 10,
            marginTop: 20,
          }}
        >
          {trips.map((t) => {
            return (
              <BusTripCard
                key={t.id}
                aTime={t.timeOfArrival}
                dTime={t.timeOfDeparture}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: colors.white,
    paddingBottom: 10,
  },
  dateBtn: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: colors.lightGray,
  },
  dateBtnText: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: colors.gray,
  },
});
