//StatInput.js
import react from "react";

const StatInput = ({ label, value, onChange }) => {
  //calculate the modifier based on the formula (value-10) / 2 (rounded down) - use calculate modifier and dont do it again here
  const modifier = Math.floor((value - 10) / 2);
  return (
    <div>
      <label>
        {label}:
        <input
          type="number"
          value={value}
          required
          min="0"
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </label>
      <p>Modifier: {modifier}</p>
    </div>
  );
};
export default StatInput;
