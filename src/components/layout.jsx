import bird from "../assets/bird.png";
import girl from "../assets/girl.png";
import { CircleDot } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";
import {
    MessageCircleMore,
    Users,
    Phone,
    Settings,
} from "lucide-react";

const Layout = () => {
    const navigate = useNavigate(); // important

    return (
        <div className="h-screen w-full bg-[#ececec] flex overflow-hidden rounded-[22px]">
            {/* Sidebar */}
            <div className="w-[82px] bg-[#e9ebf0] border-r border-gray-300 flex flex-col justify-between items-center py-5">

                {/* Top Icons */}
                <div className="flex flex-col items-center gap-6">

                    {/* Bird -> Profile */}
                    <div
                        className="w-10 h-10 bg-[#a7b4ff] rounded-xl flex items-center justify-center cursor-pointer"
                        onClick={() => navigate("/")} >
                        <img
                            src={bird}
                            alt="bird"
                            className="w-6 h-6 object-contain"
                        />
                    </div>

                    {/* Chat */}
                    <div
                        className="w-10 h-10 bg-[#5f96f9] rounded-xl flex items-center justify-center cursor-pointer"
                        onClick={() => navigate("/chats")}
                    >
                        <MessageCircleMore size={18} className="text-white" />
                    </div>

                    <Users
                        size={18}
                        className="text-black cursor-pointer"
                        onClick={() => navigate("/contacts")}
                    />
                    <Phone
                        size={18}
                        className="text-black cursor-pointer"
                        onClick={() => navigate("/calls")}
                    />
                    <CircleDot
                        size={18}
                        className="text-black cursor-pointer"
                        onClick={() => navigate("/status")}
                    />

                    <Settings
                        size={18}
                        className="text-black cursor-pointer"
                        onClick={() => navigate("/settings")}
                    />
                </div>

                {/* Bottom */}
                <div className="flex flex-col items-center gap-6">
                    <div className="w-8 h-5 bg-[#5f96f9] rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute right-[2px] top-[2px]"></div>
                    </div>

                    <img
                        src={girl}
                        alt="girl"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default Layout;