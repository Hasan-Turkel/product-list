import Header from "../components/Header"
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";

const Home = () => {
    
    const [products, setProducts] = useState([]);
    const [things, setThings] = useState([]);
    
  const getProducts = async () => {
    const BASE_URL_PRODUCTS = "https://fakestoreapi.com/products";
    const {data} = await axios(BASE_URL_PRODUCTS);
    setProducts(data);
    setThings(data)
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (<>
    <Header products={products} setThings={setThings}/>
    <Card things={things}/>
    </>
  )
}

export default Home