import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [status, setStatus] = useState('');
  const [showCupom, setShowCupom] = useState(false);

  async function handleLogin() {
    const response = await fetch('https://api.b7web.com.br/loginsimples', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();
    console.log(email, password);
    if (json.status === 'ok') {
      setStatus('Acesso liberado');
      setShowCupom(true);
    } else {
      setStatus('Acesso negado');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Login Simples</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={value => setEmail(value)}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
        placeholderTextColor="#fff"
      />

      <Button style={styles.button} title="Verificar" onPress={handleLogin} />

      <Text style={styles.status}>{status}</Text>

      {showCupom && (
        <View style={styles.cupomArea}>
          <Text style={styles.cupomTitle}>Código de cupom:</Text>
          <Text style={styles.cupomCode}>453DGE</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
  },
  header: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    color: '#fff',
    height: 45,
    fontSize: 18,
    backgroundColor: '#555',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  button: {},
  status: {
    margin: 50,
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
  cupomArea: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 30,
  },
  cupomTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  cupomCode: {
    textAlign: 'center',
    fontSize: 40,
  },
});

export default App;
