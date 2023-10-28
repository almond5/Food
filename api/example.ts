import { collection, addDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../firebaseConfig';

const FirestoreAPI = {
  addUserToCollection: async (userData: any) => {
    try {
      const coll = collection(FIRESTORE_DB, 'Users');
      const docRef = await addDoc(coll, userData);
      console.log('User added with ID: ', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('Error adding user: ', error);
    }
  },
};

export default FirestoreAPI;
