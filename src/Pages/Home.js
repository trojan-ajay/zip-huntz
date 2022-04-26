import React from 'react'
import {Link} from 'react-router-dom'
import Default from '../Components/Default'

function Home() {
  return (
    <Default>
        <div className='form' >
            <form action='next'>
              <input type="text" class="form__input" placeholder="Enter zipcode " name='zip'/>
              <label for="" class="form__label">ZIP-CODE</label>
              <input type="submit"/>
            </form>
            <div className='answer'> 
              <h1>HELLO</h1>
            </div>
        </div>
    </Default>
  )
}

export default Home