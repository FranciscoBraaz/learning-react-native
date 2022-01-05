import React from 'react';
import {Box, Title} from './styles';

export function NoteItem({item, index, handlePress}) {
  return (
    <Box onPress={() => handlePress(index)}>
      <Title>{item.title}</Title>
    </Box>
  );
}
