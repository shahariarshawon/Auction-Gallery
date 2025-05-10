import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            <div >
          <a href="#"  className=" text-3xl"><span className="text-[#003EA4] ">Auction</span><span className="text-[#FFD337] font-extrabold">Gallery</span></a>
        </div>
  
  <nav className='text-lg'>

    <div className="grid grid-flow-col gap-4">
      <a>
        Bid
      </a>
      <a>
        Win
      </a>
      <a>
        Own
      </a>
    </div>
  </nav>

  <nav className="grid grid-flow-col gap-4 text-base">
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Auction</a>
    <a className="link link-hover">Categories</a>
    <a className="link link-hover">How to Works</a>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} AuctionHub. All rights reserved.</p>
  </aside>
</footer>
        </>
    );
};

export default Footer;