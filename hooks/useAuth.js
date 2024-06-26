import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, firestore } from '../config/firebase';
import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';

export default function useAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userData = await fetchUserData(user.uid);
                setUser({ ...user, ...userData });
            } else {
                setUser(null);
            }
        });
        return unsub;
    }, []);

    const fetchUserData = async (uid) => {
        try {
            const docRef = doc(firestore, "users", uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data();
            } else {
                console.log("No such document!");
                return null;
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            return null;
        }
    };

    const updateUserProfile = async (uid, userData) => {
        try {
            const userRef = doc(firestore, 'users', uid);
            console.log("get user id: ", userData);
            await updateDoc(userRef, userData);
            console.log('User updated successfully');
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const updateFavorites = async (uid, doctorId, add = true) => {
        try {
            const userRef = doc(firestore, 'users', uid);
            if (add) {
                await updateDoc(userRef, {
                    favorites: arrayUnion(doctorId),
                });
                console.log(doctorId);

            } else {
                await updateDoc(userRef, {
                    favorites: arrayRemove(doctorId)
                });
            }
            console.log('Favorites updated successfully');
        } catch (error) {
            console.error('Error updating favorites:', error);
        }
    };

    return { user, updateUserProfile, updateFavorites  };
}
