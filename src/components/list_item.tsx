import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';


const ListItem = ({name, symbol, currentPrice, priceChangePercentage7d, logo}) => {
    return(
        <TouchableOpacity>
            <View style={styles.itemWrapper}>
                <View style={styles.leftWrapper}>
                    <Image 
                        source = {{uri: "./assets/ETH.png"}}
                        style={styles.image}
                    />
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>Ethereum</Text>
                        <Text style={styles.subtitle}>ETH</Text>
                    </View>
                </View>
                <View style={styles.rightWrapper}>
                    <Text style={styles.title}>Ethereum</Text>
                    <Text style={[styles.subtitle, {color: 'red'}]}>ETH</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

itemWrapper:{
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
},
leftWrapper:{
    flexDirection: "row",
    alignItems: "center",
},
image:{
    height: 48,
    width: 48,
},
titleWrapper:{
    marginLeft: 8,
},
title:{
    fontSize: 18,
},
subtitle:{
    marginTop: 4,
    fontSize: 14,
    color: "#A9ABB1",
},
rightWrapper:{
    alignItems: "flex-end",
},
})
export default ListItem
