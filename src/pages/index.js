/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import GlobalReset from "../components/global-reset";
import gsap from "gsap";

import RedBox from "./../components/red-box";

const tl = gsap.timeline();

export default () => {
  React.useEffect(() => {
    tl.from(".red-1", {
      x: 500,
      ease: "back",
      opacity: 0,
      duration: 1.5,
      delay: 1,
    })
      .from(".red-2", {
        y: -500,
        ease: "back",
        opacity: 0,
        duration: 1.5,
        delay: 1,
      })
      .from(".red-3", {
        x: -500,
        ease: "back",
        opacity: 0,
        duration: 1.5,
        delay: 1,
      })
      .from(".red-4", {
        y: 500,
        ease: "back",
        opacity: 0,
        duration: 1.5,
        delay: 1,
      });
  }, []);

  return (
    <GlobalReset>
      <main>
        <section
          sx={{
            background: "secondary",
            height: "100vh",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "repeat(12, 1fr)",
          }}
          className="sec-1"
        >
          <RedBox
            className="red-1"
            width="250px"
            height="350px"
            column="12"
            row="3"
          >
            This is a red box 1
          </RedBox>
          <RedBox
            className="red-2"
            width="250px"
            height="700px"
            column="4"
            row="1 / 7"
          >
            This is a red box 2
          </RedBox>
          <RedBox
            className="red-3"
            width="250px"
            height="200px"
            column="1"
            row="4"
          >
            This is a red box 3
          </RedBox>
          <RedBox
            className="red-4"
            width="450px"
            height="350px"
            column="7"
            row="4 / 5"
          >
            This is a red box 4
          </RedBox>
        </section>
        <section
          className="sec-2"
          sx={{
            backgroundColor: "accent",
            height: "100vh",
          }}
        ></section>
      </main>
    </GlobalReset>
  );
};
