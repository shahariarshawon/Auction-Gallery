import React, { useEffect, useState } from 'react';
import Banner from './banner/Banner';
import Navbar from './navbar/navbar';
import AuctionSection from './ActiveAuctionSection/AuctionSection';

const Home = () => {
    const [jsonData, setJsonData]=useState([]);
    useEffect(()=>
        {
            fetch("../../../public/items.json")
            .then(res=>res.json())
            .then(data=>setJsonData(data));
        },[])

    function lengthReciever(datas)
    {
      
    }
        // console.log(jsonData);
    return (
        <>
            <Navbar lengthReciever={lengthReciever}></Navbar>
            <Banner></Banner>
            <AuctionSection handleData={jsonData} lengthReciever={lengthReciever}></AuctionSection>
        </>
    );
};

export default Home;