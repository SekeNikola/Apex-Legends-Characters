import React, { useState } from "react";
import "../../../assets/css/hero.scss";
const bangalor = () => {
  const bg = require("../../../assets/img/bangalore/bangalorBG.jpg");
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
            src={require("../../../assets/img/bangalore/bangalor.png")}
            alt=""
          />
        </div>{" "}
        <div className="right-side">
          <h2> Bangalore </h2> <span> Professional Soldier </span> <br />
          <br />
          <q> Name the weapon--I 'll still beat you.</q>
          <p>
            Born into a military family where she, her parents, and her four
            older brothers all served in the IMC Armed Forces, Bangalore has
            been an exceptional soldier since she was young.She was top of her
            class at the IMC Military Academy and the only cadet who could take
            apart a Peacekeeper, equip it with a Precision Choke hop - up, and
            put it back together in under twenty seconds– blindfolded.{" "}
          </p>{" "}
          <p
            style={{
              display
            }}
          >
            Three years ago, Anita and her brother Jackson were ordered to
            retrieve a mercenary fleet from the Outlands to aid in the IMC’ s
            fight against the Militia.However, their unit lost contact with IMC
            HQ and were ambushed on arrival.The squad scattered, but Jackson
            stayed behind to give his sister time to escape.Alone and with no
            way home, Anita put her training, extensive weapon knowledge, and
            competitive spirit to work by joining the Apex Games.Now, she fights
            to raise money for passage back to the IMC home base, where she
            hopes to reunite with what remains of her family.{" "}
          </p>{" "}
          <button
            className="btn"
            onClick={() => {
              setShow(!show);
            }}
          >
            {" "}
            {`SHOW ${show ? "LESS" : "MORE"}`}{" "}
          </button>{" "}
          <ul>
            <li>
              <b> Real name </b> <br />
              Anita Williams{" "}
            </li>{" "}
            <li>
              <b> Age </b> <br />
              35{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="abillities">
          <ul>
            <li>
              <b> Tactical Abillity </b>
              Smoke Launcher
              <img
                src={require("../../../assets/img/bangalore/tactical.png")}
                alt=""
              />
              <span>
                Fire a high - velocity smoke canister that explodes into a smoke
                wall on impact.{" "}
              </span>{" "}
            </li>{" "}
            <li>
              <b> Passive Abillity </b>
              Double Time{" "}
              <img
                src={require("../../../assets/img/bangalore/passive.png")}
                alt=""
              />
              <span> See tracks left behind by your foes. </span>{" "}
            </li>{" "}
            <li>
              <b> Ultimate Abillity </b>
              Rolling Thunder{" "}
              <img
                src={require("../../../assets/img/bangalore/ultimate.png")}
                alt=""
              />
              <span>
                Call in an artillery strike that slowly creeps across the
                landscape.{" "}
              </span>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
      <video
        src="https://media.contentapi.ea.com/content/dam/apex-legends/videos/2019/01/legend-hero-videos/apex-hero-medium-video-legend-bangalore.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
      />
    </>
  );
};

export default bangalor;
