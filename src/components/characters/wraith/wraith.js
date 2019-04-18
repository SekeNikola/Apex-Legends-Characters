import React, {
  useState
} from "react";
import "../../../assets/css/hero.scss";

const wraith = () => {
  const bg = require("../../../assets/img/wraith/wraithBG.jpg");
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
      require("../../../assets/img/wraith/wraith.png")
    }
    alt = "" / >
    <
    /div> <
    div className = "right-side" >
    <
    h2 > Wraith < /h2> <
    span > Interdimensional Skirmisher < /span> <
    br / >
    <
    br / >
    <
    q >
    There’ s a thin line between life and death.You’ ll find me there. <
    /q>

    <
    p >
    Wraith is a whirlwind fighter, able to execute swift and deadly attacks and manipulate spacetime by opening rifts in the fabric of
    reality— but she has no idea how she got that way.Years ago, she woke up in an IMC Detention Facility
    for the Mentally Ill with no memory of her life before.She also began hearing a distant voice whispering in her mind that would keep her awake
    for days on end.Despite nearly driving her insane, once she started to listen and trust it, the voice helped her harness her newfound power of void manipulation and escape the facility. <
    /p> <
    p style = {
      {
        display
      }
    } >
    Determined to uncover her true identity, Wraith began a quest to find out more about the experiments.Many of the old research facilities, however, are buried beneath heavily guarded arenas used
    for the Apex Games.Now Wraith has joined the competition, and with every match she gets closer to the truth. <
    /p> <
    button className = "btn"
    onClick = {
      () => {
        setShow(!show);
      }
    } > {
      `SHOW ${show ? "LESS" : "MORE"}`
    } <
    /button> <
    ul >
    <
    li >
    <
    b > Real name < /b> <
    br / >
    Redacted <
    /li> <
    li >
    <
    b > Age < /b> <
    br / >
    Redacted <
    /li> <
    li >
    <
    b > Home World < /b> <
    br / >
    Redacted <
    /li> < /
    ul > <
    /div> <
    div className = "abillities" >
    <
    ul >
    <
    li >
    <
    b > Tactical Abillity < /b>
    Into the Void <
    img src = {
      require("../../../assets/img/wraith/tactical.png")
    }
    alt = "" /
    >
    <
    span >
    Reposition quickly through the safety of void space, avoiding all damage. <
    /span> < /
    li > <
    li >
    <
    b > Passive Abillity < /b>
    Voices from the Void <
    img src = {
      require("../../../assets/img/wraith/passive.png")
    }
    alt = "" /
    >
    <
    span >
    A voice warns you when danger approaches.As far as you can tell, it’ s on your side. <
    /span> < /
    li > <
    li >
    <
    b > Ultimate Abillity < /b>
    Dimensional Rift <
    img src = {
      require("../../../assets/img/wraith/ultimate.png")
    }
    alt = "" /
    >
    <
    span >
    Link two locations with portals
    for 60 seconds, allowing your entire team to use them. <
    /span> < /
    li > <
    /ul> < /
    div > <
    /div> <
    video src = "https://media.contentapi.ea.com/content/dam/apex-legends/videos/2019/01/legend-hero-videos/apex-hero-medium-video-legend-wraith.mp4"
    autoPlay = {
      true
    }
    loop = {
      true
    }
    muted = {
      true
    }
    /> < / >
  );
};

export default wraith;