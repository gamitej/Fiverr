import { RouterProvider, createBrowserRouter } from "react-router-dom";
// pages
import Gig from "@/pages/gig/Gig";
import Add from "@/pages/add/Add";
import Home from "@/pages/home/Home";
import Gigs from "@/pages/gigs/Gigs";
import Login from "@/pages/login/Login";
import Orders from "@/pages/orders/Orders";
import MyGigs from "@/pages/myGigs/MyGigs";
import Message from "@/pages/message/Message";
import Register from "@/pages/register/Register";
import Messages from "@/pages/mesaages/Messages";
// components
import Layout from "./Layout";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <h2>Page Not Found</h2>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;
