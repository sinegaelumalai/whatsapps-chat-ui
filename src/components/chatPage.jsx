import { useState } from "react";

import bgimg from "../assets/bgimg.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";

import {
    ChevronDown,
    ArrowLeft,
    Plus,
    Search
} from "lucide-react";

import {
    useNavigate,
    useParams,
    Outlet
} from "react-router-dom";

const chats = [
    {
        id: 1,
        name: "Pink Panda",
        msg: "You: thnx!",
        time: "9:36",
        img: p1
    },

    {
        id: 2,
        name: "Dog Hat",
        msg: "It’s so quite outside 🤭",
        time: "9:36",
        img: p2,
        count: 2
    },

    {
        id: 3,
        name: "Cute Turtle",
        msg: "That’s It. Goodbye!",
        time: "9:36",
        img: p3,
        count: 3
    },

    {
        id: 4,
        name: "Cool spirit",
        msg: "Look what I found",
        time: "9:36",
        img: p4
    },

    {
        id: 5,
        name: "strange cat",
        msg: "You: Hi, sorry to bother you..",
        time: "9:36",
        img: p5,
        arrow: true
    },

    {
        id: 6,
        name: "Fire Fox",
        msg: "What does the fox says?",
        time: "9:36",
        img: p6
    },
];

const ChatPage = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    // SEARCH STATE
    const [search, setSearch] = useState("");

    // FILTERED CHATS
    const filteredChats = chats.filter((chat) =>
        chat.name.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="flex flex-1 min-w-0 h-screen overflow-hidden">

            {/* LEFT CHAT LIST */}
            <div className="w-[320px] min-w-[320px] shrink-0 bg-[#f2f3f5] border-r border-gray-300 px-4 py-5 overflow-y-auto">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-8">

                    <div className="flex items-center gap-3">

                        <ArrowLeft size={22} />

                        <h1 className="text-3xl font-bold">
                            Chats
                        </h1>
                    </div>

                    <Plus size={22} />
                </div>

                {/* SEARCH BAR */}
                <div className="w-full h-11 rounded-xl bg-[#e7edf8] px-4 flex items-center gap-3 mb-6">

                    <Search
                        size={18}
                        className="text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-transparent outline-none text-sm w-full"
                    />
                </div>

                {/* DIVIDER */}
                <div className="border-b border-gray-300 mb-4"></div>

                {/* NO RESULT */}
                {filteredChats.length === 0 && (

                    <div className="text-center text-gray-400 mt-10 text-sm">
                        No chats found
                    </div>
                )}

                {/* PINNED */}
                {filteredChats.length > 0 && (

                    <>
                        <div className="space-y-3 mb-6">

                            {filteredChats.slice(0, 2).map((chat) => (

                                <div
                                    key={chat.id}
                                    onClick={() => navigate(`/chats/${chat.id}`)}
                                    className="bg-white rounded-2xl px-4 py-3 flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50"
                                >

                                    {/* LEFT */}
                                    <div className="flex items-center gap-3">

                                        <div className="relative">

                                            <img
                                                src={chat.img}
                                                alt={chat.name}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />

                                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></span>
                                        </div>

                                        <div>

                                            <h3 className="font-semibold text-sm">
                                                {chat.name}
                                            </h3>

                                            <p className="text-xs text-gray-500">
                                                {chat.msg}
                                            </p>
                                        </div>
                                    </div>

                                    {/* RIGHT */}
                                    <div className="flex flex-col items-center gap-1">

                                        <span className="text-xs text-gray-400">
                                            {chat.time}
                                        </span>

                                        {chat.count && (

                                            <span className="w-4 h-4 text-[10px] bg-blue-500 text-white rounded-full flex items-center justify-center">
                                                {chat.count}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ALL CHATS */}
                        <p className="text-gray-500 text-sm font-medium mb-4">
                            All Chats
                        </p>

                        {/* CHAT LIST */}
                        <div className="space-y-3">

                            {filteredChats.slice(2).map((chat) => (

                                <div
                                    key={chat.id}
                                    onClick={() => navigate(`/chats/${chat.id}`)}
                                    className="bg-white rounded-2xl px-4 py-3 flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50"
                                >

                                    {/* LEFT */}
                                    <div className="flex items-center gap-3">

                                        <div className="relative">

                                            <img
                                                src={chat.img}
                                                alt={chat.name}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />

                                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></span>
                                        </div>

                                        <div>

                                            <h3 className="font-semibold text-sm">
                                                {chat.name}
                                            </h3>

                                            <p className="text-xs text-gray-500">
                                                {chat.msg}
                                            </p>
                                        </div>
                                    </div>

                                    {/* RIGHT */}
                                    <div className="flex flex-col items-center gap-1">

                                        <span className="text-xs text-gray-400">
                                            {chat.time}
                                        </span>

                                        {chat.count && (

                                            <span className="w-4 h-4 text-[10px] bg-blue-500 text-white rounded-full flex items-center justify-center">
                                                {chat.count}
                                            </span>
                                        )}

                                        {chat.arrow && (

                                            <ChevronDown
                                                size={14}
                                                className="text-gray-400"
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex h-full w-full bg-[#f7f7f7]">

                <div className="flex-1 bg-[#eef1f6] relative">

                    {/* CHAT SCREEN */}
                    <Outlet />

                    {/* EMPTY SCREEN */}
                    {!id && (

                        <div className="absolute inset-0 flex flex-col items-center justify-center">

                            <img
                                src={bgimg}
                                alt="bg"
                                className="w-[210px] h-[210px] object-contain"
                            />

                            <p className="mt-6 text-[15px] text-gray-700">

                                Select a conversation or start a

                                <span className="text-blue-500 ml-1">
                                    new one
                                </span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatPage;