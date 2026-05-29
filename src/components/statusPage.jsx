import statusimg from "../assets/statusimg.png";

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

import {
    ArrowLeft,
    Plus,
    ChevronLeft,
    ChevronRight,
    X,
    Smile,
    Send,
    Link,
} from "lucide-react";

const statuses = [
    {
        id: 1,
        name: "Pink Panda (Me)",
        time: "20hr",
        img: p1,
        active: true,
    },
    {
        id: 2,
        name: "Dog Hat",
        time: "3 min",
        img: p2,
    },
    {
        id: 3,
        name: "Cute Turtle",
        time: "50 min",
        img: p3,
    },
    {
        id: 4,
        name: "Cool spirit",
        time: "23 hr",
        img: p4,
    },
];

const StatusPage = () => {
    return (
        <div className="flex h-full w-full bg-[#eef1f6]">

            {/* LEFT SIDE */}
            <div className="w-[320px] bg-white border-r px-5 py-5 flex flex-col">

                {/* Top */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <ArrowLeft size={22} />
                        <h1 className="text-3xl font-bold">
                            Updates
                        </h1>
                    </div>

                    <Plus size={22} />
                </div>

                {/* Not Seen */}
                <p className="text-gray-500 text-sm mb-5">
                    Not seen
                </p>

                <div className="space-y-4">

                    {statuses.slice(0, 2).map((item) => (
                        <div
                            key={item.id}
                            className={`flex items-center justify-between px-4 py-4 rounded-2xl cursor-pointer ${
                                item.active
                                    ? "bg-[#5f96f9] text-white"
                                    : "bg-[#f8f8f8]"
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-14 h-14 rounded-full border-2 border-green-400 p-[2px]">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-sm">
                                        {item.name}
                                    </h3>

                                    <p
                                        className={`text-xs ${
                                            item.active
                                                ? "text-white"
                                                : "text-gray-500"
                                        }`}
                                    >
                                        Edit
                                    </p>
                                </div>
                            </div>

                            <span className="text-xs">
                                {item.time}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Seen */}
                <p className="text-gray-500 text-sm mt-10 mb-5">
                    Seen
                </p>

                <div className="space-y-4">

                    {statuses.slice(2).map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between px-4 py-4 rounded-2xl bg-[#f8f8f8]"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-14 h-14 rounded-full border-2 border-green-400 p-[2px]">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-sm">
                                        {item.name}
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        {item.time}
                                    </p>
                                </div>
                            </div>

                            <span className="text-xs text-gray-400">
                                {item.time}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1 relative bg-[#f7f7f7] flex flex-col">

                {/* top name */}
                <div className="absolute top-7 left-12 font-semibold text-sm">
                    Pink Panda (Me)
                </div>

                {/* close */}
                <X
                    size={20}
                    className="absolute top-7 right-10 text-gray-500 cursor-pointer"
                />

                {/* arrows */}
                <ChevronLeft
                    size={28}
                    className="absolute left-14 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <ChevronRight
                    size={28}
                    className="absolute right-14 top-1/2 -translate-y-1/2 text-gray-500"
                />

                {/* status image */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="relative">

                        {/* top bars */}
                        <div className="absolute top-3 left-3 right-3 flex gap-2">
                            <div className="h-1 bg-blue-500 rounded-full flex-1"></div>
                            <div className="h-1 bg-blue-500 rounded-full flex-1"></div>
                            <div className="h-1 bg-white rounded-full flex-1"></div>
                        </div>

                        <img
                            src={statusimg}
                            alt=""
                            className="w-[260px] h-[520px] rounded-3xl object-cover"
                        />
                    </div>
                </div>

                {/* input */}
                <div className="h-16 bg-white flex items-center gap-4 px-6">
                    <Link size={18} className="text-blue-500" />

                    <input
                        type="text"
                        placeholder="Write a message..."
                        className="flex-1 outline-none"
                    />

                    <Smile size={20} className="text-blue-500" />

                    <button className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                        <Send size={16} className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StatusPage;