import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../store/cart';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartButtonHandler = () => {
    dispatch(cartActions.toggle());
  };
  const itemCount = useSelector((state) => state.cr.itemCount);
  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemCount}</span>
    </button>
  );
};

export default CartButton;
