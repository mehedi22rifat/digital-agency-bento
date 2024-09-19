import bgimg from "../assets/BG.png";
import rateangle from "../assets/Rectangles 764.jpg";
import aro from "../assets/Frame 9.png";

const Banner = () => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row md:flex-row lg:gap-20 mt-7 justify-between items-center">
      <div className="">
        <div className="flex justify-center items-center gap-6">
          <h1 className="text-[40px] lg:text-[77px] md:text-[50px]  font-bold">
            We Make <span className="text-[#F27229]"> Creative</span>
          </h1>
          <img className="lg:w-20 w-14 lg:h-20" src={bgimg} alt="" />
        </div>
        <div className="flex gap-6 items-center flex-col lg:flex-row md:flex-row">
          <img
            className="w-full lg:w-[300px] md:w-[250px]  h-20 lg:h-24 text-[#5A5C5F]"
            src={rateangle}
            alt=""
          />
          <h1 className="text-[40px] lg:text-[50px] md:text-[50px]  font-bold">
            Think <span className="text-[#F27229]">Everyday</span>
          </h1>
        </div>
      </div>
      <div className="lg:flex-1 md:flex-1 lg:w-1/3 md:w-1/3">
        <p className="text-[#5A5C5F]">
          Welcome to our website! We are a professional and reliable printing
          company that offers a wide range of printing services to meet your
          needs.
        </p>
        <div className="flex justify-between items-center mt-10">
          <div className="flex items-center">
            <img
              className="h-10 w-10 -mx-1.5 ring ring-white rounded-full object-cover"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
              alt
            />
            <img
              className="h-10 w-10 -mx-1.5 ring ring-white rounded-full object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=687&h=687&q=80"
              alt
            />
            <img
              className="h-10 w-10 -mx-1.5 ring ring-white  rounded-full object-cover"
              src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=686&h=686&q=80"
              alt
            />
          </div>

          <div>
            <p className="text-[20px] font-medium text-[#F27229]">
              240 Business Peoples
            </p>
            <p className="text-[16px] text-[#5A5C5F]">Already registered</p>
          </div>

          <div>
            <button className="hover:translate-x-1 duration-75 hover:border border-emerald-300 rounded-full">
              <img className="w-14" src={aro} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
