import React from 'react';
import '../App.css'

const Contact = () => {
  return (
      <main className="about-main">
        <div className="bkg-div center-div">
          <h2>Send me an email!</h2>
          <form
            action="https://formspree.io/mqkealye"
            method="POST"
          >
            <label>Name:<span className="required">*</span> </label>
              <input type="text" placeholder="e.g. Jen Jordan"></input>
            <label>Email:<span className="required">*</span> </label>
              <input type="email" name="_replyto" placeholder="e.g. some@gal.com" required></input>
            <label>Message:<span className="required">*</span> </label>
              <textarea name="message"></textarea>
              <input type="text" name="_gotcha" id="gotcha"/>
            <button type="submit">Send</button>
          </form>
        </div>
      </main>
    )
  }
      
  export default Contact