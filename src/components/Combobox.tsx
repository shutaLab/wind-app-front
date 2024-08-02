import React, { useState } from "react";
import Select from "react-select";

const Combobox = () => {
  const options = [
    { value: 1, label: "Chocolate" },
    { value: 2, label: "Strawberry" },
    { value: 3, label: "Vanilla" },
  ];
  const [isSearchable, setIsSearchable] = useState(true);

  const handleChange = (e: any) => {
    console.log(e.value);
  };
  return (
    <div>
      <Select
        isSearchable={isSearchable}
        name="color"
        options={options}
        onChange={handleChange}
      />
    </div>
  );
};

export default Combobox;
