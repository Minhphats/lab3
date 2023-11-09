import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './navigation/RootNavigator';
import { AuthenticatedUserProvider } from './providers';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const App = () => {
  useEffect(() => {
    // Optional: You can add additional Firebase services initialization here
    // For example: firebase.analytics();
  }, []);

  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
  );
};

export default App;
