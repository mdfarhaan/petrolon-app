import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Header from "./Header";
import Btn from "../../utils/Btn";
import FuelCard from "./FuelCard";
import AddFuel from "./AddFuel";

const VehicleScreen = ({ route, navigation }) => {
  const { vehicle, amt, litres } = route.params;
  const [showAddComp, setShowAddComp] = useState(false);
  const [data, setData] = useState([]);

  const DB = "https://petrolon-server.herokuapp.com/";

  const fetchData = () => {
    fetch(DB + "fl/get/" + vehicle)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {showAddComp == true ? (
        <AddFuel
          closeComp={() => setShowAddComp(false)}
          vh={vehicle}
          onRefresh={() => fetchData()}
        />
      ) : (
        <ScrollView>
          <View>
            <Header
              title={vehicle}
              amt={`₹${amt}`}
              lt={`${litres}L`}
              onPress={() => navigation.goBack()}
            />
            <View style={styles.btn}>
              <Btn
                title="Add Fuel"
                onPress={() => {
                  setShowAddComp(true);
                }}
              />
            </View>

            <View style={styles.card}>
              {data.map((item, i) => {
                let date = new Date(item.date);
                let options = {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                };
                return (
                  <FuelCard
                    key={i}
                    amt={`₹${item.price}`}
                    date={date.toLocaleDateString("en-US", options)}
                    //date={item.date}
                    lt={`${item.litres}L`}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default VehicleScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
