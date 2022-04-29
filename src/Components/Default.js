import React from "react";

function Default(props) {
  return (
    <div>
    <div class="container-fluid">
      <div class="row p-2 bg">
        <div class="col-sm-4 logo" align="left">
          ZIP-HUNTZ
        </div>
        <div class="col-sm-2 b" align="left">
          <button className="button">Home</button>
        </div>
        <div class="col-sm-3 b" align="left">
          <button className="button">Help</button>
        </div>
        <div class="col-sm-3 b" align="left">
          <button className="button">contact-us</button>
        </div>
      </div>
    </div>
    <div className="content">{props.children}</div>
    </div>
  );
}

export default Default;
