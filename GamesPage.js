import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GamesPage = ({ navigation }) => {
  // Fonction pour naviguer vers la page du jeu sélectionné
  const navigateToGamePage = (gameName) => {
    navigation.navigate(gameName); // Assurez-vous que cette route est définie dans votre navigation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur la page des jeux !</Text>
      {/* Première carte */}
      <TouchableOpacity style={styles.cardContainer} onPress={() => navigateToGamePage('MysteryNumberGame')}>
        <Text style={styles.cardTitle}>Devinez le nombre mystère</Text>
      </TouchableOpacity>

      {/* Ajoutez d'autres cartes ici en copiant-collant le code ci-dessus */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  cardContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    width: '80%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GamesPage;
