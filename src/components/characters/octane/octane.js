import React, { useState } from "react";
import "../../../assets/css/hero.scss";

const octane = () => {
  const bg = require("../../../assets/img/octane/octaneBG.jpg");
  const [show, setShow] = useState(false);
  const display = show ? "block" : "none";

  return (
    <>
      <div
        className="hero-description"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom right"
        }}
      >
        <div className="left-side">
          <img src={require("../../../assets/img/octane/octane.png")} alt="" />
        </div>
        <div className="right-side">
          <h2>Octane</h2>
          <span>The Adrenaline Junkie</span>
          <br />
          <br />
          <q>Whoa . . . what a rush!</q>

          <p>
            One day, Octavio Silva was bored. In fact, he was bored most days.
            Heir to the preoccupied CEOs of Silva Pharmaceuticals and wanting
            for nothing in life, he entertained himself by performing
            death-defying stunts and posting holovids of them for his fans to
            gawk over. So, this day, he decided to set the course record for a
            nearby Gauntlet by launching himself across the finish line – using
            a grenade.
          </p>
          <p style={{ display }}>
            As he lay in triage hours later, the doctors informed him that the
            damage done to his legs meant his daredevil days were over. That
            didn’t sit well with Octavio, who turned to an old friend for help:
            Ajay Che, who he guilted into forging an order to replace his legs
            with bionic ones. Suddenly able to repair his limbs at a moment’s
            notice, Octavio decided petty online stunts weren’t enough: the
            ultimate adrenaline rush, the Apex Games, was calling. Now, he’s
            going to become an Apex Champion doing the most incredible,
            death-defying moves anyone’s ever seen. Maybe in the arena, he won’t
            be so bored.
          </p>
          <button
            className="btn"
            onClick={() => {
              setShow(!show);
            }}
          >
            {`SHOW ${show ? "LESS" : "MORE"}`}
          </button>
          <ul>
            <li>
              <b>Real name</b>
              <br />
              Octavio Silva
            </li>
            <li>
              <b>Age</b>
              <br />
              24
            </li>
            <li>
              <b>Home World</b>
              <br />
              Psamathe
            </li>
          </ul>
        </div>
        <div className="abillities">
          <ul>
            <li>
              <b>Tactical Abillity</b>
              Stim
              <img
                src={require("../../../assets/img/octane/tactical.png")}
                alt=""
              />
              <span>Move 30% faster for six seconds. Costs health to use.</span>
            </li>
            <li>
              <b>Passive Abillity</b>
              Swift Mend
              <img
                src={require("../../../assets/img/octane/passive.png")}
                alt=""
              />
              <span>Automatically restores health over time.</span>
            </li>
            <li>
              <b>Ultimate Abillity</b>
              Launch Pad
              <img
                src={require("../../../assets/img/octane/ultimate.png")}
                alt=""
              />
              <span>
                Deploy a jump pad that catapults teammates through the air.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <video
        src="https://media.contentapi.ea.com/content/dam/apex-legends/videos/2019/01/legend-hero-videos/apex-hero-medium-video-legend-octane.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
      />
    </>
  );
};

export default octane;
