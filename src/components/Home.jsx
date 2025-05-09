import Banner from "./banner/Banner";
import Navbar from "./navbar/navbar";
import AuctionSection from "./ActiveAuctionSection/AuctionSection";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const [cartData, setCartData] = useState([]);
    
  function handleAddToCart(data) {
    if(!cartData.includes(data))
    {
        setCartData([...cartData,data])
    }
  }
  console.log(cartData.length);

  // console.log(jsonData);
  return (
    <>
      
      <div className="fixed top-0 right-0 left-0 z-50">
      <Navbar data={cartData}></Navbar>
      </div>
      
      <Banner></Banner>
      <AuctionSection handleAddToCart={handleAddToCart} products={cartData} ></AuctionSection>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Home;
