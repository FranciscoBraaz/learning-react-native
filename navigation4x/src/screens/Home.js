import React from 'react';
import {Button} from 'react-native';
import styled from 'styled-components/native';

const ViewHome = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const TextHome = styled.Text`
  font-size: 20px;
`;

const ImageIcon = styled.Image`
  width: 25px;
  height: 25px;
`;

const Home = props => {
  return (
    <ViewHome>
      <TextHome>Home - Principal</TextHome>
      <Button
        title="Perfil"
        onPress={() => props.navigation.navigate('Perfil')}
      />
      <Button
        title="Abrir Drawer"
        onPress={() => props.navigation.openDrawer()}
      />
    </ViewHome>
  );
};

Home.navigationOptions = () => {
  return {
    title: 'Início',
    drawerIcon: ({focused, tintColor}) => (
      <ImageIcon source={require('../assets/home-active.png')} />
    ),
  };
};

export default Home;
