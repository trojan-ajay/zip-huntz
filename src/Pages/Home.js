import React, { useEffect, useState } from "react";
import Default from "../Components/Default";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

function Home() {
  const[user,setUser]=useState('')
  useEffect(() => {
    $("input").focus()
    $(".refresh").click(()=>{
      window.location.reload()
    })
    $("#aj").dialog({
      title: "Help",
      modal: true,
      autoOpen: false,
    });
    $(".help").click(() => {
      $("#aj").dialog("open");
    });
  }, []);
  return (
    <Default>
      <div className="container-fluid mt-2 cg " align="center">
        <div className="row">
          <div className="col-sm-4 offset-4">
            <div className="container-fluid home mb-5 mt-5 d-flex justify-content-center align-items-center">
              <div className="container-fluid p-3 mt-2">
                <div class="row">
                  <div className="col-sm hg p-2 mb-1 ">ZIP-HUNTZ</div>
                </div>
                <div className="row spacex ">
                  <div className="col-sm d-flex justify-content-end">- Enter the pin the Hunt place</div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    <input type="text" placeholder="Enter zip here" value={} />
                  </div>
                </div>
                <div class="row">
                  <div className="space"></div>
                </div>
                <div class="row" align="center">
                  <div class="col-sm">
                    <button className="search">click</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="aj">hello</div>
      </div>
    </Default>
  );
}

export default Home;
