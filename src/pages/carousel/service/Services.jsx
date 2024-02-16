import React from 'react'
import '../service/Services.css'
const Services = () => {
  return (
    <div className="serviceMain">
        <div className="serviceContainer1">
            <div className="serviceItem">
                <h2>XIAOMI CARE</h2>
                <div className="serviceProvide">
                    <div className="service1">
                        <img src="images/service1.png" alt="" />
                        <p>MI Extended Warranty <i class='bx bx-chevron-right'></i></p>
                    </div>
                    <div className="service1">
                        <img src="images/service2.png" alt="" />
                        <p>MI Extended Warranty <i class='bx bx-chevron-right'></i></p>
                    </div>
                    <div className="service1">
                        <img src="images/service3.png" alt="" />
                        <p>MI Extended Warranty <i class='bx bx-chevron-right'></i></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="serviceContainer2">
            <div className="serviceItem-b">
                <h2>Service Centres</h2>
                <p>We'll guide you to the best Solution <i class='bx bx-chevron-right'></i></p>
            </div>

            <div className="serviceItem-c">
                <h2>Mi Exchange</h2>
                <p>Renewed For Smoother Experience and Better value for Exchange <i class='bx bx-chevron-right'></i></p>
            </div>
        </div>
    </div>
  )
}

export default Services