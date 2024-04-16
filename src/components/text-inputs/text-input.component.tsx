import React from "react";
import { UseFormRegister } from "react-hook-form";

type tSizeType = "small" | "normal" | "large";
type tStateType = "default" | "disabled" | "error";

interface ITextInputProps {
  id: string;
  label: string;
  type?: string; // default type is text
  placeholder?: string;
  isRequired?: boolean;
  prefix?: JSX.Element | null;
  suffix?: JSX.Element | null;
  icon?: JSX.Element | null;
  supportingText?: string | null;
  errorMessage?: string | null;
  size?: tSizeType; // can be 'small', 'normal', 'large'
  state?: tStateType;
  register?: UseFormRegister<any>;
  customClass?: React.ComponentProps<"div">["className"];
}

const TextInput = ({
  id,
  label,
  type = "text", // default type is text
  placeholder = "",
  isRequired = false,
  prefix = null,
  suffix = null,
  icon = null,
  supportingText = null,
  errorMessage = null,
  register,
  size = "normal", // can be 'small', 'normal', 'large'
  state = "default", // can be 'default', 'disabled', 'error'
  customClass,
  ...inputProps
}: ITextInputProps) => {
  const inputClass = `form-input w-full ${
    size === "small" ? "px-2 py-1" : size === "large" ? "px-4 py-3" : ""
  } ${
    state === "disabled"
      ? "disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed"
      : ""
  } ${state === "error" ? "border-rose-300" : ""}`;

  return (
    <div className={customClass}>
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium mb-1" htmlFor={id}>
          {label} {isRequired && <span className="text-rose-500">*</span>}
        </label>
      </div>
      <div className="relative">
        {prefix && (
          <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
            <span className="text-sm text-slate-400 font-medium px-3">
              {prefix}
            </span>
          </div>
        )}
        <input
          id={id}
          className={`${inputClass} ${prefix ? "pl-12" : ""} ${
            suffix ? "pr-8" : ""
          }`}
          type={type}
          placeholder={placeholder}
          disabled={state === "disabled"}
          required={isRequired}
          {...(register ? register(id) : {})}
          // {...inputProps}
        />
        {suffix && (
          <div className="absolute inset-0 left-auto flex items-center pointer-events-none">
            <span className="text-sm text-slate-400 font-medium px-3">
              {suffix}
            </span>
          </div>
        )}
        {icon && (
          <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
            {/* Icon component or svg goes here */}
            {icon}
          </div>
        )}
      </div>
      {supportingText && <div className="text-xs mt-1">{supportingText}</div>}
      {errorMessage && (
        <div className="text-xs mt-1 text-rose-500">{errorMessage}</div>
      )}
    </div>
  );
};

export default TextInput;
