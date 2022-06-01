import React, { useEffect, useState } from "react";
import Default from "../Components/Default";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

function Home() {
  const [warnings, setWarnings] = useState("");
  const [user, setUser] = useState("");
  const[data,setData]=useState('')
  const [state, setState] = useState("");
  const[name,setName]=useState("")
  const [block,setBlock]=useState("")
  const [state2, setState2] = useState("");
  const[name2,setName2]=useState("")
  const [block2,setBlock2]=useState("")
  const[message,setMessage]=useState("")
  useEffect(() => {
    $("input").focus();
    $(".refresh").click(() => {
      window.location.reload();
    });
    $("#aj").dialog({
      title: "Help",
      modal: true,
      autoOpen: false,
      resizable:false,
      draggable:false,
    })
    $("#data,#invalid,#feedback").dialog({
      title: "Result",
      modal: true,
      autoOpen: false,
      resizable:false,
      draggable:false,
    });
    $(".help").click(() => {
      $("#aj").dialog("open");
    });
    $(".contact").click(()=>{
      $("#feedback").dialog("open")
    })
  }, []);
  const handler = (e) => {
    setUser(e.target.value);
  };
  const validate = () => {
    if ($("input").val()) {
      var zip = $("input").val();
      var regx = /^[6]{1}[0-9]{5}$/;
      if (regx.test(zip)) {
        $("input").addClass("right");
        setWarnings("");
      } else {
        $("input").removeClass("right");
        $("input").addClass("wrong");
        if (zip.length < 6) {
          $("small").addClass("smallwrong");
          setWarnings("pin too short");
        } else {
          if (zip.length == 6) {
            $("small").addClass("smallwrong");
            setWarnings("invalid pin");
          } else {
            $("small").addClass("smallwrong");
            setWarnings("pin is large");
          }
        }
      }
    } else {
      $("input").removeClass("wrong");
      $("small").removeClass("smallwrong");
      setWarnings("");
    }
  };
  const clickHandler = () => {
    if (warnings) {
      alert(warnings);
    } else {
      if (user == 600113) {
        fetch("https://api.postalpincode.in/pincode/600113")
          .then((response) => response.json())
          .then((data) =>setData(data));
          setMessage(data[0].Message)
          setBlock(data[0].PostOffice[0].Block)
          setBlock2(data[0].PostOffice[1].Block)
          setName(data[0].PostOffice[0].Name)
          setName2(data[0].PostOffice[1].Name)
          setState(data[0].PostOffice[0].State)
          setState2(data[0].PostOffice[1].State)
        $("#data").dialog("open")
      }
      else{
        $("#invalid").dialog("open")
      }
    }
  };
  return (
    <Default>
      <div className="container-fluid mt-2 cg " align="center">
        <div className="row">
          <div className="col-sm-4 offset-4">
            <div className="container-fluid home mb-5 mt-5 d-flex justify-content-center align-items-center">
              <div className="container-fluid p-3 mt-2">
                <div className="row">
                  <div className="col-sm hg p-2 mb-1 ">ZIP-HUNTZ</div>
                </div>
                <div className="row spacex ">
                  <div className="col-sm d-flex justify-content-end">
                    - Enter the pin then Hunt the place
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <input
                      type="number"
                      className="col-sm"
                      placeholder="Enter zip here"
                      id={user}
                      onChange={(e) => {
                        handler(e);
                        validate();
                      }}
                    />
                    <br></br>
                    <small className="col-sm offset-8 mt-3 ">{warnings}</small>
                  </div>
                </div>
                <div className="row">
                  <div className="space"></div>
                </div>
                <div className="row" align="center">
                  <div className="col-sm">
                    <button className="search" onClick={clickHandler}>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="aj">Enter the valid pincode and hit the search button to get the corresponding (Name,Block,State)</div>
        <div id="data">
          <p>{message}</p><hr/>
          <p>Name : {name}</p>
          <p>Block : {block}</p>
          <p>State : {state}</p><hr/>
          <p>Name : {name2}</p>
          <p>Block : {block2}</p>
          <p>State : {state2}</p>
        </div>
        <div id="invalid">
          pincode not found
        </div>
        <div id="feedback">For any feedback contact us on :
        <p>trojanajay4309@gmail.com</p></div>
      </div>
    </Default>
  );
}

export default Home;
