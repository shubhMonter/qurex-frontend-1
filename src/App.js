import { persistStore } from 'redux-persist';
import store from './state/store';
import crossBrowserListener from './utils/redux-persist-listner';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import AppRouter from './routes';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Loader from './assets/svgs/Loader.svg';
import { CookiesProvider } from 'react-cookie';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
  };
  const persistor = persistStore(store);
  store.persistor = persistor;

  window.addEventListener(
    'storage',
    crossBrowserListener(store, persistConfig)
  );

  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="flex items-center justify-center h-screen text-2xl bg-white dark:bg-black dark:text-white">
            <span className="loader"></span>
          </div>
        }
        persistor={persistor}
      >
        <CookiesProvider>
          <AppRouter />
        </CookiesProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
