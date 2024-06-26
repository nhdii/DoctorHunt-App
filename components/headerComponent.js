import React from 'react'
import { View, StyleSheet } from 'react-native'
import BackArrowIcon from '../assets/icon/backArrowIcon'
import TextComponent from '../components/textComponent'
import { useNavigation } from '@react-navigation/native'

const HeaderComponent = ({ title, titleColor }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <BackArrowIcon onPress={() => navigation.goBack()} />
      <TextComponent style={[styles.textHeader, {color: titleColor}]}>{title}</TextComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 34,
  },

  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 21.33,
    letterSpacing: -0.3,
    color: 'rgba(34, 34, 34, 1)',
    marginLeft: 19,
  },
})

export default HeaderComponent
