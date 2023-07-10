import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import LazyLoad from "react-lazy-load";

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay={true}>
        <div>
          <LazyLoad width={1600} height={800}>
            <img src="Asset/t1.jpg" className="opacity-80" />
          </LazyLoad>
          <div className="absolute text-5xl font-bold top-1/2 left-1/4 text-slate-700">
            <h2>Find Your Dream Job Now.Move Up Today</h2>
            <div>
              <form>
                <div className="flex gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Keyword (React JS)"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Location"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Categories (Technology)"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div>
                    <button className="btn btn-success">Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <LazyLoad width={1600} height={800}>
            <img src="Asset/t2.jpg" className="opacity-80" />
          </LazyLoad>
          <div className="absolute text-5xl font-bold top-1/2 left-1/4 text-white">
            <h2>Perfect Employments Opportunities</h2>
            <div>
              <form>
                <div className="flex gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Keyword (React JS)"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Location"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Categories (Technology)"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div>
                    <button className="btn btn-success">Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <LazyLoad width={1600} height={800}>
            <img src="Asset/t3.jpg" className="opacity-80" />
          </LazyLoad>
          <div className="absolute text-5xl font-bold top-1/2 left-1/4 text-slate-700">
            <h2>Work Hard.We Are Always With You</h2>
            <div>
              <form>
                <div className="flex gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Keyword (React JS)"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Location"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Categories (Technology)"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div>
                    <button className="btn btn-success">Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
