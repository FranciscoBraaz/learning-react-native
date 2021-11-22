import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export function HomeScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');

  function handleSubmit() {
    navigation.navigate('Sobre', {
      name,
    });
  }

  function handleChangeHeader() {
    navigation.setOptions({
      title,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Qual seu nome?</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={value => setName(value)}
      />
      <Button title="Enviar" onPress={handleSubmit} />
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={value => setTitle(value)}
      />
      <Button title="Alterar Header" onPress={handleChangeHeader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 10,
    marginBottom: 10,
  },
});
