import React, { useState, useEffect } from "react";
import { productAction } from "../Reducers/ProductReducer";
import { useSelector, useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { cartAction } from "../Reducers/cartReducer";
import classes from "./Product.module.css";
import { Link, useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";

const Product = () => {
  const dispatch = useDispatch();
  const [activeImage, setActiveImage] = useState(0);

  const product = useSelector((state) => state.product.product);
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  const params = useParams();
  const fetchData = () => {
    fetch(
      `https://course-api.com/react-store-single-product?id=${params.productId}`
    )
      .then((res) => res.json())
      .then((product) => dispatch(productAction.product(product)));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
    dispatch(productAction.selectedProduct(1));
  }, [params.product_id]);

  const showBigImage = (index) => {
    setActiveImage(index);
  };

  const decreaseStock = () => {
    if (selectedProduct <= product.stock) {
      if (selectedProduct > 1) {
        dispatch(productAction.selectedProduct(selectedProduct - 1));
      }
    }
  };

  const increaseStock = () => {
    if (selectedProduct < product.stock) {
      if (selectedProduct >= 0) {
        dispatch(productAction.selectedProduct(selectedProduct + 1));
      }
    }
  };

  const handleCartItem = (product) => {
    dispatch(cartAction.totalItem(selectedProduct));
    const clonedProduct = JSON.parse(JSON.stringify(product));
    clonedProduct.amount = selectedProduct;
    dispatch(cartAction.cartProduct(clonedProduct));
  };

  return (
    <>
      <section className={classes.pageName}>
        <p>Home</p>
        <p>/</p>
        <p>Product</p>
        <p>/</p>

        {product.length == [] || product.id != params.productId ? (
          ""
        ) : (
          <p>{product.name}</p>
        )}
      </section>

      <section className={classes.backButton_cover}>
        <div>
          <Link to="/products">
            <button className={classes.backButton}>Back To Product</button>
          </Link>
        </div>
      </section>

      <section className={classes.product_cover}>
        {product.length == [] || product.id != params.productId ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className={classes.imageCover}>
              <div className={classes.product_mainImgCover}>
                <img
                  src={product.images[activeImage].thumbnails.large.url}
                  alt="product"
                />
              </div>
              <div className={classes.mutliple_imgCover}>
                {product.images.map((image, index) => {
                  return (
                    <img
                      src={image.thumbnails.large.url}
                      alt="product"
                      key={image.id}
                      onClick={() => {
                        showBigImage(index);
                      }}
                    />
                  );
                })}
              </div>
            </div>

            <div className={classes.product_details}>
              <h1 className={classes.productName}>{product.name}</h1>
              <div className={classes.rating}>
                <ReactStars
                  count={5}
                  value={product.stars}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                <p className={classes.countReviews}>
                  ({product.reviews} customer reviews)
                </p>
              </div>
              <p className={classes.productPrice}>{product.price}</p>
              <p className={classes.productDesc}>{product.description}</p>
              <div className={classes.aval_BrandCover}>
                <Stack spacing={2}>
                  <div>Available :</div>
                  <div>SKU :</div>
                  <div>Brand :</div>
                </Stack>
                <Stack spacing={2}>
                  <div>In Stock</div>
                  <div>RecoM2MyHJGHLVi5l</div>
                  <div>{product.company}</div>
                </Stack>
              </div>
              <div className={classes.divider}></div>
              {product.stock > 0 ? (
                <>
                  <div className={classes.color_cover}>
                    <Stack spacing={2} className={classes.colors}>
                      <div>Color :</div>
                    </Stack>
                    <Stack spacing={2} className={classes.colors}>
                      <div className={classes.colorCircle}></div>
                    </Stack>
                  </div>
                  <div className={classes.countingProduct}>
                    <button onClick={() => decreaseStock()}>-</button>
                    <span>{selectedProduct}</span>
                    <button onClick={() => increaseStock()}>+</button>
                  </div>
                  <Link to="/cart">
                    <button
                      className={classes.backButton}
                      onClick={() => {
                        handleCartItem(product);
                      }}
                    >
                      Add To Cart
                    </button>
                  </Link>
                </>
              ) : (
                ""
              )}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Product;
