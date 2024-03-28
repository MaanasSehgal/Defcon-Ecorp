"use client";
import React, { useEffect } from "react";
import "./vault.css";
import { phrase } from "../constants";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";
import { checkPhrase } from "../actions/checkPhrase";
import { useRouter } from "next/navigation";

const page = () => {
  const [state, formAction] = useFormState(checkPhrase, {});

  const router = useRouter();

  useEffect(() => {
    if (state.success && !state.error) {
      //TODO: Change router
      redirect("/dashboard");
    }
  }, [state.success, router]);

  return (
    <div className="border-2 border-custom-green flex flex-col gap-12 p-8 main">
      <div className="text-[7rem] evilcorp-font text-custom-green mb-4 text-center ">
        Evilcorp's Vault
      </div>

      <form action={formAction}>
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
        {state.error && (
          <p className="text-red-500 font-mono w-full text-center mt-2 font-bold">
            Invalid Phrase!
          </p>
        )}
      </form>
    </div>
  );
};

export default page;
