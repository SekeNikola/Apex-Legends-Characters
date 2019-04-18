import React, { useState } from "react";
import "../../../assets/css/hero.scss";

const mirage = () => {
  const bg = require("../../../assets/img/mirage/mirageBG.jpg");
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
          <img src={require("../../../assets/img/mirage/mirage.png")} alt="" />
        </div>
        <div className="right-side">
          <h2>mirage</h2>
          <span>Holographic Trickster</span>
          <br />
          <br />
          <q>
            I don't take myself too seriously. I don't take myself anywhere. I
            need to get out more.
          </q>

          <p>
            Mirage is the kind of guy who likes to stand out. The youngest of
            four brothers, he perfected the art of fooling around to get
            attention. The one thing he took seriously was Holo-Pilot
            technology: introduced to the illusion-creating tech by his engineer
            mother, he poured over the mechanisms and learned all he could about
            them. Even when his brothers went MIA during the Frontier War,
            Mirage and his mother continued to develop holo devices, and the
            work brought them closer.
          </p>
          <p style={{ display }}>
            While working as a bartender to make ends meet, Mirage heard amazing
            stories from his patrons about the Apex Games and the wealth and
            glory that came with victory. As good as both of those sounded, he
            knew he couldn’t risk leaving his mother childless – until she gave
            him a set of customized holo devices and told him to follow his
            dream. Mirage is now the life of the Apex Games, outwitting
            opponents and charming audiences across the Outlands.
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
              Elliott Witt
            </li>
            <li>
              <b>Age</b>
              <br />
              30
            </li>
            <li>
              <b>Home World</b>
              <br />
              Solace
            </li>
          </ul>
        </div>
        <div className="abillities">
          <ul>
            <li>
              <b>Tactical Abillity</b>
              Psyche Out
              <img
                src={require("../../../assets/img/mirage/tactical.png")}
                alt=""
              />
              <span>Send out a holographic decoy to confuse the enemy.</span>
            </li>
            <li>
              <b>Passive Abillity</b>
              Encore!
              <img
                src={require("../../../assets/img/mirage/passive.png")}
                alt=""
              />
              <span>
                Automatically drop a decoy and cloak for five seconds when
                knocked down.
              </span>
            </li>
            <li>
              <b>Ultimate Abillity</b>
              Vanishing Act{" "}
              <img
                src={require("../../../assets/img/mirage/ultimate.png")}
                alt=""
              />
              <span>
                Deploy a team of Decoys to distract enemies while you cloak.{" "}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <video
        src="https://media.contentapi.ea.com/content/dam/apex-legends/videos/2019/01/legend-hero-videos/apex-hero-medium-video-legend-mirage.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
      />
    </>
  );
};

export default mirage;
