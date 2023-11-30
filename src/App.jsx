import Chat from './components/Chat';
import NavBar from './components/ui/navbars/NavBar';
import Home from './components/Home';
import Hints from './components/Hints';
import { MathJaxContext } from 'better-react-mathjax';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

const NavBarWrapper = () => {
  return (
    <div className='font-serif bg-site'>
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
  const config = {
    loader: { load: ['input/asciimath', 'output/svg'] },
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      processEscapes: true,
      processEnvironments: true,
    }
  };
  return(
    <MathJaxContext config={config}>
      <RouterProvider router={router}/>
    </MathJaxContext>
  )
}

export default App;
