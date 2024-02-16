import React from 'react'
import '../card/Card.css'
const Card = () => {
    return (
        <>
            <div className="cardMain">
                <div className="cardItemList">
                    <div className="cardItem a">
                        <img src="https://i03.appmifile.com/364_operator_in/04/01/2024/64660f723a5f433d2b2b05fadbfe4384.jpg?thumb=1&w=1260&f=webp&q=85" alt="" />
                        <div className="cardCaption">
                            <p>Offers on Smart TVs
                                Up to 60% Off</p>
                                <a href="">Shop Now</a>
                        </div>
                    </div>
                    <div className="cardItem b">
                        <img src="https://i03.appmifile.com/752_operator_in/16/02/2023/9ba4de496b2585d836d867ae79b6d8f0.jpg?thumb=1&w=480&f=webp&q=85" alt="" />
                        <div className="cardCaption">
                            <p>Laptops & Tablets</p>
                                <a href="">Shop Now</a>
                        </div>
                    </div>
                    <div className="cardItem c">
                        <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1598954011.16786635.png?thumb=1&w=500&f=webp&q=85" alt="" />
                        <div className="cardCaption" style={{color:'black'}} >
                            <p >Redmi Earphone</p>
                                <a href="" style={{color:'black'}}>Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card