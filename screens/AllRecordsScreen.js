import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import RecordComponent from '../components/recordComponent';
import HeaderComponent from '../components/headerComponent';
import ButtonComponent from '../components/buttonComponent';
import GradientCircle from '../components/gradientCircle';
import { useNavigation } from '@react-navigation/native';

export default function AllRecordsScreen() {
    const navigation = useNavigation();

    const [records, setRecords] = useState([
        { id: 1, date: '2023-05-27', name: 'John Doe' },
        { id: 2, date: '2023-06-15', name: 'Jane Smith' },
        // Add more records as needed
      ]);
    
      const handleOptionsPress = (id) => {
        // Handle the options press (e.g., show a menu or dialog)
        console.log('Options pressed for record id:', id);
      };
  return (
    <View style={styles.container}>
      {/* Gradient Circle */}
      <View style={styles.bg}>
          <View style={styles.topGradientCircleContainer}>
              <GradientCircle size={216} colors={['rgba(135, 206, 235, 0.3)', 'rgba(255, 255, 255, 0.3)']} />
          </View>
          
          <View style={styles.bottomGradientCircleContainer}>
              <GradientCircle size={257} colors={['rgba(14, 190, 126, 0.3)', 'rgba(255, 255, 255, 0.3)']} />
          </View>
      </View>

      {/* Header */}
      <HeaderComponent title="All Records" titleColor="rgba(51, 51, 51, 1)"/>

      <ScrollView>
        {records.map((record) => (
          <RecordComponent
            key={record.id}
            date={record.date}
            name={record.name}
            onOptionsPress={() => handleOptionsPress(record.id)}
          />
        ))}
      </ScrollView>

      <View style={styles.button}>
        <ButtonComponent
            title="Add a record"
            onPress={()=>{navigation.navigate('AddRecords')}}
            width={295}
            height={54}
            borderRadius={6}
            textSize={18}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop: 36,
      paddingHorizontal: 20,
    },
    button:{
      marginBottom: 50,
      alignItems: 'center'
    },

    bg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      zIndex: -10
    },
    
    topGradientCircleContainer: {
        position: 'absolute',
        top: -32,
        left: -72,
    },

    bottomGradientCircleContainer: {
        position: 'absolute',
        bottom: -90,
        right: -80,
    },
})