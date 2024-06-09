import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Homepage from "./src/pages/homepage/homepage.jsx";
import ImageGenerator from "./src/pages/imagegenerator/imagegenerator.jsx";
import History from "./src/pages/historypage/historypage.jsx";
import ContactUs from "./src/pages/contactpage/contactpage.jsx";
import Help from "./src/pages/helppage/helppage.jsx";
import SignUp from "./src/pages/signuppage/signuppage.jsx";
import HistoryInformationPage from "./src/pages/historyInformation/historyInformation.jsx";
import PointsContext from "./src/context/pointsContext.jsx";
import Login from "./src/pages/login/login.jsx";

const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);

const App = () => {
  const [userPoints, setUserPoints] = useState(20);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('authorization') ? true : false;
  });

  // Effect to handle user login state based on local storage changes
  useEffect(() => {
    const auth = localStorage.getItem('authorization');
    setIsLoggedIn(!!auth);
  }, []);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('authorization');
    setIsLoggedIn(false);
  };

  // Router configuration
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
    },
    {
      path: '/Image-generator',
      element: isLoggedIn ? <ImageGenerator /> : <Navigate to="/login" />,
    },
    {
      path: '/History',
      element: <History />,
    },
    {
      path: '/ContactUs',
      element: <ContactUs />,
    },
    {
      path: '/Help',
      element: <Help />,
    },
    {
      path: '/SignUp',
      element: <SignUp />,
    },
    {
      path: '/history/:historyId',
      element: <HistoryInformationPage />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return (
    <PointsContext.Provider value={{ userPoints, setUserPoints, isLoggedIn, login, logout }}>
      <RouterProvider router={router} />
    </PointsContext.Provider>
  );
};

root.render(<App />);
