import { uiActions } from './app';
import { cartActions } from './cart';
let firsttime = true;
export const SendData = (cart) => {
  return async (dispatch) => {
    const sendCartData = async () => {
      const response = await fetch(
        'https://hirotest1-d0c3f.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw Error('something went wrong');
      }
      dispatch(
        uiActions.addNotification({
          status: 'success',
          title: 'Success!',
          message: 'sent cart data successfully',
        })
      );
    };
    try {
      if (firsttime) {
        firsttime = false;
        dispatch(fetchData());
        return;
      }
      dispatch(
        uiActions.addNotification({
          status: 'pending',
          title: 'Pending!',
          message: 'sending cart data...',
        })
      );
      await sendCartData();
    } catch (error) {
      dispatch(
        uiActions.addNotification({
          status: 'error',
          title: 'Error!',
          message: 'sending cart data failed',
        })
      );
    }
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const responseData = await fetch(
        'https://hirotest1-d0c3f.firebaseio.com/cart.json',
        {
          method: 'GET',
        }
      );
      if (responseData.ok) {
        return responseData.json();
      }
      if (!responseData.ok) {
        throw Error('something went wrong');
      }
    };
    try {
      const cart = await getData();
      dispatch(cartActions.replaceCart(cart));
    } catch (error) {
      dispatch(
        uiActions.addNotification({
          status: 'error',
          title: 'Error!',
          message: 'fetching cart data failed',
        })
      );
    }
  };
};

export const sendNotification = async (notification) => {
  await dispatch(uiActions.addNotification(notification));
  setTimeout(dispatch(hide), 200);
};
