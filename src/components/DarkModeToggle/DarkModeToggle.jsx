import React, { useState } from "react";

const DarkModeToggle = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="form-control w-52">
        <label className="cursor-pointer label">
          <span className="label-text">{!checked ? "Light" : "Dark"}</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </label>
      </div>
    </div>
  );
};

export default DarkModeToggle;
