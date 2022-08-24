import React, { useEffect } from "react";
import TableContainer from "@mui/material/TableContainer";
import { useSelector } from "react-redux";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import classes from "./Cart.module.css";
import Table from "@mui/material/Table";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.item);

  useEffect(() => {
    if (cartItem !== 0) {
      window.localStorage.setItem("cart", JSON.stringify(cartItem));
    }
  }, [cartItem]);

  const clearShooppingCart = () => {
    window.location.reload(true);
    window.localStorage.removeItem("cart");
  };

  const handleDeleteItem = (productId) => {
    window.location.reload(true);
    const products = JSON.parse(window.localStorage.getItem("cart"));

    const index = products.findIndex((product) => product.id === productId);

    if (index > -1) {
      products.splice(index, 1);
    }

    window.localStorage.setItem("cart", JSON.stringify(products));
  };

  let subTotal = 0;
  cartItem.map((item) => (subTotal += item.price * item.amount));

  let shippingFee = 0;
  //shipping fee ka dekhna h properly
  let orderTotal;
  if (cartItem.length === 0) {
    orderTotal = subTotal + shippingFee;
  } else {
    const totalProductNo = cartItem.length;
    shippingFee = 5.34 * totalProductNo;
    orderTotal = subTotal + shippingFee;
  }

  return (
    <>
      <section className={classes.pageName}>
        <p>Home</p>
        <p>/</p>
        <p>Cart</p>
      </section>

      <section className={classes.cartItem}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="start">Item</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItem.length == 0 ? (
                <p>No Item</p>
              ) : (
                cartItem.map((cartItem, index) => {
                  return (
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      key={index}
                    >
                      <TableCell className={classes.imgCell}>
                        <div className={classes.img_ProductNameBox}>
                          <img
                            src={cartItem.images[0].thumbnails.large.url}
                            className={classes.productImg}
                            alt="product"
                          />
                          <div className={classes.productName_color}>
                            <p>{cartItem.name}</p>
                            <p>
                              Color :
                              <span className={classes.colorSquare}></span>
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell align="center">{cartItem.price}</TableCell>
                      <TableCell align="center">
                        <button>-</button>
                        {cartItem.amount}
                        <button>+</button>
                      </TableCell>
                      <TableCell align="center">
                        {cartItem.price * cartItem.amount}
                      </TableCell>
                      <TableCell align="center">
                        <DeleteIcon
                          style={{ cursor: "pointer", color: "red" }}
                          onClick={() => handleDeleteItem(cartItem.id)}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <div className={classes.btn_box}>
          <Link to="/products">
            <button className={classes.continueShoppingBtn}>
              Continue Shopping
            </button>
          </Link>
          <button
            className={classes.clearCartBtn}
            onClick={() => clearShooppingCart()}
          >
            Clear Shopping Cart
          </button>
        </div>

        <div className={classes.subtotal_coverBox}>
          <div className={classes.subtotal_box}>
            <div className={classes.subtotalHeader}>
              <div>
                <p>Subtotal : </p>
                <p>Shipping Fee :</p>
              </div>
              <div>
                <p>{subTotal}</p>
                <p>{shippingFee}</p>
              </div>
            </div>
            <div className={classes.subtotalFooter}>
              <div>Order Total :</div>
              <div>{orderTotal}</div>
            </div>
          </div>

          <button className={classes.LoginBtn}>Login</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
