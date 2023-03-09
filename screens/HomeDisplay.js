import React, { useState, useEffect, Component } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import axios from "axios";

const HomeDisplay = ({ navigation }) => {
  const [astroidInput, setAstroidId] = useState("");
  const [dataId, setDataId] = useState([]);
  console.log(astroidInput, "userinput");
  const getRandomAstroidID = () => {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=8nOSb0HIGaIW3UFNZw3vNg3wO0Ypp2IBOEGIQ2jd`
      )
      .then((response) => {
        const data = response.data.near_earth_objects;
        setDataId(data.id);
        console.log("response", data);

        //Pick an item
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  return (
    <View>
      <View
        style={{
          marginTop: 80,
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Enter Asteroid ID"
          keyboardType="numeric"
          maxLength={7}
          value={astroidInput ? astroidInput : dataId}
          onChangeText={(e) => setAstroidId(e)}
        />
      </View>

      <View
        style={{
          marginLeft: 100,
          width: 200,
          color: "#6133FF",
        }}
      >
        <Button
          title="Random Asteroid"
          color="#6133FF"
          onPress={() => getRandomAstroidID()}
        />
      </View>

      <View
        style={{
          marginLeft: 100,
          width: 200,
          marginTop: 40,
        }}
      >
        <Button
          title="Submit"
          disabled={!astroidInput}
          color="#6133FF"
          onPress={() => {
            navigation.navigate("About Astroid", { id: astroidInput });
          }}
        />
      </View>
    </View>
  );
};

export default HomeDisplay;

const styles = StyleSheet.create({
  input: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 250,
    borderWidth: 1,
    padding: 15,
    borderRadius: 4,
    fontSize: 17,
    margin: "19%",
  },
});
