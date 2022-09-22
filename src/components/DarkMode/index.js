import React, { useContext } from "react";
import { Context } from "../../context";
const DarkMode = ({ handleDarkMode, clase }) => {
  const { mode } = useContext(Context);

  return (
    <>
      <div className={`${clase}`}>
        <label className={`switch`}>
          <input
            type="checkbox"
            value={localStorage.getItem("theme") || mode}
            onChange={handleDarkMode}
          />
          <span className="slider"></span>
        </label>
      </div>
    </>
  );
};

export default DarkMode;
