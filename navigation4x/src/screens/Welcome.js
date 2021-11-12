import React from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const WelcomeText = styled.Text`
  font-size: 20px;
`;

const Screen = props => {
  return (
    <Page>
      <WelcomeText>
        Seja bem-vindo {props.navigation.state.params.name}!
      </WelcomeText>
    </Page>
  );
};

Screen.navigationOptions = () => {
  return {
    title: 'Bem vindo',
  };
};

export default Screen;
