import React from "react";

const Board = (props) => {
  const drop = (e) => {
    e.preventDefault();

    // key of the card to be fetched is passed
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);

    e.target.append(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
};

export default Board;
