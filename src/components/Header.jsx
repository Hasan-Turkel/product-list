import axios from "axios";
import { useState, useEffect } from "react";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const BASE_URL_CATEGORIES= "https://fakestoreapi.com/products/categories";
    const { data } = await axios(BASE_URL_CATEGORIES);
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);


  return (
    <header>
      <h1>Product List</h1>
      <nav>
        <button>ALL</button>
        {categories?.map((item, i)=>{
            return(
                <button className="m-2" key={i} >{item.toUpperCase()}</button>
            )
        })}
      </nav>
    </header>
  );
};

export default Header;
