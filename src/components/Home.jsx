import React from 'react';
import Banner from './banner/Banner';
import Navbar from './navbar/navbar';
import AuctionSection from './ActiveAuctionSection/AuctionSection';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <AuctionSection></AuctionSection>
        </>
    );
};

export default Home;