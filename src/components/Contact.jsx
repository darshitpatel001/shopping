import React from 'react'

export default function Contact() {
  return (
    <>
    <div class="container" data-aos="fade-up">

    <div class="section-title">
      <h3>Contact Us</h3>
    </div>

    <div class="row">

      

      <div class="col-lg-12">
        <form action="https://formsubmit.co/darshitakbari9999@gmail.com" method="post">
          <div class="row">
            <div class="col-md-6 form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" />
            </div>
            <div class="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" />
            </div>
          </div>
          <div class="form-group mt-3">
            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" />
          </div>
          <div class="form-group mt-3">
            <textarea class="form-control" name="message" rows="5" placeholder="Message" ></textarea>
          </div>
       
          <div class="text-center mt-4"><button class="send2" type="submit">Send Message</button></div>
        </form>
      </div>

    </div>

  </div>
  </>
  )
}
