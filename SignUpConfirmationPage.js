import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignUpConfirmationPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bravo vous venez de vous connecter !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SignUpConfirmationPage;
