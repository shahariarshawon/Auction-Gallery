import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Section = ({ Data,lengthReciever }) => {
  const [clickedIcon, setClickedIcon] = useState([]);

  function clickAddToCart(item) {
    setClickedIcon([...clickedIcon, item]);
    lengthReciever()

    console.log(clickedIcon);
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
    <ToastContainer></ToastContainer>
      {Data.map((item) => {
        const Clicked = clickedIcon.includes(item);
        return (
          <tr key={item.id}>
            <td className="flex items-center gap-5 ">
              <img className="w-24 h-24 rounded-lg" src={item.image} alt="" />
              {item.title}
            </td>
            <td>
              <span>$</span>
              {item.currentBidPrice}
            </td>
            <td>{item.timeLeft}</td>
            <td>
              <div className="flex items-center justify-center p-2">
                <button
                  onClick={() => clickAddToCart(item)}
                  disabled={Clicked}
                  className={`btn btn-ghost btn-circle `}
                >
                  {Clicked ? (
                    <FaHeart className="text-2xl text-red-300 hover:cursor-not-allowed"></FaHeart>
                  ) : (
                    <FaRegHeart className="text-2xl "></FaRegHeart>
                  )}
                </button>
              </div>{" "}
            </td>
            
              
        
          </tr>
        );
      })}
    </>
  );
};

export default Section;
