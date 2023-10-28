import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import { getDocs, collection } from 'firebase/firestore';
import { FIRESTORE_DB } from './firebaseConfig';

const App = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    // Define the Firestore collection reference
    const coll = collection(FIRESTORE_DB, 'Users');

    // Function to fetch all documents in the 'food' collection
    const fetchFoodData = async () => {
      try {
        const querySnapshot = await getDocs(coll);

        // Loop through the documents in the collection
        querySnapshot.forEach((doc) => {
          console.log(
            'Document ID: ',
            doc.id,
            ' => Document Data: ',
            doc.data()
          );
          // Here you can use doc.id and doc.data() as needed
        });
      } catch (error) {
        console.error('Error fetching documents: ', error);
      }
    };

    // Call the function to fetch data when the component mounts
    fetchFoodData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
