import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const SignUpPage = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true); // État pour indiquer si l'email est valide

  const handleSignIn = () => {
    navigation.navigate('SignIn'); 
  };

  const handleSignUp = () => {
    if (validateEmail(email)) {
      navigation.navigate('SignUpConfirmationPage');
    } else {
      setIsValidEmail(false);
    }
  };

  // Vérification de l'email
  const validateEmail = (text) => {
    // Expression régulière pour valider un email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(text);
  };

  // Vérifie si tous les champs sont remplis
  const isSignUpDisabled = !firstName || !lastName || !email || !password || !isValidEmail;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={[styles.input, !isValidEmail && styles.invalidInput]} // Appliquez un style différent si l'email n'est pas valide
        placeholder="Adresse e-mail"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setIsValidEmail(true); // Réinitialisez l'état de la validation de l'email lors de la modification
        }}
        keyboardType="email-address"
      />
      {!isValidEmail && <Text style={styles.errorText}>Veuillez entrer une adresse e-mail valide</Text>}
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={[styles.button, isSignUpDisabled && styles.disabledButton]}
        onPress={handleSignUp}
        disabled={isSignUpDisabled}
      >
        <Text style={styles.buttonText}>Créer mon compte</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignIn}
      >
        <Text style={styles.buttonText}>Déjà un compte ? Connectez-vous</Text>
      </TouchableOpacity>
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
  input: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  invalidInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignUpPage;
