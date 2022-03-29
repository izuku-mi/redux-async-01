import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/Notification/Notification';
import { SendData, fetchData } from './store/cart-actions';
import { useDispatch } from 'react-redux';
function App() {
  const cartToggle = useSelector((state) => state.cr.toggle);
  const cart = useSelector((state) => state.cr);
  const Notif = useSelector((state) => state.ar);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  useEffect(() => {
    dispatch(SendData(cart));
  }, [cart]);

  return (
    <>
      {Notif.show && (
        <Notification
          title={Notif.Notif.title}
          message={Notif.Notif.message}
          status={Notif.Notif.status}
        />
      )}
      <Layout>
        {cartToggle && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
