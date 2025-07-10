import "./App.css";
import { useState, useEffect } from "react";

// Character images
import Ryu from "./images/Ryu.jpg";
import RyuGif from "./images/Ryu.gif";
import Ehonda from "./images/Ehonda.jpg";
import EhondaGif from "./images/Ehonda.gif";
import ChunLi from "./images/ChunLi.jpg";
import ChunLiGif from "./images/Chunli.gif";
import Ken from "./images/Ken.jpg";
import KenGif from "./images/Ken.gif";
import Guile from "./images/Guile.jpg";
import GuileGif from "./images/Guile.gif";
import Dhalsim from "./images/Dhalsim.jpg";
import DhalsimGif from "./images/Dhalsim.gif";
import Zangief from "./images/Zangief.jpg";
import ZangiefGif from "./images/Zangief.gif";
import Blanka from "./images/Blanka.jpg";
import BlankaGif from "./images/Blanka.gif";
import Akuma from "./images/Akuma.jpg";
import AkumaGif from "./images/AkumaGif.gif";

// Special move gifs
import hadoukenGif from "./images/Ryu-Radouken.gif";
import shoryukenGif from "./images/Ryu-Shoryuken.gif";
import tatsumakiSenpukyakuGif from "./images/Ryu-TatsumakiSenpukyaku.gif";
import spinningPileDriverGif from "./images/Zangief-SpinningPiledriver.gif";
import doubleLariatGif from "./images/Zangief-DoubleZariat.gif";
import banishingFlatGif from "./images/Zangief-BanishingFlat.gif";
import hyakuretsukyakuGif from "./images/Chunli-Hyakuretsukyaku.gif";
import spinningBirdKickGif from "./images/Chunli-SpinningBirdKick.gif";
import kikokenGif from "./images/Chunli-Kikoken.gif";
import eletricThunderGif from "./images/Blanka-ElectricThunder.gif";
import rollingAtackGif from "./images/Blanka-RollingAttack.gif";
import verticalRollGif from "./images/Blanka-VerticalRoll.gif";
import sonicBoomGif from "./images/Guile-EletronicBoom.gif";
import flashKickGif from "./images/Guile-FlashKick.webp";
import yogaFireGif from "./images/Dhalsim-YogaFire.gif";
import yogaTeleportGif from "./images/Dhalsim-YogaTeleport.gif";
import yogaDrillGif from "./images/Dhalsim-YogaDrill.gif";
import spiralArrowGif from "./images/Cammy-SpiralArrow.gif";
import hundredHandGif from "./images/Ehonda-HundredSlap.gif";
import sumoHeadbuttGif from "./images/Ehonda-SumoHead.gif";
import sumoSmashGif from "./images/Ehonda-SumoSmash.gif";
import zankuHadokenGif from "./images/Akuma-ZankuHadoken.gif";
import shakunetsuHadokenGif from "./images/Akuma-ShakunetsuHadoken.gif";
import goukiSatsuGif from "./images/Akuma-GoukiSatsu.gif";
import kenHadoukenGif from "./images/Ken-Radouken.gif";
import kenShoryukenGif from "./images/Ken-Shoryuken.gif";
import kenTatsumakiSenpukyakuGif from "./images/Ken-TatsumakiSenpukyaku.gif";

const characters = [
  {
    id: 1,
    name: "Ryu",
    description:
      "A disciplined martial artist seeking to become a true warrior. Trained in Ansatsuken, he travels to test his skills and find opponents.",
    img: Ryu,
    gif: RyuGif,
    skills: ["Hadouken", "Shoryuken", "Tatsumaki Senpukyaku"],
  },
  {
    id: 2,
    name: "Ken",
    description:
      "Ryu's charismatic best friend and sparring partner. A talented martial artist known for the powerful Shoryuken and flaming attacks.",
    img: Ken,
    gif: KenGif,
    skills: ["Shoryuken", "Hadouken", "Tatsumaki Senpukyaku"],
  },
  {
    id: 3,
    name: "Chun-Li",
    description:
      "An Interpol officer skilled in Chinese martial arts. Seeks justice for her father's death and battles the criminal organization Shadaloo.",
    img: ChunLi,
    gif: ChunLiGif,
    skills: ["Spinning Bird Kick", "Hyakuretsukyaku", "Kikoken"],
  },
  {
    id: 4,
    name: "Guile",
    description:
      "A skilled Air Force officer seeking revenge for his friend Charlie Nash's death. Known for his iconic flattop and Sonic Boom move.",
    img: Guile,
    gif: GuileGif,
    skills: ["Sonic Boom", "Flash Kick"],
  },
  {
    id: 5,
    name: "Dhalsim",
    description:
      "A yoga master from India with the ability to stretch his limbs and control fire. Enters the World Warrior tournament to raise money for his village.",
    img: Dhalsim,
    gif: DhalsimGif,
    skills: ["Yoga Fire", "Yoga Teleport", "Yoga Drill Kick"],
  },
  {
    id: 6,
    name: "Zangief",
    description:
      "A Russian professional wrestler known for immense strength and grappling techniques. His Spinning Piledriver is a force to be reckoned with.",
    img: Zangief,
    gif: ZangiefGif,
    skills: ["Spinning Piledriver", "Banishing Flat", "Double Lariat"],
  },
  {
    id: 7,
    name: "Blanka",
    description:
      "Originally named Jimmy, Blanka was transformed into a feral creature with green skin and electric powers after a plane crash. Protects his homeland with unique abilities.",
    img: Blanka,
    gif: BlankaGif,
    skills: ["Electric Thunder", "Rolling Attack", "Vertical Roll"],
  },
  {
    id: 8,
    name: "Akuma",
    description:
      "A powerful martial artist consumed by the Satsui no Hado, seeking to become the ultimate warrior. Known for devastating techniques like the Raging Demon.",
    img: Akuma,
    gif: AkumaGif,
    skills: ["Gouki Satsu", "Shakunetsu Hadouken", "Zanku Hadoken"],
  },
  {
    id: 9,
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
            <Card key={character.id} character={character} onSelectCard={handleSelectCard} />
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
      <img src={character.img} className="card-img-top card-img" alt={character.name} />
    </div>
  );
}

function Details({
  choosedCard,
  handleSkills,
  skills,
  handlePower,
  power,
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
            alt={`${choosedCard.name} animated`}
          />
        ) : (
          <img
            className="bd-placeholder-img card-img-top"
            src={powers[power]}
            alt={`${power} special move`}
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
              {choosedCard.skills.map((skill, index) => (
                <p
                  key={index}
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