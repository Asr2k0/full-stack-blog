import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router";
import App from './App.jsx'
import HomePage from './routes/HomePage.jsx';
import LoginPage from './routes/LoginPage.jsx'
import PostListPage from './routes/PostListPage.jsx'
import RegisterPage from './routes/RegisterPage.jsx'
import SinglePostPage from './routes/SinglePostPage.jsx'
import Write  from './routes/Write.jsx'
import Layout  from './layouts/MainLayout.jsx';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const router = createBrowserRouter([
  {
    element: <Layout />, // Parent Layout
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/write", element: <Write /> },
      { path: "/:slug", element: <PostListPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <RouterProvider router = {router}></RouterProvider>
</ClerkProvider>
  </StrictMode>,
)
