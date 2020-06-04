/** @jsx jsx */
import { jsx } from "theme-ui";

const RedBox = ({ children, width, height, row, column, className }) => (
  <div
    sx={{
      backgroundColor: "accent",
      width,
      height,
      display: "flex",
      justifyContent: "center",
      padding: "2em",
      fontFamily: "Jost",
      gridColumn: column,
      gridRow: row,
    }}
    className={className}
  >
    {children}
  </div>
);

export default RedBox;
