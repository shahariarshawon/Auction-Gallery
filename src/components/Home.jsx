import Banner from "./banner/Banner";
import Navbar from "./navbar/Navbar";
import AuctionSection from "./ActiveAuctionSection/AuctionSection";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer/Footer";

const Home = () => {
  const [cartData, setCartData] = useState([]);

  function handleAddToCart(data) {
    if (!cartData.includes(data)) {
      setCartData([...cartData, data]);
    }
  }

  function removeCartItem(id)
  {
    console.log(id);
    const remainItems=cartData.filter((product)=>product.id!==id);
    setCartData(remainItems)
  }
  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50">
        <Navbar data={cartData}></Navbar>
      </div>

      <Banner></Banner>
      <AuctionSection
        handleAddToCart={handleAddToCart}
        products={cartData}
        removeCartItem={removeCartItem}
      ></AuctionSection>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  );
};

export default Home;
