import React from "react";
import classes from "./FeatureProduct.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const FeatureProduct = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <section className={classes.featuredProduct}>
      {products.length == [] ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={classes.nameBox}>
            <h2 className={classes.featureProduct_Name}>Featured Products</h2>
            <div className={classes.hrline}></div>
          </div>
          <div className={classes.featureProduct_ImagesBox}>
            {products.slice(0, 3).map((product) => {
              return (
                <div key={product.id}>
                  <img src={product.image} alt="product" />
                  <div className={classes.productDetails}>
                    <p className={classes.productName}>{product.name}</p>
                    <p className={classes.ProductPrice}>{product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Link to="/products">
            <button className={classes.featureProductBtn}>ALL PRODUCTS</button>
          </Link>
        </>
      )}
    </section>
  );
};

export default FeatureProduct;