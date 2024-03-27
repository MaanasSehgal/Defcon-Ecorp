import { Box } from "@mui/material";
import React from "react";
import "./vault.css";

const page = () => {
  return (
    <div className="border-2 border-custom-green flex flex-col gap-12 p-8 main">
      <div className="text-[7rem] evilcorp-font text-custom-green mb-4 text-center ">
        Evilcorp's Vault
      </div>

      <form method="POST" action="">
        <div className="flex flex-row justify-center items-center border-2 border-dotted  border-custom-green">
          <input
            type="password"
            name="phrase"
            placeholder="enter the phrase"
            className="bg-transparent outline-none w-fit text-white caret-custom-green"
          />
          <button
            type="submit"
            value="Submit"
            className=" text-custom-green text-2xl font-bold  rounded-md cursor-pointer"
          >
            →
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
