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
  const initialValue = keyAbilityName === "Unknown" ? 0 : 10;

  const modifier = Math.floor((value - initialValue) / 2);

  return modifier;
};

export default calculateModifier;
