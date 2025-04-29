import BannerImage from "../assets/images/Banner-min.jpg"
export default function Banner()
{
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      `url(${BannerImage})`
  }}
>
  {/* <div className="hero-overlay"></div> */}
  <div className="hero-content text-neutral-content text-left">
    <div className="max-w-full">
      <h1 className="mb-5 text-5xl font-bold ">Bid on unique items from <br />Around the world</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    )
}