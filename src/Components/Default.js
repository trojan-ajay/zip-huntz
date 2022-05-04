import React from "react";

function Default(props) {
  return (
    <div>
    <div className="container-fluid">
      <div className="row p-2 bg">
        <div className="col-sm-4 logo" align="left">
          ZIP-HUNTZ
        </div>
        <div className="col-sm-2 b" align="left">
          <button className="refresh">Home</button>
        </div>
        <div className="col-sm-3 b" align="left">
          <button className="help">Help</button>
        </div>
        <div className="col-sm-3 b" align="left">
          <button className="contact">contact-us</button>
        </div>
      </div>
    </div>
    <div className="content">{props.children}</div>
    </div>
  );
}

export default Default;
