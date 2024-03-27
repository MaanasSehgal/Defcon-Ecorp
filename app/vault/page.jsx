import {Box} from "@mui/material";
import React from "react";
import "./vault.css";

const page = () => {
    return (
        <>
            <div className="text-[7rem] evilcorp-font text-custom-green mb-4 absolute text-center top-3 ">Evilcorp's Vault</div>

            <form method="POST" action="">
                <div className="flex flex-row justify-center items-center">
                    <input type="password" name="phrase" placeholder="Enter the phrase" className="bg-transparent outline-none border border-b-custom-green  border-transparent text-white caret-custom-green" />
                <button type="submit" value="Submit" className=" text-custom-green text-2xl font-bold p-2 rounded-md mt-4 cursor-pointer">
                    →
                </button>
                </div>
            </form>
        </>
    );
};

export default page;
