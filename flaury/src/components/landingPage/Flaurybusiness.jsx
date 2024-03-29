import flauryBusiness from "/Group 37.png";

const Flaurybusiness = () => {
  return (
    <section className="md:flex items-center px-4 md:px-20 py-10 bg-primaryColor text-white">
      <div className="md:w-1/2">
        <h3 className="py-4 relative">
          <b>FLAURY</b> Business
          <span className="absolute top-2 text-xs bg-white text-primaryColor px-1 py-[0.1rem] rounded-lg">
            extra
          </span>
        </h3>
        <p className="text-sm mb-4">
          An <b>opportunities</b> for professionals to make <b>money</b>
        </p>
        <p className="text-sm mb-4">
          Get <b>hired</b> and earn extra <b>money</b>
        </p>
        <ul className="list-disc pl-4">
          <li className="mb-2">Register an account as a service provider</li>
          <li className="mb-2">Set up your profile and you'll get listed</li>
          <li className="mb-2">Accept customer service requests</li>
          <li className="mb-2">Get paid up on completion</li>
        </ul>
        <button className="text-xs bg-white text-primaryColor px-4 py-2 rounded-lg">
          Start <b>FLAURY</b> Business
        </button>
      </div>
      <div className="md:w-1/2">
        <img src={flauryBusiness} alt="" />
      </div>
    </section>
  );
};

export default Flaurybusiness;
