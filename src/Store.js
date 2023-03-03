import { createStore } from "redux";
import rootReducer from "./Services/Reducers/Root.reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig  = {
    key : "counterPersist",
    storage
}

const persistR = persistReducer(persistConfig,rootReducer)

const store = createStore(persistR ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor = persistStore(store)
export default store;