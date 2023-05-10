import Checkout from "../views/Checkout";
import HairProducts from "../views/HairProducts";
import Login from "../views/Login";
import OrderTracking from "../views/OrderTracking";

export const ROUTES = [
  {
    path: "/",
    element: <HairProducts />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/tracking",
    element: <OrderTracking />,
  },
];
