import React from "react";
import { FaHome, FaLocationArrow } from "react-icons/fa";

const FeaturedCompanies = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-3xl my-12 text-blue-600">
        Featured Companies
      </h2>
      <div className="grid grid-cols-3 gap-6 w-[1400px] mx-auto">
        <div>
          <div className="card w-[450px] bg-base-100 shadow-xl h-96">
            <figure className="p-8">
              <img src="/Asset/t1.jpg" alt="" />
            </figure>
            <div className="card-body text-center">
              <div className="flex gap-2">
                <div>
                  <FaHome className="text-[20px]" />
                </div>
                <div>
                  <h2 className="card-title text-[20px]">Zumit</h2>
                </div>
              </div>
              <p>
                <div className="flex gap-2 ">
                  <div>
                    <FaLocationArrow className="text-[20px]" />
                  </div>
                  <div>
                    <p className="text-red-700 text-[20px]">Texas,USA</p>
                  </div>
                </div>
              </p>
              <div>
                <button className="btn btn-primary btn-outline w-full">
                  View All Positions
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card w-[450px] bg-base-100 shadow-xl h-96">
            <figure className="p-8">
              <img src="/Asset/t2.jpg" alt="" />
            </figure>
            <div className="card-body text-center">
              <div className="flex gap-2">
                <div>
                  <FaHome className="text-[20px]" />
                </div>
                <div>
                  <h2 className="card-title text-[20px]">Seytll</h2>
                </div>
              </div>
              <p>
                <div className="flex gap-2 ">
                  <div>
                    <FaLocationArrow className="text-[20px]" />
                  </div>
                  <div>
                    <p className="text-red-700 text-[20px]">Bangalore,India</p>
                  </div>
                </div>
              </p>
              <div>
                <button className="btn btn-primary btn-outline w-full">
                  View All Positions
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card w-[450px] bg-base-100 shadow-xl h-96">
            <figure className="p-8">
              <img src="/Asset/t3.jpg" alt="" />
            </figure>
            <div className="card-body text-center">
              <div className="flex gap-2">
                <div>
                  <FaHome className="text-[20px]" />
                </div>
                <div>
                  <h2 className="card-title text-[20px]">Study Monk</h2>
                </div>
              </div>
              <p>
                <div className="flex gap-2 ">
                  <div>
                    <FaLocationArrow className="text-[20px]" />
                  </div>
                  <div>
                    <p className="text-red-700 text-[20px]">Mumbai,India</p>
                  </div>
                </div>
              </p>
              <div>
                <button className="btn btn-primary btn-outline w-full">
                  View All Positions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCompanies;
