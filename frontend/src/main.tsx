//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Index from './pages';
import ErrorPage from './pages/errorPage';
import App from "./App";
import { ThemeProvider } from './components/theme-provider';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" errorElement={<ErrorPage />}>
    <Route path="/" element={<App />}>
      <Route index element={<Index />} />
    </Route>
  </Route>
));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);