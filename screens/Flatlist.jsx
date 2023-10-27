import {FlatList } from 'react-native'
import React, { Component } from 'react'
import CategoryList from '../components/categoryList'

export class Flatlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: "PS5", price: "15.000.000đ"},
        { id: 1, name: "PS4", price: "9.000.000đ"},
        { id: 1, name: "PS6", price: "35.000.000đ"}
      ]
    }
  }
  render() {
    const {categories} = this.state
    return (
      <FlatList
        data={categories}
        renderItem={({item}) => <CategoryList category={item}/>}
        keyExtractor={item => `${item.id}`}
      />

    )
  }
}

export default Flatlist