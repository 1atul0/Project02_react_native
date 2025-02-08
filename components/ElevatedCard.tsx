import { ScrollView, StyleSheet, Text, View,useColorScheme } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
    const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text style={[styles.headingText,isDarkMode?styles.whiteText:styles.darkText]}>Elevated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>😁</Text>
        </View>
      </ScrollView>
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
        padding:8,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
    },
    cardElevated:{
        backgroundColor:'#cad5e2',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'red',
        shadowOpacity:0.4,
        shadowRadius:6,
    },
    whiteText:{
        color:'white',
    },
    darkText:{
        color:'black',
    },
})