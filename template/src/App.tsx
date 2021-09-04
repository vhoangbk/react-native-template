import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import appStore, {persistor} from './stores';
import {PersistGate} from 'redux-persist/integration/react';
import {Router} from './navigation';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';
import StorybookUIRoot from '../storybook'

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (

    // <StorybookUIRoot />

    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <Router />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </>
      </PersistGate>
    </Provider>
  );
};
export default App;
