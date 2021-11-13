import React from 'react';
import {Button} from 'react-native';
import styled from 'styled-components/native';

const ViewHome = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TextHome = styled.Text`
  font-size: 20px;
`;

export default function Home(props) {
  return (
    <ViewHome>
      <TextHome>Home - Principal</TextHome>
      <Button
        title="Perfil"
        onPress={() => props.navigation.navigate('Perfil')}
      />
    </ViewHome>
  );
}
