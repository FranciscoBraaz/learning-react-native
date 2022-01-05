import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';

const About = props => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Bem vindo: {props.name}</Text>
      <Text style={{fontSize: 20}}>Seu email atual: {props.email}</Text>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    email: state.user.email,
    name: state.user.name,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
