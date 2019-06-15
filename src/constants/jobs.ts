// TANKS
import war from "../assets/8bit/war.png";
import warIcon from "../assets/icons/war.png";
import drk from "../assets/8bit/drk.png";
import drkIcon from "../assets/icons/drk.png";
import pld from "../assets/8bit/pld.png";
import pldIcon from "../assets/icons/pld.png";
import drg from "../assets/8bit/drg.png";
//DPS
import drgIcon from "../assets/icons/drg.png";
import mnk from "../assets/8bit/mnk.png";
import mnkIcon from "../assets/icons/mnk.png";
import nin from "../assets/8bit/nin.png";
import ninIcon from "../assets/icons/nin.png";
import brd from "../assets/8bit/brd.png";
import brdIcon from "../assets/icons/brd.png";
import mch from "../assets/8bit/mch.png";
import mchIcon from "../assets/icons/mch.png";
import blm from "../assets/8bit/blm.png";
import blmIcon from "../assets/icons/blm.png";
import smn from "../assets/8bit/smn.png";
import smnIcon from "../assets/icons/smn.png";
// HEALERS
import whm from "../assets/8bit/whm.png";
import whmIcon from "../assets/icons/whm.png";
import ast from "../assets/8bit/ast.png";
import astIcon from "../assets/icons/ast.png";
import sch from "../assets/8bit/sch.png";
import schIcon from "../assets/icons/sch.png";

const JOBS = Object.freeze({
  DRK: {
    NAME: "Dark Knight",
    ACRONYM: "DRK",
    ROLE: "Tank",
    ROLE_ALT: "Tank",
    BIT: drk,
    ICON: drkIcon,
    COLOR: ""
  },
  PLD: {
    NAME: "Paladin",
    ACRONYM: "PLD",
    ROLE: "Tank",
    ROLE_ALT: "Tank",
    BIT: pld,
    ICON: pldIcon,
    COLOR: ""
  },
  WAR: {
    NAME: "Warrior",
    ACRONYM: "WAR",
    ROLE: "Tank",
    ROLE_ALT: "Tank",
    BIT: war,
    ICON: warIcon,
    COLOR: ""
  },
  WHM: {
    NAME: "White Mage",
    ACRONYM: "WHM",
    ROLE: "Healer",
    ROLE_ALT: "Healer",
    BIT: whm,
    ICON: whmIcon,
    COLOR: ""
  },
  SCH: {
    NAME: "Scholar",
    ACRONYM: "SCH",
    ROLE: "Healer",
    ROLE_ALT: "Healer",
    BIT: sch,
    ICON: schIcon,
    COLOR: ""
  },
  AST: {
    NAME: "Astrologian",
    ACRONYM: "AST",
    ROLE: "Healer",
    ROLE_ALT: "Healer",
    BIT: ast,
    ICON: astIcon,
    COLOR: ""
  },
  DRG: {
    NAME: "Dragoon",
    ACRONYM: "DRG",
    ROLE: "DPS",
    ROLE_ALT: "Melee Physical DPS",
    BIT: drg,
    ICON: drgIcon,
    COLOR: ""
  },
  MNK: {
    NAME: "Monk",
    ACRONYM: "MNK",
    ROLE: "DPS",
    ROLE_ALT: "Melee Physical DPS",
    BIT: mnk,
    ICON: mnkIcon,
    COLOR: ""
  },
  NIN: {
    NAME: "Ninja",
    ACRONYM: "NIN",
    ROLE: "DPS",
    ROLE_ALT: "Melee Physical DPS",
    BIT: nin,
    ICON: ninIcon,
    COLOR: ""
  },
  // SAM: {
  //   NAME: "Samurai",
  //   ACRONYM: "SAM",
  //   ROLE: "DPS",
  //   ROLE_ALT: "Melee Physical DPS",
  //   BIT: "",
  //   ICON: "",
  //   COLOR: ""
  // },
  BRD: {
    NAME: "Bard",
    ACRONYM: "BRD",
    ROLE: "DPS",
    ROLE_ALT: "Ranged Physical DPS",
    BIT: brd,
    ICON: brdIcon,
    COLOR: ""
  },
  MCH: {
    NAME: "Machinist",
    ACRONYM: "MCH",
    ROLE: "DPS",
    ROLE_ALT: "Ranged Physical DPS",
    BIT: mch,
    ICON: mchIcon,
    COLOR: ""
  },
  BLM: {
    NAME: "Black Mage",
    ACRONYM: "BLM",
    ROLE: "DPS",
    ROLE_ALT: "Ranged Magical DPS",
    BIT: blm,
    ICON: blmIcon,
    COLOR: ""
  },
  SMN: {
    NAME: "Summoner",
    ACRONYM: "SMN",
    ROLE: "DPS",
    ROLE_ALT: "Ranged Magical DPS",
    BIT: smn,
    ICON: smnIcon,
    COLOR: ""
  }
  // RDM: {
  //   NAME: "Red Mage",
  //   ACRONYM: "RDM",
  //   ROLE: "DPS",
  //   ROLE_ALT: "Ranged Magical DPS",
  //   BIT: "",
  //   ICON: "",
  //   COLOR: ""
  // }
});

export default JOBS;
