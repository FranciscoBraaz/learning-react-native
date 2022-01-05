import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import {incrementar} from '../reducers/contador';

const Home = props => {
  return (
    <SafeAreaView>
      <Text>Home - {props.contador}</Text>
      <Button title="Incrementar" onPress={() => props.increment()} />
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    contador: state.contador,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(incrementar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
