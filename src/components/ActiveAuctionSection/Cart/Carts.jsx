import React from "react";
import { FaRegHeart } from "react-icons/fa";
import StaticCart from "./StaticCart";
import DynamicCart from "./DynamicCart";

const Carts = ({products,removeCartItem}) => {
  // console.log(products.length +"from carts")
  return (
    <>
    
    {
      products.length>0? (<DynamicCart  removeCartItem={removeCartItem} products={products}></DynamicCart>):( <StaticCart></StaticCart>)
    }
    </>
  );
};

export default Carts;
