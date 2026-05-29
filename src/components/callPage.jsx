import { useState } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import ctimg from "../assets/ctimg.png";
import boy from "../assets/boy.png";
import { ArrowLeft, Plus } from "lucide-react";
import vediocall from "../assets/vediocall.png";

import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";

import media1 from "../assets/media1.png";
import media2 from "../assets/media2.png";
import media3 from "../assets/media3.png";
import media4 from "../assets/media4.png";
import media5 from "../assets/media5.png";
import media6 from "../assets/media6.png";
import media7 from "../assets/media7.png";
import media8 from "../assets/media8.png";
import media9 from "../assets/media9.png";
import media10 from "../assets/media10.png";
import media11 from "../assets/media11.png";
import media12 from "../assets/media12.png";

import {
    Phone,
    Video,
    Search,
    ChevronDown,
    ArrowDownLeft,
    Smile,
    Send,
    Link,
    X,
} from "lucide-react";

const calls = [
    { id: 1, name: "Pink Panda", time: "Yesterday, 21:29", img: p1, mode: "phone" },
    { id: 2, name: "Dog Hat", time: "Yesterday, 16:53", img: p2, mode: "phone" },
    { id: 3, name: "Cute Turtle", time: "Yesterday, 16:53", img: p3, mode: "phone" },
    { id: 4, name: "Cool spirit", time: "Yesterday, 16:53", img: p4, mode: "video" },
    { id: 5, name: "strange cat", time: "Yesterday, 16:53", img: p5, mode: "video" },
];

const CallPage = () => {
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [showAudioCall, setShowAudioCall] = useState(false);
    const [showVideoCall, setShowVideoCall] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [showMediaDocs, setShowMediaDocs] = useState(false);
    const [activeTab, setActiveTab] = useState("media");


    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([
        "Can you send me an abstract image?",
        "Thnx!"
    ]);

    const handleSend = () => {
        if (!message.trim()) return;

        setMessages([...messages, message]);
        setMessage("");
    };

    return (
        <div className="flex flex-1 min-w-0 h-screen overflow-hidden">

            {/* LEFT PANEL */}
            <div className="w-[320px] min-w-[320px] bg-[#f2f3f5] border-r border-gray-300 px-5 py-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">

                    <div className="flex items-center gap-3">
                        <ArrowLeft size={24} />

                        <h1 className="text-3xl font-bold">
                            Call Log
                        </h1>
                    </div>

                    <Plus size={24} />
                </div>
                {/* Search */}
                <div className="w-full h-10 rounded-xl bg-[#e7edf8] px-4 flex items-center gap-2 text-gray-400 mb-5">
                    <Search size={16} />
                    <span>Search</span>
                </div>

                <div className="flex items-center justify-between text-blue-500 text-sm mb-4">
                    <span>Start new conversation</span>
                    <Phone size={16} />
                </div>

                <div className="border-b border-gray-300 mb-5"></div>

                {/* Call List */}
                <div className="space-y-3">
                    {calls.map((call) => (
                        <div
                            key={call.id}
                            className="bg-white rounded-2xl px-4 py-3 flex items-center justify-between shadow-sm hover:bg-gray-50 cursor-pointer"
                        >
                            <div
                                className="flex items-center gap-3 cursor-pointer"
                                onClick={() => setShowProfile(true)}
                            >
                                <img
                                    src={call.img}
                                    alt={call.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="font-semibold text-sm">
                                        {call.name}
                                    </h3>

                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <ArrowDownLeft
                                            size={12}
                                            className="text-red-500"
                                        />

                                        <span>{call.time}</span>
                                    </div>
                                </div>
                            </div>

                            {call.mode === "phone" ? (
                                <Phone
                                    size={15}
                                    className="text-green-500"
                                />
                            ) : (
                                <Video
                                    size={15}
                                    className="text-green-500"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT CHAT */}
            <div className="flex-1 bg-[#f7f7f7] flex flex-col relative">

                {/* HEADER */}
                <div className="h-20 px-6 bg-white border-b border-gray-300 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            src={p1}
                            alt=""
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div
                            className="cursor-pointer"
                            onClick={() => setShowProfile(true)}
                        >
                            <h3 className="font-semibold text-sm">
                                Pink Panda
                            </h3>

                            <p className="text-xs text-green-500">
                                Online
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 text-gray-500">
                        <Video
                            size={18}
                            className="cursor-pointer"
                            onClick={() => setShowVideoCall(true)}
                        />

                        {/* AUDIO CALL */}
                        <Phone
                            size={18}
                            className="cursor-pointer"
                            onClick={() => setShowAudioCall(true)}
                        />

                        {/* SEARCH */}
                        <Search
                            size={18}
                            className="cursor-pointer"
                            onClick={() => setShowSearchModal(true)}
                        />

                        <ChevronDown size={18} />
                    </div>
                </div>

                {/* BODY */}
                <div className="flex-1 overflow-y-auto px-8 py-6 bg-[#eef1f6]">
                    <div className="flex justify-end mb-6">
                        <div className="bg-[#5f96f9] text-white px-5 py-3 rounded-2xl text-sm">
                            Can you send me an abstract image?
                        </div>
                    </div>

                    {/* Image */}
                    <div className="mb-2 flex items-end gap-3">
                        <img
                            src={ctimg}
                            alt=""
                            className="w-52 h-36 rounded-2xl object-cover"
                        />
                        <span className="text-xs text-gray-500">10:35</span>
                    </div>

                    {/* Fire */}
                    <div className="mb-10 ml-2">
                        <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-xl shadow-sm">
                            <span>🔥</span>
                            <span className="text-sm text-gray-600">1</span>
                        </div>
                    </div>

                    {/* File */}
                    <div className="mb-10 flex items-end gap-3">
                        <div className="bg-white rounded-2xl px-5 py-4 w-[280px] flex items-center justify-between shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 border-2 border-gray-400 rounded-md flex items-center justify-center text-2xl">
                                    🖼
                                </div>
                                <span className="text-gray-700 text-lg">Abstract.png</span>
                            </div>
                            <span className="text-2xl">↓</span>
                        </div>
                        <span className="text-xs text-gray-500">11:25</span>
                    </div>

                    {messages.map((msg, index) => (
                        <div key={index} className="flex justify-end mb-3">
                            <div className="bg-[#5f96f9] text-white px-5 py-3 rounded-2xl text-sm">
                                {msg}
                            </div>
                        </div>
                    ))}
                </div>

                {/* INPUT */}
                <div className="h-16 px-4 border-t border-gray-300 bg-white flex items-center gap-3">
                    <Link size={18} className="text-blue-500" />
                    <input
                        type="text"
                        placeholder="Write a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1 bg-transparent outline-none text-sm"
                    />
                    <Smile size={18} className="text-blue-500" />
                    <button
                        onClick={handleSend}
                        className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center"
                    >
                        <Send size={16} className="text-white" />
                    </button>
                </div>

                {/* SEARCH MODAL */}
                {showSearchModal && (
                    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                        <div className="w-[380px] bg-white rounded-2xl shadow-xl p-5 relative">
                            <button
                                className="absolute top-4 right-4 text-gray-500"
                                onClick={() => setShowSearchModal(false)}
                            >
                                <X size={18} />
                            </button>

                            <div className="w-full h-10 rounded-xl bg-[#e7edf8] px-4 flex items-center gap-2 text-gray-400 mb-6">
                                <Search size={15} />
                                <span>Search</span>
                            </div>

                            <div className="space-y-5">
                                {calls.map((call) => (
                                    <div
                                        key={call.id}
                                        className="flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={call.img}
                                                alt=""
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <div>
                                                <h3 className="font-semibold text-sm">{call.name}</h3>
                                                <p className="text-xs text-gray-500">{call.time}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-3 text-green-500">
                                            <Phone size={16} />
                                            <Video size={16} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* AUDIO CALL MODAL */}
                {showAudioCall && (
                    <div className="fixed inset-0 bg-black/30 z-50">

                        {/* top-right popup */}
                        <div className="absolute top-6 right-6 w-[470px] bg-white rounded-3xl shadow-xl px-10 py-8 text-center">

                            {/* Top Profiles */}
                            <div className="flex justify-center gap-14 mb-6">

                                {/* Left boy */}
                                <div className="flex flex-col items-center">
                                    <div className="w-36 h-36 rounded-full border border-gray-200 flex items-center justify-center">
                                        <img
                                            src={boy}
                                            alt="boy"
                                            className="w-24 h-24 rounded-full object-cover"
                                        />
                                    </div>
                                    <p className="mt-3 text-sm">Camel</p>
                                </div>

                                {/* Right boy */}
                                <div className="flex flex-col items-center">
                                    <div className="w-36 h-36 rounded-full border border-gray-200 flex items-center justify-center">
                                        <img
                                            src={boy}
                                            alt="boy"
                                            className="w-24 h-24 rounded-full object-cover"
                                        />
                                    </div>
                                    <p className="mt-3 text-sm">Horse</p>
                                </div>
                            </div>

                            {/* Status */}
                            <p className="text-green-500 text-sm mb-3">Connected</p>
                            <h2 className="text-3xl font-semibold mb-6">12:32</h2>

                            {/* Hang up */}
                            <button
                                onClick={() => setShowAudioCall(false)}
                                className="px-6 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50"
                            >
                                Hang Up
                            </button>
                        </div>
                    </div>
                )}

                {/* VIDEO CALL POPUP */}
                {showVideoCall && (
                    <div className="absolute top-24 right-10 z-50">
                        <div className="w-[520px] bg-white rounded-3xl shadow-xl overflow-hidden relative p-3">

                            <img
                                src={vediocall}
                                alt="video call"
                                className="w-full h-full object-contain rounded-2xl"
                            />

                            <button
                                onClick={() => setShowVideoCall(false)}
                                className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 text-sm shadow"
                            >
                                ✖
                            </button>
                        </div>
                    </div>
                )}

                {/* MEDIA DOCS PAGE */}
                {showMediaDocs && (

                    <div className="absolute top-0 right-0 w-[350px] h-full bg-[#f4f5f8] z-[999] shadow-xl border-l border-gray-300 overflow-hidden">

                        {/* HEADER */}
                        <div className="flex items-center gap-4 px-6 py-6 border-b border-gray-300 bg-[#f4f5f8]">

                            <button
                                onClick={() => setShowMediaDocs(false)}
                                className="text-[28px] text-gray-700"
                            >
                                ✕
                            </button>

                            <div>
                                <h1 className="text-[23px] font-bold leading-8">
                                    Media, links and docs
                                </h1>

                                <p className="text-sm text-gray-500 mt-1">
                                    201 items
                                </p>
                            </div>
                        </div>

                        {/* TABS */}
                        <div className="flex justify-around border-b border-gray-300 py-4 text-[15px] font-medium bg-[#f4f5f8]">

                            {/* MEDIA */}
                            <button
                                onClick={() => setActiveTab("media")}
                                className={`pb-2 ${activeTab === "media"
                                    ? "text-blue-500 border-b-2 border-blue-500"
                                    : "text-gray-500"
                                    }`}
                            >
                                Media
                            </button>

                            {/* LINKS */}
                            <button
                                onClick={() => setActiveTab("links")}
                                className={`pb-2 ${activeTab === "links"
                                    ? "text-blue-500 border-b-2 border-blue-500"
                                    : "text-gray-500"
                                    }`}
                            >
                                Links
                            </button>

                            {/* DOCS */}
                            <button
                                onClick={() => setActiveTab("docs")}
                                className={`pb-2 ${activeTab === "docs"
                                    ? "text-blue-500 border-b-2 border-blue-500"
                                    : "text-gray-500"
                                    }`}
                            >
                                Docs
                            </button>
                        </div>

                        {/* CONTENT */}
                        <div className="p-5 overflow-y-auto h-full bg-[#f4f5f8]">

                            {/* MEDIA TAB */}
                            {activeTab === "media" && (

                                <>
                                    <p className="text-gray-500 text-[15px] mb-4">
                                        27th Oct 22
                                    </p>

                                    <div className="grid grid-cols-3 gap-3 mb-10">

                                        {[
                                            media1,
                                            media2,
                                            media3,
                                            media4,
                                            media5,
                                            media6,
                                            media7,
                                            media8,
                                            media9
                                        ].map((img, index) => (

                                            <div
                                                key={index}
                                                className="bg-white p-1.5 rounded-[12px] shadow-sm"
                                            >
                                                <img
                                                    src={img}
                                                    alt=""
                                                    className="w-full h-[78px] object-cover rounded-[10px]"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* LINKS TAB */}
                            {activeTab === "links" && (

                                <>
                                    <p className="text-gray-500 text-[15px] mb-4">
                                        27th Oct 22
                                    </p>

                                    <div className="space-y-5">

                                        {[1, 2, 3, 4].map((item) => (

                                            <div
                                                key={item}
                                                className="bg-[#f7f7f7] border border-gray-200 rounded-[16px] p-4 flex items-center gap-4 shadow-sm"
                                            >
                                                {/* ICON */}
                                                <div className="w-[55px] h-[55px] bg-[#e5e5e5] rounded-[12px] flex items-center justify-center text-[28px]">
                                                    🔗
                                                </div>

                                                {/* TEXT */}
                                                <div>
                                                    <p className="text-[13px] text-black underline">
                                                        https://codingmonk.in/blogs
                                                    </p>

                                                    <p className="text-[14px] text-blue-500 mt-1">
                                                        codingmonk.in
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* DOCS TAB */}
                            {activeTab === "docs" && (

                                <>
                                    {/* DATE */}
                                    <p className="text-gray-500 text-[15px] mb-4">
                                        27th Oct 22
                                    </p>

                                    <div className="space-y-6">

                                        {[
                                            {
                                                name: "Booked Ticket",
                                                icon: "📄"
                                            },
                                            {
                                                name: "Invoice 22 Oct",
                                                icon: "🖼️"
                                            },
                                            {
                                                name: "Sales Report",
                                                icon: "📊"
                                            }
                                        ].map((doc, index) => (

                                            <div
                                                key={index}
                                                className="bg-[#f7f7f7] border border-gray-200 rounded-[16px] p-3 shadow-sm"
                                            >

                                                {/* PREVIEW BOX */}
                                                <div className="w-full h-[105px] bg-[#dddddd] rounded-[10px] mb-3" />

                                                {/* BOTTOM */}
                                                <div className="flex items-center justify-between">

                                                    <div className="flex items-center gap-3">

                                                        {/* ICON */}
                                                        <div className="w-[28px] h-[28px] rounded-[6px] bg-[#d9f1ff] flex items-center justify-center text-[14px]">
                                                            {doc.icon}
                                                        </div>

                                                        {/* NAME */}
                                                        <p className="text-[13px] text-black">
                                                            {doc.name}
                                                        </p>
                                                    </div>

                                                    {/* DOWNLOAD */}
                                                    <button className="text-[22px] text-black">
                                                        ↓
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* PROFILE PAGE */}
                {showProfile && (
                    <div className="absolute top-0 right-0 w-[340px] h-full bg-[#f7f8fc] border-l border-gray-200 z-50 overflow-y-auto">

                        {/* HEADER */}
                        <div className="h-16 px-5 flex items-center gap-3 border-b border-gray-200">

                            <button
                                onClick={() => setShowProfile(false)}
                                className="text-gray-500 text-lg"
                            >
                                ✕
                            </button>

                            <h2 className="text-gray-500 font-medium text-[15px]">
                                Contact info
                            </h2>
                        </div>

                        {/* PROFILE */}
                        <div className="flex flex-col items-center py-8 border-b border-gray-200">

                            <img
                                src={p1}
                                alt=""
                                className="w-24 h-24 rounded-full object-cover mb-4"
                            />

                            <h3 className="font-semibold text-[24px] text-gray-800">
                                Pink Panda
                            </h3>
                            <p className="text-gray-500 mt-1 text-[15px]">
                                +91 6265 081 928
                            </p>

                            {/* ICONS */}
                            <div className="flex gap-16 mt-7">

                                <div className="flex flex-col items-center text-gray-700">
                                    <Video size={22} />
                                    <span className="text-sm mt-2">
                                        Audio
                                    </span>
                                </div>

                                <div className="flex flex-col items-center text-gray-700">
                                    <Phone size={22} />
                                    <span className="text-sm mt-2">
                                        Voice
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* ABOUT */}
                        <div className="px-5 py-6 border-b border-gray-200">

                            <p className="text-gray-500 text-sm mb-3">
                                About
                            </p>

                            <p className="font-medium text-[15px]">
                                Hi there, I am using
                            </p>
                        </div>

                        {/* MEDIA */}
                        <div className="px-5 py-6 border-b border-gray-200">

                            {/* Media, links and docs */}
                            <div
                                onClick={() => setShowMediaDocs(true)}
                                className="flex items-center justify-between mb-4 cursor-pointer"
                            >
                                <p className="text-[15px]">
                                    Media, links and docs
                                </p>

                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600">
                                        201
                                    </span>

                                    <span className="text-xl">
                                        ›
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-3">

                                <img
                                    src={car1}
                                    alt=""
                                    className="w-24 h-20 object-cover rounded-md"
                                />

                                <img
                                    src={car2}
                                    alt=""
                                    className="w-24 h-20 object-cover rounded-md"
                                />

                                <img
                                    src={car3}
                                    alt=""
                                    className="w-24 h-20 object-cover rounded-md"
                                />
                            </div>
                        </div>

                        {/* STARRED */}
                        <div className="px-5 py-5 border-b border-gray-200 flex items-center justify-between">

                            <div className="flex items-center gap-4">
                                ⭐
                                <span>Starred Messages</span>
                            </div>

                            <span className="text-xl">›</span>
                        </div>

                        {/* MUTE */}
                        <div className="px-5 py-5 border-b border-gray-200 flex items-center justify-between">

                            <div className="flex items-center gap-4">
                                🔔
                                <span>Mute Notifications</span>
                            </div>

                            <div className="w-11 h-6 bg-blue-500 rounded-full relative">
                                <div className="w-5 h-5 bg-white rounded-full absolute right-[2px] top-[2px]"></div>
                            </div>
                        </div>

                        {/* GROUP */}
                        <div className="px-5 py-6 border-b border-gray-200">

                            <p className="text-sm text-gray-500 mb-4">
                                1 group in common
                            </p>

                            <div className="flex items-center gap-3">

                                <img
                                    src={p1}
                                    alt=""
                                    className="w-14 h-14 rounded-full object-cover"
                                />

                                <div>
                                    <h4 className="font-semibold">
                                        Camel’s Gang
                                    </h4>

                                    <p className="text-sm text-gray-500">
                                        Owl, Parrot, Rabbit , You
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* BUTTONS */}
                        <div className="p-5 flex gap-4">

                            <button className="flex-1 border border-blue-400 text-blue-500 py-3 rounded-xl font-medium">
                                Block
                            </button>

                            <button className="flex-1 border border-blue-400 text-blue-500 py-3 rounded-xl font-medium">
                                Delete
                            </button>
                        </div>
                    </div>
                )}


            </div>
        </div>
    )
};

export default CallPage;