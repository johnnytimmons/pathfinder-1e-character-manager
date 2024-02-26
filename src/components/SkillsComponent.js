//SkillsComponent
import React from "react";
import useStatInput from "../hooks/useStatInput";
import calculateModifier from "../utils/calculateModifier";
import DiceRoller from "./DiceRoller";

const SkillsComponent = ({ skills, stats }) => {
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => {
          const stat = stats[skill.keyAbility];
          const modifier = calculateModifier(stat.value, skill.keyAbility);

          return (
            <li key={skill.name}>
              <span>{skill.name}</span>
              <span>Mod: {modifier}</span>
              <DiceRoller modifier={modifier} utilityType={skill.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsComponent;
