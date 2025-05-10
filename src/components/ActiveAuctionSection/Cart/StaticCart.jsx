import React from "react";
import { FaRegHeart } from "react-icons/fa";
const StaticCart = () => {
  return (
    <>
      <div>
        <div className="card w-96 bg-white rounded-3xl card-lg shadow-sm">
          <div className="card-body">
            <div className="flex items-center gap-2 justify-center pb-3">
              <span>
                <FaRegHeart className="text-2xl"></FaRegHeart>
              </span>
              <h2 className=" text-center text-3xl font-medium">
                Favourite Items
              </h2>
            </div>
            <div className="border-t-2 border-gray-200 py-3">
              <h3 className="text-center text-xl font-semibold pb-2">
                No Favourites Yet
              </h3>
              <p className="text-center text-lg pb-5">
                Click the heart icon on any item to add it to your favourites
              </p>
            </div>
            <div className="flex items-center justify-between border-b-2 border-gray-200 py-3 text-xl font-medium">
              <p>Total Bids Amount </p>
              <p className="text-end">
                <span>$</span>
                <span>0</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticCart;
