// StatsCalculator.js
import React from "react";
import StatInput from "./StatInput";
import useStatInput from "./useStatInput";
import SkillsList from "./SkillsList";

const StatsCalculator = () => {
  const strength = useStatInput(10);
  const dexterity = useStatInput(10);
  const constitution = useStatInput(10);
  const intelligence = useStatInput(10);
  const wisdom = useStatInput(10);
  const charisma = useStatInput(10);

  return (
    <div>
      <StatInput
        label="Strength"
        value={strength.value}
        onChange={strength.onChange}
      />
      <StatInput
        label="Dexterity"
        value={dexterity.value}
        onChange={dexterity.onChange}
      />
      <StatInput
        label="Constitution"
        value={constitution.value}
        onChange={constitution.onChange}
      />
      <StatInput
        label="Intelligence"
        value={intelligence.value}
        onChange={intelligence.onChange}
      />
      <StatInput
        label="Wisdom"
        value={wisdom.value}
        onChange={wisdom.onChange}
      />
      <StatInput
        label="Charisma"
        value={charisma.value}
        onChange={charisma.onChange}
      />

      <SkillsList />
    </div>
  );
};

export default StatsCalculator;
