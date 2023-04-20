import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/Context';

function ProductDetail(props) {
  const params = useParams();
  const AppContext = useContext(Context);
  const id = params.id;
  return (
    <div>
      <h1>Product with {id && id}</h1>
    </div>
  );
}

export default ProductDetail;
