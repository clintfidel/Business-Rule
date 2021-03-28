import React from "react";

const Button = ({ buttonLabel, type, styleType, clicked }) => {
  return (
    <button
      onClick={clicked}
      type={type}
      className={[
        "font-customRoboto",
        "font-bold",
        "rounded",
        "py-3",
        "w-full",
        "border",
        "focus:outline-none",
        "focus:ring-1",
        `${styleType === "filled" ? `text-white` : `text-inbev-main`}`,
        `${styleType === "filled" ? `bg-inbev-main` : `bg-transparent`}`,
        `${styleType === "filled" ? `border-inbev-main` : `border-inbev-black`}`,
      ].join(" ")}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
