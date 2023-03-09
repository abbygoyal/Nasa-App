import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Astroid from "../components/Astroid";
import axios from "axios";

function Nasa_API({ route }) {
  const [astroid, setAstroid] = useState(null);
  const { id } = route.params;

  useEffect(() => {
    getAstroidDetails();
  }, []);

  const getAstroidDetails = () => {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=8nOSb0HIGaIW3UFNZw3vNg3wO0Ypp2IBOEGIQ2jd`
      )
      .then((response) => {
        const data = response.data;
        console.log("first", data.neo_reference_id);

        // handle success
        setAstroid(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const handleData = () => {
    return (
      <Astroid
        id={astroid?.id}
        name={astroid?.name}
        url={astroid?.nasa_jpl_url}
        hazz={astroid?.is_potentially_hazardous_asteroid.toString()}
      />
    );
  };

  return (
    <SafeAreaView style={style.container}>
      {/* <FlatList
        data={astroid}
        renderItem={(item) => (
          <Astroid
            id={item?.id}
            name={item.name}
            url={item.nasa_jpl_url}
            hazz={item.is_potentially_hazardous_asteroid}
          />
        )}
        keyExtractor={(item) => item.id}
      /> */}
      {handleData()}
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 10,
  },
});

export default Nasa_API;
