import React, { useState, useEffect } from 'react'
import SideItems from '../Components/SideItems'
import { BsDatabaseFill } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { TbApps } from "react-icons/tb";
import { IoMdPlayCircle } from "react-icons/io";
import { MdOutlineHelp, MdFeedback } from "react-icons/md";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import MyProjects from '../Components/MyProjects';

const Dashboard = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://picsum.photos/v2/list?page=1&limit=6") //jobs.json
      .then((res) => res.json())
      .then((data) => {
        setCardInfo(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="h-[580px] flex px-5 bg-white">
        {/* Left side bar */}
        <div className="flex flex-col items-center justify-between px-3 bg-gray-100 w-[200px]">
          <div>
            {/* First div */}
            <div className="py-3">
              <div className="border-[1px] border-slate-200 rounded"></div>
              <div className="flex flex-col gap-4 pt-2">
                <SideItems
                  icons={<BsDatabaseFill />}
                  name={"My Projects"}
                />
                <SideItems
                  icons={<GrProjects />}
                  name={"Sample Project"}
                  path={"/sampleproject"}
                />
              </div>
            </div>
            {/* Second Div */}
            <div className="py-3">
              <div className="border-[1px] border-slate-200 rounded"></div>
              <div className="flex flex-col gap-4 pt-2">
                <SideItems icons={<TbApps />} name={"Apps"} 
                path={"/apps"} 
                />
                <SideItems
                  icons={<IoMdPlayCircle />}
                  name={"Intro to Necleo"}
                  path={"/introtonecleo"}
                />
              </div>
            </div>
          </div>
           {/* Third div */}
          <div>
            <div className="py-3">
              <div className="border-[1px] border-slate-200 rounded"></div>
              <div className="flex flex-col gap-4 pt-2">
                <SideItems
                  icons={<MdOutlineHelp />}
                  name={"Help & Support"}
                  path={"/help&support"}
                />
                <SideItems
                  icons={<MdFeedback />}
                  name={"Feedback"}
                  path={"/feedback"}
                />
                <SideItems
                  icons={<TbLayoutSidebarRightCollapseFilled />}
                  name={"Collapse"}
                  path={"/collapse"}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right Side project */}
        <div className="px-10 py-4">
          <div>
            <h1 className='text-black font-bold text-3xl'>My Project</h1>
          </div>
             <div>
             <MyProjects cardData={cardInfo}/>
             </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard