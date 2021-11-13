import React from 'react';
import styled from 'styled-components/native';

const ViewPerfil = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TextPerfil = styled.Text`
  font-size: 20px;
`;

export default function Perfil() {
  return (
    <ViewPerfil>
      <TextPerfil>Perfil- Página de perfil</TextPerfil>
    </ViewPerfil>
  );
}
