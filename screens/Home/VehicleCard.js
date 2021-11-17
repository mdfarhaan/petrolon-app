import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { wp, hp } from "../../utils/useScreen";
import Icon from "react-native-vector-icons/Feather";

const VehicleCard = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.row}>
        <Text style={styles.amt}>{props.amt}</Text>
        <TouchableHighlight underlayColor="#08428C" onPress={props.onPress}>
          <Icon name="arrow-right" size={30} color="white" />
        </TouchableHighlight>
      </View>
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
    justifyContent: "center",
  },
  title: {
    marginLeft: 20,
    fontSize: hp(30),
    fontWeight: "bold",
    color: "white",
  },
  amt: {
    marginLeft: 20,
    fontSize: hp(25),
    fontWeight: "500",
    color: "white",
  },
  row: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
  },
});
