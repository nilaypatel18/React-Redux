import { createStore, applyMiddleware } from 'redux'
//import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './Reducer'
import rootSaga from './Middleware';

/*const persistConfig = {
  key: 'root',
  storage,
}*/

//const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()

export let store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
// export let persistor = persistStore(store)

sagaMiddleware.run(rootSaga)