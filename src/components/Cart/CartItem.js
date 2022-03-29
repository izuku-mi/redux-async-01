import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart';
const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  const add = () => {
    dispatch(cartActions.increment({ id, title, price }));
  };
  const sub = () => {
    dispatch(cartActions.decrement({ id, title, price }));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={sub}>-</button>
          <button onClick={add}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;