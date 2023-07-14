import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageSignIn from "./pages/signin";
import Dashboard from "./pages/dashboard";
import Categories from "./pages/categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<PageSignIn />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
