import React, { useState } from "react";
import "../../../assets/css/hero.scss";

const pathfinder = () => {
  const bg = require("../../../assets/img/pathfinder/pathfinderBG.jpg");
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
            src={require("../../../assets/img/pathfinder/pathfinder.png")}
            alt=""
          />
        </div>
        <div className="right-side">
          <h2>Pathfinder</h2>
          <span>Forward Scout</span>
          <br />
          <br />
          <q>Losing isn't fun. That's why I don't do it.</q>

          <p>
            Pathfinder is the picture of optimism, despite his circumstances. A
            MRVN (Mobile Robotic Versatile eNtity) modified to specialize in
            location scouting and surveying, he booted up decades ago in an
            abandoned laboratory with no idea who created him or why. With only
            his MRVN designation to hint at his identity, Pathfinder set off in
            search of his creator.
          </p>
          <p style={{ display }}>
            Pathfinder has learned much in his travels since then (like how to
            make a mean Eastern Leviathan Stew) but hasn’t come any closer to
            finding his creator. Still, he’s never given up hope, and has joined
            the Apex Games to gain a following--and hopefully draw the attention
            of his maker. In the meantime, he remains enthusiastic and helpful,
            always ready to make new friends (then shoot them).
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
              MRVN
            </li>
            <li>
              <b>Age</b>
              <br />
              He really wants to know, too.
            </li>
            <li>
              <b>Home World</b>
              <br />
              He’s trying to find out!
            </li>
          </ul>
        </div>
        <div className="abillities">
          <ul>
            <li>
              <b>Tactical Abillity</b>
              Grappling Hook
              <img
                src={require("../../../assets/img/pathfinder/tactical.png")}
                alt=""
              />
              <span>Grapple to get to out-of-reach places quickly.</span>
            </li>
            <li>
              <b>Passive Abillity</b>
              Insider Knowledge
              <img
                src={require("../../../assets/img/pathfinder/passive.png")}
                alt=""
              />
              <span>
                Scan a survey beacon to reveal the ring’s next location.
              </span>
            </li>
            <li>
              <b>Ultimate Abillity</b>
              Zipline Gun
              <img
                src={require("../../../assets/img/pathfinder/ultimate.png")}
                alt=""
              />
              <span>Create a zipline for everyone to use. </span>
            </li>
          </ul>
        </div>
      </div>
      <video
        src="https://media.contentapi.ea.com/content/dam/apex-legends/videos/2019/01/legend-hero-videos/apex-hero-medium-video-legend-pathfinder.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
      />
    </>
  );
};

export default pathfinder;
