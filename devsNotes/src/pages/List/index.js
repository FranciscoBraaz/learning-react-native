import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {useSelector} from 'react-redux';
import {NoteItem} from '../../components/NoteItem';
import {
  ButtonAddNote,
  Container,
  ImageAddNote,
  NoteList,
  NoNotes,
  NoNotesImage,
  NoNotesText,
} from './styles';

export function List() {
  const navigation = useNavigation();
  const list = useSelector(state => state.notes.list);
  // const list = [];

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Suas notas',
      headerRight: () => (
        <ButtonAddNote
          underlayColor="transparent"
          onPress={() => navigation.navigate('EditNote')}>
          <ImageAddNote source={require('../../assets/more.png')} />
        </ButtonAddNote>
      ),
    });
  }, []);

  function handleNotePress(index) {
    navigation.navigate('EditNote', {
      key: index,
    });
  }

  return (
    <Container>
      {list.length > 0 ? (
        <NoteList
          data={list}
          renderItem={({item, index}) => (
            <NoteItem item={item} index={index} handlePress={handleNotePress} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <NoNotes>
          <NoNotesImage source={require('../../assets/note.png')} />
          <NoNotesText>Nenhuma anotação</NoNotesText>
        </NoNotes>
      )}
    </Container>
  );
}
