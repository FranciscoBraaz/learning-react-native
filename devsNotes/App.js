import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import Home from './src/pages/Home';
import {incrementar} from './src/reducers/contador';
import {persistor, store} from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View>
          <Home />
        </View>
      </PersistGate>
    </Provider>
  );
}
