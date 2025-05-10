import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const DynamicCart = ({ products, removeCartItem }) => {
  let price = 0;
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
                  //  console.log(product.title);
                  price = price + product.currentBidPrice;
                  return (
                    <ul
                      key={product.id}
                      className="list items-center mb-2 bg-base-100 rounded-box shadow-md
                     "
                    >
                      <li className="list-row">
                        <div>
                          <img
                            className="size-15 rounded-box"
                            src={product.image}
                            alt=""
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{product.title} </div>
                          <div className="flex justify-between items-center pt-2">
                            <p>{"$" + product.currentBidPrice}</p>
                            <p>{"Bids: " + product.bidsCount}</p>
                          </div>
                        </div>
                        {/* cross button */}

                        <button
                          className="btn btn-square btn-ghost text-xl"
                          onClick={() => removeCartItem(product.id)}
                        >
                          <MdOutlineCancel className="text-red-500" />
                        </button>
                      </li>
                    </ul>
                  );
                })}
              </div>

              <div className="flex items-center justify-between border-b-2 border-gray-200 py-3 text-xl font-medium">
                <p>Total Bids Amount </p>
                <p className="text-end font-bold">
                  <span>$</span>
                  <span>{price.toLocaleString()}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicCart;
