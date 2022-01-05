import {combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import notes from '../reducers/notes';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

const reducer = combineReducers({notes});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet,
  },
  reducer,
);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const persistor = persistStore(store);

export {store, persistor};
