"use client";
import React, { useEffect, useContext, useState } from "react";
import BaseContext from "../contexts/BaseContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../globals.css";
import base64 from "@hexagon/base64";
import "./login.css";

// import { forgotPassword, authenticateUser } from "../user";

const Page = () => {
  const { user, setUser } = useContext(BaseContext);
  const [passHidden, setPassHidden] = useState("hidden");

  const router = useRouter();

  function forgotPassword() {
    console.log("Forgot password link clicked.");
  }

  async function authenticateUser(username, password) {
    setPassHidden("hidden");
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (!data.error) {
      let str = base64.fromString(`ssh ${data.username}@52.12.13.87 -p 2222`);
      console.log(data.username);
      setUser(str);
      router.push("/dashboard");
    } else {
      setPassHidden("");
    }
  }

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
          <h2 className="evilcorp-font">Login</h2>
          <div className="form">
            <label className="inputBox" htmlFor="username">
              <input type="text" id="username" name="username" required />{" "}
              <i>Username</i>
            </label>

            <label className="inputBox" htmlFor="password">
              <input type="password" id="password" name="password" required />{" "}
              <i>Password</i>
              <div className={`text-red-500 m-1 ${passHidden}`}>
                please enter correct password!
              </div>
            </label>
            <label className="links">
              <Link href="/forgot" onClick={forgotPassword}>
                Forgot password?
              </Link>
              <Link href="/signup">Signup</Link>
            </label>
            <div className="inputBox">
              <input
                className="capitalize"
                id="login"
                name="login"
                type="submit"
                value="login"
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Page;
