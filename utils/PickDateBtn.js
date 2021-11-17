import React from "react";
import { TouchableHighlight, Text, StyleSheet, View } from "react-native";

import { wp, hp } from "./useScreen";

const Btn = (props) => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      underlayColor="#F2F2F2"
    >
      <View style={styles.btnContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    height: hp(50),
    width: wp(306),
  },
  title: {
    fontSize: hp(28),
    color: "black",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
export default Btn;
