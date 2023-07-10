import { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Candidates = () => {
  const navigate = useNavigate();
  const handleRouteToCandidates = () => {
    navigate("/candidates");
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("Candidates.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="my-8">
      <h2 className="text-3xl text-center text-blue-600 font-bold my-8">
        Our Successful Candidates
      </h2>
      <div className="grid grid-cols-4 gap-8 mx-auto">
        {data.map((item) => {
          return (
            <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={item.image} alt="" className="rounded-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-center text-[18px] font-bold text-blue-900">
                  Name : {item.name}
                </h2>
                <h2 className="card-title text-center text-[18px] font-bold text-red-900">
                  Profession : {item.profession}
                </h2>
                <p className="font-medium">{item.testimonial}</p>
              </div>
            </div>
          );
        })}
        <div className="mx-auto w-full ms-[560px]">
          <button
            onClick={handleRouteToCandidates}
            className="btn btn-outline btn-primary w-full "
          >
            <Link>All Candidates</Link>
            <FaArrowCircleRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Candidates;
