//jsx file to show the whole auction section including card and the dynamic datas
import React from 'react';
import Carts from "./Cart/Carts";
import Sections from "./Section/Sections";


const AuctionSection = ({handleData,lengthReciever}) => {

    return (
        <>
           <section className="px-[5%] pt-32  bg-[#ebf0f5]">
            <div className="mb-8">
                <h2 className="text-3xl text-[#0E2954] py-3 font-medium">Active Buttons</h2>
                <p className="text-xl">Discover and Bid on Extraordinary Items</p>
            </div>
            <div className="flex gap-6 pb-10 ">
                {/* table */}
                <Sections lengthReciever={lengthReciever} handleData={handleData}></Sections>
                {/* favourite items */}
               <Carts></Carts>
            </div>
        </section> 
        </>
    );
};

export default AuctionSection;