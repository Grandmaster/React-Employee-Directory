import React from "react";

function Row(props) {
  return (
    <div className="row">
      <div className="col">{props.data.name}</div>
      <div className="col">{props.data.email}</div>
      <div className="col">{props.data.cell}</div>
      <div className="col">{props.data.title}</div>
    </div>
  );
}

export default Row;
