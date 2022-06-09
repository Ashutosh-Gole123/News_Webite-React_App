import React from "react";
import emailjs from '@emailjs/browser';
const contact = () => {
  function sendEmail(e){
    
    e.preventDefault();

    emailjs.sendForm("service_l8lxoeo","template_6o7sze6",e.target,"ierFdZUXPgO_fWHce").then(res=>{console.log(res);
    }).catch(err=>console.log(err));
    e.target.reset();
    alert("Your message is sent successfully");

  }
 
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Contact with Our <br /> Technical Team
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam recusandae deserunt iure quod minima necessitatibus
                    impedit asperiores suscipit dolores officiis tempora porro
                    possimus ut odio modi rem sunt, vitae iste.
                  </p>
                  <figure>
                    <img
                      src="../image/hero1.jpg"
                      alt="contactUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                {/* Right side contact form */}
                <div className="contact-rightside col-12 col-lg-7">
                   <form method="POST" onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="name"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="col-12 col-lg-6  contact-input-field">
                        <input
                          type="text"
                          name="lastname"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Phone Number"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="user_email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" className="main-hero-para">
                       I agree that webisite may contact me at the email address or phone number
                      </label>
                    </div>
                    <button type="" className=" btn btn-style w-100">
                        Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default  contact;
