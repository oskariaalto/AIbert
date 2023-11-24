import Chat from './components/Chat';
import { useState, useEffect } from 'react';
import NavBar from './components/ui/navbars/NavBar';
import History from './components/History';
import Profile from './components/Profile';
import Home from './components/Home';
import { getUser } from './controllers/user.js'
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
  Outlet,
} from "react-router-dom";

const NavBarWrapper = () => {
  return (
    <div className='font-serif'>
      <NavBar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarWrapper />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/chat", element: <Chat />}
    ],
  }
]);


const App = () => { 
  
 // previous background [#94a3b8] 
  return(
    <RouterProvider router={router}/>
  )
}

export default App;
