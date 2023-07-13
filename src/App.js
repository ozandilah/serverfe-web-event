import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Categories() {
  return (
    <>
      <h1>Kategori</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Kategori</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <Link to="/categories/3120">Kategori 1</Link>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <Link to="/categories/3121">Kategori 2</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
function CategoriesDetail() {
  const { id } = useParams();
  console.log("====================================");
  console.log(id);
  console.log("====================================");
  return <h1>Categories : {id}</h1>;
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li className="">
          <Link to="/" className="">
            Home
          </Link>
        </li>
        <li className="">
          <Link to="/categories" className="">
            Categories
          </Link>
        </li>
        <li className="">
          <Link to="/about" className="">
            About
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/:id" element={<CategoriesDetail />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
