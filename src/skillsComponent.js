//SkillsComponent
import React from "react";
import useStatInput from "./useStatInput";
import calculateModifier from "./CalculateModifier";
import DiceRoller from "./DiceRoller";

const SkillsComponent = ({ skills }) => {
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => {
          const { value, onChange } = useStatInput(0);
          const modifier = calculateModifier(value, skill.keyAbility);

          return (
            <li key={skill.name}>
              <span>{skill.name}</span>
              <DiceRoller modifier={modifier} utilityType={skill.name} />
              <input
                type="number"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsComponent;
