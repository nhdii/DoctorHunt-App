import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import DoctorDetailCard from '../components/doctorDetailCard';
import LinearGradient from 'react-native-linear-gradient'
import BackArrowIcon from '../assets/icon/backArrowIcon';
import TextComponent from '../components/textComponent';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import GradientCircle from '../components/gradientCircle';

export default function DoctorDetailScreen({ route }) {
  const navigation = useNavigation();
  const { doctor, services  } = route.params;

  const statisticsData = [
    { number: 100, label: 'Running' },
    { number: 500, label: 'Ongoing' },
    { number: 700, label: 'Patient' }
  ];

  return (
    <SafeAreaView>
      <LinearGradient 
        colors={['rgba(14, 190, 126, 1)', 'rgba(7, 217, 173, 1)']} 
        start={{x: 0, y: 0}} 
        end={{x: 1, y: 1}}
      >
        <StatusBar
            animated={true}
            backgroundColor='transparent'
            translucent={true}
        />
      </LinearGradient>

      <View style={styles.bg}>
        <View style={styles.topGradientCircleContainer}>
            <GradientCircle size={216} colors={['rgba(135, 206, 235, 0.3)', 'rgba(255, 255, 255, 0.3)']} />
        </View>
        
        <View style={styles.bottomGradientCircleContainer}>
            <GradientCircle size={216} colors={['rgba(14, 190, 126, 0.3)', 'rgba(255, 255, 255, 0.3)']} />
        </View>
      </View>
      
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          {/* Back Arrow Icon */}
          <BackArrowIcon onPress={() => navigation.goBack()} />

          {/* Title */}
          <TextComponent style={styles.textHeader}>
              Doctor Details
          </TextComponent>

          {/* MagnifyingGlassIcon */}
          <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <MagnifyingGlassIcon size={24} color='rgba(103, 114, 148, 1)'/>
          </TouchableOpacity>
        </View>

        {/* Show Doctor detail card */}
        <View style={styles.doctorCard}>
          <DoctorDetailCard doctor={doctor} />
        </View>

        <View style={styles.statisticContainer}>
          {statisticsData.map((statistic, index) => (
            <View style={styles.rectangle} key={index}>
              <TextComponent style={styles.statisticNumber}>{statistic.number}</TextComponent>
              <TextComponent style={styles.label}>{statistic.label}</TextComponent>
            </View>
          ))}

        </View>

         {/* Service List */}
        <View style={styles.serviceContainer}>
          <TextComponent style={styles.serviceTitle}>
            Services
          </TextComponent>
          {services.map((service, index) => (
            <View style={styles.serviceContainer} key={index}>
              <View style={styles.serviceContent}>
                <TextComponent style={styles.serviceNumber}>{service.number}.</TextComponent>
                <TextComponent style={styles.serviceDescription}>{service.description}</TextComponent>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.mapStyle}>
          <TouchableOpacity onPress={()=>{}}>
            <Image source={require('../assets/images/map.png')} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  doctorCard: {
    marginTop: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container:{
    justifyContent: 'center',
    alignItems: 'center',
  },

  header:{
    flexDirection: 'row',
    marginTop: 36,
    marginHorizontal: 20,
    alignItems: 'center'
  },

  textHeader:{
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 21.33,
      letterSpacing: -0.3,
      color: 'rgba(34, 34, 34, 1)',
      marginLeft: 19,
  },

  statisticContainer:{
    flexDirection: 'row',
    width: 305, 
    height: 84,
    borderRadius: 10,
    marginTop: 24,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  rectangle:{
    width: 90,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(203, 203, 203, 1)'
  },
  
  statisticNumber:{
    fontSize: 18,
    lineHeight: 21.33,
    letterSpacing: -0.3,
    fontWeight: 'bold',
    color: 'rgba(51, 51, 51, 1)'
  },

  label:{
    fontSize: 14,
    lineHeight: 16.59,
    letterSpacing: -0.3,
    fontWeight: '400',
    color: 'rgba(103, 114, 148, 1)'
  },

  serviceContainer: {
    marginTop: 27,
    marginLeft: 19,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },

  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 21.33,
    letterSpacing: -0.3,
    color: 'rgba(51, 51, 51, 1)',
  },

  serviceContent: {
    flexDirection: 'row',
    marginLeft: -19,
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderColor: 'rgba(103, 114, 148, 0.1)',
    alignItems: 'center',
  },

  serviceNumber: {
    fontSize: 13,
    marginRight: 10,
    color: 'rgba(14, 190, 127, 1)',
    fontWeight: 'bold'
  },

  serviceDescription: {
    flex: 1,
    fontSize: 13,
    color: 'rgba(103, 114, 148, 0.9)'
  },

  mapStyle:{
    width: 335,
    height: 210,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)'
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
  },

  topGradientCircleContainer: {
      position: 'absolute',
      top: -33,
      left: -88,
  },

  bottomGradientCircleContainer: {
      position: 'absolute',
      bottom: -29,
      right: -30,
  },
})
