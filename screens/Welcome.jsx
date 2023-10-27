import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bài tập React Native</Text>
      <View style={styles.lab}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text} onPress={() => navigation.navigate("Xoso")}>Xổ số đê</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text} onPress={() => navigation.navigate("Tinhtoan")}>
            Bạn có giỏi toán không
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text} onPress={() => navigation.navigate("Flatlist")}>
            Flat List
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "500"
  },
  button: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: "blue"
  },
  lab:{
    marginVertical: 10,
    gap: 10
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    color: "white"
  }
});
