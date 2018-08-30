import React from "react";
import { render } from "react-dom";
import NavMenu from "./Navbar/Navbar";
import Mylist from "./Navbar/data";
import FeatureCard from "./fcard/fcard.js";
import SCard from "./SCard/SCard.js";
import Fimg from "./fimg/fimg.js";
import Footer from "./footer/footer.js";
import "./styles.css";
const Selection = () => (
  <div className="selection">
    <select>
      <option selected disabled>
        CHOOSE COUNTRY
      </option>
      <option>ARGENTINA</option>
      <option>AUSTRALIA</option>
      <option>BRAZIL</option>
      <option>CHILE</option>
      <option>FRANCE</option>
      <option>ITALY</option>
      <option>MEXICO</option>
      <option>SPAIN</option>
      <option>TURKEY</option>
      <option>UK</option>
    </select>
  </div>
);

const App = () => (
  <div className="mypage">
    <NavMenu navlist={Mylist} />
    <img
      className="iconimage"
      src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
      align="left"
    />
    <img
      className="iconPrincipal"
      src="https://www.docplanner.com/img/sygnet.png"
      align="left"
    />
    <div className="Title-Doc">Making the healthcare experience more human</div>

    <div className="header">
      <div className="begining">
        We want patients to find the perfect doctor and book an appointment in
        the most easy way. The patient journey should be enjoyable, and that's
        why we are always next to them: to help them find the best possible
        care. Anytime, anywhere.
      </div>

      <div className="bigining2">
        We also help doctors to better manage their practice and build their
        online reputation. With our integrated end-to-end solution, doctors are
        able not only to improve their online presence, but also to devote their
        time to what really matters: their patients.
      </div>
    </div>
    <div className="selection1" />
    <Selection />
    <div className="header1">
      <SCard
        imcard="https://www.docplanner.com/img/screen-marketplace@2x.png"
        title="For patients"
        description="For patients Find a doctor, book a visit and solve any health-related
          doubt"
        background=" #00b39b"
      />

      <SCard
        imcard="https://www.docplanner.com/img/screen-saas@2x.png"
        title="For doctors"
        description="Save time managing visits and cut no-shows by half"
        background="#4293db"
      />
    </div>
    <div className="newzone">
      <div className="title2">
        <h1>The world's biggest healthcare platform</h1>
        <img
          className="mylogo"
          src="https://www.docplanner.com/img/sygnet.png"
          align="left"
        />
      </div>

      <FeatureCard
        title="Leader in 8 countries "
        icon="https://www.docplanner.com/img/flag.png"
        description="Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile"
      />
      <FeatureCard
        title="600 000 appointments"
        icon="https://www.docplanner.com/img/visits.png"
        description="booked last month"
      />
      <FeatureCard
        title="20 million unique patients"
        icon="https://www.docplanner.com/img/patients.png"
        description="visit us every month"
      />
    </div>
    <div className="Title-Doc">
      Improve the lives of millions. Change yours forever
    </div>

    <div className=" newzoneimage">
      <Fimg
        title="Warsaw"
        background="https://www.docplanner.com/images/warsaw.png"
        place="see openings"
      />
      <Fimg
        title="Barcelona"
        background="https://www.docplanner.com/images/barcelona.png"
        place="see openings"
      />
      <Fimg
        title="Istanbul"
        background="https://www.docplanner.com/images/istanbul.png"
        place="see openings"
      />
      <Fimg
        title="Istanbul"
        background="https://www.docplanner.com/images/istanbul.png"
        place="see openings"
      />
      <Fimg
        title="Istanbul"
        background="https://www.docplanner.com/images/istanbul.png"
        place="see openings"
      />
      <Fimg
        title="Istanbul"
        background="https://www.docplanner.com/images/istanbul.png"
        place="see openings"
      />
    </div>
    <Footer
      title="We are leaders in 8 countries"
      copyright="This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.

www.docplanner.com © 2018"
      lien=" Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina en Chile"
    />
  </div>
);

render(<App />, document.getElementById("root"));
