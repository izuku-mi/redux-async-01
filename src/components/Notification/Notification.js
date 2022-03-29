import classes from './Notification.module.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { uiActions } from '../../store/app';

const Notification = (props) => {
  let specialClasses = '';

  if (props.status === 'error') {
    specialClasses = classes.error;
  }
  if (props.status === 'success') {
    specialClasses = classes.success;
  }
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(uiActions.hide());
  };
  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <button onClick={closeHandler}> X</button>
    </section>
  );
};

export default Notification;
