import React from "react";
import { MdOutlineCancel } from "react-icons/md";
const DynamicSingleCart = ({ product }) => {
  return (
    <>
      <h2>{product.title}</h2>
      <ul className="list items-center mb-2 bg-base-100 rounded-box shadow-md">
        <li className="list-row">
          <div>
            <img className="size-15 rounded-box" src={product.image} alt="" />
          </div>
          <div>
            <div className="font-semibold">{product.title} </div>
            <div className="flex justify-between items-center pt-2">
              <p>{"$" + product.currentBidPrice}</p>
              <p>{"Bids: " + product.bidsCount}</p>
            </div>
          </div>

          <button className="btn btn-square btn-ghost text-xl">
            <MdOutlineCancel className="text-red-500" />
          </button>
        </li>
      </ul>

      
    </>
  );
};

export default DynamicSingleCart;
