import React from 'react'
import '../carousel/Carousel.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const Carousel = () => {

  return (
    <>

      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active itemCap" data-bs-interval="10000">
            <img src="https://i03.appmifile.com/376_operator_in/15/02/2024/652719597143b3ddecef503ee949161c.jpg?thumb=1&w=2560&f=webp&q=85" class="d-block w-100 myImg" alt="..." />
            <div className="captionItem">
              <h3>Redmi Buds 5</h3>
              <p>#SuperBuds</p>
              <button type="button" class="btn btn-dark">Learn More</button>
            </div>
          </div>
          <div class="carousel-item itemCap" data-bs-interval="2000">
            <img src="https://i03.appmifile.com/978_operator_in/15/02/2024/88e9963f0d085e1a3d9d5773a1b74a98.jpg?thumb=1&w=2560&f=webp&q=85" class="d-block w-100 myImg" alt="..." />
            <div className="captionItem">
              <h3>Redmi Note 13 Pro 5G</h3>
              <p>200MP Ultra-High Res Camera</p>
              <p>From ₹23,499*</p>
              <button type="button" class="btn btn-dark">Buy Now</button>
            </div>
          </div>
          <div class="carousel-item itemCap">
            <img src="https://i03.appmifile.com/729_operator_in/14/02/2024/138d8ada042934edc537ea6abf2de21d.jpg?thumb=1&w=2560&f=webp&q=85" class="d-block w-100 myImg" alt="..." />
            <div className="captionItem">
              <h3>Redmi A3</h3>
              <p>Smooth & Stylish</p>
              <button type="button" class="btn btn-dark">Sales Start on Today</button>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel