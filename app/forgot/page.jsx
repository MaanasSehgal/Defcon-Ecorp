"use client"
import React, { useEffect } from "react";
import Link from "next/link";
const Page = () => {
  useEffect(() => {
    const init = () => {
      const row = document.querySelector('section');
      let column = '';

      for (let i = 0; i < 500; i++) {
        column += `<span class="box">${getInt()}</span>\n`; 
      }
      row.insertAdjacentHTML('afterbegin', column);
      randomAnimationDelay(); 
    }

    const randomAnimationDelay = () => {
      const boxes = document.querySelectorAll('.box');
      for (let i = 0; i < boxes.length; i++) {
        const randomDuration = Math.floor(Math.random() * 5);
        boxes[i].style.animationDelay = `${randomDuration}s`;
        boxes[i].style.animationPlayState = 'running';
      }
    }

    const getInt = () => Math.random() > 0.5 ? 1 : 0;

    init(); 
    const intervalId = setInterval(randomAnimationDelay, 4000);

    window.addEventListener('resize', randomAnimationDelay);

    
    return () => {
      window.removeEventListener('resize', randomAnimationDelay);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section>
      <div id="form" className="signin">
        <div className="content">
          <h2>Forgot Password?</h2>
          <p className="forgot-text">
            Your password is attending a top-secret meeting with other forgotten
            passwords. It'll be back... maybe..
          </p>
          <Link className="back-to-login" href="/login">
            Back to Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
