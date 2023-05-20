import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          {ROUTES.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
