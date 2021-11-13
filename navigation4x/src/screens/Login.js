import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import TabBarIcon from '../components/TabBarIcon';

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

const TabBarButtonArea = styled.TouchableOpacity`
  flex: 1;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const TabBarButtonText = styled.Text`
  color: #fff;
`;

const TabBarButtonCircle = styled.View`
  width: 50px;
  height: 50px;
  background-color: blueviolet;
  border-radius: 25px;
`;

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

Screen.navigationOptions = ({navigation}) => {
  const TabBarButton = ({onPress}) => {
    return (
      <TabBarButtonArea onPress={onPress}>
        <TabBarButtonCircle />
      </TabBarButtonArea>
    );
  };

  return {
    // tabBarButtonComponent: props => <TabBarButton {...props} />,
    title: 'Login',
    // tabBarIcon: ({focused}) => (
    //   <TabBarIcon focused={focused} route="Login" badge={5} />
    // ),
  };
};

export default Screen;
