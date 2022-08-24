import React from "react";
import { Grid, Stack } from "@mui/material/";
import classes from "../Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filtersAction } from "../../Reducers/FiltersReducers";

const FilterSection = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const searchTerm = useSelector((state) => state.filters.searchValue);
  const price = useSelector((state) => state.filters.price);

  const handleChange = (e) => {
    dispatch(filtersAction.searchFilter(e.target.value));
  };

  const handleCategory = (category) => {
    dispatch(filtersAction.categoryFilter(category));
  };

  const handleCompany = (e) => {
    dispatch(filtersAction.companyFilter(e.target.value));
  };

  const handleColor = (color) => {
    dispatch(filtersAction.colorFilter(color));
  };

  const priceArray = [];

  products.length > 0 &&
    products.map((product) => {
      priceArray.push(product.price);
    });

  const maxPrice = priceArray.length > 0 && Math.max(...priceArray);

  const handleprice = (e) => {
    dispatch(filtersAction.priceFilter(e.target.value));
  };

  const handleShipping = (e) => {
    dispatch(filtersAction.checkBoxFilter(e.target.checked));
  };

  return (
    <Grid item md={2} lg={2}>
      <div className={classes.filters}>
        <input
          type="search"
          placeholder="Search Product"
          className={classes.searchBar}
          value={searchTerm}
          onChange={handleChange}
        ></input>

        <div className={classes.searchFilter}>
          <p className={classes.searchHeading}>Category</p>
          <Stack spacing={2} className={classes.stack}>
            <div
              onClick={() => {
                handleCategory("all");
              }}
            >
              All
            </div>
            <div
              onClick={() => {
                handleCategory("office");
              }}
            >
              Office
            </div>
            <div
              onClick={() => {
                handleCategory("living room");
              }}
            >
              Living Room
            </div>
            <div
              onClick={() => {
                handleCategory("kitchen");
              }}
            >
              Kitchen
            </div>
            <div
              onClick={() => {
                handleCategory("bedroom");
              }}
            >
              Bedroom
            </div>
            <div
              onClick={() => {
                handleCategory("dining");
              }}
            >
              Dining
            </div>
            <div
              onClick={() => {
                handleCategory("kids");
              }}
            >
              Kids
            </div>
          </Stack>
        </div>

        <div className={classes.searchFilter}>
          <p className={classes.searchHeading}>Company</p>
          <select className={classes.companyOption} onChange={handleCompany}>
            <option value="all">all</option>
            <option value="marcos">marcos</option>
            <option value="liddy">liddy</option>
            <option value="ikea">ikea</option>
            <option value="caressa">caressa</option>
          </select>
        </div>

        <div className={classes.searchFilter}>
          <p className={classes.searchHeading}>Colors</p>
          <div className={classes.allColorBtn_Box}>
            <span
              style={{
                marginRight: "5px",
                cursor: "pointer",
                letterSpacing: "1.6px",
              }}
              onClick={() => {
                handleColor("all");
              }}
            >
              All
            </span>
            <button
              onClick={() => {
                handleColor("#ff0000");
              }}
            ></button>
            <button
              onClick={() => {
                handleColor("#00ff00");
              }}
            ></button>
            <button
              onClick={() => {
                handleColor("#0000ff");
              }}
            ></button>
            <button
              onClick={() => {
                handleColor("#000");
              }}
            ></button>
            <button
              onClick={() => {
                handleColor("#ffb900");
              }}
            ></button>
          </div>
        </div>

        <div className={classes.searchFilter}>
          <p className={classes.searchHeading}>Price</p>
          <p className={classes.PriceNumber}>{price ? price : maxPrice}</p>
          <input
            type="range"
            id="vol"
            name="vol"
            min="0"
            max={maxPrice.toString()}
            value={price ? price : maxPrice}
            onChange={handleprice}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div>
          <div className={classes.freeShipping_box}>
            <p>Free Shipping</p>
            <input
              type="checkbox"
              style={{ cursor: "pointer" }}
              onChange={handleShipping}
            />
          </div>
        </div>

        <button className={classes.clearFilterBtn}>Clear filters</button>
      </div>
    </Grid>
  );
};

export default FilterSection;
