"use client";

import React, { useRef, useState } from "react";

const VerificationPage = () => {
  const fieldsRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: ""
  });

  const inputFocus = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!fieldsRef.current) return;

    const elements = fieldsRef.current.children as HTMLCollectionOf<HTMLInputElement>;
    const dataIndex = parseInt(e.currentTarget.getAttribute("data-index") || "0", 10);

    if (e.key === "Delete" || e.key === "Backspace") {
      const prevIndex = dataIndex - 1;
      if (prevIndex >= 0) {
        elements[prevIndex].focus();
      }
    } else if (e.key.length === 1 && e.key !== " ") {
      const nextIndex = dataIndex + 1;
      if (nextIndex < elements.length) {
        elements[nextIndex].focus();
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, codeKey: string) => {
    const value = e.target.value;
    setState((prevState) => ({
      ...prevState,
      [codeKey]: value.slice(-1) // Only keep the last entered character
    }));
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "#09090B" }}
    >
      <h1 className="text-2xl font-bold mb-6 text-white">Enter Verification Code</h1>
      <label className="text-gray-400 mb-2">Verification code</label>
      <div ref={fieldsRef} className="flex items-center gap-x-2">
        {["code1", "code2", "code3", "code4"].map((codeKey, index) => (
          <input
            key={codeKey}
            type="text"
            data-index={index}
            placeholder="0"
            value={state[codeKey as keyof typeof state]}
            className="w-12 h-12 rounded-lg border border-gray-600 focus:border-indigo-500 outline-none text-center text-2xl text-white bg-transparent"
            onChange={(e) => handleChange(e, codeKey)}
            onKeyUp={inputFocus}
          />
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Please enter the 4-digit verification code sent to your email or phone.
      </p>
    </div>
  );
};

export default VerificationPage;
