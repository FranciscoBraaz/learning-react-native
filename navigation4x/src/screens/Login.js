import React, {useState} from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  height: 50px;
  padding: 10px;
  border: 1px solid #000;
  margin-bottom: 20px;
  width: 80%;
`;

const ButtonSend = styled.Button``;

const Screen = props => {
  const [name, setName] = useState('');

  function handleLogin() {
    props.navigation.navigate('Welcome', {
      name,
    });
  }

  return (
    <Page>
      <Input
        placeholder="Usuário"
        value={name}
        onChangeText={value => setName(value)}
      />
      <Input placeholder="Senha" />
      <ButtonSend title="Entrar" onPress={handleLogin} />
    </Page>
  );
};

Screen.navigationOptions = () => {
  return {
    title: 'Tela de login',
  };
};

export default Screen;
