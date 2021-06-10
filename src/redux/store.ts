import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

// browser history
export const history = createBrowserHistory()

// store provides redux store for whole app
export const store = configureStore({
  reducer: {
    router: connectRouter(history),
  },

  middleware: [...getDefaultMiddleware(), routerMiddleware(history)],
})

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
