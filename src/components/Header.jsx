import logo from "../assets/images/disney-plus-logo.svg";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import HeaderItem from "./HeaderItem";
import { HiDotsVertical } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      name: "Home",
      icons: HiHome,
    },
    {
      name: "Search",
      icons: HiMagnifyingGlass,
    },

    {
      name: "Originals",
      icons: HiStar,
    },
    {
      name: "Movies",
      icons: HiPlayCircle,
    },
    {
      name: "Series",
      icons: HiTv,
    },
  ];

  return (
    <div className="text-white flex items-center gap-8 justify-between p-5">
      <div className="flex items-center gap-8 justify-between">
        <img src={logo} alt="" className="w-[80px] md:w-[115px] object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item, index) => {
            return (
              <div className="flex justify-between gap-4" key={index}>
                <HeaderItem name={item.name} Icon={item.icons} />
              </div>
            );
          })}
        </div>
        {/*  */}
        <div className=" md:hidden flex gap-5">
          {menu.map((item, index) => {
            return (
              index < 3 && (
                <div className="flex justify-between gap-4" key={index}>
                  <HeaderItem name={""} Icon={item.icons} />
                </div>
              )
            );
          })}
          <div className="md:hidden  " onClick={()=>setToggle(!toggle)} >
            <HeaderItem
              name={""}
              Icon={HiDotsVertical}
              
            />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 pt-4">
                {menu.map(
                  (item, index) =>
                    index > 1 && (
                      <HeaderItem
                        name={item.name}
                        Icon={item.icons}
                        key={index}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1623330188314-8f4645626731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
        className="w-[40px] h-[40px] rounded-full "
      />
    </div>
  );
};

export default Header;
