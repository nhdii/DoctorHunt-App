import { firestore } from '../config/firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';

export const fetchCollectionData = async (collectionName) => {
    try {
        const querySnapshot = await getDocs(collection(firestore, collectionName));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error(`Error fetching ${collectionName} data:`, error);
        return [];
    }
};

export const fetchSpecialtyData = async (specialtyId) => {
    try {
        const specialtyDoc = await getDoc(doc(firestore, 'specialties', specialtyId));
        return specialtyDoc.exists() ? specialtyDoc.data() : null;
    } catch (error) {
        console.error("Error fetching specialty data:", error);
        return null;
    }
};

export const fetchFavoriteDoctors = async (userId) => {
    try {
        const userDoc = await getDoc(doc(firestore, 'users', userId));
        const userData = userDoc.data();

        const favoriteDoctorIds = userData?.favorites || [];

        const doctorDocs = await Promise.all(
            favoriteDoctorIds.map(id => getDoc(doc(firestore, 'doctors', id)))
        ); 

        const doctors = await Promise.all(doctorDocs.map(async doctorDoc => {
            const doctorData = doctorDoc.data();
            const specialtyDoc = await getDoc(doc(firestore, 'specialties', doctorData.specialty));
            const specialtyData = specialtyDoc.data();

            return {
                id: doctorDoc.id,
                ...doctorData,
                specialist: specialtyData?.name || 'Unknown'
            };
        }));
        
        return doctors;
    } catch (error) {
        console.error("Error fetching favorite doctors:", error);
        return [];
    }
};



export const fetchDoctorStatistics = async (doctorId) => {
    try {
        const doctorDoc = await getDoc(doc(firestore, 'doctors', doctorId));
        if (doctorDoc.exists()) {
            const doctorData = doctorDoc.data();
            return doctorData.statistics || {};
        } else {
            console.error("No such doctor document!");
            return {};
        }
    } catch (error) {
        console.error("Error fetching doctor statistics:", error);
        return {};
    }
};


