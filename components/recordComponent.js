import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TextComponent from './textComponent';
import { EllipsisVerticalIcon } from 'react-native-heroicons/outline';

const RecordComponent = ({ date, name, onOptionsPress }) => {
  // Function to format the date to "DD MMM"
  const formatDate = (date) => {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    return `${day} ${month}`;
  };

  return (
    <View style={styles.recordContainer}>
      <View style={styles.dateContainer}>
        <View style={styles.dateStyle}>
          <TextComponent style={styles.dateText}>{formatDate(date)}</TextComponent>
        </View>

        <View style={styles.newStyle}>
          <TextComponent style={styles.newText}> 
            NEW
          </TextComponent>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <TextComponent style={styles.title}>Records added by you</TextComponent>
        <TextComponent style={styles.recordFor}>Record for {name}</TextComponent>
        <TextComponent style={styles.prescription}>1 Prescription</TextComponent>
      </View>

      <TouchableOpacity style={styles.optionsButton} onPress={onOptionsPress}>
        <EllipsisVerticalIcon size={24} color="rgba(103, 114, 148, 1)" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  recordContainer: {
    height: 110,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.08)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 8,
    marginBottom: 10,

  },

  dateContainer: {
    flexDirection: 'column',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  
  dateStyle: {
    width: 55,
    height: 60, 
    borderRadius: 6,
    padding: 5,
    backgroundColor: 'rgba(14, 190, 127, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },

  dateText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
  },

  newStyle:{
    width: 55,
    height: 22,
    borderRadius: 2,
    backgroundColor: 'rgba(14, 190, 127, 0.1)',
    alignItems: 'center'
  },

  newText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'rgba(14, 190, 127, 1)'
  },

  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 1)',
    marginBottom: 5,
  },

  recordFor: {
    fontSize: 14,
    color: 'rgba(14, 190, 127, 1)',
    marginBottom: 11,
  },

  prescription: {
    fontSize: 12,
    color: 'rgba(103, 114, 148, 1)',
  },

  optionsButton: {
    marginBottom: 70,
    marginRight: -10
  },

});

export default RecordComponent;
