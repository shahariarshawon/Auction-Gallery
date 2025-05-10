import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <div>
          <a href="#" className=" text-3xl">
            <span className="text-[#003EA4] ">Auction</span>
            <span className="text-[#FFD337] font-extrabold">Gallery</span>
          </a>
        </div>

        <nav className="text-lg">
          <div className="grid grid-flow-col gap-4 font-semibold">
            <a>Bid</a>
            <a>Win</a>
            <a>Own</a>
          </div>
        </nav>

        <nav className="grid grid-flow-col gap-4 text-base font-semibold">
          <a href="#" className="no-underline">
            Home
          </a>
          <a href="#" className="no-underline">
            Auction
          </a>
          <a href="#" className="no-underline">
            Categories
          </a>
          <a href="#" className="no-underline">
            How to Works
          </a>
        </nav>
        <aside>
          <p className="text-gray-400">
            Copyright © {new Date().getFullYear()} AuctionHub. All rights
            reserved.
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
