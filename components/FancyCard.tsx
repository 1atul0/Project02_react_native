import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places!</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
        style={styles.cardImage}
        height={200}
        width={350}
        source={require('../assets/image/agra.jpg')}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Taj Mahal </Text>
            <Text style={styles.cardLabel}>Near Yamuna River, Delhi </Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, est! Quam harum optio dolor velit, minus inventore totam dignissimos incidunt. Reprehenderit  </Text>
            <View style={{ flexDirection:'row-reverse' }}>
            <Text style={styles.cardFooter}>12 mins away </Text>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        color:'white',
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10,
    },
    card:{
        width:350,
        height:360,
        borderRadius:8,
        marginVertical:12,
        marginHorizontal:16,
    },
    cardElevated:{
        backgroundColor:'white',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    cardImage:{
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6,
    },
    cardLabel:{
        fontSize:16,
        marginBottom:8,
        color:'#01CBC6',
    },
    cardDescription:{
        fontSize:12,
        marginBottom:12,
        color:'#8395A7',
    },
    cardFooter:{
        color:'#45CE30',
        fontSize:12,
    },
})