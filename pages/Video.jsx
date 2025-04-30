import React from "react";
import vid from "../assets/vid.mp4";
import { IoIosThumbsDown, IoIosThumbsUp } from "react-icons/io";
import { Link } from "react-router-dom";
const Video = () => {
  return (
    <>
      <div className=" pt-[55px] bg-black flex justify-center px-[30px] ">
        <div className="w-full max-w-[875px] flex flex-col">
          <div className=" w-full ">
            <video
              controls
              autoPlay
              width={400}
              className="h-[400px] w-full p- rounded-md ">
              <source src={vid} type="video/mp4" />
              <source src={vid} type="video/webm" />
              Your Browser Doesnt Support File Type
            </video>
          </div>

          <div className="text-white flex flex-col pt-4">
            <div className="font-bolder font-[20px]">{`Nature`}</div>
          </div>

          <div className="flex text-white flex-row justify-between py-4">
            <div className="flex text-white flex-row gap-4">
              <Link to={'/profile/ad'}>
                <img
                  src=""
                  className="bg-red-500 rounded-full h-[35px] w-[35px]"
                  alt=""
                />
              </Link>
              <div className=" flex flex-col text-[16px]">
                <div className="">{`user1`}</div>
                <div className="text-[#AAAAAA]">{`2024-07-09`}</div>
              </div>
              <div className="bg-white text-black px-y px-[16px] rounded-[16px] flex justify-center items-center h-[36px] ">
                subscribe
              </div>
            </div>
            <div className="flex flex-row bg-[#a5a5a538] justify-center items-center px-[16px] py-[10px] rounded-[18px]   ">
              <div className="flex flex-row justify-center items-center ">
                <IoIosThumbsUp />
                <div>{32}</div>
                <div className="border-1 h-[24px] rounded-sm "></div>
              </div>
              <div className="flex flex-row justify-center items-center">
                <IoIosThumbsDown />
              </div>
            </div>
          </div>
          <div className="text-white flex flex-col p-[10px] bg-[#a5a5a538] w-full rounded-[10px] gap-[10px]  ">
            <div className="">{`2024-09-30`}</div>
            <div>This is the best video</div>
          </div>

          <div>
            <div className="text-white flex flex-col mt-[20px] text-[20px] ">{`3 Comments`}</div>
            <div className="flex flex-row justify-center items-center  gap-[10px] mt-[10px]  ">
              <div className="flex justify-center items-center">
                <img
                  src=""
                  className="h-[36px] w-[36px] bg-red-500 rounded-full  "
                  alt=""
                />
              </div>
              <div className="flex flex-col w-full ">
                <input
                  type="text"
                  name=""
                  className="outline-none border-b-1 text-white border-white "
                  placeholder="Add a Comment"
                  id=""
                />
              </div>
            </div>
            <div className="text-white flex flex-row gap-2 justify-end mt-3 ">
              <div className="py-[8px] px-[16px] rounded-[18px] border-1 border-white hover:bg-white hover:text-black">
                Comment
              </div>
              <div className="py-[8px] px-[16px] rounded-[18px] border-1 border-white hover:bg-white hover:text-black">
                Cancel
              </div>
            </div>

            <div>
              <div className="flex text-white flex-row gap-4 p-2 ">
                <div>
                  <img
                    src=""
                    className="bg-red-500 rounded-full h-[35px] w-[35px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <div className=" flex flex-row gap-3">
                    <div className=" text-[14px]">{`user1`}</div>
                    <div className="text-[#AAAAAA] text-[14px] ">{`2024-07-09`}</div>
                  </div>
                  <div>This is a Comment</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[406px] py-[10px] px-[15px] flex flex-col gap-3 text-white">
          <div className="flex flex-row">
            <div className="bg-red-500 h-[94px] w-[168px] text-white ">
              <img className="w-inherit" src="" alt="" />
            </div>
            <div className="flex flex-col text-white px-2 ">
              <div className="mb-[5px] text-[15px] " >This is a Suggestion</div>
              <div className="text-[12px] text-[#ffffff9c] " >user2</div>
              <div className="text-[12px] text-[#ffffff9c] " >138m views . 1 day ago</div>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="bg-red-500 h-[94px] w-[168px] text-white ">
              <img className="w-inherit" src="" alt="" />
            </div>
            <div className="flex flex-col text-white px-2 ">
              <div className="mb-[5px] text-[15px] " >This is a Suggestion</div>
              <div className="text-[12px] text-[#ffffff9c] " >user2</div>
              <div className="text-[12px] text-[#ffffff9c] " >138m views . 1 day ago</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
