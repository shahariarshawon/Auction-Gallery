import React from 'react';
import { FaHeart } from "react-icons/fa";

const Section = ({item,handleAddToCart}) => {
  return (
    <>
      <tr >
             <td className="flex items-center gap-5 ">
               <div>
               <img className="w-24 h-24 rounded-lg" src={item.image} alt="" />
               </div>
               <div className='text-left'>
               <div className='text-xl font-semibold'>{item.title}</div>
               
               <div className='text-[15px]'>{item.description}</div>
               </div>
             </td>
             <td>
               <span>$</span>
               {item.currentBidPrice}
             </td>
             <td>{item.timeLeft}</td>
             <td>
               <div className="flex items-center justify-center p-2">
                 <button 
                  onClick={() => handleAddToCart(item)}
                  // disabled={Clicked}
                  className={`btn btn-ghost btn-circle `}
                >
                  {/* {Clicked ? (
                    <FaHeart className="text-2xl text-red-300 hover:cursor-not-allowed"></FaHeart>
                  ) : (
                    <FaRegHeart className="text-2xl "></FaRegHeart>
                  )} */}
                  <FaHeart></FaHeart>
                </button>
              </div>{" "}
            </td>
            
              
        
          </tr>
    </>
  );
};

export default Section;

// import { FaRegHeart } from "react-icons/fa";

// import React, { useState } from "react";
// import { ToastContainer, toast, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Section = ({ Data,lengthReciever }) => {
//   const [clickedIcon, setClickedIcon] = useState([]);

//   function clickAddToCart(item) {
//     setClickedIcon([...clickedIcon, item]);
//     lengthReciever()

//     console.log(clickedIcon);
//     toast.success("🛒 Added to Cart Successfully!", {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       transition: Bounce,
//     });
//   }
//   return (
//     <>
//     <ToastContainer></ToastContainer>
//       {Data.map((item) => {
//         const Clicked = clickedIcon.includes(item);
//         return (
//           
//         );
//       })}
//     </>
//   );
// };

// export default Section;
