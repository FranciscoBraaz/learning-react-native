import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector, connect} from 'react-redux';
import {incrementar, reduzir} from '../store/contador';
import {changeEmail, changeName} from '../store/user';

const Home = props => {
  const navigation = useNavigation();
  const [email, setEmail] = useState(props.email);
  const [name, setName] = useState(props.name);
  // const state = useSelector(state => state.contador);
  // const dispatch = useDispatch();

  function handlePress() {
    navigation.navigate('About');
  }

  function handleSave() {
    props.changeEmail(email);
    props.changeName(name);
  }

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Contador possui o valor de: {props.contador}</Text>
      <Text style={{fontSize: 18}}>Email: </Text>
      <TextInput
        style={{
          borderStyle: 'solid',
          borderWidth: 1,
          width: 200,
          marginBottom: 5,
        }}
        value={email}
        onChangeText={event => setEmail(event)}
      />
      <Text style={{fontSize: 18}}>Nome: </Text>
      <TextInput
        style={{
          borderStyle: 'solid',
          borderWidth: 1,
          width: 200,
          marginBottom: 10,
        }}
        value={name}
        onChangeText={event => setName(event)}
      />
      <Button title="Salvar" onPress={handleSave} />
      <View style={{height: 10}} />
      <Button title="Incrementar" onPress={() => props.increment()} />
      <View style={{height: 10}} />
      <Button title="Sobre" onPress={handlePress} />
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    email: state.user.email,
    name: state.user.name,
    contador: state.contador,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeEmail: email => dispatch(changeEmail(email)),
    changeName: name => dispatch(changeName(name)),
    increment: () => dispatch(incrementar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
