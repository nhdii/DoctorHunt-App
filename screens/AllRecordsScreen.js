import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import RecordComponent from '../components/recordComponent';
import HeaderComponent from '../components/headerComponent';
import ButtonComponent from '../components/buttonComponent';

export default function AllRecordsScreen() {
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
            title="Upload Record"
            onPress={()=>{navigation.navigate('AllRecords')}}
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

  }
})