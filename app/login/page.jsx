"use client";
import React, { useEffect } from "react";
import {authenticateUser,forgotPassword} from "@/app/user.js";
import Link from "next/link";
const page = () => {
  useEffect(() => {
    const init = () => {
      const row = document.querySelector("section");
      let column = "";

      for (let i = 0; i < 500; i++) {
        column += `<span class="box">${getInt()}</span>\n`;
      }
      row.insertAdjacentHTML("afterbegin", column);
      randomAnimationDelay();
    };

    const randomAnimationDelay = () => {
      const boxes = document.querySelectorAll(".box");
      for (let i = 0; i < boxes.length; i++) {
        const randomDuration = Math.floor(Math.random() * 5);
        boxes[i].style.animationDelay = `${randomDuration}s`;
        boxes[i].style.animationPlayState = "running";
      }
    };

    const getInt = () => (Math.random() > 0.5 ? 1 : 0);

    init();
    const intervalId = setInterval(randomAnimationDelay, 4000);

    window.addEventListener("resize", randomAnimationDelay);

    return () => {
      window.removeEventListener("resize", randomAnimationDelay);
      clearInterval(intervalId);
    };
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    console.log(`Logging in: ${username} and ${password}`);

    authenticateUser(username, password);
  };
  return (
    <section>
      <form id="loginForm" className="signin" onSubmit={handleSubmit}>
        <div className="content">
          <h2>Login</h2>
          <div className="form">
            <label className="inputBox" htmlFor="username">
              <input type="text" id="username" name="username" required />{" "}
              <i>Username</i>
            </label>

            <label className="inputBox" htmlFor="password">
              <input type="password" id="password" name="password" required />{" "}
              <i>Password</i>
            </label>
            <label className="links"><Link href="/forgot" onClick={forgotPassword}>Forgot password?</Link> <Link href="/signup">Signup</Link> </label>
            <div className="inputBox">
              <input type="submit" />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default page;
