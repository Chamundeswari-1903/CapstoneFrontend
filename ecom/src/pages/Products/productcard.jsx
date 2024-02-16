import React, { useEffect, useState } from "react";
import "./productcard.css";
import axios from "axios";
import { API } from "../../host";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/api/shop/cartslice";

const ProductCard = (props) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API}/getproducts`);
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img
            className="product-card__image"
            src={`${API}/${product.productimage}`}
            alt={product.product_name}
          />
          <p className="product-card__brand">{product.product_name}</p>
          <p className="product-card__description">{product.description}</p>
          <div className="product-card__price-container">
          <p className="product-card__best-price"> M.R.P : <del className="product-card__old-price">{product.oldprice}</del></p>
            <p className="product-card__best-price">Best price : {product.productcost}</p>
           
          </div>

          <button className="btn" onClick={() => handleAddToCart(product)}>
            {product.isInCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
