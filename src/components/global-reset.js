import React from "react";
import { Global, css } from "@emotion/core";

const GlobalReset = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          scroll-behavior: smooth;
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
          width: 100%;
          overflow-x: hidden;
        }
      `}
    />
    {children}
  </>
);

export default GlobalReset;
