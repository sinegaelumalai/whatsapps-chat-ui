import { useState } from "react";
import finger from "../assets/finger.png";
import docs from "../assets/docs.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import {
    ArrowLeft,
    Bell,
    Lock,
    Shield,
    Palette,
    Image,
    FileText,
    Keyboard,
    HelpCircle,
    ChevronRight,
} from "lucide-react";

import bgimg from "../assets/bgimg.png";

const SettingsPage = () => {
    const [showKeyboard, setShowKeyboard] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [showSecurity, setShowSecurity] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    const [showAccountInfo, setShowAccountInfo] = useState(false);
    const [showWallpaper, setShowWallpaper] = useState(false);
    const [selectedColor, setSelectedColor] = useState("#59508d");
    const [showLastSeen, setShowLastSeen] = useState(false);
    const [showProfilePhoto, setShowProfilePhoto] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState("Everyone");
    const [showAbout, setShowAbout] = useState(false);
    const [aboutPrivacy, setAboutPrivacy] = useState("Everyone");
    const [showGroups, setShowGroups] = useState(false);
    const [groupsPrivacy, setGroupsPrivacy] = useState("Everyone");
    const [showBlockedContacts, setShowBlockedContacts] = useState(false);
    const [showThemePopup, setShowThemePopup] = useState(false);
    const [theme, setTheme] = useState("Light");
    return (
        <div className="flex flex-1 h-screen">

            {/* LEFT */}
            <div className="w-[280px] bg-[#f4f5f8] border-r border-gray-300 px-5 py-6">

                {/* Header */}
                <div className="flex items-center gap-4 mb-10">
                    <ArrowLeft size={24} />

                    <h1 className="text-4xl font-bold">
                        Settings
                    </h1>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-4 mb-10">
                    <img
                        src={p1}
                        alt=""
                        className="w-14 h-14 rounded-full object-cover"
                    />

                    <div>
                        <h3 className="font-semibold text-[17px]">
                            Shreyansh shah
                        </h3>

                        <p className="text-gray-500 text-sm">
                            Exploring
                        </p>
                    </div>
                </div>

                {/* Menu */}
                <div className="space-y-1">

                    <div
                        className="flex items-center gap-5 py-4 border-b border-gray-300 text-gray-600 cursor-pointer"
                        onClick={() => setShowNotification(true)}
                    >
                        <Bell size={18} />
                        <span>Notifications</span>
                    </div>
                    <div
                        className="flex items-center gap-5 py-4 border-b border-gray-300 text-gray-600 cursor-pointer"
                        onClick={() => setShowPrivacy(true)}
                    >
                        <Lock size={18} />
                        <span>Privacy</span>
                    </div>
                    <div
                        className="flex items-center gap-5 py-4 border-b border-gray-300 text-gray-600 cursor-pointer"
                        onClick={() => setShowSecurity(true)}
                    >
                        <Shield size={18} />
                        <span>Security</span>
                    </div>

                    <div
                        onClick={() => setShowThemePopup(true)}
                        className="flex items-center gap-5 py-4 border-b border-gray-300 text-gray-600 cursor-pointer"
                    >
                        <Palette size={18} />
                        <span>Theme</span>
                    </div>

                    <div
                        className="flex items-center gap-5 py-4 border-b border-gray-300 text-gray-600 cursor-pointer"
                        onClick={() => setShowWallpaper(true)}
                    >
                        <Image size={18} />
                        <span>Chat Wallpaper</span>
                    </div>

                    <div
                        className="flex items-center gap-5 py-4 border-b border-gray-300 text-gray-600 cursor-pointer"
                        onClick={() => setShowAccountInfo(true)}
                    >
                        <FileText size={18} />
                        <span>Request Account Info</span>
                    </div>

                    <div
                        className="flex items-center gap-5 py-4 border-b border-gray-300 text-gray-600 cursor-pointer"
                        onClick={() => setShowKeyboard(true)}
                    >
                        <Keyboard size={18} />
                        <span>Keyboard shortcuts</span>
                    </div>

                    <div
                        className="flex items-center gap-5 py-4 text-gray-600 cursor-pointer"
                        onClick={() => setShowHelp(true)}
                    >
                        <HelpCircle size={18} />
                        <span>Help</span>
                    </div>
                </div>
            </div>

            {/* RIGHT */}

            <div className="flex-1 relative bg-[#eef1f6] overflow-hidden">

                {/* RIGHT SIDE IMAGE */}
                <div className="h-full flex items-center justify-center">

                    <div className="text-center">

                        <img
                            src={bgimg}
                            alt=""
                            className="w-52 mx-auto mb-6"
                        />

                        <p className="text-gray-700 font-medium">
                            Select a conversation or start a
                            <span className="text-blue-500 ml-1">
                                new one
                            </span>
                        </p>
                    </div>
                </div>

                {/* NOTIFICATION OVERLAY */}
                {showNotification && (

                    <div className="absolute top-4 left-4 w-[360px] h-[95%] bg-[#f4f5f8] border border-gray-300 rounded-r-[28px] shadow-md z-50 px-6 py-6 overflow-hidden">

                        {/* HEADER */}
                        <div className="flex items-center gap-4 mb-10">

                            <button
                                onClick={() => setShowNotification(false)}
                                className="text-gray-700 text-[25px] leading-none cursor-pointer"
                            >
                                ✕
                            </button>
                            <h1 className="text-[32px] font-bold">
                                Notifications
                            </h1>
                        </div>

                        {/* ITEMS */}
                        <div className="space-y-7">

                            {/* Notifications */}
                            <div className="border-b border-gray-300 pb-4 flex justify-between items-start">

                                <div>
                                    <h3 className="font-semibold text-[15px]">
                                        Notifications
                                    </h3>

                                    <p className="text-[12px] text-gray-500 mt-1">
                                        Show notifications for new messages
                                    </p>
                                </div>

                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="w-4 h-4 mt-1"
                                />
                            </div>

                            {/* Show Preview */}
                            <div className="border-b border-gray-300 pb-4 flex justify-between items-center">

                                <h3 className="font-semibold text-[15px]">
                                    Show Previews
                                </h3>

                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="w-4 h-4"
                                />
                            </div>

                            {/* Reaction */}
                            <div className="border-b border-gray-300 pb-4 flex justify-between items-center">

                                <h3 className="font-semibold text-[15px]">
                                    Show Reaction Notifications
                                </h3>

                                <input
                                    type="checkbox"
                                    className="w-4 h-4"
                                />
                            </div>

                            {/* ringtone */}
                            <div className="border-b border-gray-300 pb-4 flex justify-between items-center">

                                <h3 className="font-semibold text-[15px]">
                                    Incoming call ringtone
                                </h3>

                                <input
                                    type="checkbox"
                                    className="w-4 h-4"
                                />
                            </div>

                            {/* sounds */}
                            <div className="border-b border-gray-300 pb-4 flex justify-between items-start">

                                <div>
                                    <h3 className="font-semibold text-[15px]">
                                        Sounds
                                    </h3>

                                    <p className="text-[12px] text-gray-500 mt-1">
                                        Play sounds for incoming messages
                                    </p>
                                </div>

                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="w-4 h-4 mt-1"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* PRIVACY PAGE */}
                {showPrivacy && (

                    <div className="absolute top-2 left-4 w-[360px] h-[95%] bg-[#f4f5f8] border border-gray-300 rounded-r-[28px] shadow-md z-50 px-6 py-6 overflow-y-auto">
                        {/* HEADER */}
                        <div className="flex items-center gap-4 mb-5">

                            <button
                                onClick={() => setShowPrivacy(false)}
                                className="text-gray-700 text-[25px] leading-none cursor-pointer"
                            >
                                ✕
                            </button>

                            <h1 className="text-[32px] font-bold">
                                Privacy
                            </h1>
                        </div>

                        {/* ITEMS */}
                        <div className="space-y-7">

                            {/* Last Seen */}
                            {/* Last Seen */}
                            <div
                                onClick={() => setShowLastSeen(true)}
                                className="border-b border-gray-300 pb-4 flex justify-between items-center cursor-pointer"
                            >

                                <div>
                                    <h3 className="font-semibold text-[15px]">
                                        Last Seen
                                    </h3>

                                    <p className="text-[13px] text-gray-500 mt-1">
                                        Everyone
                                    </p>
                                </div>

                                <ChevronRight
                                    size={22}
                                    className="text-gray-500"
                                />
                            </div>

                            {/* Profile Photo */}
                            <div
                                onClick={() => setShowProfilePhoto(true)}
                                className="border-b border-gray-300 pb-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                            >

                                <div>
                                    <h3 className="font-semibold text-[15px]">
                                        Profile Photo
                                    </h3>

                                    <p className="text-[13px] text-gray-500 mt-1">
                                        {profilePhoto}
                                    </p>
                                </div>

                                <ChevronRight
                                    size={22}
                                    className="text-gray-500"
                                />
                            </div>

                            {/* About */}
                            <div
                                onClick={() => setShowAbout(true)}
                                className="border-b border-gray-300 pb-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                            >

                                <div>
                                    <h3 className="font-semibold text-[15px]">
                                        About
                                    </h3>

                                    <p className="text-[13px] text-gray-500 mt-1">
                                        {aboutPrivacy}
                                    </p>
                                </div>

                                <ChevronRight
                                    size={22}
                                    className="text-gray-500"
                                />
                            </div>

                            {/* Read Receipts */}
                            <div className="border-b border-gray-300 pb-4 flex justify-between items-start">

                                <div>
                                    <h3 className="font-semibold text-[15px]">
                                        Read receipts
                                    </h3>

                                    <p className="text-[12px] text-gray-500 mt-2 leading-5">
                                        if turned off, you won't send or receive read receipts.
                                        Read receipts are always sent for group chats.
                                    </p>
                                </div>

                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="w-4 h-4 mt-1"
                                />
                            </div>

                            {/* Groups */}
                            <div
                                onClick={() => setShowGroups(true)}
                                className="border-b border-gray-300 pb-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                            >

                                <div>
                                    <h3 className="font-semibold text-[15px]">
                                        Groups
                                    </h3>

                                    <p className="text-[13px] text-gray-500 mt-1">
                                        {groupsPrivacy}
                                    </p>
                                </div>

                                <ChevronRight
                                    size={22}
                                    className="text-gray-500"
                                />
                            </div>

                            {/* Blocked Contacts */}
                            <div
                                onClick={() => setShowBlockedContacts(true)}
                                className="pb-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                            >

                                <div>
                                    <h3 className="font-semibold text-[15px]">
                                        Blocked contacts
                                    </h3>

                                    <p className="text-[13px] text-gray-500 mt-1">
                                        9
                                    </p>
                                </div>

                                <ChevronRight
                                    size={22}
                                    className="text-gray-500"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* LAST SEEN PAGE */}
                {showLastSeen && (

                    <div className="absolute top-2 left-4 w-[360px] h-[95%] bg-[#f4f5f8] border border-gray-300 rounded-r-[28px] shadow-md z-[60] px-6 py-6">

                        {/* HEADER */}
                        <div className="flex items-center gap-4 mb-8">

                            <button
                                onClick={() => setShowLastSeen(false)}
                                className="text-gray-700 text-[25px] leading-none cursor-pointer"
                            >
                                ←
                            </button>

                            <h1 className="text-[30px] font-bold">
                                Last Seen
                            </h1>
                        </div>

                        {/* INFO */}
                        <p className="text-[#5f96f9] text-[13px] leading-5 mb-10">
                            If you don't share your Last Seen,
                            you won't be able to see other
                            people's Last Seen.
                        </p>

                        {/* EVERYONE */}
                        <div className="border-b border-gray-300 pb-5 mb-5 flex items-center gap-4">

                            <input
                                type="radio"
                                name="lastSeen"
                                defaultChecked
                                className="w-4 h-4"
                            />

                            <span className="text-[15px]">
                                Everyone
                            </span>
                        </div>

                        {/* MY CONTACTS */}
                        <div className="border-b border-gray-300 pb-5 mb-5 flex items-center gap-4">

                            <input
                                type="radio"
                                name="lastSeen"
                                className="w-4 h-4"
                            />

                            <span className="text-[15px]">
                                My Contacts
                            </span>
                        </div>

                        {/* NOBODY */}
                        <div className="flex items-center gap-4">

                            <input
                                type="radio"
                                name="lastSeen"
                                className="w-4 h-4"
                            />

                            <span className="text-[15px]">
                                Nobody
                            </span>
                        </div>

                    </div>
                )}

                {/* PROFILE PHOTO PAGE */}
                {showProfilePhoto && (
                    <div className="absolute top-0 left-0 w-[360px] ml-5 h-full bg-[#f4f5f8] border-r border-gray-300 shadow-xl z-[9999] px-6 py-6">

                        {/* HEADER */}
                        <div className="flex items-center gap-4 mb-8">

                            <button
                                onClick={() => setShowProfilePhoto(false)}
                                className="text-[28px] text-gray-700 cursor-pointer"
                            >
                                ←
                            </button>

                            <h1 className="text-[30px] font-bold">
                                Profile Photo
                            </h1>

                        </div>

                        {/* INFO */}
                        <p className="text-[#5f96f9] text-[13px] mb-10">
                            Who can see my profile photo
                        </p>

                        {/* EVERYONE */}
                        <label className="flex items-center gap-4 border-b border-gray-300 pb-6 mb-6 cursor-pointer">

                            <input
                                type="radio"
                                name="profilePhoto"
                                checked={profilePhoto === "Everyone"}
                                onChange={() => setProfilePhoto("Everyone")}
                                className="w-4 h-4"
                            />

                            <span className="text-[15px]">
                                Everyone
                            </span>

                        </label>

                        {/* MY CONTACTS */}
                        <label className="flex items-center gap-4 border-b border-gray-300 pb-6 mb-6 cursor-pointer">

                            <input
                                type="radio"
                                name="profilePhoto"
                                checked={profilePhoto === "My Contacts"}
                                onChange={() => setProfilePhoto("My Contacts")}
                                className="w-4 h-4"
                            />

                            <span className="text-[15px]">
                                My Contacts
                            </span>

                        </label>

                        {/* NOBODY */}
                        <label className="flex items-center gap-4 cursor-pointer">

                            <input
                                type="radio"
                                name="profilePhoto"
                                checked={profilePhoto === "Nobody"}
                                onChange={() => setProfilePhoto("Nobody")}
                                className="w-4 h-4"
                            />

                            <span className="text-[15px]">
                                Nobody
                            </span>

                        </label>

                    </div>
                )}

                {/* ABOUT PAGE */}
                {showAbout && (

                    <div className="absolute top-0 left-0 w-[360px] ml-5 h-full bg-[#f4f5f8] border-r border-gray-300 shadow-xl z-[9999] px-6 py-6">

                        {/* HEADER */}
                        <div className="flex items-center gap-4 mb-8">

                            <button
                                onClick={() => setShowAbout(false)}
                                className="text-[28px] text-gray-700 cursor-pointer"
                            >
                                ←
                            </button>

                            <h1 className="text-[30px] font-bold">
                                About
                            </h1>

                        </div>

                        {/* INFO */}
                        <p className="text-[#5f96f9] text-[13px] mb-10">
                            Who can see my about
                        </p>

                        {/* EVERYONE */}
                        <label className="flex items-center gap-4 border-b border-gray-300 pb-6 mb-6 cursor-pointer">

                            <input
                                type="radio"
                                name="aboutPrivacy"
                                checked={aboutPrivacy === "Everyone"}
                                onChange={() => setAboutPrivacy("Everyone")}
                            />

                            <span>Everyone</span>

                        </label>

                        {/* MY CONTACTS */}
                        <label className="flex items-center gap-4 border-b border-gray-300 pb-6 mb-6 cursor-pointer">

                            <input
                                type="radio"
                                name="aboutPrivacy"
                                checked={aboutPrivacy === "My Contacts"}
                                onChange={() => setAboutPrivacy("My Contacts")}
                            />

                            <span>My Contacts</span>

                        </label>

                        {/* NOBODY */}
                        <label className="flex items-center gap-4 cursor-pointer">

                            <input
                                type="radio"
                                name="aboutPrivacy"
                                checked={aboutPrivacy === "Nobody"}
                                onChange={() => setAboutPrivacy("Nobody")}
                            />

                            <span>Nobody</span>

                        </label>

                    </div>
                )}

                {/* GROUPS PAGE */}
                {showGroups && (

                    <div className="absolute top-0 left-0 w-[360px] ml-5 h-full bg-[#f4f5f8] border-r border-gray-300 shadow-xl z-[9999] px-6 py-6">

                        {/* HEADER */}
                        <div className="flex items-center gap-4 mb-8">

                            <button
                                onClick={() => setShowGroups(false)}
                                className="text-[28px] text-gray-700 cursor-pointer"
                            >
                                ←
                            </button>

                            <h1 className="text-[30px] font-bold">
                                Groups
                            </h1>

                        </div>

                        {/* INFO */}
                        <p className="text-[#5f96f9] text-[13px] mb-10">
                            Who can add me to groups
                        </p>

                        {/* EVERYONE */}
                        <label className="flex items-center gap-4 border-b border-gray-300 pb-6 mb-6 cursor-pointer">

                            <input
                                type="radio"
                                name="groupsPrivacy"
                                checked={groupsPrivacy === "Everyone"}
                                onChange={() => setGroupsPrivacy("Everyone")}
                            />

                            <span>Everyone</span>

                        </label>

                        {/* MY CONTACTS */}
                        <label className="flex items-center gap-4 border-b border-gray-300 pb-6 mb-6 cursor-pointer">

                            <input
                                type="radio"
                                name="groupsPrivacy"
                                checked={groupsPrivacy === "My Contacts"}
                                onChange={() => setGroupsPrivacy("My Contacts")}
                            />

                            <span>My Contacts</span>

                        </label>

                        {/* NOBODY */}
                        <label className="flex items-center gap-4 cursor-pointer">

                            <input
                                type="radio"
                                name="groupsPrivacy"
                                checked={groupsPrivacy === "Nobody"}
                                onChange={() => setGroupsPrivacy("Nobody")}
                            />

                            <span>Nobody</span>

                        </label>

                    </div>
                )}

                {/* BLOCKED CONTACTS PAGE */}
                {showBlockedContacts && (

                    <div className="absolute top-0 left-0 w-[360px] ml-5 h-full bg-[#f4f5f8] border-r border-gray-300 shadow-xl z-[9999] px-6 py-6 overflow-y-auto">

                        {/* HEADER */}
                        <div className="flex items-center gap-4 mb-8">

                            <button
                                onClick={() => setShowBlockedContacts(false)}
                                className="text-[28px] text-gray-700 cursor-pointer"
                            >
                                ←
                            </button>

                            <h1 className="text-[28px] font-bold">
                                Blocked Contacts
                            </h1>

                        </div>

                        {/* BLOCK NEW CONTACT */}
                        <div className="flex items-center justify-between pb-4 border-b border-gray-300 mb-6">

                            <p className="text-[#5f96f9] text-[14px] cursor-pointer">
                                Block New Contact
                            </p>

                            <span className="text-[28px] text-[#5f96f9] cursor-pointer">
                                +
                            </span>

                        </div>

                        {/* CONTACTS */}
                        {[
                            {
                                name: "Dinesh",
                                about: "Enjoy life to the fullest",
                                img: p1,
                            },
                            {
                                name: "Dog Hat",
                                about: "You can call me at random..",
                                img: p2,
                            },
                            {
                                name: "Cute Turtle",
                                about: "Almost there",
                                img: p3,
                            },
                            {
                                name: "Cool spirit",
                                about: "Fiddling with ideas",
                                img: p4,
                            },
                            {
                                name: "strange cat",
                                about: "Omw to discover myself",
                                img: p5,
                            },
                        ].map((user, index) => (

                            <div
                                key={index}
                                className="bg-white rounded-2xl p-4 flex items-center justify-between mb-4 shadow-sm"
                            >

                                <div className="flex items-center gap-3">

                                    <img
                                        src={user.img}
                                        alt=""
                                        className="w-12 h-12 rounded-full object-cover"
                                    />

                                    <div>

                                        <h3 className="font-semibold text-[15px]">
                                            {user.name}
                                        </h3>

                                        <p className="text-[13px] text-gray-500">
                                            {user.about}
                                        </p>

                                    </div>
                                </div>

                                <button className="text-gray-500 text-[22px]">
                                    ×
                                </button>

                            </div>
                        ))}

                    </div>
                )}

                {/* SECURITY OVERLAY */}
                {showSecurity && (

                    <div className="absolute top-4 left-4 w-[360px] h-[95%] bg-[#f4f5f8] border border-gray-300 rounded-r-[28px] shadow-md z-50 px-6 py-6 overflow-hidden">

                        {/* HEADER */}
                        <div className="flex items-center justify-between mb-10">

                            <h1 className="text-[32px] font-bold">
                                Security
                            </h1>

                            <button
                                onClick={() => setShowSecurity(false)}
                                className="text-gray-700 text-[32px] leading-none cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>

                        {/* LOCK ICON */}
                        <div className="flex justify-center mb-8">

                            <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center">

                                <Shield
                                    size={38}
                                    className="text-white"
                                />
                            </div>
                        </div>

                        {/* TEXT */}
                        <div>

                            <h2 className="text-[24px] font-semibold text-gray-700 mb-4 leading-8">
                                Your Chats and calls are private
                            </h2>

                            <p className="text-[14px] text-gray-500 leading-6 mb-10">
                                End-to-end encryption keeps your personal messages & call between you and person you choose to communicate with.
                                Not even talk can read or listen to them.
                            </p>
                        </div>

                        {/* ITEMS */}
                        <div className="space-y-7 text-gray-600">

                            <div className="flex items-center gap-4">
                                <Bell size={20} />
                                <span>Text and voice messages</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <Shield size={20} />
                                <span>Audio & Video Calls</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <Image size={20} />
                                <span>Photos, videos & documents</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <Lock size={20} />
                                <span>Location Sharing</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <HelpCircle size={20} />
                                <span>Status Updates</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* HELP OVERLAY */}
                {showHelp && (

                    <div className="absolute top-4 left-4 w-[360px] h-[95%] bg-[#f4f5f8] border border-gray-300 rounded-r-[28px] shadow-md z-50 px-6 py-6 overflow-hidden">

                        {/* HEADER */}
                        <div className="flex items-center justify-between mb-10">

                            <h1 className="text-[32px] font-bold">
                                Help
                            </h1>

                            <button
                                onClick={() => setShowHelp(false)}
                                className="text-gray-700 text-[32px] leading-none cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>

                        {/* ICON */}
                        <div className="flex justify-center mb-12">

                            <div className="w-28 h-28 rounded-full bg-blue-500 flex items-center justify-center">

                                <img
                                    src={finger}
                                    alt=""
                                    className="w-14 h-14 object-contain"
                                />
                            </div>
                        </div>

                        {/* ITEMS */}
                        <div className="space-y-8">

                            <div className="border-b border-gray-300 pb-4">
                                <h3 className="text-[18px] text-gray-700">
                                    Help Center
                                </h3>
                            </div>

                            <div className="border-b border-gray-300 pb-4">
                                <h3 className="text-[18px] text-gray-700">
                                    Contact Us
                                </h3>
                            </div>

                            <div className="border-b border-gray-300 pb-4">
                                <h3 className="text-[18px] text-gray-700">
                                    Licenses
                                </h3>
                            </div>

                            <div>
                                <h3 className="text-[18px] text-gray-700">
                                    Terms and Privacy Policy
                                </h3>
                            </div>
                        </div>
                    </div>
                )}

                {/* ACCOUNT INFO OVERLAY */}
                {showAccountInfo && (

                    <div className="absolute top-4 left-4 w-[360px] h-[95%] bg-[#f4f5f8] border border-gray-300 rounded-r-[28px] shadow-md z-50 px-6 py-6 overflow-hidden">
                        {/* HEADER */}
                        <div className="flex items-center justify-between mb-10">

                            <h1 className="text-[30px] font-bold">
                                Request Account Info
                            </h1>

                            <button
                                onClick={() => setShowAccountInfo(false)}
                                className="text-gray-700 text-[32px] leading-none cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>

                        {/* ICON */}
                        <div className="flex justify-center mb-12">

                            <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center">

                                <img
                                    src={docs}
                                    alt=""
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div>

                            <div className="border-b border-gray-300 pb-4 mb-6">

                                <h2 className="text-[20px] text-gray-700">
                                    Request Report
                                </h2>
                            </div>

                            <p className="text-[14px] text-gray-500 leading-6">
                                Create a report of your Talk Account Information and settings,
                                which you can access or port to another app.
                                This report does not include your messages.
                            </p>
                        </div>
                    </div>
                )}

                {showWallpaper && (

                    <div className="absolute top-0 left-0 w-full h-full bg-[#f4f5f8] z-50 flex">

                        {/* LEFT EMPTY SPACE */}
                        <div className="w-[2px] bg-[#eef1f6]" />

                        {/* WALLPAPER SETTINGS PANEL */}
                        <div className="w-[320px] bg-[#f4f5f8] border-r border-gray-300 px-5 py-5">

                            {/* HEADER */}
                            <div className="flex items-start justify-between mb-8">

                                <h1 className="text-[24px] font-bold leading-[42px]">
                                    Set Chat
                                    <br />
                                    Wallpaper
                                </h1>

                                <button
                                    onClick={() => setShowWallpaper(false)}
                                    className="text-gray-700 text-[20px] leading-none"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* TOGGLE */}
                            <div className="flex items-center justify-between mb-8">

                                <span className="text-[14px] text-gray-700">
                                    Enable Talk Doodle
                                </span>

                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="w-4 h-4"
                                />
                            </div>

                            {/* COLORS */}
                            <div className="grid grid-cols-3 gap-3">

                                {[
                                    "#d9d9d9",
                                    "#0b2527",
                                    "#2f6447",

                                    "#32895a",
                                    "#255978",
                                    "#c18484",

                                    "#a79c9c",
                                    "#22000a",
                                    "#496500",

                                    "#ab4f83",
                                    "#5aa487",
                                    "#cb7f50",

                                    "#b0a2cf",
                                    "#002b16",
                                    "#ca9999",

                                    "#333333",
                                    "#9c1c8f",
                                    "#59508d",

                                    "#58b88f",
                                    "#8c5a26",
                                    "#342a7c"
                                ].map((color, index) => (

                                    <div
                                        key={index}
                                        onClick={() => setSelectedColor(color)}
                                        className="w-[70px] h-[70px] rounded-md cursor-pointer border border-gray-300"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* RIGHT FULL PREVIEW */}
                        <div
                            className="flex-1 h-full flex flex-col"
                            style={{ backgroundColor: selectedColor }}
                        >

                            {/* TITLE */}
                            <div className="h-[56px] bg-white border-b border-gray-300 flex items-center justify-center font-semibold text-[18px]">
                                Wallpaper Preview
                            </div>

                            {/* FULL COLOR AREA */}
                            <div className="flex-1 w-full" />
                        </div>
                    </div>
                )}

                {showThemePopup && (

                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999]">

                        <div className="bg-white w-[340px] rounded-2xl p-6 shadow-xl">

                            <h2 className="text-[15px] font-medium mb-6">
                                Choose Theme
                            </h2>

                            <div className="space-y-5">

                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="theme"
                                        checked={theme === "Light"}
                                        onChange={() => setTheme("Light")}
                                    />
                                    <span>Light</span>
                                </label>

                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="theme"
                                        checked={theme === "Dark"}
                                        onChange={() => setTheme("Dark")}
                                    />
                                    <span>Dark</span>
                                </label>

                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="theme"
                                        checked={theme === "System Default"}
                                        onChange={() => setTheme("System Default")}
                                    />
                                    <span>System Default</span>
                                </label>

                            </div>

                            <div className="flex justify-end gap-4 mt-8">

                                <button
                                    onClick={() => setShowThemePopup(false)}
                                    className="text-blue-500"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={() => setShowThemePopup(false)}
                                    className="bg-blue-500 text-white px-6 py-2 rounded-md"
                                >
                                    Apply
                                </button>

                            </div>

                        </div>

                    </div>
                )}

            </div>

            {showKeyboard && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                    <div className="w-[560px] bg-white rounded-[24px] px-8 py-7 shadow-2xl">

                        {/* TITLE */}
                        <h2 className="text-[16px] font-semibold text-[#4a4a4a] mb-7">
                            Keyboard Shortcuts
                        </h2>

                        {/* CONTENT */}
                        <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-[12px] text-[#4a4a4a]">

                            {/* LEFT */}
                            <div className="space-y-4">

                                <div className="flex justify-between items-center">
                                    <span>Mark as unread</span>

                                    <div className="flex gap-2">
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Cmd</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Shift</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">U</kbd>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Archive chat</span>

                                    <div className="flex gap-2">
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Cmd</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Shift</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">E</kbd>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Pin chat</span>

                                    <div className="flex gap-2">
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Cmd</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Shift</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">P</kbd>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Search Chat</span>

                                    <div className="flex gap-2">
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Cmd</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Shift</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">F</kbd>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Next Chat</span>

                                    <div className="flex gap-2">
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Ctrl</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Tab</kbd>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>New Group</span>

                                    <div className="flex gap-2">
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Cmd</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Shift</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">N</kbd>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Increase voice speed</span>

                                    <div className="flex gap-2">
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Shift</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">.</kbd>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Settings</span>

                                    <div className="flex gap-2">
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Shift</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">,</kbd>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Settings</span>

                                    <div className="flex gap-2">
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Cmd</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">G</kbd>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="space-y-4">

                                <div className="flex justify-between items-center">
                                    <span>Mute</span>

                                    <div className="flex gap-2">
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Cmd</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Shift</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">M</kbd>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Delete chat</span>

                                    <div className="flex gap-2">
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Cmd</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Shift</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">D</kbd>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Search</span>

                                    <div className="flex gap-2">
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Cmd</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">F</kbd>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>New Chat</span>

                                    <div className="flex gap-2">
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Cmd</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">N</kbd>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Previous Chat</span>

                                    <div className="flex gap-2">
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Ctrl</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Shift</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Tab</kbd>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Profile & About</span>

                                    <div className="flex gap-2">
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Cmd</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">P</kbd>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Decrease voice speed</span>

                                    <div className="flex gap-2">
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Shift</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">,</kbd>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Emoji Panel</span>

                                    <div className="flex gap-2">
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Cmd</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">E</kbd>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Sticker Panel</span>

                                    <div className="flex gap-2">
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">Cmd</kbd>
                                        <kbd className="border border-gray-300 rounded-md px-3 py-[2px] bg-[#fafafa]">S</kbd>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BUTTON */}
                        <div className="flex justify-end mt-7">
                            <button
                                onClick={() => setShowKeyboard(false)}
                                className="bg-[#3b73ff] text-white px-6 py-2 text-[12px] rounded-lg shadow-lg"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>

    );
};

export default SettingsPage;