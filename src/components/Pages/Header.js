import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
              <h1 className="display-2">
               News for everyone
                <br />
                Easy for You.
              </h1>
              <p className="main-hero-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt mollitia ducimus eum dicta ipsum. Obcaecati dicta placeat ducimus odit? Repellendus facere similique consequatur, ipsam iste magni velit. Voluptates, quas laborum!
              </p>
            </div>
            <div className="col-12 col-lg-6 header-right-side d-flex jusify-content-center align-items-center main-herosection-images">
                <img
                  src="../image/hero1.jpg"
                  alt="heroimg"
                  className="img-fluid"
                />
                <img
                  src="../image/hero2.jpg"
                  alt="heroimg4"
                  className="img-fluid main-hero-img2"
                />
              </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
