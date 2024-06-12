// firebaseService.js
import { firestore } from '../config/firebase';

export const getDoctors = async () => {
  const doctorCollection = await firestore().collection('doctors').get();
  return doctorCollection.docs.map(doc => doc.data());
};

export const getFeatureDoctors = async () => {
  const featureDoctorCollection = await firestore().collection('featureDoctors').get();
  return featureDoctorCollection.docs.map(doc => doc.data());
};
