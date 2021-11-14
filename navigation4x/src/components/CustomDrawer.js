import React from 'react';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import styled from 'styled-components/native';

const Scroll = styled.ScrollView`
  flex: 1;
`;

const Area = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const Square = styled.View`
  width: 50px;
  height: 50px;
  background-color: blueviolet;
  border-radius: 25px;
`;

const DrawerOptionButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  flex-direction: row;
`;

const DrawerOptionText = styled.Text`
  color: #000;
  font-size: 18px;
`;

const ImageIcon = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 15px;
`;

export default function CustomDrawer(props) {
  // let tabs = props.items.map((item, index) => {
  //   return (
  //     <DrawerOptionButton
  //       key={index}
  //       onPress={() => props.navigation.navigate(item.routeName)}>
  //       {index === 0 && (
  //         <ImageIcon source={require('../assets/home-active.png')} />
  //       )}
  //       <DrawerOptionText>{item.routeName}</DrawerOptionText>
  //     </DrawerOptionButton>
  //   );
  // });

  return (
    <Scroll>
      <Area>
        <Square />
        <DrawerNavigatorItems
          {...props}
          itemsContainerStyle={{width: '100%'}}
        />
      </Area>
    </Scroll>
  );
}
