import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import userReducer from './slices/userSlice';
import paymentMethodReducer from './slices/payment_methodSlice';

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    user: userReducer,
    payment_method: paymentMethodReducer,
})

export const store = configureStore({
    reducer: persistReducer(
        persistConfig,
        reducers
    ),
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store)