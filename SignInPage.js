import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SignInPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignInDisabled, setIsSignInDisabled] = useState(true); // État pour indiquer si la connexion est désactivée

  const handleSignUp = () => {
    navigation.navigate('SignUp'); 
  };

  const handleSignInPage = () => {
    navigation.navigate('SignUpConfirmationPage'); // Redirection vers SignUpConfirmationPage
  };

  // Fonction pour activer/désactiver le bouton de connexion en fonction des champs remplis
  const checkSignInButton = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      setIsSignInDisabled(false);
    } else {
      setIsSignInDisabled(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          checkSignInButton(); // Vérifiez si le bouton de connexion doit être activé ou désactivé
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          checkSignInButton(); // Vérifiez si le bouton de connexion doit être activé ou désactivé
        }}
      />  
      <TouchableOpacity
        style={[styles.button, isSignInDisabled && styles.disabledButton]}
        onPress={handleSignInPage}
        disabled={isSignInDisabled}
      >
        <Text style={[styles.buttonText, !isSignInDisabled && styles.buttonTextCenter]}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={handleSignUp}
      >
        <Text style={styles.linkText}>Pas encore de compte ? Inscrivez-vous</Text>
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
  buttonTextCenter: {
    textAlign: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default SignInPage;
