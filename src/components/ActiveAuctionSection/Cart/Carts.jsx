import React from "react";
import { FaRegHeart } from "react-icons/fa";
import StaticCart from "./StaticCart";
import DynamicCart from "./DynamicCart";

const Carts = ({products}) => {
  return (
    <>
    
    {
      products.length>0? (<DynamicCart products={products}></DynamicCart>):( <StaticCart></StaticCart>)
    }
    </>
  );
};

export default Carts;
