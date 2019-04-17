import React, { useState } from "react";
import "../../../assets/css/hero.scss";

const gibraltar = () => {
  const bg = require("../../../assets/img/gibraltar/gibraltarBG.jpg");
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
            src={require("../../../assets/img/gibraltar/gibraltar.png")}
            alt=""
          />
        </div>
        <div className="right-side">
          <h2> Gibraltar </h2> <span> Shielded Fortress</span> <br />
          <br />
          <q> Name the weapon--I 'll still beat you.</q>
          <p>
            Gibraltar is a gentle giant with a wild side. The son of two SARAS
            (Search and Rescue Association of Solace) volunteers, he has always
            been skilled at getting others out of dangerous situations that are
            common in the Outlands. However, he only began to understand the
            value of protecting others when he and his boyfriend stole his
            father’s motorcycle, took it on a joyride, and got trapped by a
            deadly mudslide. His parents saved them, and his father lost an arm
            in the process. Gibraltar has never forgotten that sacrifice and has
            devoted his life to helping those in need.
          </p>
          <p
            style={{
              display
            }}
          >
            The Apex Games didn’t change that, but they changed what it meant.
            Many of Gibraltar’s friends and colleagues have competed in the
            Games for extra money, fame, and glory over the years, and some
            never came home. Gibraltar joined to keep them safe and, for the
            first time, his skills as a rescuer and his rebellious nature worked
            together. He’s now become an icon in the Apex Games, putting himself
            in the line of fire to protect his squad and send his opponents
            running for cover.
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
              <b> Real name </b> <br />
              Makoa Gibraltar
            </li>
            <li>
              <b> Age </b> <br />
              30
            </li>
            <li>
              <b> Home World </b> <br />
              Solace
            </li>
          </ul>
        </div>
        <div className="abillities">
          <ul>
            <li>
              <b> Tactical Abillity </b>
              Dome of Protection
              <img
                src={require("../../../assets/img/gibraltar/tactical.png")}
                alt=""
              />
              <span>
                Throw down a dome-shield that blocks attacks for 15 seconds.
              </span>
            </li>
            <li>
              <b> Passive Abillity </b>
              Gun Shield
              <img
                src={require("../../../assets/img/gibraltar/passive.png")}
                alt=""
              />
              <span>
                Aiming down sights deploys a gun shield that blocks incoming
                fire.
              </span>
            </li>
            <li>
              <b> Ultimate Abillity </b>
              Defensive Bombardment
              <img
                src={require("../../../assets/img/gibraltar/ultimate.png")}
                alt=""
              />
              <span>
                Call in a concentrated mortar strike on a marked position.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <video
        src="https://media.contentapi.ea.com/content/dam/apex-legends/videos/2019/01/legend-hero-videos/apex-hero-medium-video-legend-gibraltar.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
      />
    </>
  );
};

export default gibraltar;
