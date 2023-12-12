import React from "react";
import Feature from "../components/HomeComponent/Feature";
import Plan from "../components/HomeComponent/Plan";
import { starter } from "../Data/homeSection";
import { pro } from "../Data/homeSection";
import { flex } from "../Data/homeSection";
import FAQ from "../components/HomeComponent/FAQ";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-[#0A0F1B] text-white">
        <div className="w-[1080px] max-w-11/12 mx-auto py-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-[#f9f9f9] text-center text-[40px] font-bold">
              Choose Your <span className="text-[#f85e9f]"> Plan </span>
            </h1>
            <p className="text-[#c0c0c0] text-center text-[20px]">
              Switch or cancel<sup>*</sup> anytime.{" "}
            </p>

            {/* home section one  */}
            <div className="flex gap-4 justify-between py-5 ">
              {/* feature section  */}

              <Feature />

              {/* plan section  */}

              <Plan
                heading={"Starter"}
                data={starter}
                btnText={"Start a Free 14-day trial"}
              />
              <Plan heading={"Pro"} data={pro} btnText="Talk to sales" />
              <Plan heading={"Flex"} data={flex} btnText="Talk to sales" />
            </div>

            {/* FAQ Section  */}

            <FAQ />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
