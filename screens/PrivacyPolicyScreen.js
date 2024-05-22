import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/headerComponent'
import TextComponent from '../components/textComponent'

export default function PrivacyPolicyScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderComponent title="Privacy Policy"/>

      <View style={styles.privacyContainer}>
        <TextComponent style={styles.privacyTitle}>
          Doctor Hunt Apps Privacy Policy
        </TextComponent>

        <TextComponent style={styles.privacyContent}>
          There are many variations of passages of Lorem Ipsum available, 
          but the majority have suffered alteration in some form, by injected humour, 
          or randomized words believable. It is a long established fact that 
          reader will distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a moreIt is a long established fact that 
          reader will distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more
        </TextComponent>

        <View style={styles.listContainer}>
          <View style={styles.listPrivacy}>
            <View style={styles.circle}/>

            <TextComponent style={styles.privacyContent}>
              The standard chunk of lorem Ipsum used since  1500s is reproduced below for those interested. 
            </TextComponent>
          </View>

          <View style={styles.listPrivacy}>
            <View style={styles.circle}/>

            <TextComponent style={styles.privacyContent}>
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum. The point of using.            </TextComponent>
            </View>

          <View style={styles.listPrivacy}>
            <View style={styles.circle}/>

            <TextComponent style={styles.privacyContent}>
              Lorem Ipsum is that it has a moreIt is a long established fact that reader will distracted. 
            </TextComponent>
          </View>

          <View style={styles.listPrivacy}>
            <View style={styles.circle}/>

            <TextComponent style={styles.privacyContent}>
              The point of using Lorem Ipsum is that it has a moreIt is a long established fact that reader will distracted.
            </TextComponent>
          </View>
        </View>

        <TextComponent style={styles.privacyContent}>
          It is a long established fact that reader distracted by the readable content of a page 
          when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is a 
          long established.
        </TextComponent>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 36
  },

  privacyContainer:{
  },

  privacyTitle:{
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.33,
    marginBottom: 13,
    color: 'rgba(103, 114, 148, 1)'
  },

  privacyContent:{
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21.7,
    color: 'rgba(149, 156, 180, 0.8)',
    marginBottom: 21
  },

  listContainer:{
    flexDirection: 'column',
    paddingLeft: 13,
    justifyContent: 'center', 
  },

  listPrivacy: {
    flexDirection: 'row',
  },

  circle:{
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
    marginTop: 8,
    backgroundColor: 'rgba(14, 190, 127, 1)',
  }
})