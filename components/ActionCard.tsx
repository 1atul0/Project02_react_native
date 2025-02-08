import { StyleSheet, Text, View,Linking, Image,TouchableOpacity } from 'react-native';
import React from 'react';

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>What's new in Javascript 22 - ES12</Text>
        </View>
        <Image
        source={{
            uri:'https://images.pexels.com/photos/7534232/pexels-photo-7534232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={4}>A Logitech mouse might get stuck and not work due to several reasons, including: low battery (if wireless), dirty optical sensor, outdated drivers, issues with the USB receiver, interference from other devices, a faulty mouse pad surface, or even just dust buildup inside the mouse; check the battery level,</Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={()=>{openWebsite('https://reactnative.dev/docs/linking');}}
            >
                <Text style={styles.socialLink}>Read more</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{openWebsite('https://www.linkedin.com/in/atul-kumar-cse/');}}
            >
                <Text style={styles.socialLink}>connect to me...</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        color:'white',
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    elevatedCard:{
        backgroundColor:'#F9DDA4',
        elevation:4,
        //below css is work primarily on ios which can achive same style only using elevation property
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'red',//work on both
        shadowOpacity:0.4,
    },
    card:{
        width:350,
        height:380,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        fontSize:16,
        fontWeight:'600',
    },
    cardImage:{
        height:200,
    },
    bodyContainer:{
        padding:10,
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    socialLink:{
        fontSize:14,
        backgroundColor:'#F5BCBA',
        color:'#3498DB',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:8,
    },
});
