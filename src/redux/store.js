import {configureStore, combineReducers} from '@reduxjs/toolkit'
import productsReducer from './productsRedux'
import singleProductReducer from './singleProductRedux'
import userReducer from './userRedux'
import cartReducer from './cartRedux'
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE,PERSIST, PURGE,REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// ------------------------------------------------------------------------------------------------------------//

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  //Saving Cart in Local Storage using redux-persist
  const persistedReducer = persistReducer(persistConfig, cartReducer)

//Combining all the reducers into one
const rootReducer = combineReducers({
    products: productsReducer,
    singleProduct:singleProductReducer,
    user:userReducer,
    cart:persistedReducer
    })

//creating a global store for state managemenet
export const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// --------------------------------------------------------------------------------------------------------------//
export let persistor = persistStore(store)