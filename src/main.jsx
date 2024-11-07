import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import PageLayout from './components/Page Layout/Page-Layout';
import './index.css'
import Header from './components/Header/Header-component';
import About from './components/About/About-component';
import Home from './components/Home/Home-component';
import AboutComponent from './components/About/About-component';
import ContactComponent from './components/Contact-us/Contact-component';
import HomeComponent from './components/Home/Home-component';

const router = createBrowserRouter(
[
  {
    path: "/",
    element : <PageLayout/>,
    children: [
      {
        path: "",
        element: <HomeComponent/>
      },
      {
        path: "about-us",
        element:< AboutComponent/>
      },
      {
        path: "contact-us",
        element: <ContactComponent/>
      }
    ]
  }
]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
