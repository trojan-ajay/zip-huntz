import React, { useEffect } from 'react'
import Default from '../Components/Default'
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'

function Home() {
  useEffect(()=>{
  $('.form__input').focus(function(){
    $(this).attr('placeholder',' ');
    $(".form__label").css('visibility','visible');
  });
  $('.form__input').focusout(function(){
    $(this).attr('placeholder','zip-code');
    $(".form__label").css('visibility','hidden'); 
  }); 
  $(".help").click(()=>{
    $('#aj').css("visibility","visible")
    $("#aj").dialog({
      title:"Help",
      modal:true,
    })
  })
},[])
  function handler(e){
    e.preventDefault()
  }
  return (
    <Default>
      <div className='home'>
          <div className='form' >
            <div className='bgform'>             
              <form>
                <input type="text" className="form__input" id="name" required="" placeholder='zip-code'/>
                <label id="name" className="form__label tog">zip-code</label>
                <button className="button-17" type='submit' onClick={handler}>Search</button>
              </form>
            </div> 
          </div> 
      </div>
      <div id='aj'>ajay</div>
   </Default>
  )
}

export default Home