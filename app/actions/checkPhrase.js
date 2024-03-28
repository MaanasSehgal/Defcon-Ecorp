"use server";

import { phrase } from "../constants";

const { redirect } = require("next/navigation");

export const checkPhrase = async (state, data) => {
  try {
    const resPhrase = data.get("phrase");
    if (resPhrase && resPhrase === phrase) return { success: true };
    else throw new Error("Invalid phrase");
  } catch (err) {
    return { error: err.message, success: false };
  }
};
