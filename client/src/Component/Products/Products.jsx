import React, {useEffect} from "react";
import classes from "./Product.module.css";
import { Grid } from "@mui/material/";
import ProductsSection from "./ProductsSection/ProductsSection";
import FilterSection from "./FiltersSection/FiltersSection";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <section className={classes.pageName}>
        <p>Home</p>
        <p>/</p>
        <p>Products</p>
      </section>

      <section className={classes.productsList}>
        <Grid container spacing={2}>
          <FilterSection />
          <ProductsSection />
        </Grid>
      </section>
    </>
  );
};

export default Products;
