import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Todo = ({ task }) => {
  console.log(112);
  return (
    <div className="Todo">
      <p>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};
