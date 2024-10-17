
import { useNavigate } from "react-router";


export const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="bg-white flex drop-shadow items-center justify-between  px-6 py-2  ">
        <h2 className="text-2xl font-medium py-2">OrganizeYou</h2>

        <div className="flex">
          <div className="rounded-full h-12 w-12 bg-orange-500 flex justify-center mt-1 mr-2 text-white">
            <div className="flex flex-col justify-center h-full text-xl">U
                <button className=" text-black" onClick={()=> navigate("/login")}>logout</button>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
