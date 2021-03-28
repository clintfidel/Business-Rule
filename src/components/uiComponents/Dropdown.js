import React from "react";

const Dropdown = ({ width, options, changed, page }) => {
  return (
    <div
      className={[
        "relative",
        `${width === "sm" ? `w-38` : `w-52`}`,
        "border",
        "rounded",
        "border-gray-400",
        "font-customRoboto",
      ].join(" ")}
    >
      <select
        className={[
          `${width === "sm" ? `px-2` : `px-8`}`,
          `${width === "sm" ? `w-30` : `w-48`}`,
          `${width === "sm" ? `text-sm` : `text-base`}`,
          "py-2",
          "text-center",
          "focus:outline-none",
          "bg-white",
        ].join(" ")}
        onChange={(e) => changed(e.currentTarget.value ? e.currentTarget.value : '' )}
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt.toLowerCase()}>
            {opt}
          </option>
        ))}
      </select>
      {/* <button type="button" className="relative w-full bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-inbev-main" aria-haspopup="listbox" aria-expanded="true">
        <span className="truncate">
          Chiller Task
        </span>
        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </span>
      </button>
      <ul className="absolute mt-1 w-full bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto" tabIndex="-1" role="listbox" aria-activedescendant="listbox-option-0" tabindex="-1" role="listbox">
        <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option" onMouseEnter>
          Chiller Task
        </li>
        <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option">
          Poster Task
        </li>
      </ul> */}
    </div>
  );
};

export default Dropdown;
