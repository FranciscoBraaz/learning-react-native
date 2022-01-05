import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #333;
`;

export const TitleInput = styled.TextInput`
  font-size: 20px;
  color: #fff;
  padding: 15px;
  font-weight: bold;
  border-style: solid;
  border-color: #222;
  border-bottom-width: 1px;
`;

export const BodyInput = styled.TextInput`
  font-size: 20px;
  color: #fff;
  padding: 15px;
  flex: 1;
`;

export const ButtonSave = styled.TouchableHighlight`
  margin-right: 15px;
`;

export const ButtonCancel = styled.TouchableHighlight`
  margin-left: 15px;
`;

export const ButtonSaveImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const ButtonCancelImage = styled.Image`
  width: 20px;
  height: 20px;
`;

export const ButtonDelete = styled.TouchableHighlight`
  height: 40px;
  background-color: #ff3333;
  justify-content: center;
  align-items: center;
`;

export const ButtonDeleteText = styled.Text`
  font-size: 14px;
  color: #fff;
`;
