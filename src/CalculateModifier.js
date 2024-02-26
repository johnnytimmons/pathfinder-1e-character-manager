//Calculate Modifier
import React from "react";

const calculateModifier = ({ value, keyAbility }) => {
  const keyAbilityModifiers = {
    Str: "Strength",
    Dex: "Dexterity",
    Con: "Constitution",
    Int: "Intelligence",
    Wis: "Wisdom",
    Cha: "Charisma",
  };

  const keyAbilityName = keyAbilityModifiers[keyAbility] || "Unknown";
  const initialValue = keyAbilityName === "unknown" ? 0 : 10;

  const modifier = Math.floor((value - initialValue) / 2);

  return <span>(Modifier: {modifier})</span>;
};

export default calculateModifier;
