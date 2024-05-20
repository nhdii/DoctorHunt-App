import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import TextComponent from './textComponent'

export default function MedicineOrdersCard({image, nameMedicine}) {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image}/>
            </View>

            <TextComponent style={styles.nameStyle}>
                {nameMedicine}
            </TextComponent>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        width: 160,
        height: 160,
        borderRadius: 8,
        marginHorizontal: 7.5,
        marginBottom: 15,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },

    content:{
        height: 130,
        marginHorizontal: 12,
        marginTop: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageContainer:{
        width: 76,
        height: 76,
        borderRadius: 76/2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(198, 239, 229, 0.76)'
    },

    image:{
        width: 24, 
        height: 27.56
    },

    nameStyle:{
        fontSize: 14,
        lineHeight: 21.78,
        fontWeight: 'bold',
        color: 'rgba(103, 114, 148, 1)',
        textAlign: 'center'
    }
})