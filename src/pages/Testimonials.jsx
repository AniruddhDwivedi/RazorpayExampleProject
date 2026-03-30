import React from "react";

const Testimonials = () => {
  // We store the quotes in an array of objects to keep things organized
  const testimonialList = [
    {
      quote: "The Epsilon Tract helped me give up smack",
      author: "Jezz Torrent"
    },
    {
      quote: "Kifflom changed my life. I used to have a well paid job, a family and good prospects. Now, I've given that up to find real meaning in wearing light blue and proclaiming my real religion. Kifflom!",
      author: "Jonas Ackerman, Blueberry, San Andreas"
    },
    {
      quote: "Much better than Inversion Therapy. My mother sleeps much easier now that I've joined the fellowship. Kifflom!",
      author: "Jeremy Smith, San Fierro"
    },
    {
      quote: "Religion never worked for me, until now!",
      author: "Brian Van Ginsberg, Carcer City"
    },
    {
      quote: "I was lost. Luckily, I now go to regular meeetings of a cult group and give them lots of money, so everything is okay.",
      author: "Jane Pole, Ohio"
    },
    {
      quote: "At first, I was nervous about giving up my identity and sleeping with all of those men, but I really enjoy it now.",
      author: "Mary Fortune, Liberty City"
    },
    {
      quote: "Cris Formage is a genius. It's a religion without homework!",
      author: "Morgan August, Los Santos, San Andreas."
    }
  ];

  return (
    <div className="testimonials-page">
      <h2>TESTIMONIALS</h2>
      <p className="sub-heading">
        A unique American religion - expensive, promiscuous and entirely meaningless!!!
      </p>

      <div className="testimonials-container">
        <h3>Testimonials -</h3>
        {testimonialList.map((item, index) => (
          <div key={index} className="testimonial-entry">
            <p className="quote">"{item.quote}"</p>
            <p className="author">- {item.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;