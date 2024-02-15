import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const MysteryNumberGame = () => {
  const [number, setNumber] = useState('');
  const [mysteryNumber, setMysteryNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = () => {
    const userNumber = parseInt(number);
    if (isNaN(userNumber)) {
      setMessage('Veuillez entrer un nombre valide.');
    } else if (userNumber === mysteryNumber) {
      setMessage('Bravo ! Vous avez deviné le nombre mystère.');
      setGameOver(true);
    } else if (userNumber < mysteryNumber) {
      setMessage('Le nombre mystère est plus grand.');
    } else {
      setMessage('Le nombre mystère est plus petit.');
    }
    setNumber('');
  };

  const handleRetry = () => {
    setMysteryNumber(Math.floor(Math.random() * 100) + 1);
    setMessage('');
    setGameOver(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Devinez le nombre mystère (entre 1 et 100)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number}
        onChangeText={text => setNumber(text)}
        editable={!gameOver}
      />
      <Button title="Devinez" onPress={handleGuess} disabled={gameOver} />
      <Text style={styles.message}>{message}</Text>
      <View style={styles.retryButtonContainer}>
        {gameOver && (
          <Button title="Rejouer" onPress={handleRetry} color="#841584" />
        )}
      </View>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 100,
    width: '50%',
    textAlign: 'center',
  },
  message: {
    marginTop: 50,
    fontSize: 18,
    textAlign: 'center',
  },
  retryButtonContainer: {
    marginTop: 20,
  },
});

export default MysteryNumberGame;
