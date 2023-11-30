import Chat from './components/Chat';
import NavBar from './components/ui/navbars/NavBar';
import Home from './components/Home';
import Hints from './components/Hints';
import {
  createBrowserRouter,
  RouterProvider,
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
      { path: "/chat", element: <Chat />},
      { path: "/hints", element: <Hints />},
    ],
  }
]);


const App = () => { 
  return(
    <RouterProvider router={router}/>
  )
}

export default App;
