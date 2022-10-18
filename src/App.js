import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
