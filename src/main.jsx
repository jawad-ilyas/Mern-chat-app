import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = lazy(() => import("./pages/Home.jsx"))
const Login = lazy(() => import("./pages/Login.jsx"))
const Groups = lazy(() => import("./pages/Groups.jsx"))
const Chat = lazy(() => import("./pages/Chat.jsx"))
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "chat/:chatid",
        element: <Chat />,
      },
      {
        path: "group",
        element: <Groups />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <HelmetProvider>


        <App />
      </HelmetProvider>
    </RouterProvider>
  </React.StrictMode>,
)
