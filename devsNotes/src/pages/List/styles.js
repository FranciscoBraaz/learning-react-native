import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #333;
`;

export const ButtonAddNote = styled.TouchableHighlight`
  margin-right: 15px;
`;

export const ImageAddNote = styled.Image`
  width: 24px;
  height: 24px;
`;

export const NoteList = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const NoNotes = styled.View`
  justify-content: center;
  align-items: center;
`;

export const NoNotesImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const NoNotesText = styled.Text`
  color: #fff;
  font-size: 17px;
`;
