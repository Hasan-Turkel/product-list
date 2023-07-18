import axios from "axios";
import { useState, useEffect } from "react";

const Header = ({products, setThings}) => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const BASE_URL_CATEGORIES= "https://fakestoreapi.com/products/categories";
    const { data } = await axios(BASE_URL_CATEGORIES);
    setCategories(data)
    setCategories([...data, "all"]);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleCategory = (e)=>{setThings(
    products.filter((item)=>e.target.innerText=="ALL"?products:e.target.innerText==item.category.toUpperCase())
  ) 
  }

  return (
    <header>
      <h1 className="m-4">Product List</h1>
      <nav className="container d-flex flex-row-reverse justify-content-center mb-5">
        {categories?.map((item, i)=>{
            return(
                <button onClick={handleCategory} className="m-2 w-25" key={i} >{item.toUpperCase()}</button>
            )
        })}
      </nav>
    </header>
  );
};

export default Header;
