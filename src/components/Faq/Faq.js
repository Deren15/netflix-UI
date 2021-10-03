import React, {useState} from 'react';
import '../../App.css';

const Faq = () => {

  const [toggle, setToggle] = useState(false)

  const toggleAns = (e) => {
    e.preventDefault()
    setToggle(prevState => !prevState)
  }

  return (
    <section className="sec-5 flex" id="faqs">
      <h1 style={{textAlign:"center", fontSize:"3.2rem"}}>
        Frequently Asked Questions
      </h1>
      <div className="questions" id="questions">
        <div className="question flex">
          <p>What is NetFlix?</p>
          <span className="plus"> <i onClick={(e) => toggleAns(e)} className={toggle ? "fal fa-plus rotate" : "fal fa-plus"}></i></span>
        </div>
        <div className={toggle ? "ans show" : "ans"}>
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices.<br />

          You can watch as much as you want, whenever you want, without a single
          ad – all for one low monthly price. There's always something new to
          discover, and new TV shows and movies are added every week!
        </div>

        <div className="question flex">
          <p>How much dose netflix costs?</p>
          <span className="plus"> <i className="fal fa-plus"></i></span>
        </div>
        <div className="ans">
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
          streaming device, all for one fixed monthly fee. Plans range from ₹
          199 to ₹ 799 a month. No extra costs, no contracts.
        </div>

        <div className="question flex">
          <p>Where can I watch?</p>
          <span className="plus"><i className="fal fa-plus"></i></span>
        </div>
        <div className="ans">
          Watch anywhere, anytime, on an unlimited number of devices. Sign in
          with your Netflix account to watch instantly on the web at netflix.com
          from your personal computer or on any internet-connected device that
          offers the Netflix app, including smart TVs, smartphones, tablets,
          streaming media players and game consoles. You can also download your
          favourite shows with the iOS, Android, or Windows 10 app. Use
          downloads to watch while you're on the go and without an internet
          connection. Take Netflix with you anywhere.
        </div>

        <div className="question flex">
          <p>How do I cancel?</p>
          <span className="plus"><i className="fal fa-plus"></i></span>
        </div>
        <div className="ans">
          Netflix is flexible. There are no annoying contracts and no
          commitments. You can easily cancel your account online in two clicks.
          There are no cancellation fees – start or stop your account anytime.
        </div>

        <div className="question flex">
          <p>What I can Watch on Netflix?</p>
          <span className="plus"><i className="fal fa-plus"></i></span>
        </div>
        <div className="ans">
          Netflix has an extensive library of feature films, documentaries, TV
          shows, anime, award-winning Netflix originals, and more. Watch as much
          as you want, anytime you want.
        </div>
      </div>
      
    </section>
  );
}

export default Faq;