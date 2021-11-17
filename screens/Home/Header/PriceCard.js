import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { wp, hp } from "../../../utils/useScreen";

export default function PriceCard(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>₹{props.price}</Text>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: wp(146),
    height: hp(86),
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  price: {
    fontSize: hp(39),
    fontWeight: "bold",
  },
  title: {
    fontSize: hp(28),
    marginBottom: 4,
  },
});
