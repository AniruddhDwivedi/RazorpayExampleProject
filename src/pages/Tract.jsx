import React from "react";

const Tract = () => {
  return (
    <div className="tract-page">
      <h2>THE EPSILON TRACT</h2>
      <p className="tract-status">The TRACT has not yet been written.</p>

      <div className="tract-mystery-section">
        <img 
          src="/assets/tract.gif" 
          alt="The Tract Mystery" 
          className="tract-icon" 
        />
        <div className="tract-description">
          <p>
            Cris Formage tells us in his wonderful book, <em>It Happened To Us All</em>, 
            that the TRACT will be written when we are all ready. However, Cris is 
            also very clear on another point - although the TRACT has not yet been 
            written, it can still be read by those that are willing to read it.
          </p>
        </div>
      </div>

      <div className="tract-call-to-action">
        <p>
          First you need to ask yourself: do i need an imaginary friend? Do I want 
          to believe? AM I EVERYTHING I NEED AND LESS AND MORE? Then you are 
          ready! The TRACT reading can begin.
        </p>
        
        <p className="bold-instruction">
          ALL YOU NEED DO IS SEND A CHECK OR MONEY ORDER TO:
        </p>

        <address className="epsilon-address">
          Cris Formage<br />
          Epsilon Cult of America<br />
          PO Box 10012<br />
          Grand Canaria<br />
          Cayman Islands
        </address>
      </div>
    </div>
  );
};

export default Tract;