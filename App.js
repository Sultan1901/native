import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
export default function App() {
  let [username, onChangeusername] = React.useState("");
  let [password, onChangepassword] = React.useState("");

  let register = ()=>{
 

  }
  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <View style={styles.input}>
        <TextInput onChangeText={onChangeusername} placeholder="username" />
        <TextInput onChangeText={onChangepassword} placeholder="Password" />
        <TextInput placeholder="REPassword" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "silver",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    marginTop: 190,
    color: "black",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "black",
    borderWidth: 1,
    borderColor: "black",
    color: "black",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: 30,
  },
});
