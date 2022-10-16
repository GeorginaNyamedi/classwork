import MySelf from "./components/MySelf";
import MyFood from "./components/MyFood";
import Counter from "./components/Counter";
import Form from "./components/Form";
import ProductList from "./components/ProductList";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import Product from "./pages/Products";
import TaskManager from "./components/TaskManager";
import NavBar from "./components/Navbar";
import NotFound from "./components/NotFound";
import ProductDetail from "./pages/ProductDetail";


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about" element={<Contact />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/task-manager" element={<TaskManager />} />
      <Route path="products/:productId" element={<ProductDetail />} />
      </Routes>
      </BrowserRouter>
    // <MySelf />

 );
};

export default App;
