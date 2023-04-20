import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

function ProductPage(props) {
  const products = ['apple', 'nokia', 'samsung', 'oppo'];
  return (
    <div>
      <h1>Product page</h1>
      <ul>
        {products.map((product, index) => (
          <Link
            key={index}
            to={index.toString()}
            style={{ padding: '10px' }}
          >
            {product}
          </Link>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default ProductPage;
