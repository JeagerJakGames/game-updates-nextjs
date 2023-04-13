import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/main.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './routes/Home';
import Root from './routes/Root';


const router = createBrowserRouter([
  {
      path:'/',
      element: <Root/>,
      errorElement: <div>ErrorElement</div>,
      loader: () => [],
      children: [
        {
          path:'home',
          element: <Home/>,
          loader: () => []
        },
        {
          path:'',
          element:<></>,
          loader: () => []
        },
        {
          path:'',
          element:<></>,
          loader: () => []
        },
        {
          path:'',
          element:<></>,
          loader: () => []
        },
      ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
