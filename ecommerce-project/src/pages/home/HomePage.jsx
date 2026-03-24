import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
//import { products } from "../../starting-code/data/products";

import "./HomePage.css";
export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getData();
  }, []);

  return (
    <>
      <title>Ecommerce-Project</title>
      <link rel="shortcut icon" type="image/x-icon" href="/cart-favicon.png" />
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
