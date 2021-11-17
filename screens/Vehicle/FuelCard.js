import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { wp, hp } from "../../utils/useScreen";

const VehicleCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{props.amt}</Text>
        <Text style={styles.lt}>{props.lt}</Text>
      </View>
      <Text style={styles.date}>{props.date}</Text>
    </View>
  );
};

export default VehicleCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D73FF",
    width: wp(306),
    height: hp(110),
    marginBottom: 20,
    borderRadius: 20,
    justifyContent: "space-between",
  },
  title: {
    marginLeft: 20,
    fontSize: hp(32),
    fontWeight: "bold",
    color: "white",
  },
  lt: {
    marginRight: 10,
    fontSize: hp(28),
    fontWeight: "900",
    color: "white",
  },
  date: {
    marginLeft: 20,
    marginBottom: 10,
    fontSize: hp(23),
    fontWeight: "400",
    color: "white",
  },
  row: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
  },
});
