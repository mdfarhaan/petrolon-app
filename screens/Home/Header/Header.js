import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import { wp, hp } from "../../../utils/useScreen";
import PriceCard from "./PriceCard";

const Header = () => {
  const [petrolPrice, setPetrolPrice] = useState(0);
  const [dieselPrice, setDieselPrice] = useState(0);

  const fetchPrice = async () => {
    fetch("https://fuel-price-in.herokuapp.com/chennai")
      .then((response) => response.json())
      .then((data) => {
        let { Diesel, Petrol } = data;
        setPetrolPrice(Petrol);
        setDieselPrice(Diesel);
      })
      .catch((error) => {
        //error
      });
  };

  useEffect(() => {
    fetchPrice();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>Petrolon</Text>
        <View style={styles.priceTag}>
          <PriceCard title={"Petrol"} price={petrolPrice} />
          <PriceCard title={"Diesel"} price={dieselPrice} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0D73FF",
    height: hp(210),
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
  priceTag: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
