import { useState } from "react";
import Button from "./Button";
import Tags from "./Tags";

function Hero() {
  const [isSelected, setIsSelected] = useState("");

  const handleIsSelected = (tag) => {
    setIsSelected(tag);
  };

  return (
    <div className="flex gap-20 md:py-12 py-6 px-10 lg:px-32 flex-col md:flex-row items-center container">
      <div className="md:w-1/2 bg-white top-2 bottom-0 left-2 right-0 rounded-lg border-t-4 border-l-4  lg:pr-26  border-b-[1px] border-gray-300 h-full w-full">
        <div className="flex flex-col py-2 px-3 gap-1 items-start">
          <h1 className="font-bold md:text-2xl uppercase tracking-tighter text-lg">
            post your property for free
          </h1>
          <p className="text-gray-400">Add Basic Details</p>
          <p className="font-medium">Looking for ........</p>
          <Tags
            tags={["Sell", "Rent"]}
            onClick={handleIsSelected}
            isSelected={isSelected}
          />
          <p className="font-medium">Property Type</p>
          <Tags
            tags={[
              "Residential",
              "Commercial",
              "Flat/Apartment",
              "Villa",
              "Plot",
              "Independent House",
              "Builder Floor",
            ]}
            onClick={handleIsSelected}
            isSelected={isSelected}
          />

          <p className="font-medium">Add Your Contact Detail</p>
          <input
            type="text"
            placeholder="Phone Number"
            className="text-gray-600 bg-white rounded-lg py-2 px-6 border-4 focus:outline-blue-500 text-sm w-1/2 placeholder:text-gray-600"
          />

          <p className="text-sm mt-2">
            Are you a registered user?{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Login
            </span>
          </p>
          <Button>Start Now</Button>
        </div>
      </div>

      <div className="p-6 bg-blue-200 rounded-lg md:w-1/2 md:max-w-lg py-16 w-full">
        <div className="flex items-center lg:items-start gap-1">
          <p className="text-xl lg:text-2xl font-bold">
            Post property Ad to sell or rent online for
          </p>
          <p className="text-4xl lg:text-5xl uppercase italic font-bold">
            Free
          </p>
        </div>

        <ul type="1" className="mt-4 pl-8 text-lg lg:text-base list-disc">
          <li>Advertise For FREE</li>
          <li>Sell 10 X faster</li>
          <li>Connect with genuine buyers</li>
          <li>Get unlimited enquiries</li>
        </ul>

        <div className="flex items-center justify-center">
          <img src="/assets/image.png" className="w-96" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
