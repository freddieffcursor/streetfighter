import "./App.css";
import Ryu from "../src/images/Ryu.jpg";
import RyuGif from "../src/images/Ryu.gif";
import hadoukenGif from "../src/images/Ryu-Radouken.gif";
import shoryukenGif from "../src/images/Ryu-Shoryuken.gif";
import tatsumakiSenpukyakuGif from "../src/images/Ryu-TatsumakiSenpukyaku.gif";
import spinningPileDriverGif from "../src/images/Zangief-SpinningPiledriver.gif";
import doubleLariatGif from "../src/images/Zangief-DoubleZariat.gif";
import banishingFlatGif from "../src/images/Zangief-BanishingFlat.gif";
import hyakuretsukyakuGif from "../src/images/Chunli-Hyakuretsukyaku.gif";
import spinningBirdKickGif from "../src/images/Chunli-SpinningBirdKick.gif";
import kikokenGif from "../src/images/Chunli-Kikoken.gif";
import eletricThunderGif from "../src/images/Blanka-ElectricThunder.gif";
import rollingAtackGif from "../src/images/Blanka-RollingAttack.gif";
import verticalRollGif from "../src/images/Blanka-VerticalRoll.gif";
import sonicBoomGif from "../src/images/Guile-EletronicBoom.gif";
import flashKickGif from "../src/images/Guile-FlashKick.webp";
import yogaFireGif from "../src/images/Dhalsim-YogaFire.gif";
import yogaTeleportGif from "../src/images/Dhalsim-YogaTeleport.gif";
import yogaDrillGif from "../src/images/Dhalsim-YogaDrill.gif";
import spiralArrowGif from "../src/images/Cammy-SpiralArrow.gif";
import hundredHandGif from "../src/images/Ehonda-HundredSlap.gif";
import sumoHeadbuttGif from "../src/images/Ehonda-SumoHead.gif";
import sumoSmashGif from "../src/images/Ehonda-SumoSmash.gif";
import zankuHadokenGif from "../src/images/Akuma-ZankuHadoken.gif";
import shakunetsuHadokenGif from "../src/images/Akuma-ShakunetsuHadoken.gif";
import goukiSatsuGif from "../src/images/Akuma-GoukiSatsu.gif";
import kenHadoukenGif from "../src/images/Ken-Radouken.gif";
import kenShoryukenGif from "../src/images/Ken-Shoryuken.gif";
import kenTatsumakiSenpukyakuGif from "../src/images/Ken-TatsumakiSenpukyaku.gif";

import Ehonda from "../src/images/Ehonda.jpg";
import EhondaGif from "../src/images/Ehonda.gif";
import ChunLi from "../src/images/ChunLi.jpg";
import ChunLiGif from "../src/images/Chunli.gif";
import Ken from "../src/images/Ken.jpg";
import KenGif from "../src/images/Ken.gif";
import Guile from "../src/images/Guile.jpg";
import GuileGif from "../src/images/Guile.gif";
import Dhalsim from "../src/images/Dhalsim.jpg";
import DhalsimGif from "../src/images/Dhalsim.gif";
import Zangief from "../src/images/Zangief.jpg";
import ZangiefGif from "../src/images/Zangief.gif";
import Blanka from "../src/images/Blanka.jpg";
import BlankaGif from "../src/images/Blanka.gif";
import Akuma from "../src/images/Akuma.jpg";
import AkumaGif from "../src/images/AkumaGif.gif";
import { useState, useEffect } from "react";

const characters = [
  {
    name: "Ryu",
    description:
      "A disciplined martial artist seeking to become a true warrior. Trained in Ansatsuken, he travels to test his skills and find opponents.",
    img: Ryu,
    gif: RyuGif,
    skills: ["Hadouken", "Shoryuken", "Tatsumaki Senpukyaku"],
  },
  {
    name: "Ken",
    description:
      "Ryu's charismatic best friend and sparring partner. A talented martial artist known for the powerful Shoryuken and flaming attacks.",
    img: Ken,
    gif: KenGif,
    skills: ["Shoryuken", "Hadouken", "Tatsumaki Senpukyaku"],
  },
  {
    name: "Chun-Li",
    description:
      "An Interpol officer skilled in Chinese martial arts. Seeks justice for her father's death and battles the criminal organization Shadaloo.",
    img: ChunLi,
    gif: ChunLiGif,
    skills: ["Spinning Bird Kick", "Hyakuretsukyaku", "Kikoken"],
  },
  {
    name: "Guile",
    description:
      "A skilled Air Force officer seeking revenge for his friend Charlie Nash's death. Known for his iconic flattop and Sonic Boom move.",
    img: Guile,
    gif: GuileGif,
    skills: ["Sonic Boom", "Flash Kick"],
  },
  {
    name: "Dhalsim",
    description:
      "A yoga master from India with the ability to stretch his limbs and control fire. Enters the World Warrior tournament to raise money for his village.",
    img: Dhalsim,
    gif: DhalsimGif,
    skills: ["Yoga Fire", "Yoga Teleport", "Yoga Drill Kick"],
  },
  {
    name: "Zangief",
    description:
      "A Russian professional wrestler known for immense strength and grappling techniques. His Spinning Piledriver is a force to be reckoned with.",
    img: Zangief,
    gif: ZangiefGif,
    skills: ["Spinning Piledriver", "Banishing Flat", "Double Lariat"],
  },
  {
    name: "Blanka",
    description:
      "Originally named Jimmy, Blanka was transformed into a feral creature with green skin and electric powers after a plane crash. Protects his homeland with unique abilities.",
    img: Blanka,
    gif: BlankaGif,
    skills: ["Electric Thunder", "Rolling Attack", "Vertical Roll"],
  },
  {
    name: "Akuma",
    description:
      "A powerful martial artist consumed by the Satsui no Hado, seeking to become the ultimate warrior. Known for devastating techniques like the Raging Demon.",
    img: Akuma,
    gif: AkumaGif, // Replace with the actual image for Akuma
    skills: ["Gouki Satsu", "Shakunetsu Hadouken", "Zanku Hadoken"],
  },
  {
    name: "Ehonda",
    description:
      "A sumo wrestler from Japan, E. Honda joins the World Warrior tournament to showcase the strength of sumo globally. Surprisingly agile with powerful sumo techniques.",
    img: Ehonda,
    gif: EhondaGif,
    skills: ["Hundred Hand Slap", "Sumo Headbutt", "Sumo Smash"],
  },
];

const powers = {
  Hadouken: hadoukenGif,
  Shoryuken: shoryukenGif,
  TatsumakiSenpukyaku: tatsumakiSenpukyakuGif,
  SpinningPiledriver: spinningPileDriverGif,
  DoubleLariat: doubleLariatGif,
  BanishingFlat: banishingFlatGif,
  Hyakuretsukyaku: hyakuretsukyakuGif,
  SpinningBird: spinningBirdKickGif,
  Kikoken: kikokenGif,
  ElectricThunder: eletricThunderGif,
  RollingAttack: rollingAtackGif,
  VerticalRoll: verticalRollGif,
  SonicBoom: sonicBoomGif,
  FlashKick: flashKickGif,
  YogaFire: yogaFireGif,
  YogaTeleport: yogaTeleportGif,
  YogaDrill: yogaDrillGif,
  SpiralArrow: spiralArrowGif,
  HundredHand: hundredHandGif,
  SumoHeadbutt: sumoHeadbuttGif,
  SumoSmash: sumoSmashGif,
  ZankuHadoken: zankuHadokenGif,
  ShakunetsuHadouken: shakunetsuHadokenGif,
  GoukiSatsu: goukiSatsuGif,
  KenHadouken: kenHadoukenGif,
  KenShoryuken: kenShoryukenGif,
  KenTatsumaki: kenTatsumakiSenpukyakuGif,
};

function App() {
  const [choosedCard, setChoosedCard] = useState(characters[0]);
  const [skills, setSkills] = useState(false);
  const [power, setPower] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");

  function handleSkills() {
    setSkills(!skills);
    setPower("");
  }

  function handleSelectCard(card) {
    setChoosedCard(card);
    setSkills(false);
    setPower("");
  }

  function handlePower(power, character) {
    if (character === "Ken") {
      setPower("Ken" + power.split(" ")[0]);
      return;
    }
    if (power.split(" ").length === 1) {
      setPower(power.split(" ")[0]);
    } else {
      setPower(power.split(" ")[0] + power.split(" ")[1]);
    }
  }

  useEffect(() => {
    handleSkillGif(power);
    console.log(selectedSkill);
  }, [power, selectedSkill]);

  function handleSkillGif(power) {
    setSelectedSkill(power);
  }

  return (
    <div className="container-app d-flex">
      <div
        className="container"
        style={{
          width: "50%",
          marginLeft: "0px",
        }}
      >
        <h3 className="text-title">Choose a Fighter</h3>
        <div
          className="row"
          style={{
            borderTop: "2px solid rgb(255, 192, 0)",
            borderBottom: "2px solid rgb(255, 192, 0)",
            paddingTop: "2%",
          }}
        >
          {characters.map((character) => (
            <Card character={character} onSelectCard={handleSelectCard} />
          ))}
        </div>
      </div>
      <Details
        choosedCard={choosedCard}
        handleSkills={handleSkills}
        skills={skills}
        handlePower={handlePower}
        power={power}
      />
    </div>
  );
}

function Card({ character, onSelectCard }) {
  return (
    <div className="col-md-4 mb-4" onClick={() => onSelectCard(character)}>
      <img src={character.img} className="card-img-top card-img" alt="street" />
    </div>
  );
}

function Details({
  choosedCard,
  handleSkills,
  skills,
  handlePower,
  power,
  selectedSkill,
}) {
  return (
    <div className="conatiner row details">
      <div
        className="card"
        style={{
          width: "18rem",
          backgroundColor: "transparent",
          maxHeight: "100vh",
          border: "0px",
        }}
      >
        {power === "" ? (
          <img
            className="bd-placeholder-img card-img-top"
            src={choosedCard.gif}
            alt="animated gifs"
          />
        ) : (
          <img
            className="bd-placeholder-img card-img-top"
            src={powers[power]}
            alt="animated gifs hu hu hu"
          />
        )}
        <div className="card-body">
          <h5 className="card-title detail-title">{choosedCard.name}</h5>
          {!skills ? (
            <p className="card-text">
              {choosedCard.description}
              <button className="btn btn-link" onClick={() => handleSkills()}>
                ➡
              </button>
            </p>
          ) : (
            <>
              {choosedCard.skills.map((skill) => (
                <p
                  className="skills"
                  onClick={() => handlePower(skill, choosedCard.name)}
                >
                  ⚜️{skill}
                </p>
              ))}
              <button className="btn btn-link" onClick={() => handleSkills()}>
                ⬅
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
