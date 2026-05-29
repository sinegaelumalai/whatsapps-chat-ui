import { useState } from "react";
import boy from "../assets/boy.png";
import bgimg from "../assets/bgimg.png";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {

    const navigate = useNavigate();

    // STATES
    const [name, setName] = useState("Shreyansh shah");

    const [about, setAbout] = useState(
        "Hey there, I am learning from coding monk"
    );

    // ERROR STATES
    const [nameError, setNameError] = useState("");
    const [aboutError, setAboutError] = useState("");

    // SAVE FUNCTION
    const handleSave = () => {

        let valid = true;

        // NAME VALIDATION
        if (name.trim() === "") {

            setNameError("Name is required");
            valid = false;

        } else {

            setNameError("");
        }

        // ABOUT VALIDATION
        if (about.trim() === "") {

            setAboutError("About is required");
            valid = false;

        } else {

            setAboutError("");
        }

        // STOP IF INVALID
        if (!valid) return;

        // SUCCESS
        alert("Profile Updated Successfully");

        navigate("/chats/1");
    };

    return (

        <div className="flex flex-1 min-w-0 h-screen overflow-hidden">

            {/* LEFT PANEL */}
            <div className="w-[360px] min-w-[360px] shrink-0 bg-[#f2f3f5] border-r border-gray-300 px-8 py-6">

                {/* HEADER */}
                <div className="flex items-center gap-3 mb-8">

                    <ArrowLeft
                        size={24}
                        className="cursor-pointer"
                        onClick={() => navigate("/chats/1")}
                    />

                    <h1 className="text-3xl font-bold">
                        Profile
                    </h1>
                </div>

                {/* PROFILE IMAGE */}
                <div className="flex justify-center mb-8">

                    <img
                        src={boy}
                        alt="profile"
                        className="w-30 h-30 rounded-full object-cover"
                    />
                </div>

                {/* NAME */}
                <div className="mb-5">

                    <label className="text-sm text-blue-400">
                        Name
                    </label>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full mt-1 px-4 py-3 rounded-md bg-transparent outline-none border

                            ${nameError
                                ? "border-red-500"
                                : "border-blue-400"
                            }
                        `}
                    />

                    {/* ERROR MESSAGE */}
                    {nameError ? (

                        <p className="text-red-500 text-xs mt-2">
                            {nameError}
                        </p>

                    ) : (

                        <p className="text-xs text-gray-400 mt-2">
                            This name is visible to your contacts
                        </p>
                    )}
                </div>

                {/* ABOUT */}
                <div className="mb-6">

                    <label className="text-sm text-gray-400">
                        About
                    </label>

                    <textarea
                        rows="4"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        className={`w-full mt-1 p-4 rounded-md resize-none bg-transparent outline-none border

                            ${aboutError
                                ? "border-red-500"
                                : "border-gray-300"
                            }
                        `}
                    />

                    {/* ERROR MESSAGE */}
                    {aboutError && (

                        <p className="text-red-500 text-xs mt-2">
                            {aboutError}
                        </p>
                    )}
                </div>

                {/* SAVE BUTTON */}
                <button
                    onClick={handleSave}
                    className="w-full border border-blue-400 text-blue-500 py-3 rounded-md hover:bg-blue-500 hover:text-white duration-200"
                >
                    Save
                </button>
            </div>

            {/* RIGHT PANEL */}
            <div className="flex-1 min-w-0 bg-[#f7f7f7] relative flex flex-col items-center justify-center overflow-hidden">

                <img
                    src={bgimg}
                    alt="bg"
                    className="w-[210px] h-[210px] object-contain"
                />

                <p className="mt-8 text-sm text-black text-center px-4">

                    Select a conversation or start a

                    <span className="text-blue-500 ml-1">
                        new one
                    </span>
                </p>

                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-blue-500"></div>
            </div>
        </div>
    );
};

export default ProfilePage;