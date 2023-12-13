import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css';
import rootReducer from "./slices/quoteSlice";
import { configureStore } from '@reduxjs/toolkit';

export const mystore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
