import React, {
  useState
} from "react";
import "../../../assets/css/hero.scss";

const lifeline = () => {
  const bg = require("../../../assets/img/lifeline/lifelineBG.jpg");
  const [show, setShow] = useState(false);
  const display = show ? "block" : "none";

  return ( <
    >
    <
    div className = "hero-description"
    style = {
      {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom right"
      }
    } >
    <
    div className = "left-side" >
    <
    img src = {
      require("../../../assets/img/lifeline/lifeline.png")
    }
    alt = "" /
    >
    <
    /div> <
    div className = "right-side" >
    <
    h2 > Lifeline < /h2> <
    span > Combat Medic < /span> <
    br / >
    <
    br / >
    <
    q > Never quit.That 's how you win.</q>

    <
    p >
    Ajay Che, aka Lifeline, isn’ t someone you would expect to find in
    the Apex Games.Once the child of wealthy war profiteers, she left home when she learned of the damage her family had caused and enlisted in the Frontier Corps, a humanitarian organization that aids Frontier communities in need.She’ s since devoted her life to helping others and joined the Apex Games to fund the Frontier Corps with her winnings. <
    /p> <
    p style = {
      {
        display
      }
    } >
    Since no one in the Games is innocent— they all know what they signed up
    for— and every one of her victories means help
    for those in need, Lifeline has no problem engaging in the popular bloodsport.Or so she tells herself.She may seem sarcastic and callous, but deep down she wants to help people and make the world a better place.If that means taking a few people down in the process, so be it. <
    /p> <
    button className = "btn"
    onClick = {
      () => {
        setShow(!show);
      }
    } >
    {
      `SHOW ${show ? "LESS" : "MORE"}`
    } <
    /button> <
    ul >
    <
    li >
    <
    b > Real name < /b> <
    br / >
    Ajay Che <
    /li> <
    li >
    <
    b > Age < /b> <
    br / >
    24 <
    /li> <
    /ul> <
    /div> <
    div className = "abillities" >
    <
    ul >
    <
    li >
    <
    b > Tactical Abillity < /b>
    D.O.C.Heal Drone <
    img src = {
      require("../../../assets/img/lifeline/tactical.png")
    }
    alt = "" /
    >
    <
    span >
    Call your Drone of Compassion to automatically heal nearby teammates over time. <
    /span> <
    /li> <
    li >
    <
    b > Passive Abillity < /b>
    Combat Medic <
    img src = {
      require("../../../assets/img/lifeline/passive.png")
    }
    alt = "" /
    >
    <
    span >
    Revive knocked down teammates faster
    while protected by a shield wall.Healing items are used 25 % faster. <
    /span> <
    /li> <
    li >
    <
    b > Ultimate Abillity < /b>
    Care Package <
    img src = {
      require("../../../assets/img/lifeline/ultimate.png")
    }
    alt = "" /
    >
    <
    span >
    Call in a drop pod full of high - quality defensive gear. <
    /span> <
    /li> <
    /ul> <
    /div> <
    /div> <
    video src = "https://media.contentapi.ea.com/content/dam/apex-legends/videos/2019/01/legend-hero-videos/apex-hero-medium-video-legend-lifeline.mp4"
    autoPlay = {
      true
    }
    loop = {
      true
    }
    muted = {
      true
    }
    /> <
    />
  );
};

export default lifeline;