

export default function Navbar()
{
    
    return (
        <>
        <div className="navbar bg-base-100 shadow-sm px-[5%] justify-between">
        <div >
          <a href="#"  className=" text-3xl"><span className="text-[#003EA4] ">Auction</span><span className="text-[#FFD337] font-extrabold">Gallery</span></a>
        </div>
        <div className="text-xl">
      
          {/* middle navbar part */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="flex justify-between gap-20 ">
              <li><a href="#" className="no-underline">Home</a></li>
              <li>
                <a href="#" className="no-underline">Auction</a>
                
              </li>
              <li><a href="#" className="no-underline">Categories</a></li>
              <li><a href="#" className="no-underline">How to works</a></li>
            </ul>
          </div>
          {/* notification logo */}
        <div className="flex justify-between items-center gap-5">
        <div className="indicator btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
              {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
            </div>
      
            <div >
                <img className="w-10 rounded-full  btn btn-ghost btn-circle"
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
        </div>
        </div>
        </>
    )
}