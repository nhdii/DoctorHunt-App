// hooks/useFirestoreCollection.js
import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { firestore } from '../config/firebase';

const useFirestoreCollection = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = collection(firestore, collectionName);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const dataList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(dataList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [collectionName]);

  return { data, loading };
};

export default useFirestoreCollection;
