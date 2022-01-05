import {createStore, combineReducers} from 'redux';
import contador from './contador';
import user from './user';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducer = combineReducers({contador, user});
const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user'],
    blacklist: ['contador'],
  },
  reducer,
);

const store = createStore(
  persistedReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
let persistor = persistStore(store);

export {store, persistor};
