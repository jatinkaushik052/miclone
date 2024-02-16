import React from 'react'
import '../topBar/TopBar.css'

const Topbar = () => {
    return (
        <>
            <div className="main">

                <div className="topLeft">
                    <div className="logo">
                        <img src="images/logo.png" alt="" />
                    </div>
                    <div className="leftLinks">
                        <ul className='leftUl'>
                            <li><a href="">Store</a></li>
                            <li><a href="">Phone</a></li>
                            <li><a href="">TV & Smart Home</a></li>
                            <li><a href="">Tablet</a></li>
                            <li><a href="">LifeStyle</a></li>
                        </ul>
                    </div>
                </div>

                <div className="topRight">
                    <div className="topRL">
                        <ul>
                            <li><a href="">Discover</a></li>
                            <li><a href="">Support</a></li>
                        </ul>
                    </div>
                    <div className="topRR">
                        <span className="topRSearch"><i class='bx bx-search'></i></span>
                        <span className="topRCart"><i class='bx bx-cart'></i></span>
                        <span className="topRUser"><i class='bx bx-user'></i></span>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Topbar