import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import * as WebBrowser from "expo-web-browser";

const Astroid = (props) => {
  const goToSource = () => {
    WebBrowser.openBrowserAsync(props.url);
  };

  return (
    <Pressable style={styles.container} onPress={goToSource}>
      <View style={{ padding: 20 }}>
        {/* ID */}
        <View style={{ marginTop: 10 }}>
          <Text style={styles.tag}>
            ID: <Text style={styles.result}>{props.id}</Text>
          </Text>
        </View>
        {/*    NAME */}
        <View style={{ marginTop: 10 }}>
          <Text style={styles.tag}>
            NAME: <Text style={styles.result}>{props.name}</Text>
          </Text>
        </View>

        {/*     NASA JPL URL */}
        <View style={{ marginTop: 10 }}>
          <Text style={styles.tag}>
            NASA JPL URL: <Text style={styles.result}>{props.url}</Text>
          </Text>
        </View>
        {/*     Is Potentially Hazardous Asteroid: */}
        <View style={{ marginTop: 10 }}>
          <Text style={styles.tag}>
            Is Potentially Hazardous Asteroid:
            <Text style={styles.result}>{props.hazz}</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Astroid;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: 20,
  },
  tag: {
    color: "blue",
    fontSize: 18,
    fontWeight: "600",
  },
  result: {
    color: "black",
    fontSize: 18,
  },
});
