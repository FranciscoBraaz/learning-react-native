import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addNote, changeNote, removeNote} from '../../reducers/notes';
import {
  Container,
  TitleInput,
  BodyInput,
  ButtonCancel,
  ButtonCancelImage,
  ButtonSave,
  ButtonSaveImage,
  ButtonDelete,
  ButtonDeleteText,
} from './styles';

export function EditNote() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const list = useSelector(state => state.notes.list);
  const [status, setStatus] = useState('new');
  const [index, setIndex] = useState(null);

  useEffect(() => {
    if (route.params?.key !== undefined && list[route.params.key]) {
      setStatus('edit');
      setIndex(route.params?.key);
      setTitle(list[route.params.key].title);
      setDescription(list[route.params.key].description);
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: status === 'new' ? 'Nova anotação' : 'Editar anotação',
      headerLeft: () => (
        <ButtonCancel underlayColor="transparent" onPress={handleCancel}>
          <ButtonCancelImage source={require('../../assets/close.png')} />
        </ButtonCancel>
      ),
      headerRight: () => (
        <ButtonSave underlayColor="transparent" onPress={handleSave}>
          <ButtonSaveImage source={require('../../assets/save.png')} />
        </ButtonSave>
      ),
    });
  }, [status, title, description]);

  function handleCancel() {
    navigation.goBack();
  }

  function handleSave() {
    if (title !== '' && description !== '') {
      if (status === 'new') {
        dispatch(addNote({title, description}));
      } else {
        dispatch(changeNote({title, description, index}));
      }
      navigation.goBack();
    } else {
      alert('Preencha o título e a descrição');
    }
  }

  function handleDelete() {
    if (index !== null) {
      dispatch(removeNote({index}));
    }

    navigation.goBack();
  }

  return (
    <Container>
      <TitleInput
        value={title}
        onChangeText={event => setTitle(event)}
        placeholderTextColor="#CCC"
        placeholder="Digite o título da anotação"
        autoFocus={true}
      />
      <BodyInput
        value={description}
        onChangeText={event => setDescription(event)}
        placeholder="Digite a descrição da anotação"
        multiline={true}
        placeholderTextColor="#CCC"
        textAlignVertical="top"
      />
      {status === 'edit' && (
        <ButtonDelete onPress={handleDelete} underlayColor="#FF0000">
          <ButtonDeleteText>Excluir anotação</ButtonDeleteText>
        </ButtonDelete>
      )}
    </Container>
  );
}
