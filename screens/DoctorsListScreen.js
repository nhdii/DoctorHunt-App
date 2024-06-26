import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import GradientCircle from '../components/gradientCircle';
import HeaderComponent from '../components/headerComponent';
import SearchBar from '../components/searchBar';
import { fetchCollectionData, fetchSpecialtyData } from '../utils/fetchData';
import { useNavigation } from '@react-navigation/native';
import CategoryDoctorCard from '../components/categoryCard';

const DoctorsListScreen = ({ route }) => {
    const { specialty } = route.params;
    const navigation = useNavigation();
    const [doctors, setDoctors] = useState([]);
    const [specialties, setSpecialties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [doctorsData, specialtiesData] = await Promise.all([
                    fetchCollectionData('doctors'),
                    fetchCollectionData('specialties')
                ]);

                // Fetch specialties for each doctor
                const doctorsWithSpecialties = await Promise.all(doctorsData.map(async (doctor) => {
                    const specialtyData = await fetchSpecialtyData(doctor.specialty);
                    return {
                        ...doctor,
                        specialist: specialtyData?.name || 'Unknown Specialty'
                    };
                }));

                setDoctors(doctorsWithSpecialties);
                setSpecialties(specialtiesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </SafeAreaView>
        );
    }

    // Filter doctors based on the selected specialty
    const filteredDoctors = doctors.filter(doctor => doctor.specialist === specialty);

    return (
        <SafeAreaView style={{flex: 1, paddingTop: 36}}>
            <View style={styles.bg}>
                <View style={styles.topGradientCircleContainer}>
                    <GradientCircle size={216} colors={['rgba(135, 206, 235, 0.3)', 'rgba(255, 255, 255, 0.3)']} />
                </View>
                
                <View style={styles.bottomGradientCircleContainer}>
                    <GradientCircle size={257} colors={['rgba(14, 190, 126, 0.3)', 'rgba(255, 255, 255, 0.3)']} />
                </View>
            </View>

            {/* header */}
            <View style={styles.header}>
                <HeaderComponent title={specialty} titleColor='rgba(51, 51, 51, 1)' />
            </View>

            <ScrollView style={{paddingHorizontal: 20}}>
                
                {/* Search Bar */}
                <View style={styles.searchBar}>
                    <SearchBar 
                        onChangeText={{}}
                        onSubmit={{}}
                    />
                </View>

                {filteredDoctors.map((doctor) => (
                    <TouchableOpacity 
                        key={doctor.id}
                        onPress={() => navigation.navigate("DoctorDetail", { doctor })}
                    >
                        <CategoryDoctorCard
                            doctor={doctor} // Pass doctor object
                            imageSource={{ uri: doctor.image_url }}
                            name={doctor.name}
                            specialty={doctor.specialist}
                            rating={doctor.rating}
                            views={doctor.views}
                            isFavorite={doctor.isFavorite}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    
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
        left: -99,
    },

    bottomGradientCircleContainer: {
        position: 'absolute',
        bottom: -54,
        right: -70,
    },

    header:{
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

    searchBar:{
        alignItems: 'center',
        marginBottom: 20
    },
})

export default DoctorsListScreen;
