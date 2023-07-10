import React from "react";
import {
  FaDatabase,
  FaHome,
  FaLocationArrow,
  FaNode,
  FaNodeJs,
  FaReact,
  FaUikit,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const FeaturedJobs = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl">
          Find The{" "}
          <span className="text-blue-600 font-bold">Right Jobs.Right Now</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-8 mx-auto my-8 w-[1000px]">
        <div>
          <div className="card w-[500px] bg-base-300 shadow-2xl h-72">
            <figure className="px-10 pt-10 p-6">
              <FaUikit className="text-5xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[22px] text-blue-800">
                UI/UX Designer
              </h2>
              <p>
                <div className="flex gap-2">
                  <div>
                    <FaHome className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-[18px]">Canware</p>
                  </div>
                </div>
              </p>
              <p>
                <div className="flex gap-2">
                  <div>
                    <FaLocationArrow className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-[18px]"> New South Wales,Australia</p>
                  </div>
                </div>
              </p>
              <div className="w-full">
                <button className="btn btn-info w-full">Apply</button>
              </div>
              <p>{new Date().getDay}</p>
              <div className="badge badge-secondary absolute top-2 left-2">
                Remote
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card w-[500px] bg-base-300 shadow-2xl h-72">
            <figure className="px-10 pt-10 p-6">
              <FaReact className="text-5xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[22px] text-blue-800">
                React JS Developer
              </h2>
              <p>
                <div className="flex gap-2">
                  <div>
                    <FaHome className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-[18px]">Vedhak</p>
                  </div>
                </div>
              </p>
              <p>
                <div className="flex gap-2">
                  <div>
                    <FaLocationArrow className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-[18px]"> New York,USA</p>
                  </div>
                </div>
              </p>
              <div className="w-full">
                <button className="btn btn-info w-full">Apply</button>
              </div>
              <p>{new Date().getDay}</p>
              <div className="badge badge-secondary absolute top-2 left-2">
                Hybrid
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card w-[500px] bg-base-300 shadow-2xl h-72">
            <figure className="px-10 pt-10 p-6">
              <FaNodeJs className="text-5xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[22px] text-blue-800">
                Back-End Developer
              </h2>
              <p>
                <div className="flex gap-2">
                  <div>
                    <FaHome className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-[18px]">Seytll</p>
                  </div>
                </div>
              </p>
              <p>
                <div className="flex gap-2">
                  <div>
                    <FaLocationArrow className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-[18px]"> Texas,USA</p>
                  </div>
                </div>
              </p>
              <div className="w-full">
                <button className="btn btn-info w-full">Apply</button>
              </div>
              <p>{new Date().getDay}</p>
              <div className="badge badge-secondary absolute top-2 left-2">
                On-Site
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card w-[500px] bg-base-300 shadow-2xl h-72">
            <figure className="px-10 pt-10 p-6">
              <div className="flex gap-2">
                <div>
                  {" "}
                  <FaDatabase className="text-5xl" />
                </div>
                <div>
                  <SiExpress className="text-5xl" />
                </div>
                <div>
                  <FaReact className="text-5xl" />
                </div>
                <div>
                  <FaNodeJs className="text-5xl" />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[22px] text-blue-800">
                MERN Stack Developer
              </h2>
              <p>
                <div className="flex gap-2">
                  <div>
                    <FaHome className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-[18px]">Bjit</p>
                  </div>
                </div>
              </p>
              <p>
                <div className="flex gap-2">
                  <div>
                    <FaLocationArrow className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-[18px]"> Dhaka,Bangladesh</p>
                  </div>
                </div>
              </p>
              <div className="w-full">
                <button className="btn btn-info w-full">Apply</button>
              </div>
              <p>{new Date().getDay}</p>
              <div className="badge badge-secondary absolute top-2 left-2">
                On-Site
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
