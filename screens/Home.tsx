import { useState } from 'react';
import { View, TouchableOpacity, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FirestoreAPI from '../api/example';

const HomeScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Playing around with API
  const handleFormSubmit = async () => {
    const userData = {email, password}
    const response = await FirestoreAPI.addUserToCollection(userData);
    console.log(response);
  };

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button title="Sign Up" onPress={handleFormSubmit} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
