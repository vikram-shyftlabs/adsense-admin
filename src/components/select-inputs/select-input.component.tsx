import React, {useState, useRef, useEffect} from 'react';
import Transition from '../../utils/Transition';

interface IValueMap {
  id: number;
  key: string;
  value: string /* can be any though */;
}

interface ISelectProps {
  label: string;
  options: Array<IValueMap>;
  customClass?: React.ComponentProps<'div'>['className'];
  helperText?: string;
}

function SelectBase({label, options, customClass, helperText}: ISelectProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]?.id);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({target}) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({keyCode}) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className={`flex flex-col ${customClass}`}>
      <label className="block text-sm font-medium mb-1" htmlFor={label}>
        {label}
      </label>
      <div className="relative inline-flex">
        <button
          type="button"
          ref={trigger}
          className="btn flex justify-between w-full bg-white border-slate-200 py-2.5 border border-[#6b7280] hover:border-slate-300 text-slate-500 hover:text-slate-600"
          aria-label="Select date range"
          aria-haspopup="true"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-expanded={dropdownOpen}
        >
          {console.log(options, selected, `options[selected]`)}
          <span className="flex items-center pl-3">
            <span>{options[selected].value}</span>
          </span>
          <svg
            className="shrink-0 ml-1 fill-current text-slate-400 mr-3 mt-2"
            width="11"
            height="7"
            viewBox="0 0 11 7"
          >
            <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
          </svg>
        </button>
        <Transition
          show={dropdownOpen}
          tag="div"
          className="z-10 absolute top-full left-0 w-full bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
          enter="transition ease-out duration-100 transform"
          enterStart="opacity-0 -translate-y-2"
          enterEnd="opacity-100 translate-y-0"
          leave="transition ease-out duration-100"
          leaveStart="opacity-100"
          leaveEnd="opacity-0"
        >
          <div
            ref={dropdown}
            className="font-medium text-sm text-slate-600"
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setDropdownOpen(false)}
          >
            {options.map((option) => (
              <button
                key={option.id}
                type="button"
                tabIndex="0"
                className={`flex items-center w-full  hover:bg-slate-50 py-1 px-3 cursor-pointer ${
                  option.id === selected && 'text-indigo-500'
                }`}
                onClick={() => {
                  setSelected(option.id);
                  setDropdownOpen(false);
                }}
              >
                <svg
                  className={`shrink-0 mr-2 fill-current text-indigo-500 ${
                    option.id !== selected && 'invisible'
                  }`}
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                >
                  <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
                </svg>
                <span>{option.value}</span>
              </button>
            ))}
          </div>
        </Transition>
      </div>
      {helperText && (
        <label
          className="block text-xs font-normal text-slate-400 mt-2 mb-1"
          htmlFor={label}
        >
          {helperText}
        </label>
      )}
    </div>
  );
}

export default SelectBase;