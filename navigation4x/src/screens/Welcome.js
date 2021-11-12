import React from 'react';
import {Button, Image, View} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const WelcomeText = styled.Text`
  font-size: 20px;
`;

const TitleText = styled.Text``;

const LogoHeader = styled.Image`
  width: 60px;
  height: 60px;
`;

const Square = styled.View`
  background-color: blueviolet;
  width: 30px;
  height: 30px;
`;

const IconHome = styled.Image`
  width: 30px;
  height: 30px;
`;

const Screen = props => {
  return (
    <Page>
      <WelcomeText>Seja bem-vindo(a)!</WelcomeText>
    </Page>
  );
};

Screen.navigationOptions = ({navigation}) => {
  const Title = () => {
    return <LogoHeader source={require('../assets/logo.png')} />;
  };

  return {
    // headerTitle: () => <Title />,
    // headerRight: () => (
    //   <Button
    //     title="Login"
    //     onPress={() => {
    //       navigation.navigate('Login');
    //     }}
    //   />
    // ),
    tabBarLabel: 'Olá',
    tabBarIcon: ({focused, tintColor}) => {
      if (focused) {
        return <IconHome source={require('../assets/home-active.png')} />;
      } else {
        return <IconHome source={require('../assets/home-inactive.png')} />;
      }
    },
  };
};

export default Screen;
