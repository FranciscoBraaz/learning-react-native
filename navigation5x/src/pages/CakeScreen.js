import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';

export default function CakeScreen() {
  const navigation = useNavigation();
  const [ingredients, setIngredients] = useState([]);
  const [valueItem, setValueItem] = useState('');

  function handleNewIngredient() {
    setValueItem(prevState => {
      setIngredients(prevIngredients => [...prevIngredients, prevState]);
      return '';
    });
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Adicionar" onPress={handleNewIngredient} />
      ),
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Faça um bolo</Text>
      <TextInput
        style={styles.input}
        placeholder="Adicionar item"
        value={valueItem}
        onChangeText={value => setValueItem(value)}
      />
      <FlatList
        data={ingredients}
        style={styles.list}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(43, 43, 43)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#fff',
  },
  item: {
    fontSize: 22,
    color: '#fff',
    padding: 10,
    alignSelf: 'center',
  },
  list: {
    width: '100%',
  },
  input: {
    fontSize: 18,
    width: '70%',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});
