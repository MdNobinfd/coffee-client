import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";
import HomePages from "../Pages/HomePages";
import AddCoffeePage from "../Pages/AddCoffeePage";
import CoffeeDetails from "../Pages/CoffeeDetails";
import CoffeeUpdate from "../Pages/CoffeeUpdate";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        loader: () => fetch("https://coffee-server-j45m.vercel.app/coffees"),
        hydrateFallbackElement: <h1>this is loading</h1>,
        element: <HomePages />,
      },
      {
        path: "/coffee",
        element: <AddCoffeePage />,
      },
      {
        path: "/coffeedetails/:id",
        loader: ({ params }) =>
          fetch(`https://coffee-server-j45m.vercel.app/coffees/${params.id}`),
        hydrateFallbackElement: <h1>this is loading</h1>,
        element: <CoffeeDetails />,
      },
      {
        path: "/coffeeupdate/:id",
        loader: ({ params }) =>
          fetch(`https://coffee-server-j45m.vercel.app/coffees/${params.id}`),
        hydrateFallbackElement: <h1>this is loading</h1>,
        element: <CoffeeUpdate />,
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: 'signin',
        element: <SignIn />
      }
    ],
  },
]);
