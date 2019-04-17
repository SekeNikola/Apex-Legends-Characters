import React, { useState } from "react";
import "../../../assets/css/hero.scss";

const caustic = () => {
  const bg = require("../../../assets/img/caustic/causticBG.jpg");
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
            src={require("../../../assets/img/caustic/caustic.png")}
            alt=""
          />
        </div>
        <div className="right-side">
          <h2>Caustic</h2>
          <span>Toxic Trapper</span>
          <br />
          <br />
          <q>I don't concern myself with the ambitions of insects.</q>

          <p>
            Before there was Caustic, a scientist named Alexander Nox worked at
            Humbert Labs, the Frontier’s leading manufacturer of pesticide
            gases. With a glut of pesticides needed to protect the growing
            Frontier colonies’ crops, Humbert Labs was constantly on the hunt
            for better and stronger formulas. Nox was one of their brightest
            scientists and worked day and night developing new gases. But to
            make sure they worked, he needed to test them on more than just
            inert tissue: he needed something living.
          </p>
          <p style={{ display }}>
            As he toiled in secret, Nox began to see the beauty in his creations
            and their ability to destroy anything they touched. But the head of
            Humbert Labs soon discovered his gruesome experiments, and their
            confrontation ended with the lab in flames and its chief dead.
            Today, Nox is missing and presumed deceased. Caustic, meanwhile, now
            finds new test subjects in the Apex Games, where he puts his gaseous
            creations to work and observes their effects with great interest.
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
              Alexander Nox
            </li>
            <li>
              <b>Age</b>
              <br />
              48
            </li>
          </ul>
        </div>
        <div className="abillities">
          <ul>
            <li>
              <b>Tactical Abillity</b>
              Nox Gas Trap
              <img
                src={require("../../../assets/img/caustic/tactical.png")}
                alt=""
              />
              <span>
                Drop canisters that release deadly Nox gas when shot or
                triggered by enemies
              </span>
            </li>
            <li>
              <b>Passive Abillity</b>
              Nox Vision{" "}
              <img
                src={require("../../../assets/img/caustic/passive.png")}
                alt=""
              />
              <span>Allows you to see enemies through your gas.</span>
            </li>
            <li>
              <b>Ultimate Abillity</b>
              Nox Gas Grenade{" "}
              <img
                src={require("../../../assets/img/caustic/ultimate.png")}
                alt=""
              />
              <span>Blankets a large area in Nox gas.</span>
            </li>
          </ul>
        </div>
      </div>
      <video
        src="https://media.contentapi.ea.com/content/dam/apex-legends/videos/2019/01/legend-hero-videos/apex-hero-medium-video-legend-caustic.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
      />
    </>
  );
};

export default caustic;
