import { useNavigate } from "react-router-dom";
import { useTool } from "./ContextTools";
import BookIcon from "../assets/BookIcon.png"
import contractIcon from "../assets/contractIcon.png"
import control from "../assets/control.png"
import helpIcon from "../assets/helpIcon.png"
import logo from "../assets/logo.png"
import { BsFillMoonFill } from 'react-icons/bs'
import { BiSun } from 'react-icons/bi'
import { useDarkMode } from "./ContextDarkMode";
const NavBar = () => {
    const {Open,handleOpen}=useTool()
  const navigate =useNavigate()
  const {DarkMode,setDarkMode}=useDarkMode()
  const Menus = [
    { title: "Books", src: BookIcon , gap: true,to:"/books"},
    { title: "MyNote", src: contractIcon, gap: true,to:"/MyNote" },
    { title: "Help", src: helpIcon, gap: true,to:"/Help" },
  ];

  return (
    <div className={`flex fixed top-0 ${!DarkMode && "border-black border-e-8"} border-e-4 `}>
      <div
        className={` ${
          Open ? "w-40 " : "w-20 "
        } ${!DarkMode && "bg-neutral-200"} bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!Open && "rotate-180"}`}
          onClick={() => handleOpen(!Open)}
        />
        <div className="flex gap-x-4 items-center"  onClick={()=>navigate(`/`)}>
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              Open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !Open && "scale-0"
            }`}
          >
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              onClick={()=>navigate(`${Menu.to}`)}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${!DarkMode && "hover:bg-slate-600"} ${!DarkMode && "text-black"} `}
            >
              
              <img src={Menu.src} />
              <span className={`${!Open && "hidden"} origin-left font-semibold duration-200 ${!DarkMode && "text-black"}`}>
                {Menu.title}
              </span>
              
            </li> 
          ))}
          <li
              onClick={()=>setDarkMode(!DarkMode)}
              key={"dark Mode"}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
               mt-9 ${!DarkMode && "hover:bg-slate-600"}`}
            >
              {!DarkMode? <BsFillMoonFill style={{fontSize:"30px",marginLeft:"0",color:"black"}} />
              :
              <BiSun style={{fontSize:"30px",marginLeft:"0"}}/>
              }
              
              <span className={`${!Open && "hidden"} origin-left font-semibold duration-200 ${!DarkMode && "text-black"}`}>
                {DarkMode? "Light Mode":"Dark Mode"}
              </span>
              
            </li>
        </ul>
      </div>
 
    </div>
  );
};
export default NavBar;
