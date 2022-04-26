import React from 'react'

function Default(props) {
  return (
    <div>
        <header class="header">
				<div class="row">
					<div class="col">
							<div class="header_content_inner d-flex flex-row align-items-end justify-content-start">
								<div class="logo">ZIP-HUNTZ</div>
								<nav class="main_nav">
									<ul class="d-flex flex-row align-items-start justify-content-start">
										<li class="active"><a href="index.html">Home</a></li>
										<li><a href="about.html">About us</a></li>
										<li>Contact us : +91-9876543210</li>
									</ul>
								</nav>
                            </div>
                    </div>
                </div>
            </header>
        <div className='content'>
            {props.children}
        </div>
    </div>
  )
}

export default Default