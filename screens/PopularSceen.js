// screens/PopularDoctorsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import PopularDoctor from '../components/popularDoctor';
import CategoryDoctorCard from '../components/categoryCard';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import BackArrowIcon from '../assets/icon/backArrowIcon';
import { useNavigation } from '@react-navigation/native';
import { fetchCollectionData, fetchSpecialtyData } from '../utils/fetchData';


export default function PopularDoctorsScreen() {
    
    const navigation = useNavigation();
    const [categories, setCategories] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [specialties, setSpecialties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [categoriesData, doctorsData, specialtiesData] = await Promise.all([
                    fetchCollectionData('categories'),
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

                setCategories(categoriesData);
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
    
    const popularCategory = categories.find(category => category.name === "Popular");
    const popularDoctors = popularCategory ? doctors.filter(doctor => doctor.category === popularCategory.id) : [];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <BackArrowIcon onPress={() => navigation.goBack()} />

                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <MagnifyingGlassIcon size={24} color='rgba(103, 114, 148, 1)'/>
                </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Popular Doctor</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {popularDoctors.map((doctor, index) => (
                <TouchableOpacity key={index} onPress={() => { navigation.navigate('DoctorDetail', { doctor: doctor }) }}>
                    <PopularDoctor
                        image={{ uri: doctor.image_url }}
                        name={doctor.name}
                        role={doctor.specialist}
                        rating={doctor.rating}
                    />
                </TouchableOpacity>
                ))}
            </ScrollView>

            <Text style={styles.sectionTitle}>Category</Text>
            {doctors.map((doctor) => (
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    backButton: {
        fontSize: 24,
        color: '#333',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchButton: {
        fontSize: 24,
        color: '#333',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    horizontalScroll: {
        flexDirection: 'row',
        marginVertical: 10,
    },
});
