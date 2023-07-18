import axios from "axios";
import { useState, useEffect } from "react";

const Header = ({products, setThings}) => {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("ALL");
  
  const getCategories = async () => {
    const BASE_URL_CATEGORIES= "https://fakestoreapi.com/products/categories";
    const { data } = await axios(BASE_URL_CATEGORIES);
    setCategories(data)
    setCategories([...data, "all"].reverse());
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleCategory = (e)=>{setThings(
    products.filter((item)=>e.target.innerText==="ALL"?products:e.target.innerText===item.category.toUpperCase())
  ) 
  setActive(e.target.innerText)
  }

  return (
    <header>
      <h1 className="m-4">Product List</h1>
      <nav className="container d-flex flex-wrap justify-content-center mb-5">
        {categories?.map((item, i)=>{
            return(
                <button  onClick={handleCategory} className={active===item.toUpperCase()?"m-2 btn btn-primary":"m-2  btn btn-info "} key={i} >{item.toUpperCase()}</button>
            )
        })}
      </nav>
    </header>
  );
};

export default Header;
