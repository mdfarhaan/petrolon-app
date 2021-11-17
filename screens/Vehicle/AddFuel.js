import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { wp, hp } from "../../utils/useScreen";
import Icon from "react-native-vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";
import Btn from "../../utils/Btn";
import PickDateBtn from "../../utils/PickDateBtn";

const AddVehicle = (props) => {
  const DB = "https://petrolon-server.herokuapp.com/";
  const [price, setPrice] = useState();
  const [litres, setLitres] = useState();
  //Date Picker
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = () => {
    setShow(true);
  };

  const addDataHandler = () => {
    if (price == null) {
      alert("Invalid Data!");
    }
    if (litres == null) {
      alert("Invalid Data!");
    }

    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vehicle: props.vh,
        price: parseFloat(price),
        litres: parseFloat(litres),
        date: String(date),
      }),
    };

    fetch(DB + "fl/add", reqOptions)
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => alert("Couldn't add data"));

    props.onRefresh();
    props.closeComp();
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.row}>
          <Text style={styles.title}>Add Vehicle</Text>
          <TouchableHighlight underlayColor="" onPress={props.closeComp}>
            <Icon
              name="closecircleo"
              size={35}
              color="white"
              style={styles.icon}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setPrice(e)}
            value={price}
            placeholder="Price"
            placeholderTextColor="black"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={(e) => setLitres(e)}
            value={litres}
            placeholder="Litres"
            placeholderTextColor="black"
            keyboardType="numeric"
          />

          <PickDateBtn onPress={showMode} title="Date" />
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={false}
              display="default"
              onChange={onChange}
            />
          )}

          <Btn title={"Add"} onPress={addDataHandler} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddVehicle;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0D73FF",
    height: hp(442),
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
  },
  title: {
    marginTop: 5,
    color: "white",
    padding: wp(15),
    fontSize: hp(42),
    fontWeight: "bold",
  },
  row: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginTop: 30,
    marginRight: 15,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: wp(306),
    height: hp(51),
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 15,
    fontSize: 18,
  },
});
