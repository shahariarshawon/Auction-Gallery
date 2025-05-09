import Banner from "./banner/Banner";
import Navbar from "./navbar/navbar";
import AuctionSection from "./ActiveAuctionSection/AuctionSection";
import { useState } from "react";

const Home = () => {
  const [cartData, setCartData] = useState([]);
    
  function handleAddToCart(data) {
    if(!cartData.includes(data))
    {
        setCartData([...cartData,data])
    }
  }
  console.log(cartData);

  // console.log(jsonData);
  return (
    <>
      <div className="relative">
      <div className="fixed top-0 right-0 left-0">
      <Navbar data={cartData}></Navbar>
      </div>
      </div>
      <Banner></Banner>
      <AuctionSection handleAddToCart={handleAddToCart}></AuctionSection>
    </>
  );
};

export default Home;
