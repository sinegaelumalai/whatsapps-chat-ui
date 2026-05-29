import { useState } from "react";
import bgimg from "../assets/bgimg.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";

import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const contacts = [
    {
        id: 1,
        name: "Pink Panda",
        msg: "Hey there!",
        img: p1,
    },
    {
        id: 2,
        name: "Dog Hat",
        msg: "Available",
        img: p2,
    },
    {
        id: 3,
        name: "Cute Turtle",
        msg: "Busy",
        img: p3,
    },
    {
        id: 4,
        name: "Cool spirit",
        msg: "At work",
        img: p4,
    },
    {
        id: 5,
        name: "strange cat",
        msg: "Sleeping",
        img: p5,
    },
];

const ContactsPage = () => {

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");

    const filteredContacts = contacts.filter((contact) =>
        contact.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (

        <div className="flex flex-1 h-screen overflow-hidden">

            {/* LEFT SIDE */}
            <div className="w-[360px] bg-[#f2f3f5] border-r border-gray-300 px-5 py-5 overflow-y-auto">

                {/* HEADER */}
                <div className="flex items-center gap-4 mb-8">

                    <ArrowLeft
                        size={24}
                        className="cursor-pointer"
                        onClick={() => navigate("/chats")}
                    />

                    <h1 className="text-4xl font-bold">
                        Contacts
                    </h1>
                </div>

                {/* SEARCH */}
                <div className="w-full h-11 rounded-xl bg-[#e7edf8] px-4 flex items-center gap-2 mb-6">

                    <Search
                        size={16}
                        className="text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search Contacts"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder:text-gray-400"
                    />
                </div>

                {/* NO CONTACTS */}
                {filteredContacts.length === 0 && (

                    <div className="text-center text-gray-400 mt-10">
                        No contacts found
                    </div>
                )}

                {/* CONTACT LIST */}
                <div className="space-y-3">

                    {filteredContacts.map((contact) => (

                        <div
                            key={contact.id}
                            onClick={() => navigate(`/chats/${contact.id}`)}
                            className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm cursor-pointer hover:bg-gray-50"
                        >

                            {/* IMAGE */}
                            <div className="relative">

                                <img
                                    src={contact.img}
                                    alt={contact.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-white"></span>
                            </div>

                            {/* TEXT */}
                            <div>

                                <h3 className="font-semibold text-sm">
                                    {contact.name}
                                </h3>

                                <p className="text-xs text-gray-500 mt-1">
                                    {contact.msg}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1 bg-[#eef1f6] flex flex-col items-center justify-center">

                <img
                    src={bgimg}
                    alt="bg"
                    className="w-[210px] h-[210px] object-contain"
                />

                <p className="mt-6 text-[15px] text-gray-700">
                    Select a contact to start chatting
                </p>
            </div>
        </div>
    );
};

export default ContactsPage;