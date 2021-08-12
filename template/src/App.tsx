import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import appStore, {persistor} from './stores';
import {PersistGate} from 'redux-persist/integration/react';
import {Router} from './navigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // <Provider store={appStore}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <>
    //       <Router />
    //     </>
    //   </PersistGate>
    // </Provider>

    <Router />
  );
};
export default App;
