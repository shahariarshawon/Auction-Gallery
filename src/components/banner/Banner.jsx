import BannerImage from "../../assets/images/bannerImage.png";


const Banner = () => {
   
  return (
    <>
      <div
        className="hero h-[970px] "
        style={{
          backgroundImage: `url(${BannerImage})`,
        }}
      >
        {/* <div className="hero-overlay"></div> */}
        <div className="hero-content text-neutral-content">
          <div className="absolute left-50 bottom-100">
            <h1 className="mb-5 text-6xl text-white font-bold ">
              Bid on Unique Items from <br />
              Around the World
            </h1>
            <p className="mb-5 text-2xl font-medium">
              Discover rare collectibles, luxury goods, and vintage <br />{" "}
              treasures in our curated auctions
            </p>
            <button className="btn btn-soft btn-primary  text-xl font-medium  px-8 py-5 rounded-4xl">
              Explore Auctions
            </button>
          </div>
        </div>
      </div>

      <div>

      </div>
    </>
  );
};

export default Banner;
