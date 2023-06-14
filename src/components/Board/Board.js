import Square from "../Square/Square";
import { useEffect, useState } from "react";
import "./Board.css";
function isValueIsX(value) {}

function createArrayTick() {
  const tickArray = [];
  const verticalNum = 3;
  const horizalNum = 3;
  var index = 0;
  for (var i = 0; i <= verticalNum - 1; i++) {
    index = horizalNum * i;
    for (var j = 0; j <= horizalNum - 1; j++) {
      tickArray.push({ Value: "0", IsClicked: false, Index: index + j });
    }
  }
  return tickArray;
}

export default function Board() {
  var temp = createArrayTick();
  const [arrayTick, setArrayTick] = useState(temp);
  let resultList = [];
  arrayTick.forEach((tick, index) => {
    resultList.push(
      <div className="board-row">
        <Square object={tick} key={index} />
      </div>
    );
  });

  return (
    // <>
    //   <div className="board-row">
    //     <Square title="1" />
    //     <Square title="2" />
    //     <Square title="3" />
    //   </div>
    //   <div className="board-row">
    //     <Square title="4" />
    //     <Square title="5" />
    //     <Square title="6" />
    //   </div>
    //   <div className="board-row">
    //     <Square title="7" />
    //     <Square title="8" />
    //     <Square title="9" />
    //   </div>
    // </>
    <div>{resultList}</div>
  );
}
