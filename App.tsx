import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import ListItem from './src/components/list_item';

import {SAMPLE_DATA} from './src/data/dataSample';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text style={styles.largeTitle}>Markets</Text>
      </View>
      <View style={styles.divisor}/>

      <ListItem 
        name = {SAMPLE_DATA[0].name} 
        symbol = {SAMPLE_DATA[0].symbol}
        currentPrice = {SAMPLE_DATA[0].current_price}
        priceChangePercentage7d = {SAMPLE_DATA[0].price_change_percentage_7d_in_currency}
        logo = {SAMPLE_DATA[0].image}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    marginTop: 80,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  divisor: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16,
  },
});
