// import {createStore, applyMiddleware} from 'redux';
// import allReducers from './reducers';
// import createSagaMiddleware from 'redux-saga';
// import {rootSaga} from './sagas';
// import {persistStore, persistReducer} from 'redux-persist';
// import logger from 'redux-logger';
// import AsyncStorage from '@react-native-community/async-storage';
// import Config from 'react-native-config';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   blacklist: [
//     'appState',
//     'rooms',
//     'payIn',
//     'notifications',
//     'search',
//     'report',
//     'transaction',
//   ],
// };

// const sagaMiddleware = createSagaMiddleware();

// const appStore =
//   Config.DEBUG_MODE === 'true'
//     ? createStore(
//         persistReducer(persistConfig, allReducers),
//         applyMiddleware(sagaMiddleware, logger),
//       )
//     : createStore(
//         persistReducer(persistConfig, allReducers),
//         applyMiddleware(sagaMiddleware),
//       );

// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(appStore);
// export default appStore;
