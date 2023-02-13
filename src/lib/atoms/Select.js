import React from "react";

const Select = ({ options, onChange, defaultValue }) => {
  return (
    <div class="flex justify-center">
      <div class="mb-3 w-full">
        <select
          class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding g-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none min-h-[48px]"
          aria-label="Default select example"
          onChange={onChange}
          defaultValue={defaultValue}
        >
          {options.map((item, index) => (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
