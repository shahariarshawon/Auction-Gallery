import React from "react";
import { FaRegHeart } from "react-icons/fa";

import DynamicSingleCart from "./DynamicSingleCart";

const DynamicCart = ({ products }) => {
  return (
    <>
      <div>
        <div className="card w-96  bg-white rounded-3xl card-lg">
          <div className="card-body">
            <div className="flex items-center gap-2 justify-center pb-3">
              <span>
                <FaRegHeart className="text-2xl"></FaRegHeart>
              </span>
              <h2 className=" text-center text-3xl font-medium">
                Favourite Items
              </h2>
            </div>

            <div className="border-t-2 border-gray-200 py-3 ">
              <div>
                {products.map((product) => {
                  return (
                    <DynamicSingleCart product={product}></DynamicSingleCart>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicCart;
