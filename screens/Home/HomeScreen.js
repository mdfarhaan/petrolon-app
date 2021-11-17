import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import Header from "./Header/Header";
import Btn from "../../utils/Btn";
import VehicleCard from "./VehicleCard";
import AddVehicle from "./AddVehicle";

const HomeScreen = ({ navigation }) => {
  const DB = ""; //DB Endpoint

  const [showAddComp, setShowAddComp] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(DB + "vh/get")
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        alert(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = () => {
    fetchData();
  };

  return (
    <SafeAreaView style={styles.container}>
      {showAddComp ? (
        <AddVehicle
          closeComp={() => setShowAddComp(false)}
          onRefresh={() => fetchData()}
        />
      ) : (
        <ScrollView>
          <View>
            <Header />

            <View style={styles.btn}>
              <Btn title="Add Vehicle" onPress={() => setShowAddComp(true)} />
            </View>

            <View style={styles.card}>
              {data.map((item, i) => {
                return (
                  <VehicleCard
                    key={i}
                    title={item.vehicle}
                    amt={`₹${item.amt} | ${item.litres}L`}
                    onPress={() =>
                      navigation.navigate("Vehicle", {
                        vehicle: item.vehicle,
                        amt: item.amt,
                        litres: item.litres,
                      })
                    }
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

export default HomeScreen;

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
