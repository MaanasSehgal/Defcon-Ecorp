"use client";

import users from "./constants/index.js";

export function forgotPassword() {
  console.log("Forgot password link clicked.");
}

export function authenticateUser(username, password) {
  const router = useRouter();
  const foundUser = users.find((user) => user.username === username);
  if (foundUser && foundUser.password === password) {
    alert("success");
    //window.location.href = "dashboard.html"; //ADD DASHBOARD PAGE
  } else {
    // window.location.href = "stall.html"
    alert("Get good..");
  }
}
