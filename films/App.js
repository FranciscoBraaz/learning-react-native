import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {
  Center,
  Divider,
  Heading,
  HStack,
  NativeBaseProvider,
  Spinner,
} from 'native-base';
const ViewStyle = styled.SafeAreaView``;
const TextTest = styled.Text`
  font-size: 20px;
`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function handleGetData() {
      const response = await fetch('https://api.b7web.com.br/cinema/');
      const json = await response.json();

      if (json) {
        setMovies(json);
      }

      setLoading(false);
    }

    handleGetData();
  }, []);

  return (
    <NativeBaseProvider>
      <ViewStyle style={styles.container}>
        {loading ? (
          <Center flex={1} px="3">
            <HStack space={2} alignItems="center">
              <Spinner accessibilityLabel="Loading movies" size="lg" />
              <Heading color="primary.500" fontSize="lg">
                Loading
              </Heading>
            </HStack>
          </Center>
        ) : (
          <>
            <TextTest style={styles.totalMoviesText}>
              Total: {movies.length} Filmes
            </TextTest>
            <Divider my="2" />
            <FlatList
              style={styles.list}
              data={movies}
              renderItem={({item}) => (
                <View style={styles.movieItem}>
                  <Image
                    source={{uri: item.avatar}}
                    style={styles.movieImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.movieTitle}>{item.titulo}</Text>
                </View>
              )}
              keyExtractor={item => item.titulo}
            />
          </>
        )}
      </ViewStyle>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  totalMoviesText: {
    color: '#eee',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  list: {
    flex: 1,
  },
  movieItem: {
    marginBottom: 30,
  },
  movieImage: {
    height: 200,
  },
  movieTitle: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default App;
