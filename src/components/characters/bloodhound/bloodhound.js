import React, { useState } from "react";
import "../../../assets/css/hero.scss";
const bloodhound = () => {
  const bg = require("../../../assets/img/bloodhound/bloodhoundBG.jpg");
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
          <img
            src={require("../../../assets/img/bloodhound/bloodhound.png")}
            alt=""
          />
        </div>
        <div className="right-side">
          <h2>BloodHound</h2>
          <span>Technological Tracker</span>
          <br />
          <br />
          <q>I am the hunter the Gods have sent.</q>

          <p>
            Bloodhound is known across the Outlands as one of the greatest game
            hunters the Frontier has ever seen – and that’s about all anyone
            knows. Their identity is a mystery wrapped in layers of rumors: they
            are fabulously wealthy, a bloodthirsty murderer, a Goliath
            whisperer, a former slave, half bat, and a dozen other things
            depending on who’s doing the whispering.
          </p>
          <p style={{ display }}>
            All anyone truly knows is that Bloodhound is a force to be reckoned
            with in the Apex Games. Bloodhound’s unparalleled tracking skills
            are a boon to any team they join, helping them root out hidden
            opponents and tracking the enemy’s movements. Calling on Earth’s Old
            Norse Gods to guide them, Bloodhound believes that destiny is a path
            that has already been laid out, eventually carrying all to their
            death. But with that knowledge comes strength, because until that
            day comes, Bloodhound knows they can’t be stopped
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
              Unknowen
            </li>
            <li>
              <b>Age</b>
              <br />
              Unknowen
            </li>
            <li>
              <b>Home World</b>
              <br />
              Unknowen
            </li>
          </ul>
        </div>
        <div className="abillities">
          <ul>
            <li>
              <b>Tactical Abillity</b>
              Eye of the Allfather
              <img
                src={require("../../../assets/img/bloodhound/tactical.png")}
                alt=""
              />
              <span>
                Briefly reveal hidden enemies, traps, and clues throughout
                structures in front of you.
              </span>
            </li>
            <li>
              <b>Passive Abillity</b>
              Tracker
              <img
                src={require("../../../assets/img/bloodhound/passive.png")}
                alt=""
              />
              <span>See tracks left behind by your foes.</span>
            </li>
            <li>
              <b>Ultimate Abillity</b>
              Beast of the Hunt
              <img
                src={require("../../../assets/img/bloodhound/ultimate.png")}
                alt=""
              />
              <span>
                Enhances your senses, allowing you move faster and highlighting
                your prey.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <video
        src="https://media.contentapi.ea.com/content/dam/apex-legends/videos/2019/01/legend-hero-videos/apex-hero-medium-video-legend-bloodhound.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
      />
    </>
  );
};

export default bloodhound;
