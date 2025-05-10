import React from "react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { toast, Bounce } from "react-toastify";

const Section = ({ item, handleAddToCart }) => {
  const [clickedIcon, setClickedIcon] = useState(false);

  function handleData() {
    handleAddToCart(item);
    setClickedIcon(true);

    // console.log(clickedIcon);
    toast.success("Item Added to Favourites!", {
      className: "text-lg font-semibold",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }
  return (
    <>
      {
        <tr className="border-t-2 border-black ">
          <td>
            <div className="flex items-center gap-5  ">
              <div>
                <img
                  className="w-[80px] h-[80px] rounded-lg"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="text-justify">
                <div className="text-lg font-bold">{item.title}</div>

                <div className="text-[15px]">{item.description}</div>
              </div>
            </div>
          </td>
          <td className="text-xl font-bold">
            {"$" + item.currentBidPrice.toLocaleString()}
          </td>
          <td className="text-xl font-bold">{item.timeLeft}</td>
          <td>
            <div
              className={`flex items-center justify-center p-2  ${
                clickedIcon ? "cursor-not-allowed" : "cursor-auto"
              }`}
            >
              <button
                onClick={handleData}
                disabled={clickedIcon}
                className={`btn btn-ghost btn-circle text-2xl `}
              >
                {clickedIcon ? (
                  <FaHeart className="text-2xl text-red-400   "></FaHeart>
                ) : (
                  <FaRegHeart className="text-2xl"></FaRegHeart>
                )}
              </button>
            </div>{" "}
          </td>
        </tr>
      }
    </>
  );
};

export default Section;
