import React from 'react'
import Default from '../Components/Default'
import $ from 'jquery'

function Home() {
  return (
    <Default>
      <div className='home'>
            <div className='form' >
              <form>
              <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
              <label id="name" className="form__label">Enter the zip code</label><br></br>
              <button className="button-17" type='submit'>Search</button>
              </form>
            </div>  
      </div>
   </Default>
  )
}

export default Home