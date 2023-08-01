import { useNavigate } from "react-router-dom";
import { useTool } from "./ContextTools";
const NavBar = () => {
    const {Open,handleOpen}=useTool()
  const navigate =useNavigate()
  const Menus = [
    { title: "Books", src: "BookIcon" , gap: true,to:"/books"},
    { title: "MyNote", src: "contractIcon", gap: true,to:"/MyNote" },
    { title: "help", src: "helpIcon", gap: true,to:"/Help" },
    { title: "Setting", src: "Setting" , gap: true,to:"/books" },
  ];

  return (
    <div className={`flex fixed top-0 border-e-4 `}>
      <div
        className={` ${
          Open ? "w-40 " : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!Open && "rotate-180"}`}
          onClick={() => handleOpen(!Open)}
        />
        <div className="flex gap-x-4 items-center"  onClick={()=>navigate(`/`)}>
          <img
            src="./src/assets/logo.png"
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
              ${Menu.gap ? "mt-9" : "mt-2"}  `}
            >
              
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!Open && "hidden"} origin-left font-semibold duration-200`}>
                {Menu.title}
              </span>
              
            </li>
          ))}
        </ul>
      </div>
 
    </div>
  );
};
export default NavBar;
