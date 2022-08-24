import React, { useEffect } from "react";
import { fetchProductsData } from "../../Reducers/ProductsReducer";
import { productAction } from "../../Reducers/ProductReducer";
import { useSelector, useDispatch } from "react-redux";
import { FaBorderAll } from "react-icons/fa";
import classes from "../Product.module.css";
import { FaThList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material/";

const ProductsSection = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const searchTerm = useSelector((state) => state.filters.searchValue);
  const category = useSelector((state) => state.filters.category);
  const company = useSelector((state) => state.filters.company);
  const color = useSelector((state) => state.filters.color);
  const price = useSelector((state) => state.filters.price);
  const shipping = useSelector((state) => state.filters.shipping);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);

  const searchFilter = products.filter((product) => {
    if (product.name.startsWith(searchTerm)) {
      return product;
    }
  });

  const categoryFilter = searchFilter.filter((product) => {
    if (category === "all") {
      return product;
    } else if (product.category === category) {
      return product;
    }
  });

  const companyFilter = categoryFilter.filter((product) => {
    if (company === "all") {
      return product;
    } else if (product.company === company) {
      return product;
    }
  });

  const colorFilter = companyFilter.filter((product) => {
    if (color === "all") {
      return product;
    } else if (product.colors.includes(color)) {
      return product;
    }
  });

  const priceFilter = colorFilter.filter((product) => {
    if (product.price <= price) {
      return product;
    }
  });

  const shippingFilter = priceFilter.filter((product) => {
    if (product.shipping !== shipping) {
      return product;
    }
  });

  return (
    <Grid item xs={12} md={10} lg={10}>
      {products.length == [] ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className={classes.iconhrSort_box}>
            <div className={classes.rowColumnIcon}>
              <FaBorderAll />
              <FaThList />
            </div>

            <div className={classes.productCount}>
              <p>{products.length} Products Found</p>
            </div>

            <div className={classes.hrLineNearIcons}></div>

            <div className={classes.sortByBox}>
              <span>Sort By</span>
              <select className={classes.priceLowestselect}>
                <option value="0">Price (Lowest)</option>
                <option value="1">marcos</option>
                <option value="2">liddy</option>
                <option value="3">ikea</option>
                <option value="4">caressa</option>
              </select>
            </div>
          </div>
          <Grid
            container
            spacing={2}
            columnSpacing={3}
            style={{ marginTop: "20px" }}
          >
            {shippingFilter.map((product) => {
              return (
                <Grid item xs={12} md={4} lg={4} key={product.id}>
                  <div className={classes.productBox}>
                    <Link
                      to={`/products/${product.id}`}
                    >
                      <img src={product.image} alt="product" />
                    </Link>
                    <div className={classes.name_priceBox}>
                      <p>{product.name}</p>
                      <p>{product.price}</p>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default ProductsSection;
