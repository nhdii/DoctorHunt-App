import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import HeaderComponent from '../components/headerComponent';
import ButtonComponent from '../components/buttonComponent';

const PatientDetailScreen = () => {
  const [patientName, setPatientName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('male');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    // Handle the continue action
  };

  return (
    <View style={styles.container}>
        <HeaderComponent title="Patient Detail"/>

        <View style={styles.progressBarContainer}>
            <Text style={styles.stepText}>Step 1/4</Text>
            {/* <View style={styles.progressBar} /> */}
            <View style={styles.progressBar}>
                <View style={styles.progress} />
            </View>
        </View>

        <View style={styles.form}>
            <Text style={styles.label}>Patient's Name</Text>

            <TextInput
                style={styles.input}
                placeholder="Abdullah Mamun"
                placeholderTextColor="rgba(103, 114, 148, 1)"
                value={patientName}
                onChangeText={setPatientName}
            />
        
            <Text style={styles.label}>Age</Text>
            <View style={styles.ageContainer}>
            <TextInput
                style={styles.ageInput}
                placeholder="Day"
                value={day}
                onChangeText={setDay}
                keyboardType="numeric"
            />

            <TextInput
                style={styles.ageInput}
                placeholder="Month"
                value={month}
                onChangeText={setMonth}
                keyboardType="numeric"
            />
          
            <TextInput
                style={styles.ageInput}
                placeholder="Year"
                value={year}
                onChangeText={setYear}
                keyboardType="numeric"
            />
        </View>
        
        <Text style={styles.label}>Gender</Text>
        <View style={styles.genderContainer}>
            <TouchableOpacity
                style={styles.genderOption}
                onPress={() => setGender('male')}
            >
                <View style={gender === 'male' ? styles.radioSelected : styles.radio} />
                <Text style={styles.genderText}>Male</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.genderOption}
                onPress={() => setGender('female')}
            >
                <View style={gender === 'female' ? styles.radioSelected : styles.radio} />
                <Text style={styles.genderText}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.genderOption}
                onPress={() => setGender('others')}
            >
                <View style={gender === 'others' ? styles.radioSelected : styles.radio} />
                <Text style={styles.genderText}>Others</Text>
            </TouchableOpacity>
        </View>
        
        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="+8801000000000"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
        />
        
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="itsmemamun1@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
    
      </View>
        <View style={styles.button}>
            <ButtonComponent
                title="Continue"
                onPress={()=>{}}
                width={295}
                height={54}
                borderRadius={6}
                textSize={18}
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 36,
  },

  progressBarContainer: {
    flexDirection: 'row',
    height: 38,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 12,
    marginBottom: 24,
    paddingHorizontal: 14,

    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  stepText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 1)'
  },

  progressBar: {
    flex: 1,
    height: 5,
    marginLeft: 15,
    backgroundColor: 'rgba(14, 190, 127, 0.3)',
    borderRadius: 10,
  },

  progress:{
    position: 'absolute',
    zIndex: 10,
    flex: 1,
    width: "25%",
    height: 5,
    backgroundColor: 'rgba(14, 190, 127, 1)',
    borderRadius: 10,

  },

  form: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 23.18,
    color: 'rgba(0, 0, 0, 1)',
    marginBottom: 9,
  },

  input: {
    width: 305,
    height: 54,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'rgba(103, 114, 148, 0.16)',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  ageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  ageInput: {
    flex: 1,
    height: 54,
    borderColor: 'rgba(103, 114, 148, 0.16)',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 11,
    marginHorizontal: 5,
  },

  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(103, 114, 148, 1)',
    marginRight: 10,
  },

  radioSelected: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(103, 114, 148, 1)',
    marginRight: 10,
    backgroundColor: 'rgba(14, 190, 127, 1)',
  },

  genderText: {
    fontSize: 16,
  },

  button:{
    marginTop: 38,
    alignItems: 'center'

    }
});

export default PatientDetailScreen;
