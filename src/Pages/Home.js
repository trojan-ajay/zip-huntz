import React, { useEffect, useState } from "react";
import Default from "../Components/Default";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

function Home() {
  const[warnings,setWarnings]=useState('');
  const[user,setUser]=useState("");
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
  const handler=(e)=>{
    setUser(e.target.value)
  }
  const validate=()=>{
    if($("input").val()){
      var zip=$("input").val();
      var regx=/^[1-9]{1}[0-9]{5}$/
      if(regx.test(zip)){
        $("input").addClass("right")
        setWarnings("")
      }
      else{
        $("input").removeClass("right")
        $("input").addClass("wrong")
        if(zip.length<6){
          $("small").addClass("smallwrong")
          setWarnings("pin too short")
        }
        else{
          if(zip.length==6){
            $("small").addClass("smallwrong")
            setWarnings("invalid pin")
          }
          else{
            $("small").addClass("smallwrong")
          setWarnings("pin is large")
        }
        }
      }
    }
    else{
      $("input").removeClass("wrong")
      $("small").removeClass("smallwrong")
      setWarnings("")
    }
  }
  const clickHandler=()=>{
    if(warnings){
      alert(warnings)
    }
  }
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
                  <div className="col-sm d-flex justify-content-end">- Enter the pin then Hunt the place</div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    <input type="number" className="col-sm" placeholder="Enter zip here" id={user} onChange={(e)=>{handler(e);validate()}}/><br></br>
                    <small className="col-sm offset-8 mt-3 ">{warnings}</small>
                  </div>
                </div>
                <div class="row">
                  <div className="space"></div>
                </div>
                <div class="row" align="center">
                  <div class="col-sm">
                    <button className="search" onClick={clickHandler}>click</button>
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
