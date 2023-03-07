import { createStore , applyMiddleware , compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Services/Reducers/Root.reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig  = {
    key : "counterPersist",
    storage
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistR = persistReducer(persistConfig,rootReducer)

const store = createStore(persistR ,  composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store)
export default store;