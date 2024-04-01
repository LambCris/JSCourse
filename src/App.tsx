import './App.css';
import Login from './pages/Login'
import Main from './pages/Main'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

export default function App() {

  const router =  createBrowserRouter([
    {path: '/',
    element: <Login/>,
  },
    {path: '/main',
    element: <Main/>,
  }
])

  return(
   <>
   <RouterProvider router={router}/>
   </>
  );  
}


