import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageSignIn from "./pages/signin";
import DashboardPage from "./pages/dashboard";
import Categories from "./pages/categories";
import CategoriesCreate from "./pages/categories/create";
import CategoriesEdit from "./pages/categories/edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/signin" element={<PageSignIn />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/create" element={<CategoriesCreate />} />
        <Route path="/categories/edit/:id" element={<CategoriesEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
