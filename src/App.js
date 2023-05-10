import { Routes, Route } from "react-router-dom";
import Checkout from "./views/Checkout";
import HairProducts from "./views/HairProducts";
import Login from "./views/Login";
import OrderTracking from "./views/OrderTracking";

const routes = [
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

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
