import React from "react";
import { TouchableHighlight, Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { wp, hp } from "./useScreen";

const Btn = (props) => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      underlayColor="#191919"
    >
      <View style={styles.btnContainer}>
        <Icon name="add" size={35} color="white" />
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: "black",
    borderRadius: 20,
    justifyContent: "center",
    height: hp(50),
    width: wp(306),
  },
  title: {
    fontSize: hp(28),
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
export default Btn;
