import React from 'react';
import styled from 'styled-components/native';

const IconTab = styled.View`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

const ImageIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

const TabBarBadge = styled.View`
  width: 15px;
  height: 15px;
  position: absolute;
  border-radius: 8px;
  background-color: blueviolet;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 0;
`;

const TabBarBadgeCount = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export default function TabBarIcon(props) {
  return (
    <IconTab>
      <ImageIcon source={require('../assets/login.png')} />
      <TabBarBadge>
        <TabBarBadgeCount>{props.badge}</TabBarBadgeCount>
      </TabBarBadge>
    </IconTab>
  );
}
