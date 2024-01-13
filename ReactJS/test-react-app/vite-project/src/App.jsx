import "./App.css";
import { useState } from "react";

function App() {

  return (
    <>
    <>
  <div className="hero_area">
    {/* header section strats */}
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="index.html">
            <img src="images/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  {" "}
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="shop.html">
                  Shop{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="furniture.html">
                  {" "}
                  Furniture{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact us
                </a>
              </li>
            </ul>
            <div className="user_option">
              <a href="">
                <img src="images/user.png" alt="" />
                <span>Login</span>
              </a>
              <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button
                  className="btn  my-2 my-sm-0 nav_search-btn"
                  type="submit"
                />
              </form>
            </div>
          </div>
          <div>
            <div className="custom_menu-btn ">
              <button>
                <span className=" s-1"></span>
                <span className="s-2"></span>
                <span className="s-3"></span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* end header section */}
    {/* slider section */}
    <section className="slider_section ">
      <div className="play_btn">
        <a href="">
          <img src="images/play.png" alt="" />
        </a>
      </div>
      <div className="number_box">
        <div>
          <ol className="carousel-indicators indicator-2">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            >
              01
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to={1}>
              02
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to={2}>
              03
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to={3}>
              04
            </li>
          </ol>
        </div>
      </div>
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            <li data-target="#carouselExampleIndicators" data-slide-to={3} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      The Latest
                      <span>Furniture</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        Read More
                      </a>
                      <a href="" className="btn-2">
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 img-container">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      The Latest
                      <span>Furniture</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        Read More
                      </a>
                      <a href="" className="btn-2">
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 img-container">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      The Latest
                      <span>Furniture</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        Read More
                      </a>
                      <a href="" className="btn-2">
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 img-container">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      The Latest
                      <span>Furniture</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        Read More
                      </a>
                      <a href="" className="btn-2">
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 img-container">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end slider section */}
  </div>
  {/* about section */}
  <section className="about_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>About Us</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <a href="">Read More</a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-box">
            <img src="images/about-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end about section */}
  {/* trending section */}
  <section className="trending_section layout_padding">
    <div id="accordion">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>Trending Categories</h2>
              </div>
              <div className="tab_container">
                <div
                  className="t-link-box"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div className="number">
                    <h5>01</h5>
                  </div>
                  <hr />
                  <div className="t-name">
                    <h5>Chairs</h5>
                  </div>
                </div>
                <div
                  className="t-link-box collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <div className="number">
                    <h5>02</h5>
                  </div>
                  <hr />
                  <div className="t-name">
                    <h5>Tables</h5>
                  </div>
                </div>
                <div
                  className="t-link-box collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <div className="number">
                    <h5>03</h5>
                  </div>
                  <hr />
                  <div className="t-name">
                    <h5>Bads</h5>
                  </div>
                </div>
                <div
                  className="t-link-box collapsed"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <div className="number">
                    <h5>04</h5>
                  </div>
                  <hr />
                  <div className="t-name">
                    <h5>Furnitures</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="collapse show"
              id="collapseOne"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="img_container ">
                <div className="box b-1">
                  <div className="img-box">
                    <img src="images/t-1.jpg" alt="" />
                  </div>
                  <div className="img-box">
                    <img src="images/t-2.jpg" alt="" />
                  </div>
                </div>
                <div className="box b-2">
                  <div className="img-box">
                    <img src="images/t-3.jpg" alt="" />
                  </div>
                  <div className="img-box">
                    <img src="images/t-4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="collapse"
              id="collapseTwo"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div className="img_container ">
                <div className="box b-1">
                  <div className="img-box">
                    <img src="images/t-3.jpg" alt="" />
                  </div>
                  <div className="img-box">
                    <img src="images/t-4.jpg" alt="" />
                  </div>
                </div>
                <div className="box b-2">
                  <div className="img-box">
                    <img src="images/t-1.jpg" alt="" />
                  </div>
                  <div className="img-box">
                    <img src="images/t-2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="collapse"
              id="collapseThree"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div className="img_container ">
                <div className="box b-1">
                  <div className="img-box">
                    <img src="images/t-4.jpg" alt="" />
                  </div>
                  <div className="img-box">
                    <img src="images/t-1.jpg" alt="" />
                  </div>
                </div>
                <div className="box b-2">
                  <div className="img-box">
                    <img src="images/t-3.jpg" alt="" />
                  </div>
                  <div className="img-box">
                    <img src="images/t-2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="collapse"
              id="collapseFour"
              aria-labelledby="headingfour"
              data-parent="#accordion"
            >
              <div className="img_container ">
                <div className="box b-1">
                  <div className="img-box">
                    <img src="images/t-1.jpg" alt="" />
                  </div>
                  <div className="img-box">
                    <img src="images/t-4.jpg" alt="" />
                  </div>
                </div>
                <div className="box b-2">
                  <div className="img-box">
                    <img src="images/t-3.jpg" alt="" />
                  </div>
                  <div className="img-box">
                    <img src="images/t-2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end trending section */}
  {/* discount section */}
  <section className="discount_section  layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="detail-box">
            <h2>The Latest Collection</h2>
            <h2 className="main_heading">50% DISCOUNT</h2>
            <div className="">
              <a href="">Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-box">
            <img src="images/discount-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end discount section */}
  {/* brand section */}
  <section className="brand_section">
    <div className="container">
      <div className="heading_container">
        <h2>Featured Brands</h2>
      </div>
      <div className="brand_container layout_padding2">
        <div className="box">
          <a href="">
            <div className="new">
              <h5>New</h5>
            </div>
            <div className="img-box">
              <img src="images/slider-img.png" alt="" />
            </div>
            <div className="detail-box">
              <h6 className="price">$100</h6>
              <h6>Chair</h6>
            </div>
          </a>
        </div>
        <div className="box">
          <a href="">
            <div className="img-box">
              <img src="images/slider-img.png" alt="" />
            </div>
            <div className="detail-box">
              <h6 className="price">$100</h6>
              <h6>Chair</h6>
            </div>
          </a>
        </div>
        <div className="box">
          <a href="">
            <div className="img-box">
              <img src="images/slider-img.png" alt="" />
            </div>
            <div className="detail-box">
              <h6 className="price">$100</h6>
              <h6>Chair</h6>
            </div>
          </a>
        </div>
        <div className="box">
          <a href="">
            <div className="img-box">
              <img src="images/slider-img.png" alt="" />
            </div>
            <div className="detail-box">
              <h6 className="price">$100</h6>
              <h6>Chair</h6>
            </div>
          </a>
        </div>
      </div>
      <a href="" className="brand-btn">
        See More
      </a>
    </div>
  </section>
  {/* end brand section */}
  {/* contact section */}
  <section className="contact_section layout_padding">
    <div className="container ">
      <div className="heading_container">
        <h2 className="">Contact Us</h2>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form action="">
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Phone" />
            </div>
            <div>
              <input
                type="text"
                className="message-box"
                placeholder="Message"
              />
            </div>
            <div className="d-flex ">
              <button>SEND</button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="map_container">
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                width={600}
                height={300}
                frameBorder={0}
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end contact section */}
  {/* client section */}
  <section className="client_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container">
        <h2>Testimonial</h2>
      </div>
    </div>
    <div className="container">
      <div className="client_container layout_padding2">
        <div className="client_box b-1">
          <div className="client-id">
            <div className="img-box">
              <img src="images/client-1.png" alt="" />
            </div>
            <div className="name">
              <h5>Magna</h5>
              <p>Consectetur adipiscing</p>
            </div>
          </div>
          <div className="detail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrudLorem ipsum
            </p>
            <div>
              <div className="arrow_img"></div>
            </div>
          </div>
        </div>
        <div className="client_box b-2">
          <div className="client-id">
            <div className="img-box">
              <img src="images/client-2.png" alt="" />
            </div>
            <div className="name">
              <h5>Aliqua</h5>
              <p>Consectetur adipiscing</p>
            </div>
          </div>
          <div className="detail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrudLorem ipsum
            </p>
            <div>
              <div className="arrow_img"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end client section */}
  {/* info section */}
  <section className="info_section layout_padding2">
    <div className="container">
      <div className="info_logo">
        <h2>Digitf</h2>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="info_contact">
            <h5>About Shop</h5>
            <div>
              <div className="img-box">
                <img src="images/location-white.png" width="18px" alt="" />
              </div>
              <p>Address</p>
            </div>
            <div>
              <div className="img-box">
                <img src="images/telephone-white.png" width="12px" alt="" />
              </div>
              <p>+01 1234567890</p>
            </div>
            <div>
              <div className="img-box">
                <img src="images/envelope-white.png" width="18px" alt="" />
              </div>
              <p>demo@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_info">
            <h5>Informations</h5>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_insta">
            <h5>Instagram</h5>
            <div className="insta_container">
              <div>
                <a href="">
                  <div className="insta-box b-1">
                    <img src="images/i-1.jpg" alt="" />
                  </div>
                </a>
                <a href="">
                  <div className="insta-box b-2">
                    <img src="images/i-2.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div>
                <a href="">
                  <div className="insta-box b-3">
                    <img src="images/i-3.jpg" alt="" />
                  </div>
                </a>
                <a href="">
                  <div className="insta-box b-4">
                    <img src="images/i-4.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div>
                <a href="">
                  <div className="insta-box b-3">
                    <img src="images/i-5.jpg" alt="" />
                  </div>
                </a>
                <a href="">
                  <div className="insta-box b-4">
                    <img src="images/i-6.jpg" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_form ">
            <h5>Newsletter</h5>
            <form action="">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </form>
            <div className="social_box">
              <a href="">
                <img src="images/fb.png" alt="" />
              </a>
              <a href="">
                <img src="images/twitter.png" alt="" />
              </a>
              <a href="">
                <img src="images/linkedin.png" alt="" />
              </a>
              <a href="">
                <img src="images/youtube.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end info_section */}
  {/* footer section */}
  <section className="container-fluid footer_section ">
    <div className="container">
      <p>
        © 2019 All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </section>
  {/* end  footer section */}
</>
</>
  );
}

export default App;
