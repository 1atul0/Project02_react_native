import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'

const FlatCards = () => {
    const isDarkMode=useColorScheme() === 'dark';
  return (
    <View >
      <Text style={[styles.headingText,isDarkMode?styles.whiteText:styles.darkText]}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text>violet</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card,styles.cardFour]}>
            <Text>yellow1</Text>
        </View>
        <View style={[styles.card,styles.cardFour]}>
            <Text>yellow1</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10,
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:200,
        height:100,
        borderRadius:8,
        margin:8,
        elevation:4,//added dark shaded region around
    },
    cardOne:{
        backgroundColor:'red',
    },
    cardTwo:{
        backgroundColor:'violet',
    },
    cardThree:{
        backgroundColor:'green',
    },
    cardFour:{
        backgroundColor:'yellow',
    },
    whiteText:{
        color:'white',
    },
    darkText:{
        color:'black',
    },
})

export default FlatCards;