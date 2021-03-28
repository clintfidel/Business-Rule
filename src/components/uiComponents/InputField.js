import React from 'react';

const InputField = ({label, inputType, nameAttr, value, changed}) => {
  return (
    <div className="w-full mb-4">
      <label className={["block", "font-customRoboto", "text-inbev-black", "text-base"].join(" ")}>{label}</label>
      <input 
        className="block w-full border border-gray-400 rounded bg-transparent px-4 py-2 font-customRoboto text-base text-inbev-black mt-2 focus:outline-none focus:ring-1 focus:ring-inbev-main"
        type={inputType}
        name={nameAttr}
        value={value}
        onChange={(e) => changed(e.currentTarget.value)}
      />
    </div>
  )
}

export default InputField;