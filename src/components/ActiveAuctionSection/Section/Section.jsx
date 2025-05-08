import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import React, { useState } from 'react';

const Section = ({Data}) => {
    let [clickedIcon, setClickedIcon]=useState([]);
    // const [isDisabled,setIsDisabled]=useState(false);
    function clickAddToCart(item)
    {
        // alert(`The ${item.title} has been added to the cart`);
        console.log(item);
        
            setClickedIcon([...clickedIcon, item.id]);
            // setIsDisabled(true);
    
    }
    return (
        <>
            {Data.map((item)=>
            {
                // const isClicked={setClickedIcon};
                return (
                    <tr key={item.id} >
                    <td className='flex items-center gap-5 '><img className='w-24 h-24 rounded-lg' src={item.image} alt="" />{item.title}</td>
                    <td ><span>$</span>{item.currentBidPrice}</td>
                    <td >{item.timeLeft}</td>
                    <td><div className="flex items-center justify-center p-2">
                        

                    <button  onClick={()=>clickAddToCart(item)} className=" btn btn-ghost btn-circle ">
                        {
                            clickedIcon===item.id?
                    <FaHeart className="text-2xl text-red-500"></FaHeart>:<FaRegHeart className="text-2xl "></FaRegHeart>
                        }
                        </button></div> </td>
                </tr>


                )
               
            })}
        </>
    );
};

export default Section;