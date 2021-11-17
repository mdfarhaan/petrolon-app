import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableHighlight,
} from "react-native";
import { wp, hp } from "../../utils/useScreen";
import Icon from "react-native-vector-icons/Ionicons";

const Header = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.titleRow}>
          <TouchableHighlight onPress={props.onPress} underlayColor="">
            <Icon
              name="ios-return-down-back"
              size={35}
              color="white"
              style={styles.icon}
            />
          </TouchableHighlight>

          <Text style={styles.title}>{props.title}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.content}>
            <Text style={styles.tagText}>{props.amt}</Text>
            <Text style={styles.tagText}>{props.lt}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D73FF",
    height: hp(215),
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
  },
  title: {
    marginTop: 10,
    color: "white",
    padding: wp(15),
    fontSize: hp(42),
    fontWeight: "bold",
  },
  titleRow: {
    flexDirection: "row",
  },
  icon: {
    marginTop: 35,
    marginLeft: 10,
  },
  row: {
    alignItems: "center",
  },
  content: {
    borderRadius: 15,
    width: wp(306),
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tagText: {
    color: "black",
    padding: wp(10),
    fontSize: hp(38),
    fontWeight: "bold",
  },
});
