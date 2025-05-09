import React from "react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Section = ({ item, handleAddToCart }) => {
  const [clickedIcon, setClickedIcon] = useState(false);

  function handleData(item) {
    handleAddToCart(item);
    setClickedIcon(true);

    // console.log(clickedIcon);
    toast.success("🛒 Added to Cart Successfully!", {
      position: "top-right",
      autoClose: 5000,
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
        <tr>
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
                <div className="text-base font-semibold">{item.title}</div>

                <div className="text-[15px]">{item.description}</div>
              </div>
            </div>
          </td>
          <td className="text-xl ">{"$" + item.currentBidPrice}</td>
          <td className="text-xl ">{item.timeLeft}</td>
          <td>
            <div className="flex items-center justify-center p-2 ">
              <button
                onClick={handleData}
                disabled={clickedIcon}
                className={`btn btn-ghost btn-circle text-2xl ${clickedIcon?'cursor-not-allowed':'cursor-pointer'}`}
              >
                {clickedIcon ? (
                  <FaHeart className="text-2xl text-red-300 "></FaHeart>
                ) : (
                  <FaRegHeart className="text-2xl "></FaRegHeart>
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
