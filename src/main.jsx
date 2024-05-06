import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import {RouterProvider, createBrowserRouter,Navigate} from 'react-router-dom';
import Home from './home/Home.jsx';
import Course from './components/Course.jsx';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import { AuthProvider,useAuth } from './context/AuthProvider.jsx';


function ProtectedRoute() {
  const [authUser,setAuthUser] = useAuth();

  // If authUser exists, render the Course component, otherwise, navigate to the signup page
  return authUser ? <Course /> : <Navigate to="/signup" />;
}

const router = createBrowserRouter([
  {
    path : "/",
    element : <App></App>,
    children: [ 
      {
        path: "/",
        element : <Home></Home>,
      },
      {
        path:"/course",
        element: <ProtectedRoute></ProtectedRoute>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/about",
        element:<About></About>
      },
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
       <RouterProvider  router = {router}/>
  </AuthProvider>
)
