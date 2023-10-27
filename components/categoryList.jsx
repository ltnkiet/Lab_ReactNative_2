import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function categoryList(props) {
  const {category} = props
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{category.name}</Text>
      <Text style={styles.price}>{category.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    gap: 10,
    padding: 10,
    margin: 20
  },
  name: {
    fontSize: 40,
    color: "blue"
  },
  price: {
    fontSize: 20,
    fontWeight: "500",
    color: "red"
  },
})