import React from 'react'
import { useRoutes } from 'react-router-dom';
import About from '../../pages/about';
import Home from '../../pages/home';
import Login from '../../pages/login';
import SignUp from '../../pages/sign-up';
import AppLayout from '../layout/app-layout';
import AuthLayout from '../layout/auth-layout';

const Router = () => {
  let element = useRoutes([
    {
      path:"/auth", element: <AuthLayout />,
      children: [
        { path: "", element: <Login /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
    {
      element: <AppLayout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
      ],
    },
  ]);
  return element;
}

export default Router