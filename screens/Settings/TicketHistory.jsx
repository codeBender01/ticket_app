import { View, StyleSheet, ScrollView } from "react-native";

import BusTripCard from "../../components/BusTripCard";

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

export default function TicketHistory() {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.container}>
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
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
});
