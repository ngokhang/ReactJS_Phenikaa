import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HomePage(props) {
  const handleClickAdmin = (e) => {
    if (localStorage.getItem('role') !== 'admin') {
      toast.error(`You're not admin`, {
        autoClose: 500,
      });
    } else {
      toast.success('Hello admin', {
        autoClose: 500,
      });
    }
  };
  return (
    <div>
      <h1>Homepage</h1>
      <ul>
        <Link
          to="product"
          style={{ margin: '0 20px' }}
        >
          Products
        </Link>
        <Link
          to="admin"
          style={{ margin: '0 20px' }}
          onClick={(e) => handleClickAdmin(e)}
        >
          Admin
        </Link>
      </ul>
      <ToastContainer />
      <Outlet />
    </div>
  );
}

export default HomePage;
