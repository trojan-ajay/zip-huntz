import React from 'react'
import Default from '../Components/Default'

function Home() {
  return (
    <Default>
      <div className='home'>
            <div className='form' >
              <form>
              <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
              <label for="name" class="form__label">Enter the zip here</label><br></br>
              <button class="button-17" type='submit'>Search</button>
              </form>
            </div>  
      </div>
   </Default>
  )
}

export default Home