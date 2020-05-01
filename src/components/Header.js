import React from "react";

function Header(props) {
  return (
    <div className="row">
      <div className="col">
        Name
        <button
          onClick={() => {
            props.sort("ascending");
          }}
        >
          <i className="fa fa-sort-asc" aria-hidden="true"></i>
        </button>
        <button
          onClick={() => {
            props.sort("descending");
          }}
        >
          <i className="fa fa-sort-desc" aria-hidden="true"></i>
        </button>
      </div>
      <div className="col">E-mail</div>
      <div className="col">Phone Number</div>
      <div className="col">Role</div>
    </div>
  );
}

export default Header;
