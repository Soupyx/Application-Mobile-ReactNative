// HomePage.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SignUpPage from './SignUpPage'; // Importer SignUpPage

const HomePage = ({ navigation }) => {
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleMoreInfo = () => {
    navigation.navigate('MoreInfo');
  };
  
  const handleGame = () => {
    navigation.navigate('Game'); // Assurez-vous que le nom de la route est "Game" et non "game"
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur Overwatch 2 !</Text>
      <Image
        source={require('./overwatch_logo.png')}
        style={styles.logo}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonTextSignUp}>Inscription</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleMoreInfo}
        >
          <Text style={styles.buttonText}>En savoir plus</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.button, styles.playButton]} 
        onPress={handleGame}
      >
        <Text style={styles.buttonplay}>Jouer à notre jeu !</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: '45%',
  },
  buttonplay: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonSignUp: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextSignUp: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  playButton: {
    width: '90%',
  },
});

export default HomePage;
