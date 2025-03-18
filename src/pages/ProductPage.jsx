import React from "react";
import Menu from "../component/Menu";
import { useParams } from "react-router-dom";
const ProductPage = () => {
  let { id, name } = useParams();
  return (
    <>
      <Menu />
      <div>
        <p>ID : {id}</p>
        <p>Name : {name} </p>
        <h1>Product Page</h1>
      </div>
    </>
  );
};
export default ProductPage;
