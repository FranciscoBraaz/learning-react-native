import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, TitleInput, BodyInput} from './styles';

export function EditNote() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const list = useSelector(state => state.notes.list);
  const [status, setStatus] = useState('new');

  useEffect(() => {
    if (route.params?.key !== undefined && list[route.params.key]) {
      setStatus('edit');
      setTitle(list[route.params.key].title);
      setDescription(list[route.params.key].description);
    }
  }, []);

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
    </Container>
  );
}
