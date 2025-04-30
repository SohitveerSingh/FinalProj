import React from "react";
import SideNavbar from "../components/SideNavbar";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const Profile = ({ aSideNavbar }) => {
  return (
    <>
      <div className="flex w-full p-[10px_13px_0px_13px] bg-black text-white ">
        <SideNavbar aSideNavbar={aSideNavbar} />
        <div className="flex w-full flex-col overflow-hidden ml-[270px] mt-[56px] items-center justify center ">
          <div className="w-full flex mb-[20px]">
            <div className="w-[15%]">
              <img
                src=""
                className="w-25 h-25 bg-red-500 rounded-full"
                alt=""
              />
            </div>
            <div className="w-[85%] flex flex-col gap-2 px-[10px] leading-5   justify-center">
              <div className="text-[30px] font-bold pb-2 ">User1</div>
              <div className="text-[rgb(153,153,153)]">@user1 . 4videos</div>
              <div className="text-[rgb(153,153,153)]">about channel</div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-row pb-[10px] text-[22px] items-center border-b-1 text-[rgb(207,206,207)] border-[rgb(153,153,153)] ">
              {" "}
              Videos <MdArrowRight className="text-[50px]" />
            </div>

            <div className="flex gap-[10px] flex-col h-screen flex-wrap mt-[20px]">
              <Link to={"/watch/90"}>
                <div className="">
                  <div className="w-[210px]">
                    <div className="w-full">
                      <img
                        src=""
                        className=" w-full bg-red-500 h-[150px]  "
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" flex flex-col w-full">
                    <div className="text-[16px] font-bold ">Video Title</div>
                    <div className="text-[#ababab] text-[13px]">
                      Created at 2025-03-12
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
