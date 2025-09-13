"use client";

import React from "react";
import Select, { Props as SelectProps, StylesConfig } from "react-select";

type Option = { value: string; label: string };

interface SelectFieldProps extends SelectProps<Option, false> {
  label?: string;
  error?: string;
  customStyles?: StylesConfig<Option, false>;
  selectContainer?:string
}

const CustomSelect: React.FC<SelectFieldProps> = ({
  label,
  error,
  customStyles,
  selectContainer,
  ...props
}) => {
  // Default styles using your color variables
  const defaultStyles: StylesConfig<Option, false> = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "0.5rem",
      padding: "2px 4px",
      borderColor: state.isFocused ? "var(--button-primary-bg)" : "#ccc",
      boxShadow: state.isFocused ? "0 0 0 1px var(--button-primary-bg)" : "none",
      "&:hover": { borderColor: "var(--button-primary-bg)" },
      backgroundColor: "var(--bg-color-primary)",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "0.5rem",
      backgroundColor: "var(--background-secondary)",
      zIndex: 9999,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "var(--button-primary-bg)"
        : state.isFocused
        ? "rgba(0, 130, 123, 0.1)"
        : "transparent",
      color: state.isSelected ? "var(--button-primary-text)" : "var(--text-primary)",
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "var(--text-primary)",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "var(--text-gray)",
    }),
  };

  return (
    <div className={`mb-4 ${selectContainer}`}>
      {label && (
        <label className="block mb-1 text-sm font-medium text-text-primary">
          {label}
        </label>
      )}
      <Select
        {...props}
        styles={customStyles || defaultStyles}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default CustomSelect;
