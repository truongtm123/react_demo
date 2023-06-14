import { useState } from "react";
import "./Square.css";

export default function Square({ object }) {
  const [value, setValue] = useState("0");
//   var titleTemp = title;
//   const [titleState, setTitle] = useState(titleTemp);

//   function triggerSquareClick() {
//     setValue("X");
//     setTitle(titleTemp+"a");
//   }

  return (
    <button
      className="square"
    //   data-test={titleState}
    //   onClick={triggerSquareClick}
      
    >
      <span className={value === "X" ? "show" : "hidden"}>{value}</span>
    </button>
  );
}
