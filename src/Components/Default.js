import React from 'react';


function Default(props) {

  return (
    <div>
        <header className="header">
				<div className="row">
					<div className="col">
							<div className="header_content_inner d-flex flex-row align-items-end justify-content-start">
								<div className="logo">ZIP-HUNTZ</div>
								<nav className="main_nav">
									<ul className="d-flex flex-row align-items-start justify-content-start">
										<li className="active"><button className='help'>Home</button></li>
										<li><button className='help'>Help</button></li>
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