// SkillsList.js

import React from "react";
import SkillsComponent from "./SkillsComponent.js";

const SkillsList = ({ stats }) => {
  const skills = [
    { name: "Acrobatics", keyAbility: "Dex" },
    { name: "Appraise", keyAbility: "Int" },
    { name: "Bluff", keyAbility: "Cha" },
    { name: "Climb", keyAbility: "Str" },
    { name: "Craft", keyAbility: "Int" },
    { name: "Diplomacy", keyAbility: "Cha" },
    { name: "Disable Device", keyAbility: "Dex" },
    { name: "Disguise", keyAbility: "Cha" },
    { name: "Escape Artist", keyAbility: "Dex" },
    { name: "Fly", keyAbility: "Dex" },
    { name: "Handle Animal", keyAbility: "Cha" },
    { name: "Heal", keyAbility: "Wis" },
    { name: "Intimidate", keyAbility: "Cha" },
    { name: "Knowledge (arcana)", keyAbility: "Int" },
    { name: "Knowledge (dungeoneering)", keyAbility: "Int" },
    { name: "Knowledge (engineering)", keyAbility: "Int" },
    { name: "Knowledge (geography)", keyAbility: "Int" },
    { name: "Knowledge (history)", keyAbility: "Int" },
    { name: "Knowledge (local)", keyAbility: "Int" },
    { name: "Knowledge (nature)", keyAbility: "Int" },
    { name: "Knowledge (nobility)", keyAbility: "Int" },
    { name: "Knowledge (planes)", keyAbility: "Int" },
    { name: "Knowledge (religion)", keyAbility: "Int" },
    { name: "Linguistics", keyAbility: "Int" },
    { name: "Perception", keyAbility: "Wis" },
    { name: "Perform", keyAbility: "Cha" },
    { name: "Profession", keyAbility: "Wis" },
    { name: "Ride", keyAbility: "Dex" },
    { name: "Sense Motive", keyAbility: "Wis" },
    { name: "Sleight of Hand", keyAbility: "Dex" },
    { name: "Spellcraft", keyAbility: "Int" },
    { name: "Stealth", keyAbility: "Dex" },
    { name: "Survival", keyAbility: "Wis" },
    { name: "Swim", keyAbility: "Str" },
    { name: "Use Magic Device", keyAbility: "Cha" },
  ];

  return (
    <div>
      <h1>Skills List</h1>
      <SkillsComponent skills={skills} stats={stats} />
    </div>
  );
};

export default SkillsList;
